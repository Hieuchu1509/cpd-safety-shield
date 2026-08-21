/**
 * 20 phút — Lịch bloc. Sheet engine.
 * Scene and layer data live in scenes.js. Crew material lives in
 * production-data.js and is never loaded by this surface.
 */

/* ── helpers ────────────────────────────────────────────────────────────── */

const el = (tag, cls, text) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text != null) n.textContent = text;
  return n;
};

const nenTheoNhiet = (nhiet) => {
  if (nhiet >= 38) return "var(--do-38)";
  if (nhiet >= 36) return "var(--do-36)";
  if (nhiet >= 35) return "var(--do-35)";
  if (nhiet >= 34) return "var(--do-34)";
  if (nhiet >= 30) return "var(--do-32)";
  return "var(--giay)";
};

/**
 * Split an authored subtitle into readable cues WITHOUT altering a character.
 *
 * A sentence ends only where a terminator is followed by whitespace and a
 * capital or an opening quote, so the script's own ellipses — "ting... ting...",
 * "51H-..." — stay inside their sentence instead of becoming cues of their own.
 * A closing quote or bracket rides with the sentence it closes. Anything still
 * over the limit breaks at its own clause punctuation, colons and semicolons
 * included, because several sentences here have no comma at all.
 */
const TOI_DA = 84;   // ~2 lines on a phone; a clause with no internal punctuation may exceed it
const TOC_DO = 15;      // characters per second, under the ~17 cps ceiling
const TOI_THIEU = 2800; // ms; no cue flashes past faster than this

