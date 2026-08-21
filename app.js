/**
 * CPD Safety Shield - Interactive Cinematic Director & Storyboard Application
 */

const SCENES_DATA = [
  {
    id: 1,
    title: "1. Bãi Đỗ Xe Nắng Gắt & Vội Vã",
    titleEn: "Scorching Parking Lot & Rushed Departure",
    duration: 12, // seconds
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
    aiPrompt: "Cinematic movie still, dramatic midday scorching sun beating down intensely on an outdoor concrete parking lot with heat waves shimmering. Modern luxury SUV parked under blinding sunlight. Close-up on the car dashboard showing a glowing red and orange Child Presence Detection CPD warning icon blinking on the digital screen, while an anxious businessman father in a suit quickly exits, holding a phone to his ear, ignoring the dashboard. Hyper-realistic, 8k, cinematic lighting, shallow depth of field, anamorphic lens flare, Arri Alexa quality. --ar 16:9 --v 6.1",
    sfxCue: "Âm nền nắng gắt (heatwave sub-drone), tiếng bước chân gấp gáp, tiếng 'Ting... Ting... Ting...' trên taplo, tiếng sập cửa xe 'Rầm!'"
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
    aiPrompt: "Cinematic interior shot of a modern car backseat. A cute 2-year-old Asian toddler is peacefully sleeping in a safety child car seat, holding a small plush toy. A subtle high-tech green and cyan laser/radar grid or CPD Child Presence Detection sensor overlay softly scans from the ceiling dome light onto the baby. Sunlight streams through tinted windows, soft warm atmosphere before heat builds up. 8k, cinematic, shallow depth of field, photorealistic. --ar 16:9 --v 6.1",
    sfxCue: "Tiếng thở nhẹ của em bé, nhịp bíp điện tử CPD Radar quét không gian, tiếng chuông Ting... Ting nhịp độ tăng dần."
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
    aiPrompt: "Cinematic macro shot of a sleek smartphone resting silently on a polished wooden corporate boardroom conference table. The phone screen lights up brightly with an urgent red emergency alert UI notification: 'EMERGENCY: CPD ALERT - Child Detected Inside Vehicle! Cabin Temp: 38°C'. The phone is in silent/muted mode icon. In the blurred background, business executives in suits are intently discussing around a presentation screen. Dramatic cinematic shallow depth of field, 8k, moody corporate lighting. --ar 16:9 --v 6.1",
    sfxCue: "Âm thanh họp công ty mờ ảo (muffled boardroom ambience), tiếng tim đập hồi hộp 'Thump... thump...', tiếng màn hình điện thoại rung cực khẽ."
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
    aiPrompt: "Cinematic close-up of a modern dark metallic car door under intense burning midday sun. The tinted side window has automatically rolled down exactly 2 centimeters, with visible hot air heat shimmering escaping through the narrow gap. The car's hazard lights and headlights are flashing rhythmically in alarm mode. Photorealistic, 8k, cinematic camera angle, shallow depth of field, dramatic harsh sunlight and lens flare. --ar 16:9 --v 6.1",
    sfxCue: "Tiếng mô-tơ hạ kính điện 'Zzzt', tiếng xì hơi nóng thoát ra khe hở 'Phùùù', tiếng quạt gió AC chạy hết công suất, tiếng còi xe bên ngoài 'Bíp... bíp... bíp!'"
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
    aiPrompt: "Cinematic film still. A security guard in a uniform stands next to a modern car in a sunlit parking lot, looking urgently through the car window with worried eyes and hand raised to block the glare. Sharp focus, dramatic documentary style, natural sunlight lens flare, realistic photography, 8k resolution. --ar 16:9 --v 6.1",
    sfxCue: "Tiếng còi xe inh ỏi vang vọng bãi đỗ xe, tiếng bước chân bảo vệ chạy vội trên mặt đường nhựa, tiếng khóc của em bé qua khe hở kính."
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
    aiPrompt: "Cinematic movie shot. Inside a corporate meeting room, an Asian businessman father in a dark suit stands up in pure panic and shock, his face completely pale with wide terrified eyes. His office chair is toppled backward onto the floor behind him, business papers flying in the air. At the open glass doorway, a security guard is shouting urgently. Other meeting members freeze in utter shock. Dramatic film lighting, motion blur on falling papers, hyper-realistic, 8k. --ar 16:9 --v 6.1",
    sfxCue: "Tiếng đập cửa rầm rầm, tiếng hét thất thanh của bảo vệ, tiếng ghế ngã đổ 'Keng!', tiếng giấy tờ rơi xáo trộn, tiếng bước chân giậm dồn dập xuống cầu thang."
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
    aiPrompt: "Cinematic emotional close-up. In a sun-drenched outdoor parking lot next to an open car door, an Asian father in a disheveled suit is on his knees, weeping with profound relief and remorse. He embraces his cute 2-year-old child tightly against his chest. The child's forehead has droplets of sweat, hugging the father's neck. Father's eyes closed, tears running down his face onto the child's clothes. Golden harsh sun lens flare, deep emotional drama, masterpiece photography, 8k. --ar 16:9 --v 6.1",
    sfxCue: "Tiếng mở khóa 'Tách', tiếng cửa xe mở toang, tiếng khóc òa vỡ của đứa trẻ chuyển thành tiếng nấc nhẹ khi được ôm, giai điệu đàn cello và piano da diết dâng trào."
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
    aiPrompt: "Cinematic futuristic automotive safety HUD graphic overlay showing 3D wireframe car interior with mmWave Radar & optical in-cabin sensors actively scanning child presence in back seat, displaying real-time safety metrics: 'Child Detected', 'Interior Temp: 38°C -> 32°C Cooling', 'Window Vent: 20mm', 'Escalation Alert: Active'. Sleek dark glassmorphism UI, high-tech automotive engineering visualization, 8k. --ar 16:9 --v 6.1",
    sfxCue: "Âm thanh kỹ thuật số tương lai (tech chime resolve), tiếng chuông kết thúc ấm áp, âm hưởng an toàn và hy vọng."
  }
];

