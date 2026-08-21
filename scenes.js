/**
 * 20 phút — scene and layer data. Shared by index.html and production.html.
 *
 * Every authored string below is character-identical to the previous build:
 * title, titleEn, subtitleVn, subtitleEn, dialogue, voText and every telemetry
 * value. Fields added for this build describe delivery, never content:
 *   alt        per-scene Vietnamese alternative text
 *   ngayThang  the sheet's dateline
 *   moc        the colossal numeral. It stays on the clock for all eight sheets;
 *              dungHo marks the sheets after the car acted, where the clock has
 *              stopped at 20:00 rather than inventing times the specs never set.
 *   nhiet      numeric cabin temperature, drives the heat ramp
 *   xeHanhDong the one sheet where the car itself acts
 * aiPrompt and sfxCue moved to production-data.js; they are crew material and
 * no longer ship to the public surface.
 */

const SCENES_DATA = [
  {
    id: 1,
    title: "1. Bãi Đỗ Xe Nắng Gắt & Vội Vã",
    titleEn: "Scorching Parking Lot & Rushed Departure",
    duration: 12,
    image: "assets/images/scene1.jpg",
    subtitleVn: "Ánh nắng ban trưa đổ dồn xuống bãi đỗ xe ngoài trời như thiêu như đốt. Vừa tắt máy, hệ thống Phát hiện Trẻ em (CPD) lập tức kích hoạt ngầm. Người bố vì áp lực cuộc họp khẩn nên hoàn toàn không để ý cảnh báo nhấp nháy trên taplo.",
    subtitleEn: "The midday sun scorches down relentlessly upon the open concrete lot. As the engine cuts out, the Child Presence Detection (CPD) silently arms itself. Rushing to an urgent meeting, the father overlooks the blinking dash warning.",
    dialogue: "“Mọi người vào phòng họp hết chưa? Tôi lên ngay đây!” — anh vội cúp máy, sập mạnh cửa xe, bấm khóa rồi lao nhanh về phía thang máy.",
    voText: "Ánh nắng ban trưa đổ dồn xuống bãi đỗ xe ngoài trời như thiêu như đốt. Vừa tắt máy, hệ thống Phát hiện Trẻ em lập tức kích hoạt ngầm. Người bố vì áp lực cuộc họp khẩn nên hoàn toàn không để ý biểu tượng cảnh báo nhấp nháy trên taplo.",
    telemetry: {
      status: "CPD ARMED • GIÁM SÁT NGẦM",
      temp: "32°C",
      tempPercent: "35%",
      occupant: "1 EM BÉ (GHẾ SAU)",
      mitigation: "Chờ tín hiệu",
      window: "0 cm (Đóng kín)",
      horn: "Im lặng",
      isDanger: false,
      showPhoneModal: false
    },
    alt: "Một chiếc SUV đỗ giữa bãi xe bê tông dưới nắng trưa gay gắt, hơi nóng bốc lên loang loáng trên mặt đường.",
    ngayThang: "Bãi đỗ xe ngoài trời · 12:40 trưa",
    moc: { giaTri: "00:00", donVi: "phút" },
    nhiet: 32
  },
  {
    id: 2,
    title: "2. Camera Cabin & Quét Radar Ghế Sau",
    titleEn: "In-Cabin Radar & Sensor Confirmation",
    duration: 14,
    image: "assets/images/scene2.jpg",
    subtitleVn: "Trong xe, camera nhận diện đứa bé vẫn đang ngủ quên ở hàng ghế sau. Tín hiệu cảnh báo ban đầu phát ra chuỗi âm thanh ting... ting... ting... dồn dập suốt 30 giây rồi tắt. Sau 2 phút im lặng, cơ chế cảnh báo leo thang 20 phút chính thức vận hành.",
    subtitleEn: "Inside, the in-cabin camera scans the sleeping toddler in the child seat. Initial acoustic chimes pulse for 30 seconds. After 2 minutes of silence, the 20-minute multi-stage escalation protocol initiates.",
    dialogue: "Hệ thống kích hoạt còi báo động từng đợt 30 giây và truyền phát tín hiệu cảnh báo khẩn cấp kèm hình ảnh trực tiếp về điện thoại người lái.",
    voText: "Trong xe, camera nhận diện đứa bé vẫn đang ngủ quên ở hàng ghế sau. Tín hiệu cảnh báo ban đầu phát ra chuỗi âm thanh ting ting dồn dập suốt 30 giây rồi tắt. Sau 2 phút im lặng, cơ chế cảnh báo leo thang chính thức vận hành.",
    telemetry: {
      status: "STAGE 1: CHUÔNG CẢNH BÁO NỘI VI",
      temp: "34°C",
      tempPercent: "50%",
      occupant: "BÉ ĐANG NGỦ (BÌNH THƯỜNG)",
      mitigation: "Chime 30s Kích Hoạt",
      window: "0 cm (Đóng kín)",
      horn: "Nội vi (Chỉ trong xe)",
      isDanger: false,
      showPhoneModal: false
    },
    alt: "Em bé chừng hai tuổi ngủ say trên ghế an toàn ở hàng ghế sau, ánh nắng xuyên qua kính xe.",
    ngayThang: "Trong khoang xe · 30 giây sau khi tắt máy",
    moc: { giaTri: "00:30", donVi: "phút" },
    nhiet: 34
  },
  {
    id: 3,
    title: "3. Chiếc Điện Thoại Im Lìm Trong Phòng Họp",
    titleEn: "Silent Phone on the Boardroom Table",
    duration: 13,
    image: "assets/images/scene3.jpg",
    subtitleVn: "Thế nhưng, chiếc điện thoại đã bị tắt tiếng hoàn toàn, nằm im lìm trên bàn phòng họp kín. Không ai hay biết điều nguy hiểm gì đang chuẩn bị xảy ra bên dưới bãi xe.",
    subtitleEn: "However, the smartphone sits completely muted on the closed boardroom conference table. Absorbed in the intense presentation, no one notices the silent red emergency alerts.",
    dialogue: "Không một ai để ý màn hình điện thoại đang liên tục nhấp nháy dòng chữ đỏ rực: Cảnh báo khẩn cấp CPD.",
    voText: "Thế nhưng, chiếc điện thoại đã bị tắt tiếng hoàn toàn, nằm im lìm trong phòng họp kín. Không ai hay biết điều gì đang xảy ra bên dưới bãi xe.",
    telemetry: {
      status: "STAGE 3: THÔNG BÁO TỪ XA APP 5G",
      temp: "36°C",
      tempPercent: "75%",
      occupant: "PHÁT HIỆN TRẺ EM (NHIỆT TĂNG)",
      mitigation: "Gửi thông báo 4G/5G",
      window: "0 cm (Đóng kín)",
      horn: "Đã gửi thông báo khẩn",
      isDanger: true,
      showPhoneModal: true
    },
    alt: "Chiếc điện thoại nằm úp tiếng trên bàn họp gỗ, màn hình sáng lên dòng cảnh báo đỏ mà không ai trong phòng nhìn thấy.",
    ngayThang: "Phòng họp tầng 9 · điện thoại để chế độ im lặng",
    moc: { giaTri: "02:00", donVi: "phút" },
    nhiet: 36
  },
  {
    id: 4,
    title: "4. Nhiệt Độ Đạt 38°C - Cơ Chế Tự Vệ Kích Hoạt",
    titleEn: "38°C Critical Threshold - Emergency Venting & Horn",
    duration: 14,
    image: "assets/images/scene4.jpg",
    subtitleVn: "Đến đợt cảnh báo thứ 5, nhiệt độ trong khoang xe đóng kín đã chạm ngưỡng 38°C. Cảm biến nhiệt lập tức kích hoạt lớp bảo vệ khẩn cấp: kính xe rít nhẹ hạ xuống 2 cm ở một bên để thoát khí nóng, quạt điều hòa gầm lên tối đa!",
    subtitleEn: "By the 5th warning cycle, the cabin temp hits 38°C. Thermal sensors trigger the emergency mitigation: the side window lowers 2cm to vent searing air, and the AC blower roars to max capacity.",
    dialogue: "Cùng lúc đó, còi báo động bên ngoài rú lên từng hồi chói tai: Bíp... bíp... bíp!",
    voText: "Đến đợt cảnh báo thứ năm, nhiệt độ trong khoang xe đóng kín đã chạm ngưỡng 38 độ C. Cảm biến nhiệt lập tức kích hoạt lớp bảo vệ khẩn cấp: kính xe rít nhẹ hạ xuống hai xăng ti mét để thoát khí nóng, quạt điều hòa gầm lên tối đa, còi báo động rú lên từng hồi chói tai.",
    telemetry: {
      status: "BẢO VỆ CẤP 5: NGUY HIỂM 38°C",
      temp: "38°C -> HẠ NHIỆT",
      tempPercent: "95%",
      occupant: "CỨU HỘ KHẨN CẤP",
      mitigation: "QUẠT MAX + HẠ KÍNH 2CM",
      window: "2 cm HỞ (THOÁT NHIỆT)",
      horn: "CÒI NGOẠI VI: BÍP... BÍP!",
      isDanger: true,
      showPhoneModal: false
    },
    alt: "Cận cảnh cửa xe dưới nắng gắt, kính đã tự hạ xuống đúng 2 phân, hơi nóng thoát ra qua khe hở.",
    ngayThang: "Đợt cảnh báo thứ 5 · xe tự hành động",
    moc: { giaTri: "20:00", donVi: "phút" },
    nhiet: 38,
    xeHanhDong: true
  },
  {
    id: 5,
    title: "5. Người Bảo Vệ Phát Hiện Qua Khe Kính 2cm",
    titleEn: "Security Guard Spots the Trapped Child",
    duration: 13,
    image: "assets/images/scene5.jpg",
    subtitleVn: "Tiếng còi inh ỏi xé toạc không gian bãi xe khiến người bảo vệ chú ý. Chạy lại gần, nhìn qua khe kính hở 2cm, ông hoảng hốt thấy đứa bé đang giãy giụa khóc ngặt nghẽo bên trong.",
    subtitleEn: "The piercing horn cuts across the lot, alerting the security guard. Rushing over and peering through the 2cm opening, he recoils in shock seeing the toddler crying inside.",
    dialogue: "Nhận ra biển số xe công ty, người bảo vệ lập tức chạy thẳng lên sảnh, đập cửa phòng họp!",
    voText: "Tiếng còi inh ỏi xé toạc không gian bãi xe khiến người bảo vệ chú ý. Chạy lại gần, nhìn qua khe kính hở hai xăng ti mét, ông hoảng hốt thấy đứa bé đang giãy giụa khóc ngặt nghẽo bên trong. Nhận ra biển số xe công ty, ông chạy thẳng lên phòng họp.",
    telemetry: {
      status: "CAN THIỆP CỨU HỘ NGOẠI VI",
      temp: "36°C (Đang hạ nhiệt)",
      tempPercent: "70%",
      occupant: "BÉ ĐANG KHÓC - ĐÃ CÓ NGƯỜI THẤY",
      mitigation: "Duy Trì Còi Ngoại Vi",
      window: "2 cm HỞ (THOÁT NHIỆT)",
      horn: "BÍP... BÍP... BÍP!",
      isDanger: true,
      showPhoneModal: false
    },
    alt: "Người bảo vệ mặc đồng phục cúi sát cửa kính xe, một tay che nắng, gương mặt hoảng hốt khi nhìn thấy đứa bé bên trong.",
    ngayThang: "Có người nghe thấy tiếng còi",
    moc: { giaTri: "20:00", donVi: "phút" },
    dungHo: true,
    nhiet: 36
  },
  {
    id: 6,
    title: "6. Cánh Cửa Phòng Họp Bật Mở & Cơn Hoảng Loạn",
    titleEn: "Boardroom Door Bursts Open - Shock & Sprint",
    duration: 13,
    image: "assets/images/scene6.jpg",
    subtitleVn: "“Xe ai biển số 51H-... mau xuống bãi đỗ xe! Có đứa bé bị kẹt trong xe đang gào khóc kìa!” Cả phòng họp sững sờ. Mặt người bố cắt không còn giọt máu, anh bật dậy hất tung chiếc ghế, vứt vội tài liệu rồi lao như bay xuống cầu thang.",
    subtitleEn: "'Whose car is 51H-...? Hurry down to the lot! There's a child trapped crying inside!' The room freezes. Blood drains from the father's face; he knocks over his chair and bolts down the stairwell.",
    dialogue: "“Xe ai biển số 51H-... mau xuống bãi đỗ xe! Có đứa bé bị kẹt trong xe đang gào khóc kìa!”",
    voText: "Xe ai biển số năm mươi mốt Hát mau xuống bãi đỗ xe! Có đứa bé bị kẹt trong xe đang gào khóc kìa! Cả phòng họp sững sờ. Mặt người bố cắt không còn giọt máu, anh bật dậy hất tung chiếc ghế, vứt vội tài liệu rồi lao như bay xuống cầu thang.",
    telemetry: {
      status: "NGƯỜI LÁI ĐÃ BIẾT • ĐANG CHẠY XUỐNG",
      temp: "35°C (Đang làm mát)",
      tempPercent: "60%",
      occupant: "NGƯỜI BỐ ĐANG LAO XUỐNG",
      mitigation: "Chờ Mở Khóa Cửa Xe",
      window: "2 cm HỞ (THOÁT NHIỆT)",
      horn: "Đang duy trì còi báo",
      isDanger: true,
      showPhoneModal: false
    },
    alt: "Trong phòng họp, người bố bật dậy hoảng loạn, chiếc ghế đổ về phía sau, giấy tờ tung tóe, người bảo vệ đứng hét ở cửa.",
    ngayThang: "Phòng họp tầng 9 · cửa bật mở",
    moc: { giaTri: "20:00", donVi: "phút" },
    dungHo: true,
    nhiet: 35
  },
  {
    id: 7,
    title: "7. Cứu Con Trong Nước Mắt & Lời Xin Lỗi",
    titleEn: "Tearful Rescue & Profound Remorse",
    duration: 15,
    image: "assets/images/scene7.jpg",
    subtitleVn: "Giữa bãi xe nắng rát, tiếng còi báo động xen lẫn tiếng khóc nghẹn ngào của con trẻ như bóp nghẹt tim anh. Giật tung cánh cửa, anh bế thốc con vào lòng, toàn thân run rẩy khi mồ hôi và nước mắt đứa bé ướt đẫm vai áo mình.",
    subtitleEn: "In the blazing heat, the siren intertwined with his child's weeping tears at his soul. Yanking open the door, he pulls his child into a trembling embrace, tears and sweat soaking his shoulder.",
    dialogue: "“Bố đây rồi, bố xin lỗi... Bố đây rồi con ơi!” — anh ôm chặt đứa con nhỏ trong niềm nghẹn ngào vỡ òa.",
    voText: "Giữa bãi xe nắng rát, tiếng còi báo động xen lẫn tiếng khóc nghẹn ngào của con trẻ như bóp nghẹt tim anh. Giật tung cánh cửa mở khóa, anh bế thốc con vào lòng, toàn thân run rẩy: Bố đây rồi, bố xin lỗi, bố đây rồi con ơi!",
    telemetry: {
      status: "GIẢI CỨU THÀNH CÔNG • ĐÃ MỞ CỬA",
      temp: "32°C (Vùng an toàn)",
      tempPercent: "35%",
      occupant: "BÉ ĐÃ AN TOÀN TRONG TAY BỐ",
      mitigation: "NHIỆM VỤ THÀNH CÔNG",
      window: "CỬA XE MỞ TOÀN PHẦN",
      horn: "Tắt còi (Đã hủy báo động)",
      isDanger: false,
      showPhoneModal: false
    },
    alt: "Người bố quỳ bên cửa xe mở toang giữa bãi đỗ xe chói nắng, ôm chặt đứa con nhỏ vào lòng, nước mắt chảy dài.",
    ngayThang: "Cửa xe mở · đứa bé an toàn",
    moc: { giaTri: "20:00", donVi: "phút" },
    dungHo: true,
    nhiet: 32
  },
  {
    id: 8,
    title: "8. Tổng Kết Công Nghệ CPD Bảo Vệ Sinh Mạng",
    titleEn: "CPD Safety Architecture: Saving Precious Lives",
    duration: 14,
    image: "assets/images/scene8.jpg",
    subtitleVn: "Hệ thống Phát hiện Trẻ em (CPD) kết hợp mmWave Radar 60GHz, camera quang học, cơ chế hạ kính thoát nhiệt và còi báo động ngoại vi — lá chắn công nghệ âm thầm bảo vệ những sinh mệnh quý giá nhất.",
    subtitleEn: "The Child Presence Detection (CPD) system blends 60GHz mmWave radar, optical AI vision, thermal glass venting, and community audible alarms — a silent high-tech shield protecting our most precious lives.",
    dialogue: "“Đừng để sự vội vã đánh đổi bằng những điều hối tiếc. Công nghệ an toàn luôn đồng hành bảo vệ gia đình bạn.”",
    voText: "Hệ thống Phát hiện Trẻ em CPD với công nghệ radar và hạ kính thoát nhiệt tự động — lá chắn thông minh bảo vệ những sinh mệnh quý giá nhất của mỗi gia đình.",
    telemetry: {
      status: "HỆ THỐNG SẴN SÀNG • LÁ CHẮN 24/7",
      temp: "25°C (Tiêu chuẩn)",
      tempPercent: "20%",
      occupant: "SẴN SÀNG CHO HÀNH TRÌNH TIẾP",
      mitigation: "Euro NCAP 5-Star CPD",
      window: "Tự Động Kiểm Soát",
      horn: "Sẵn sàng bảo vệ",
      isDanger: false,
      showPhoneModal: false
    },
    alt: "Sơ đồ kỹ thuật khoang xe với cảm biến radar và camera đang quét hàng ghế sau, các thông số an toàn hiển thị bên cạnh.",
    ngayThang: "Khoang xe trở lại 25°C",
    moc: { giaTri: "20:00", donVi: "phút" },
    dungHo: true,
    nhiet: 25
  }
];