function chiaCue(vanBan) {
  const cau = vanBan
    .split(/(?<=[.!?…][”"»’')\]]?)\s+(?=[“"«'(\[]?\p{Lu})/u)
    .map(s => s.trim())
    .filter(Boolean);

  const cue = [];
  for (const s of (cau.length ? cau : [vanBan])) {
    if (s.length <= TOI_DA) { cue.push(s); continue; }

    let dem = "";
    for (const manh of s.split(/(?<=[,;:])\s+|\s+(?=—\s)/)) {
      if (dem && (dem + " " + manh).length > TOI_DA) { cue.push(dem.trim()); dem = manh; }
      else dem = dem ? dem + " " + manh : manh;
    }
    if (dem.trim()) cue.push(dem.trim());
  }
  return cue.length ? cue : [vanBan];
}

const nhipCue = (cue) => Math.max(TOI_THIEU, Math.round((cue.length / TOC_DO) * 1000));

/** How long a sheet must hold so its last cue is actually readable. */
const thoiLuongTo = (cue) => cue.reduce((t, c) => t + nhipCue(c), 0) + 1200;

/* ── the bloc ───────────────────────────────────────────────────────────── */

class Bloc {
  constructor() {
    this.bloc = document.getElementById("noi-dung");
    this.to = [];
    this.chiSo = -1;
    this.cueIdx = 0;
    this.dongHoCue = null;
    this.dongHoTo = null;
    this.tuChay = false;
    this.amThanh = false;
    this.tiengAnh = false;

    this.itMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    this.manLon = window.matchMedia("(min-width: 901px) and (pointer: fine)");

    this.audio = window.AudioEngine ? new AudioEngine() : null;

    this.dungTrang();
    this.ganDieuKhien();
    this.theoDoi();

    this.manLon.addEventListener("change", () => this.doiCheDo());
    this.itMotion.addEventListener("change", () => this.doiCheDo());
    this.doiCheDo();

    // The observer only reports changes, so the sheet already on screen needs
    // its own activation or sheet 1 never becomes live.
    this.vaoTo(this.to[0], 0);
  }

  /* ---- build ---- */

  dungTrang() {
    const dau = this.bloc.querySelector('[data-to="1"]');
    this.gan(dau, SCENES_DATA[0]);
    this.to.push(dau);

    for (let i = 1; i < SCENES_DATA.length; i++) {
      const t = this.toCauChuyen(SCENES_DATA[i], i + 1);
      this.bloc.appendChild(t);
      this.to.push(t);
    }

    const banLe = this.toBanLe();
    this.bloc.appendChild(banLe);
    this.to.push(banLe);

    TANG_BAO_VE.forEach((tang, i) => {
      const t = this.toTang(tang, i);
      this.bloc.appendChild(t);
      this.to.push(t);
    });

    const cuoi = this.toCuoi();
    this.bloc.appendChild(cuoi);
    this.to.push(cuoi);
  }

  khungGiay(sTo, nhiet) {
    sTo.className = "to";
    sTo.style.setProperty("--nen", nenTheoNhiet(nhiet));
    sTo.dataset.nhiet = nhiet;

    const giay = el("div", "to-giay");
    const ghim = el("div", "dinh-ghim");
    ghim.setAttribute("aria-hidden", "true");
    ghim.innerHTML = "<i></i>".repeat(8);
    giay.appendChild(ghim);
    sTo.appendChild(giay);
    return giay;
  }

  conSo(giay, moc, opt = {}) {
    const khoi = el("div", "con-so");
    if (opt.vang) khoi.classList.add("con-so-lon");
    if (opt.dung) khoi.classList.add("con-so-dung");
    khoi.appendChild(el("span", "chu-so", moc.giaTri));
    khoi.appendChild(el("span", "don-vi", moc.donVi));
    giay.appendChild(khoi);
    return khoi;
  }

  batLoiAnh(fig, img, moTa) {
    // A failed fetch must not take the story with it.
    img.addEventListener("error", () => {
      fig.classList.add("hinh-loi");
      img.closest("picture")?.remove();
      fig.prepend(el("p", "loi-hinh", moTa));
    }, { once: true });
  }

  anh(giay, canh) {
    const fig = el("figure", "khoi-hinh");
    const pic = document.createElement("picture");
    const src = document.createElement("source");
    src.srcset = canh.image.replace(/scene(\d)\.jpg$/, "scene$1.webp");
    src.type = "image/webp";
    const img = document.createElement("img");
    img.src = canh.image;
    img.width = 1600;
    img.height = 900;
    img.loading = "lazy";
    img.decoding = "async";
    img.alt = canh.alt;
    this.batLoiAnh(fig, img, canh.alt);
    pic.appendChild(src);
    pic.appendChild(img);
    fig.appendChild(pic);
    giay.appendChild(fig);
  }

  /** The occupant row is the one that says a child is in there. It never drops. */
  lichNien(giay, canh) {
    const dl = el("dl", "lich-nien");
    const hang = [
      ["Trong khoang", canh.telemetry.occupant],
      ["Nhiệt độ khoang", canh.telemetry.temp],
      ["Kính xe", canh.telemetry.window],
      ["Còi ngoại vi", canh.telemetry.horn]
    ];
    for (const [k, v] of hang) {
      const d = el("div");
      d.appendChild(el("dt", null, k));
      d.appendChild(el("dd", null, v));
      dl.appendChild(d);
    }
    if (canh.xeHanhDong) dl.classList.add("xe-hanh-dong");
    giay.appendChild(dl);
  }

  gan(sTo, canh) {
    // Sheet 1 ships in the markup for first paint; give it everything the
    // generated sheets get, from the same data, so the two cannot diverge.
    const giay = sTo.querySelector(".to-giay");

    const cu = giay.querySelector(".lich-nien");
    if (cu) cu.remove();
    const p = giay.querySelector('[data-vai="cue"]');
    this.lichNien(giay, canh);
    giay.appendChild(p);

    const img = giay.querySelector("img");
    if (img) this.batLoiAnh(giay.querySelector(".khoi-hinh"), img, canh.alt);

    this.dinhCue(sTo, p, canh);
  }

  dinhCue(sTo, p, canh) {
    p.setAttribute("role", "status");
    p.setAttribute("aria-live", "polite");
    p.setAttribute("aria-atomic", "true");

    const en = el("span", "loi-en");
    en.lang = "en";
    p.after(en);

    sTo._cue = chiaCue(canh.subtitleVn);
    sTo._cueEn = chiaCue(canh.subtitleEn);
    sTo._oCue = p;
    sTo._oEn = en;
    sTo._canh = canh;
    sTo._giay = thoiLuongTo(sTo._cue) / 1000;
  }

  toCauChuyen(canh, so) {
    const s = document.createElement("section");
    s.dataset.to = so;
    const giay = this.khungGiay(s, canh.nhiet);

    giay.appendChild(el("p", "ngay-thang", canh.ngayThang));
    this.conSo(giay, canh.moc, { vang: canh.xeHanhDong, dung: canh.dungHo });

    const h = el("h2", "tieu-de-to", canh.title.replace(/^\d+\.\s*/, ""));
    h.id = "tieu-de-to-" + so;
    s.setAttribute("aria-labelledby", h.id);
    giay.appendChild(h);

    this.anh(giay, canh);
    this.lichNien(giay, canh);

    const p = el("p", "loi-thoai");
    p.dataset.vai = "cue";
    giay.appendChild(p);
    this.dinhCue(s, p, canh);
    return s;
  }

  toBanLe() {
    const s = document.createElement("section");
    s.dataset.to = "ban-le";
    const giay = this.khungGiay(s, 38);
    s.classList.add("to-ban-le");

    this.conSo(giay, { giaTri: "5", donVi: "tầng bảo vệ" });

    const h = el("h2", "tieu-de-to", "Chiếc xe làm được điều đó vì có năm tầng bảo vệ");
    h.id = "tieu-de-ban-le";
    s.setAttribute("aria-labelledby", h.id);
    giay.appendChild(h);
    giay.appendChild(el("p", "loi-thoai",
      "Năm tầng nối nhau, mỗi tầng chỉ chạy khi tầng trước không có ai trả lời. Đây là bộ khung mà kiến trúc CPD được dựng theo, đối chiếu với tiêu chuẩn an toàn ô tô Euro NCAP & NHTSA 2025."));
    s._giay = 8;
    return s;
  }

  toTang(tang, i) {
    const s = document.createElement("section");
    s.dataset.to = "tang-" + (i + 1);
    const giay = this.khungGiay(s, tang.nhiet);
    s.classList.add("to-tang");

    giay.appendChild(el("p", "ngay-thang", tang.nhan));
    this.conSo(giay, tang.moc, { vang: tang.xeHanhDong });

    const h = el("h2", "tieu-de-to", tang.tieuDe);
    h.id = "tieu-de-tang-" + (i + 1);
    s.setAttribute("aria-labelledby", h.id);
    giay.appendChild(h);
    giay.appendChild(el("p", "loi-thoai", tang.than));
    s._giay = Math.max(7, tang.than.length / TOC_DO + 2);
    return s;
  }

  toCuoi() {
    const s = document.createElement("section");
    s.dataset.to = "cuoi";
    const giay = this.khungGiay(s, 25);
    s.classList.add("to-cuoi");

    this.conSo(giay, { giaTri: "20:00", donVi: "phút" }, { dung: true });

    const h = el("h2", "tieu-de-cuoi", "Hai mươi phút ngắn hơn bạn tưởng.");
    h.id = "tieu-de-cuoi";
    s.setAttribute("aria-labelledby", h.id);
    giay.appendChild(h);
    giay.appendChild(el("p", "loi-cuoi",
      "Trong câu chuyện này không ai vô tâm. Chỉ là điện thoại để im lặng, và cuộc họp thì dài hơn dự tính. Đó chính là lúc chiếc xe phải tự làm điều gì đó."));

    /* The primary action: a check a parent can finish tonight, with nothing
       claimed about any product. */
    const kiem = el("div", "tu-kiem");
    const hoi = el("h3", null, "Xe của bạn có CPD không?");
    hoi.id = "cau-hoi-cuoi";
    kiem.appendChild(hoi);
    const ol = el("ol", "buoc-kiem");
    [
      "Mở sách hướng dẫn sử dụng xe, tra mục “Phát hiện trẻ em”, “Child Presence Detection” hoặc “Rear Seat Reminder”.",
      "Kiểm tra trong menu Cài đặt trên màn hình xe, thường nằm ở mục An toàn hoặc Cabin.",
      "Nếu không tìm thấy, hỏi đại lý hoặc gara quen của bạn xem xe có tùy chọn này không."
    ].forEach(b => ol.appendChild(el("li", null, b)));
    kiem.appendChild(ol);
    giay.appendChild(kiem);

    const chiaSe = el("button", "nut-chia-se");
    chiaSe.type = "button";
    chiaSe.innerHTML =
      '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
      '<path d="M12 3v13M12 3 7.5 7.5M12 3l4.5 4.5"/>' +
      '<path d="M5 14v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5"/></svg>' +
      "<span>Gửi cho một người bố, người mẹ khác</span>";
    chiaSe.addEventListener("click", () => this.chiaSe(chiaSe));
    giay.appendChild(chiaSe);

    const ptl = el("p", "phan-tro-lai");
    const a = el("a", null, "Xem lại từ đầu");
    a.href = "#noi-dung";
    a.addEventListener("click", (e) => { e.preventDefault(); this.den(0); });
    ptl.appendChild(a);
    giay.appendChild(ptl);

    giay.appendChild(el("p", "cot-in",
      "Phim ngắn dàn dựng. Hình ảnh minh họa do AI tạo."));

    s._giay = 12;
    return s;
  }

  /* ---- cues ---- */

  batCue(sTo) {
    this.dungCue();
    if (!sTo._cue) return;
    this.cueIdx = 0;
    this.veCue(sTo, 0);

    if (sTo._cue.length < 2) return;
    const buoc = () => {
      this.cueIdx++;
      if (this.cueIdx >= sTo._cue.length) { this.dungCue(); return; }
      this.veCue(sTo, this.cueIdx);
      this.dongHoCue = setTimeout(buoc, nhipCue(sTo._cue[this.cueIdx]));
    };
    this.dongHoCue = setTimeout(buoc, nhipCue(sTo._cue[0]));
  }

  veCue(sTo, i) {
    sTo._oCue.textContent = sTo._cue[i];
    if (sTo._oEn) {
      sTo._oEn.textContent = this.tiengAnh
        ? (sTo._cueEn[Math.min(i, sTo._cueEn.length - 1)] || "")
        : "";
    }
  }

  dungCue() {
    if (this.dongHoCue) { clearTimeout(this.dongHoCue); this.dongHoCue = null; }
  }

  /* ---- which sheet is live ---- */

  theoDoi() {
    // A band across the middle of the viewport, so the live sheet is whichever
    // one the reader is actually looking at. A ratio threshold cannot do this:
    // a sheet taller than the viewport never reaches it.
    const io = new IntersectionObserver((mucs) => {
      const vao = mucs.filter(m => m.isIntersecting);
      if (!vao.length) return;
      const tot = vao.reduce((a, b) => (b.intersectionRatio > a.intersectionRatio ? b : a));
      const i = this.to.indexOf(tot.target);
      if (i < 0 || i === this.chiSo) return;
      this.vaoTo(tot.target, i);
    }, { rootMargin: "-45% 0px -45% 0px", threshold: 0 });

    this.to.forEach(t => io.observe(t));
  }

  vaoTo(sTo, i) {
    if (!sTo) return;
    this.chiSo = i;
    this.to.forEach(t => t.classList.toggle("dang-doc", t === sTo));
    document.documentElement.style.setProperty("--nen-trang", nenTheoNhiet(+sTo.dataset.nhiet || 32));

    const mau = getComputedStyle(sTo).backgroundColor;
    if (mau) document.querySelector('meta[name="theme-color"]')?.setAttribute("content", mau);

    if (sTo._cue) this.batCue(sTo); else this.dungCue();
    if (this.amThanh && sTo._canh) this.phatAm(sTo._canh);

    if (this.tuChay) this.henTo(sTo);
  }

  /* ---- desktop: it runs itself, and it loops ---- */

  doiCheDo() {
    const lon = this.manLon.matches && !this.itMotion.matches;
    const nut = document.getElementById("nut-tu-chay");
    nut.hidden = !lon;
    document.body.classList.toggle("che-do-tu-chay", lon);
    this.datTuChay(lon);
  }

  /** One place writes autoplay state, so the control can never report the opposite. */
  datTuChay(bat) {
    this.tuChay = bat;
    const nut = document.getElementById("nut-tu-chay");
    nut.setAttribute("aria-pressed", String(bat));
    nut.classList.toggle("dang-dung", !bat);
    document.getElementById("nhan-tu-chay").textContent = bat ? "Tạm dừng" : "Tự chạy";
    if (bat) this.henTo(this.to[Math.max(0, this.chiSo)]); else this.huyHen();
  }

  henTo(sTo) {
    this.huyHen();
    if (!this.tuChay || !sTo) return;
    this.dongHoTo = setTimeout(() => {
      const ke = this.chiSo + 1;
      this.den(ke >= this.to.length ? 0 : ke);
    }, (sTo._giay || 8) * 1000);
  }

  huyHen() {
    if (this.dongHoTo) { clearTimeout(this.dongHoTo); this.dongHoTo = null; }
  }

  den(i) {
    const t = this.to[i];
    if (!t) return;
    this.tuMinhCuon = true;
    t.scrollIntoView({ behavior: this.itMotion.matches ? "auto" : "smooth", block: "start" });
    clearTimeout(this.coCuon);
    this.coCuon = setTimeout(() => { this.tuMinhCuon = false; }, 900);
  }

  /* ---- controls ---- */

  ganDieuKhien() {
    const nutAm = document.getElementById("nut-am-thanh");
    nutAm.addEventListener("click", () => {
      this.amThanh = !this.amThanh;
      nutAm.setAttribute("aria-pressed", String(this.amThanh));
      nutAm.classList.toggle("dang-bat", this.amThanh);
      document.getElementById("nhan-am-thanh").textContent = this.amThanh ? "Tắt tiếng" : "Bật tiếng";
      if (this.amThanh) {
        this.audio?.init();
        const t = this.to[this.chiSo];
        if (t && t._canh) this.phatAm(t._canh);
      } else {
        this.audio?.stopAll();
        window.speechSynthesis?.cancel();
      }
    });

    const nutEn = document.getElementById("nut-tieng-anh");
    nutEn.addEventListener("click", () => {
      this.tiengAnh = !this.tiengAnh;
      nutEn.setAttribute("aria-pressed", String(this.tiengAnh));
      nutEn.classList.toggle("dang-bat", this.tiengAnh);
      document.getElementById("nhan-tieng-anh").textContent =
        this.tiengAnh ? "Tắt phụ đề Anh" : "English subtitles";
      document.body.classList.toggle("co-tieng-anh", this.tiengAnh);
      const t = this.to[this.chiSo];
      if (t && t._cue) this.veCue(t, this.cueIdx);
    });

    document.getElementById("nut-tu-chay")
      .addEventListener("click", () => this.datTuChay(!this.tuChay));

    // Reading is a decision. The moment the visitor scrolls for themselves,
    // the booth timer stops driving them.
    const nguoiDungCuon = () => {
      if (this.tuMinhCuon || !this.tuChay) return;
      this.datTuChay(false);
    };
    window.addEventListener("wheel", nguoiDungCuon, { passive: true });
    window.addEventListener("touchstart", nguoiDungCuon, { passive: true });

    document.addEventListener("keydown", (e) => {
      if (e.target.closest("input, textarea, select")) return;
      if (e.key === "ArrowDown" || e.key === "PageDown") { e.preventDefault(); this.den(this.chiSo + 1); }
      else if (e.key === "ArrowUp" || e.key === "PageUp") { e.preventDefault(); this.den(this.chiSo - 1); }
      else if (e.key === "Home") { e.preventDefault(); this.den(0); }
      else if (e.key === "End") { e.preventDefault(); this.den(this.to.length - 1); }
    });
  }

  phatAm(canh) {
    if (!this.audio) return;
    this.audio.stopAll();
    if (canh.nhiet >= 38) this.audio.playEmergencyHorn?.();
    else if (canh.id === 2) this.audio.playDashboardTing?.();
    else this.audio.playHeatDrone?.();
  }

  async chiaSe(nut) {
    const dl = {
      title: document.title,
      text: "Máy tắt lúc 12 giờ 40. Hai mươi phút sau, khoang xe chạm 38°C.",
      url: location.href
    };
    try {
      if (navigator.share) { await navigator.share(dl); return; }
      await navigator.clipboard.writeText(location.href);
      this.baoNut(nut, "Đã chép liên kết");
    } catch (err) {
      if (err && err.name === "AbortError") return;
      this.baoNut(nut, "Không chép được — hãy sao chép từ thanh địa chỉ");
    }
  }

  baoNut(nut, loi) {
    const o = nut.querySelector("span");
    const cu = o.textContent;
    o.textContent = loi;
    setTimeout(() => { o.textContent = cu; }, 3200);
  }
}

document.addEventListener("DOMContentLoaded", () => new Bloc());