class StoryboardApp {
  constructor() {
    this.audio = new AudioEngine();
    this.currentSceneIndex = 0;
    this.isPlaying = false;
    this.playTimer = null;
    this.sceneElapsedSec = 0;
    this.playbackSpeed = 1.0;
    this.isVoiceoverEnabled = false;
    this.isScopeMode = false;
    this.isHudVisible = true;
    
    // Subtitle Controls State
    this.subLangModes = ['dual', 'vn', 'en', 'hidden'];
    this.subLangIndex = 0;
    this.subFontModes = ['medium', 'large', 'small'];
    this.subFontIndex = 0;

    this.cacheDOMElements();
    this.initUI();
    this.bindEvents();
    this.loadScene(0, false);
  }

  cacheDOMElements() {
    // Media & HUD
    this.viewportCanvas = document.getElementById("viewport-canvas");
    this.sceneImage = document.getElementById("scene-image");
    this.telemetryHud = document.getElementById("telemetry-hud");
    this.hudStatusChip = document.getElementById("hud-status-chip");
    this.hudStatusText = document.getElementById("hud-status-text");
    this.hudTempVal = document.getElementById("hud-temp-val");
    this.tempMiniFill = document.getElementById("temp-mini-fill");
    this.hudOccupantVal = document.getElementById("hud-occupant-val");
    this.hudMitigationVal = document.getElementById("hud-mitigation-val");
    this.hudWindowVal = document.getElementById("hud-window-val");
    this.hudHornVal = document.getElementById("hud-horn-val");
    this.phoneAlertModal = document.getElementById("phone-alert-modal");
    
    // Center Play Button Overlay
    this.centerPlayOverlay = document.getElementById("center-play-overlay");
    this.bigPlayBtn = document.getElementById("big-play-btn");

    // Audio Visualizer
    this.audioWaveContainer = document.getElementById("audio-wave-container");

    // Subtitles
    this.subtitleBox = document.getElementById("subtitle-box");
    this.subtitleSceneBadge = document.getElementById("subtitle-scene-badge");
    this.subtitleVn = document.getElementById("subtitle-vn");
    this.subtitleEn = document.getElementById("subtitle-en");
    this.subLangToggle = document.getElementById("sub-lang-toggle");
    this.subFontToggle = document.getElementById("sub-font-toggle");

    // Controls
    this.playPauseBtn = document.getElementById("play-pause-btn");
    this.prevBtn = document.getElementById("prev-btn");
    this.nextBtn = document.getElementById("next-btn");
    this.replayBtn = document.getElementById("replay-btn");
    this.currentTimeLabel = document.getElementById("current-time");
    this.totalTimeLabel = document.getElementById("total-time");
    this.activeSceneTitle = document.getElementById("active-scene-title");
    this.timelineSlider = document.getElementById("timeline-slider");
    this.timelineFill = document.getElementById("timeline-fill");
    this.timelineMarkers = document.getElementById("timeline-markers");
    this.speedSelect = document.getElementById("speed-select");
    this.toggleHudBtn = document.getElementById("toggle-hud-btn");
    this.toggleAspectBtn = document.getElementById("toggle-aspect-btn");
    this.toggleSoundBtn = document.getElementById("toggle-sound-btn");
    this.soundBtnText = document.getElementById("sound-btn-text");
    this.toggleVoBtn = document.getElementById("toggle-vo-btn");
    this.voBtnText = document.getElementById("vo-btn-text");
    this.fullscreenBtn = document.getElementById("fullscreen-btn");

    // Containers
    this.thumbnailStrip = document.getElementById("thumbnail-strip");
    this.scenesScriptList = document.getElementById("scenes-script-list");
    this.scriptSearchInput = document.getElementById("script-search-input");
    this.copyScriptTextBtn = document.getElementById("copy-script-text-btn");
    this.promptsContainer = document.getElementById("prompts-container");
    this.sfxTableContainer = document.getElementById("sfx-table-container");
    this.toast = document.getElementById("toast");
    this.toastText = document.getElementById("toast-text");
    this.copyAllPromptsBtn = document.getElementById("copy-all-prompts-btn");
  }