/**
 * The five-layer architecture. Layer bodies and tieuDe are verbatim from the
 * previous build's technology tab; the badge labels were re-cased from shouting
 * caps to sentence case, and "(38°C Threshold)" was translated to "(ngưỡng 38°C)"
 * for a Vietnamese-first surface. Every locked number is unchanged.
 * The numeral on these sheets counts layers, not minutes, so the clock slot is
 * never reused for a second meaning.
 */

const TANG_BAO_VE = [
  {
    tang: "Tầng 1",
    nhan: "Quan sát & kích hoạt ngầm",
    tieuDe: "Cảm biến mmWave Radar 60GHz & Camera Cabin AI",
    than: "Ngay khi tắt máy và tài xế mở cửa, radar quét nhịp thở vi mô (micro-respiration) và cử động nhỏ nhất của trẻ sơ sinh dưới chăn hoặc ghế trẻ em.",
    moc: { giaTri: "1", donVi: "tầng" },
    nhiet: 32
  },
  {
    tang: "Tầng 2",
    nhan: "Cảnh báo nội vi (30 giây)",
    tieuDe: "Âm thanh Ting... Ting... dồn dập & Taplo nhấp nháy",
    than: "Nhắc nhở trực diện trước khi người lái rời bước. Đèn taplo biểu tượng ghế trẻ em phát sáng đỏ cam.",
    moc: { giaTri: "2", donVi: "tầng" },
    nhiet: 34
  },
  {
    tang: "Tầng 3",
    nhan: "Cảnh báo từ xa qua ứng dụng (20 phút leo thang)",
    tieuDe: "Gửi thông báo khẩn cấp + Ảnh trực tiếp qua 4G/5G",
    than: "Gửi tin nhắn ưu tiên cao vượt qua chế độ DND/Mute trên smartphone người thân kèm đo nhiệt độ phòng lái thời gian thực.",
    moc: { giaTri: "3", donVi: "tầng" },
    nhiet: 36
  },
  {
    tang: "Tầng 4",
    nhan: "Giảm thiểu tai họa nhiệt độ (ngưỡng 38°C)",
    tieuDe: "Hạ kính 2cm + Quạt thông gió làm mát công suất cực đại",
    than: "Ngăn chặn hiệu ứng nhà kính trong khoang xe đóng kín, tạo lối thoát nhiệt khí nóng, giảm 6-8°C tức thì để kéo dài thời gian an toàn.",
    moc: { giaTri: "4", donVi: "tầng" },
    nhiet: 38,
    xeHanhDong: true
  },
  {
    tang: "Tầng 5",
    nhan: "Cứu hộ cộng đồng (còi ngoại vi đứt quãng)",
    tieuDe: "Còi xe rú từng hồi Bíp... Bíp... Bíp + Đèn Hazard nháy sáng",
    than: "Gây chú ý mạnh mẽ cho bảo vệ, người đi đường và khu vực xung quanh khi tài xế không phản hồi điện thoại, cứu mạng đứa trẻ kịp thời.",
    moc: { giaTri: "5", donVi: "tầng" },
    nhiet: 36
  }
];
