# 20 phút — Child Presence Detection

![Ảnh chia sẻ của trải nghiệm “20 phút”](assets/images/share-card.jpg)

Một trải nghiệm kể chuyện tương tác bằng tiếng Việt về nguy cơ trẻ bị bỏ quên trong ô tô và cách hệ thống **Child Presence Detection (CPD)** tăng dần mức cảnh báo trong 20 phút.

Giao diện công khai dùng hình ảnh **lịch bloc xé từng tờ**: mỗi phân đoạn là một mốc thời gian, nhiệt độ và hành động bảo vệ mới. Project được viết bằng HTML, CSS và JavaScript thuần, không cần build step hoặc framework.

> Đây là phim ngắn dàn dựng phục vụ truyền thông sản phẩm. Hình ảnh minh họa được tạo bằng AI. Tên sản phẩm và nhà sản xuất chính thức hiện chưa được xác lập.

## Tính năng chính

- Câu chuyện điện ảnh gồm 8 phân đoạn, ưu tiên nội dung tiếng Việt.
- Phụ đề tiếng Anh tùy chọn.
- Tự chạy không tiếng cho màn hình booth; thao tác cuộn của người xem sẽ dừng chế độ tự chạy.
- Âm thanh tổng hợp bằng Web Audio API và giọng đọc bằng `speechSynthesis`, chỉ bật khi người xem yêu cầu.
- Điều hướng bằng cuộn, cảm ứng hoặc bàn phím.
- Ảnh WebP dung lượng thấp với JPG làm fallback.
- Metadata Open Graph và Twitter Card phục vụ chia sẻ mạng xã hội.
- Giao diện responsive, hỗ trợ reduced motion, focus ring và nội dung fallback khi JavaScript bị tắt.
- Trang nội bộ riêng cho đội sản xuất, chứa prompt AI video và bảng cue âm thanh.

## Chạy project trên máy

Project không cần cài dependency. Cách ổn định nhất là chạy một static server trong thư mục project.

### Windows

```powershell
git clone https://github.com/Hieuchu1509/cpd-safety-shield.git
cd cpd-safety-shield
py -m http.server 8080
```

### macOS hoặc Linux

```bash
git clone https://github.com/Hieuchu1509/cpd-safety-shield.git
cd cpd-safety-shield
python3 -m http.server 8080
```

Sau đó mở:

- Trải nghiệm dành cho người xem: <http://localhost:8080/index.html>
- Tài liệu nội bộ cho đội sản xuất: <http://localhost:8080/production.html>

Có thể mở trực tiếp `index.html`, nhưng chạy qua HTTP giúp Web Share, Clipboard API và hành vi tải tài nguyên gần với môi trường triển khai hơn.

## Cách sử dụng

### Giao diện công khai

- Cuộn lên hoặc xuống để chuyển giữa các tờ lịch/phân đoạn.
- Chọn **Bật tiếng** để kích hoạt âm thanh và giọng đọc nếu trình duyệt hỗ trợ.
- Chọn **English subtitles** để bật hoặc tắt phụ đề tiếng Anh.
- Sử dụng `Arrow Up`, `Arrow Down`, `Page Up`, `Page Down`, `Home` và `End` để điều hướng bằng bàn phím.
- Ở màn hình kết thúc, dùng nút chia sẻ để mở Web Share hoặc sao chép liên kết.

### Giao diện production

`production.html` hiển thị prompt cho công cụ AI video và cue SFX/foley từ `production-data.js`. Nút **Sao chép prompt** sử dụng Clipboard API.

`noindex` chỉ ngăn công cụ tìm kiếm lập chỉ mục, không phải cơ chế bảo mật. Khi triển khai public, hãy loại trang này khỏi bản deploy hoặc đặt nó sau lớp xác thực.

## Cấu trúc project

| Đường dẫn | Vai trò |
| --- | --- |
| `index.html` | Entry point của trải nghiệm công khai và metadata chia sẻ |
| `style.css` | Design system lịch bloc, responsive và trạng thái tương tác |
| `app.js` | Điều khiển scene, cue phụ đề, autoplay, chia sẻ và accessibility |
| `scenes.js` | Nội dung 8 phân đoạn và dữ liệu các tầng bảo vệ CPD |
| `audioEngine.js` | Hiệu ứng âm thanh tổng hợp bằng Web Audio API |
| `production.html` | Giao diện tài liệu nội bộ cho đội sản xuất |
| `production-data.js` | Prompt AI video và cue SFX/foley nội bộ |
| `assets/images/` | Ảnh scene JPG/WebP và ảnh social sharing |
| `PRODUCT.md` | Bối cảnh sản phẩm, người dùng và các ràng buộc nội dung |
| `DESIGN.md` | Design system và nguyên tắc thị giác của trải nghiệm |

## Chỉnh sửa nội dung

- Sửa nội dung, phụ đề, telemetry hoặc alt text của từng scene trong `scenes.js`.
- Sửa prompt và cue sản xuất trong `production-data.js`; không đưa dữ liệu này trở lại public bundle.
- Sửa màu, typography, spacing và breakpoint trong `style.css`, đồng thời giữ các nguyên tắc trong `DESIGN.md`.
- Thay ảnh bằng cặp `sceneN.webp` và `sceneN.jpg` cùng số thứ tự. WebP được ưu tiên, JPG là fallback.
- Giữ kích thước ảnh chia sẻ `assets/images/share-card.jpg` ở tỷ lệ 1200 × 630.

## Kiểm tra trước khi deploy

```bash
node --check audioEngine.js
node --check scenes.js
node --check production-data.js
node --check app.js
git diff --check
```

Ngoài kiểm tra cú pháp, nên xem lại giao diện ở tối thiểu các chiều rộng 375px, 768px và 1440px; thử bàn phím, reduced motion, tắt JavaScript, bật/tắt âm thanh và phụ đề.

## Lưu ý triển khai

- Có thể deploy lên bất kỳ static host nào như GitHub Pages, Netlify hoặc Cloudflare Pages.
- Trước khi đưa lên production, đổi `og:url`, `og:image` và `twitter:image` trong `index.html` thành URL tuyệt đối của hostname thật. Zalo và một số scraper không chấp nhận đường dẫn tương đối.
- Web Share, Clipboard API và một số khả năng trình duyệt hoạt động tốt nhất trên HTTPS.
- Google Fonts được tải từ CDN; khi offline giao diện sẽ dùng font hệ thống.
- Giọng đọc tiếng Việt phụ thuộc vào voice được cài trong thiết bị và không được dùng làm kênh truyền tải thông tin duy nhất.

## Tài liệu thiết kế

- [`PRODUCT.md`](PRODUCT.md): mục tiêu, đối tượng người dùng và ràng buộc sản phẩm.
- [`DESIGN.md`](DESIGN.md): creative direction “Lịch Bloc”, token màu sắc, typography, motion và accessibility.