  initUI() {
    this.renderThumbnails();
    this.renderScriptList();
    this.renderAIPrompts();
    this.renderSFXTable();
    this.renderTimelineMarkers();
    this.calculateTotalTime();
  }

  calculateTotalTime() {
    const totalSec = SCENES_DATA.reduce((acc, curr) => acc + curr.duration, 0);
    this.totalTimeLabel.textContent = this.formatTime(totalSec);
  }

  renderTimelineMarkers() {
    this.timelineMarkers.innerHTML = "";
    const totalSec = SCENES_DATA.reduce((acc, curr) => acc + curr.duration, 0);
    let accum = 0;
    SCENES_DATA.forEach((s) => {
      accum += s.duration;
      const tick = document.createElement("div");
      tick.className = "timeline-marker-tick";
      tick.style.left = `${(accum / totalSec) * 100}%`;
      this.timelineMarkers.appendChild(tick);
    });
  }

  formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  renderThumbnails() {
    this.thumbnailStrip.innerHTML = "";
    SCENES_DATA.forEach((scene, idx) => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = `thumb-card ${idx === 0 ? 'active' : ''}`;
      card.dataset.index = idx;
      card.setAttribute("aria-label", `Chuyển đến phân đoạn ${idx + 1}: ${scene.title}`);
      card.innerHTML = `
        <img src="${scene.image}" alt="Thumb ${idx + 1}" loading="lazy" />
        <span class="thumb-number">0${idx + 1}</span>
        <span class="thumb-title">${scene.title.split('. ')[1] || scene.title}</span>
      `;
      card.addEventListener("click", () => {
        this.goToScene(idx);
      });
      this.thumbnailStrip.appendChild(card);
    });
  }

  renderScriptList(filterText = "") {
    this.scenesScriptList.innerHTML = "";
    const query = filterText.toLowerCase().trim();

    SCENES_DATA.forEach((scene, idx) => {
      const match = !query || 
        scene.title.toLowerCase().includes(query) || 
        scene.subtitleVn.toLowerCase().includes(query) || 
        scene.dialogue.toLowerCase().includes(query);

      if (!match) return;

      const card = document.createElement("div");
      card.className = `scene-script-card ${idx === this.currentSceneIndex ? 'active' : ''}`;
      card.id = `script-card-${idx}`;
      card.dataset.index = idx;
      card.tabIndex = 0;
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", `Mở phân đoạn ${idx + 1}: ${scene.title}`);
      card.innerHTML = `
        <div class="card-header-line">
          <span class="scene-badge-pill">PHÂN ĐOẠN 0${idx + 1} • ${scene.duration}s</span>
          <span class="scene-time-stamp">${scene.telemetry.temp} | ${scene.telemetry.status.slice(0, 20)}...</span>
        </div>
        <h4 class="scene-script-title">${scene.title}</h4>
        <p class="scene-script-desc">${scene.subtitleVn}</p>
        <div class="scene-dialogue-quote">${scene.dialogue}</div>
      `;
      card.addEventListener("click", () => {
        this.goToScene(idx);
      });
      card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          this.goToScene(idx);
        }
      });
      this.scenesScriptList.appendChild(card);
    });
  }

  renderAIPrompts() {
    this.promptsContainer.innerHTML = "";
    SCENES_DATA.forEach((scene, idx) => {
      const card = document.createElement("div");
      card.className = "prompt-card";
      card.innerHTML = `
        <div class="prompt-card-header">
          <span class="prompt-scene-tag">CẢNH 0${idx + 1}: ${scene.title}</span>
          <button class="prompt-copy-btn" data-index="${idx}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Sao Chép Prompt
          </button>
        </div>
        <div class="prompt-text-box">${scene.aiPrompt}</div>
        <div class="prompt-meta-tags">
          <span class="meta-tag">16:9 Widescreen</span>
          <span class="meta-tag">Arri Alexa Lighting</span>
          <span class="meta-tag">Runway Gen-3 / Kling 1.5 / Sora / Midjourney</span>
          <span class="meta-tag">Thời lượng: ${scene.duration}s</span>
        </div>
      `;
      const copyBtn = card.querySelector(".prompt-copy-btn");
      copyBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        this.copyToClipboard(scene.aiPrompt, `Đã sao chép Prompt Cảnh 0${idx + 1}!`);
      });
      this.promptsContainer.appendChild(card);
    });
  }

  renderSFXTable() {
    this.sfxTableContainer.innerHTML = `
      <table class="sfx-table">
        <thead>
          <tr>
            <th>Cảnh</th>
            <th>Tên Phân Đoạn</th>
            <th>Thiết Kế Âm Thanh (SFX & Foley)</th>
            <th>Lời Thuyết Minh (Voiceover Script)</th>
          </tr>
        </thead>
        <tbody>
          ${SCENES_DATA.map((scene, idx) => `
            <tr>
              <td><span class="sfx-pill">0${idx + 1}</span></td>
              <td><strong>${scene.title.split('. ')[1] || scene.title}</strong></td>
              <td>${scene.sfxCue}</td>
              <td style="font-style: italic; color: #cbd5e1;">${scene.voText}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  }

  bindEvents() {
    // Play / Pause Buttons
    this.playPauseBtn.addEventListener("click", () => this.togglePlay());
    this.bigPlayBtn.addEventListener("click", () => this.togglePlay());
    this.viewportCanvas.addEventListener("click", (e) => {
      // Avoid clicking subtitle buttons
      if (e.target.closest(".subtitle-box")) return;
      this.togglePlay();
    });

    this.prevBtn.addEventListener("click", () => this.prevScene());
    this.nextBtn.addEventListener("click", () => this.nextScene());
    this.replayBtn.addEventListener("click", () => this.replayAll());

    // Timeline Scrubber Click
    this.timelineSlider.addEventListener("click", (e) => {
      const rect = this.timelineSlider.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const ratio = Math.max(0, Math.min(1, clickX / rect.width));
      const totalSec = SCENES_DATA.reduce((sum, s) => sum + s.duration, 0);
      const targetSec = ratio * totalSec;
      
      // Find scene corresponding to targetSec
      let accum = 0;
      for (let i = 0; i < SCENES_DATA.length; i++) {
        if (targetSec <= accum + SCENES_DATA[i].duration || i === SCENES_DATA.length - 1) {
          this.goToScene(i);
          this.sceneElapsedSec = Math.max(0, targetSec - accum);
          break;
        }
        accum += SCENES_DATA[i].duration;
      }
    });

    // Speed
    this.speedSelect.addEventListener("change", (e) => {
      this.playbackSpeed = parseFloat(e.target.value);
    });

    // Sound toggle
    this.toggleSoundBtn.addEventListener("click", () => {
      const isSoundOn = this.audio.toggleMute();
      this.soundBtnText.textContent = isSoundOn ? "Âm Thanh: BẬT" : "Âm Thanh: TẮT";
      this.toggleSoundBtn.classList.toggle("active", isSoundOn);
      this.audioWaveContainer.classList.toggle("playing", isSoundOn && this.isPlaying);
      if (isSoundOn && this.isPlaying) {
        this.audio.playSceneAudio(this.currentSceneIndex);
      }
    });

    // Voiceover toggle
    this.toggleVoBtn.addEventListener("click", () => {
      this.isVoiceoverEnabled = !this.isVoiceoverEnabled;
      this.voBtnText.textContent = this.isVoiceoverEnabled ? "Thuyết Minh AI: BẬT" : "Thuyết Minh AI: TẮT";
      this.toggleVoBtn.classList.toggle("active", this.isVoiceoverEnabled);
      if (this.isVoiceoverEnabled && this.isPlaying) {
        this.speakVO(SCENES_DATA[this.currentSceneIndex].voText);
      } else {
        if (window.speechSynthesis) window.speechSynthesis.cancel();
      }
    });

    // Subtitle Language Toggle
    this.subLangToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      this.subLangIndex = (this.subLangIndex + 1) % this.subLangModes.length;
      const mode = this.subLangModes[this.subLangIndex];
      this.subtitleBox.className = "subtitle-box";
      
      if (mode === 'dual') {
        this.subLangToggle.textContent = "Song Ngữ (VN/EN)";
      } else if (mode === 'vn') {
        this.subtitleBox.classList.add("vn-only");
        this.subLangToggle.textContent = "Chỉ Tiếng Việt";
      } else if (mode === 'en') {
        this.subtitleBox.classList.add("en-only");
        this.subLangToggle.textContent = "Chỉ Tiếng Anh";
      } else if (mode === 'hidden') {
        this.subtitleBox.classList.add("hidden-sub");
        this.subLangToggle.textContent = "Ẩn Phụ Đề";
      }
    });

    // Subtitle Font Size Toggle
    this.subFontToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      this.subFontIndex = (this.subFontIndex + 1) % this.subFontModes.length;
      const mode = this.subFontModes[this.subFontIndex];
      this.subtitleBox.classList.remove("font-large", "font-small");
      
      if (mode === 'medium') {
        this.subFontToggle.textContent = "Cỡ Chữ: Vừa";
      } else if (mode === 'large') {
        this.subtitleBox.classList.add("font-large");
        this.subFontToggle.textContent = "Cỡ Chữ: Lớn";
      } else if (mode === 'small') {
        this.subtitleBox.classList.add("font-small");
        this.subFontToggle.textContent = "Cỡ Chữ: Nhỏ";
      }
    });

    // Aspect Scope Mode
    this.toggleAspectBtn.addEventListener("click", () => {
      this.isScopeMode = !this.isScopeMode;
      this.viewportCanvas.classList.toggle("scope-mode", this.isScopeMode);
      this.toggleAspectBtn.classList.toggle("active", this.isScopeMode);
      this.toggleAspectBtn.textContent = this.isScopeMode ? "16:9 Scope" : "2.39:1";
    });

    // HUD toggle
    this.toggleHudBtn.addEventListener("click", () => {
      this.isHudVisible = !this.isHudVisible;
      this.telemetryHud.classList.toggle("hud-hidden", !this.isHudVisible);
      this.toggleHudBtn.classList.toggle("active", this.isHudVisible);
    });

    // Fullscreen
    this.fullscreenBtn.addEventListener("click", () => {
      const elem = document.getElementById("cinema-frame");
      if (!document.fullscreenElement) {
        elem.requestFullscreen().catch(err => alert(err.message));
      } else {
        document.exitFullscreen();
      }
    });

    // Studio Tabs
    const tabBtns = document.querySelectorAll(".tab-btn");
    tabBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        tabBtns.forEach(b => {
          b.classList.remove("active");
          b.setAttribute("aria-selected", "false");
        });
        document.querySelectorAll(".tab-pane").forEach(p => p.classList.remove("active"));
        btn.classList.add("active");
        btn.setAttribute("aria-selected", "true");
        const targetId = btn.dataset.tab;
        document.getElementById(targetId).classList.add("active");
      });
    });

    // Script Search Filter
    this.scriptSearchInput.addEventListener("input", (e) => {
      this.renderScriptList(e.target.value);
    });

    // Copy Full Script Text
    this.copyScriptTextBtn.addEventListener("click", () => {
      const scriptText = SCENES_DATA.map((s, i) => 
        `=== PHÂN ĐOẠN 0${i + 1}: ${s.title} (${s.duration}s) ===\n${s.subtitleVn}\nThoại: ${s.dialogue}\n\n`
      ).join('');
      this.copyToClipboard(scriptText, "Đã sao chép toàn bộ kịch bản 8 phân đoạn!");
    });

    // Copy all prompts
    this.copyAllPromptsBtn.addEventListener("click", () => {
      const allText = SCENES_DATA.map((s, i) => `=== CẢNH 0${i + 1}: ${s.title} ===\n${s.aiPrompt}\n\n`).join('');
      this.copyToClipboard(allText, "Đã sao chép tất cả 8 Prompt Video AI!");
    });

    // Keyboard navigation
    window.addEventListener("keydown", (e) => {
      if (e.target.closest("input, textarea, select, button, [contenteditable='true']")) return;

      if (e.code === "Space") {
        e.preventDefault();
        this.togglePlay();
      } else if (e.code === "ArrowRight") {
        this.nextScene();
      } else if (e.code === "ArrowLeft") {
        this.prevScene();
      }
    });
  }

  loadScene(index, shouldTriggerAudio = true) {
    if (index < 0 || index >= SCENES_DATA.length) return;
    this.currentSceneIndex = index;
    const scene = SCENES_DATA[index];

    // Transition image
    this.sceneImage.style.opacity = '0';
    setTimeout(() => {
      this.sceneImage.src = scene.image;
      this.sceneImage.style.opacity = '1';
    }, 180);

    // Update subtitles
    this.subtitleSceneBadge.textContent = `PHÂN ĐOẠN 0${index + 1} / 0${SCENES_DATA.length}`;
    this.subtitleVn.textContent = scene.subtitleVn;
    this.subtitleEn.textContent = scene.subtitleEn;
    this.activeSceneTitle.textContent = scene.title;

    // Update Telemetry HUD
    this.hudStatusText.textContent = scene.telemetry.status;
    this.hudTempVal.textContent = scene.telemetry.temp;
    this.tempMiniFill.style.width = scene.telemetry.tempPercent;
    this.hudOccupantVal.textContent = scene.telemetry.occupant;
    this.hudMitigationVal.textContent = scene.telemetry.mitigation;
    this.hudWindowVal.textContent = scene.telemetry.window;
    this.hudHornVal.textContent = scene.telemetry.horn;

    if (scene.telemetry.isDanger) {
      this.hudStatusChip.classList.add("danger-state");
    } else {
      this.hudStatusChip.classList.remove("danger-state");
    }

    if (scene.telemetry.showPhoneModal) {
      this.phoneAlertModal.classList.add("show");
    } else {
      this.phoneAlertModal.classList.remove("show");
    }

    // Highlight Thumbnail & Script Card
    document.querySelectorAll(".thumb-card").forEach((card) => {
      card.classList.toggle("active", Number(card.dataset.index) === index);
    });
    document.querySelectorAll(".scene-script-card").forEach((card) => {
      card.classList.toggle("active", Number(card.dataset.index) === index);
    });

    const activeThumb = this.thumbnailStrip.querySelector(`[data-index="${index}"]`);
    if (activeThumb) {
      activeThumb.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
    }

    // Scroll script card into view
    const activeScriptCard = document.getElementById(`script-card-${index}`);
    if (activeScriptCard) {
      activeScriptCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    // Sound & VO
    if (shouldTriggerAudio && this.isPlaying) {
      this.audio.playSceneAudio(index);
      if (this.isVoiceoverEnabled) {
        this.speakVO(scene.voText);
      }
    }
  }

  togglePlay() {
    this.isPlaying = !this.isPlaying;
    this.playPauseBtn.classList.toggle("playing", this.isPlaying);
    this.centerPlayOverlay.classList.toggle("hidden", this.isPlaying);
    this.audioWaveContainer.classList.toggle("playing", this.isPlaying && !this.audio.isMuted);

    if (this.isPlaying) {
      this.audio.init();
      this.audio.playSceneAudio(this.currentSceneIndex);
      if (this.isVoiceoverEnabled) {
        this.speakVO(SCENES_DATA[this.currentSceneIndex].voText);
      }
      this.startPlaybackTimer();
    } else {
      this.pausePlaybackTimer();
      this.audio.stopAll();
      if (window.speechSynthesis) window.speechSynthesis.cancel();
    }
  }

  startPlaybackTimer() {
    if (this.playTimer) clearInterval(this.playTimer);
    
    this.playTimer = setInterval(() => {
      this.sceneElapsedSec += 0.25 * this.playbackSpeed;
      const curScene = SCENES_DATA[this.currentSceneIndex];

      // Update global elapsed time
      const elapsedBefore = SCENES_DATA.slice(0, this.currentSceneIndex).reduce((sum, s) => sum + s.duration, 0);
      const totalCurrent = elapsedBefore + this.sceneElapsedSec;
      this.currentTimeLabel.textContent = this.formatTime(totalCurrent);

      // Progress bar fill
      const totalSec = SCENES_DATA.reduce((sum, s) => sum + s.duration, 0);
      const percent = Math.min(100, (totalCurrent / totalSec) * 100);
      this.timelineFill.style.width = `${percent}%`;

      // Check if scene complete
      if (this.sceneElapsedSec >= curScene.duration) {
        this.sceneElapsedSec = 0;
        if (this.currentSceneIndex < SCENES_DATA.length - 1) {
          this.loadScene(this.currentSceneIndex + 1, true);
        } else {
          // Finished all scenes
          this.togglePlay(); // Pause
          this.sceneElapsedSec = 0;
        }
      }
    }, 250);
  }

  pausePlaybackTimer() {
    if (this.playTimer) {
      clearInterval(this.playTimer);
      this.playTimer = null;
    }
  }

  goToScene(index) {
    this.sceneElapsedSec = 0;
    this.loadScene(index, this.isPlaying);
    const elapsedBefore = SCENES_DATA.slice(0, index).reduce((sum, s) => sum + s.duration, 0);
    this.currentTimeLabel.textContent = this.formatTime(elapsedBefore);
    const totalSec = SCENES_DATA.reduce((sum, s) => sum + s.duration, 0);
    const percent = Math.min(100, (elapsedBefore / totalSec) * 100);
    this.timelineFill.style.width = `${percent}%`;
  }

  nextScene() {
    if (this.currentSceneIndex < SCENES_DATA.length - 1) {
      this.goToScene(this.currentSceneIndex + 1);
    }
  }

  prevScene() {
    if (this.currentSceneIndex > 0) {
      this.goToScene(this.currentSceneIndex - 1);
    }
  }

  replayAll() {
    this.goToScene(0);
    if (!this.isPlaying) {
      this.togglePlay();
    }
  }

  speakVO(text) {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'vi-VN';
    utterance.rate = 0.95 * this.playbackSpeed;
    utterance.pitch = 1.0;

    const voices = window.speechSynthesis.getVoices();
    const vnVoice = voices.find(v => v.lang.includes('vi') || v.lang.includes('VN'));
    if (vnVoice) {
      utterance.voice = vnVoice;
    }

    window.speechSynthesis.speak(utterance);
  }

  copyToClipboard(text, successMsg = "Đã sao chép vào bộ nhớ tạm!") {
    navigator.clipboard.writeText(text).then(() => {
      this.showToast(successMsg);
    }).catch(() => {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      this.showToast(successMsg);
    });
  }

  showToast(message) {
    this.toastText.textContent = message;
    this.toast.classList.add("show");
    setTimeout(() => {
      this.toast.classList.remove("show");
    }, 2800);
  }
}

// Initialize on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  window.storyboardApp = new StoryboardApp();
});
