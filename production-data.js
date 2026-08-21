/**
 * Crew payload. Loaded ONLY by production.html.
 * Strings are the authored originals, moved out of scenes.js verbatim so the
 * public bundle stops shipping the AI prompts and the foley cue sheet.
 */

const PRODUCTION_DATA = [
  {
    id: 1,
    title: "1. Bãi Đỗ Xe Nắng Gắt & Vội Vã",
    aiPrompt: "Cinematic movie still, dramatic midday scorching sun beating down intensely on an outdoor concrete parking lot with heat waves shimmering. Modern luxury SUV parked under blinding sunlight. Close-up on the car dashboard showing a glowing red and orange Child Presence Detection CPD warning icon blinking on the digital screen, while an anxious businessman father in a suit quickly exits, holding a phone to his ear, ignoring the dashboard. Hyper-realistic, 8k, cinematic lighting, shallow depth of field, anamorphic lens flare, Arri Alexa quality. --ar 16:9 --v 6.1",
    sfxCue: "Âm nền nắng gắt (heatwave sub-drone), tiếng bước chân gấp gáp, tiếng 'Ting... Ting... Ting...' trên taplo, tiếng sập cửa xe 'Rầm!'"
  },
  {
    id: 2,
    title: "2. Camera Cabin & Quét Radar Ghế Sau",
    aiPrompt: "Cinematic interior shot of a modern car backseat. A cute 2-year-old Asian toddler is peacefully sleeping in a safety child car seat, holding a small plush toy. A subtle high-tech green and cyan laser/radar grid or CPD Child Presence Detection sensor overlay softly scans from the ceiling dome light onto the baby. Sunlight streams through tinted windows, soft warm atmosphere before heat builds up. 8k, cinematic, shallow depth of field, photorealistic. --ar 16:9 --v 6.1",
    sfxCue: "Tiếng thở nhẹ của em bé, nhịp bíp điện tử CPD Radar quét không gian, tiếng chuông Ting... Ting nhịp độ tăng dần."
  },
  {
    id: 3,
    title: "3. Chiếc Điện Thoại Im Lìm Trong Phòng Họp",
    aiPrompt: "Cinematic macro shot of a sleek smartphone resting silently on a polished wooden corporate boardroom conference table. The phone screen lights up brightly with an urgent red emergency alert UI notification: 'EMERGENCY: CPD ALERT - Child Detected Inside Vehicle! Cabin Temp: 38°C'. The phone is in silent/muted mode icon. In the blurred background, business executives in suits are intently discussing around a presentation screen. Dramatic cinematic shallow depth of field, 8k, moody corporate lighting. --ar 16:9 --v 6.1",
    sfxCue: "Âm thanh họp công ty mờ ảo (muffled boardroom ambience), tiếng tim đập hồi hộp 'Thump... thump...', tiếng màn hình điện thoại rung cực khẽ."
  },
  {
    id: 4,
    title: "4. Nhiệt Độ Đạt 38°C - Cơ Chế Tự Vệ Kích Hoạt",
    aiPrompt: "Cinematic close-up of a modern dark metallic car door under intense burning midday sun. The tinted side window has automatically rolled down exactly 2 centimeters, with visible hot air heat shimmering escaping through the narrow gap. The car's hazard lights and headlights are flashing rhythmically in alarm mode. Photorealistic, 8k, cinematic camera angle, shallow depth of field, dramatic harsh sunlight and lens flare. --ar 16:9 --v 6.1",
    sfxCue: "Tiếng mô-tơ hạ kính điện 'Zzzt', tiếng xì hơi nóng thoát ra khe hở 'Phùùù', tiếng quạt gió AC chạy hết công suất, tiếng còi xe bên ngoài 'Bíp... bíp... bíp!'"
  },
  {
    id: 5,
    title: "5. Người Bảo Vệ Phát Hiện Qua Khe Kính 2cm",
    aiPrompt: "Cinematic film still. A security guard in a uniform stands next to a modern car in a sunlit parking lot, looking urgently through the car window with worried eyes and hand raised to block the glare. Sharp focus, dramatic documentary style, natural sunlight lens flare, realistic photography, 8k resolution. --ar 16:9 --v 6.1",
    sfxCue: "Tiếng còi xe inh ỏi vang vọng bãi đỗ xe, tiếng bước chân bảo vệ chạy vội trên mặt đường nhựa, tiếng khóc của em bé qua khe hở kính."
  },
  {
    id: 6,
    title: "6. Cánh Cửa Phòng Họp Bật Mở & Cơn Hoảng Loạn",
    aiPrompt: "Cinematic movie shot. Inside a corporate meeting room, an Asian businessman father in a dark suit stands up in pure panic and shock, his face completely pale with wide terrified eyes. His office chair is toppled backward onto the floor behind him, business papers flying in the air. At the open glass doorway, a security guard is shouting urgently. Other meeting members freeze in utter shock. Dramatic film lighting, motion blur on falling papers, hyper-realistic, 8k. --ar 16:9 --v 6.1",
    sfxCue: "Tiếng đập cửa rầm rầm, tiếng hét thất thanh của bảo vệ, tiếng ghế ngã đổ 'Keng!', tiếng giấy tờ rơi xáo trộn, tiếng bước chân giậm dồn dập xuống cầu thang."
  },
  {
    id: 7,
    title: "7. Cứu Con Trong Nước Mắt & Lời Xin Lỗi",
    aiPrompt: "Cinematic emotional close-up. In a sun-drenched outdoor parking lot next to an open car door, an Asian father in a disheveled suit is on his knees, weeping with profound relief and remorse. He embraces his cute 2-year-old child tightly against his chest. The child's forehead has droplets of sweat, hugging the father's neck. Father's eyes closed, tears running down his face onto the child's clothes. Golden harsh sun lens flare, deep emotional drama, masterpiece photography, 8k. --ar 16:9 --v 6.1",
    sfxCue: "Tiếng mở khóa 'Tách', tiếng cửa xe mở toang, tiếng khóc òa vỡ của đứa trẻ chuyển thành tiếng nấc nhẹ khi được ôm, giai điệu đàn cello và piano da diết dâng trào."
  },
  {
    id: 8,
    title: "8. Tổng Kết Công Nghệ CPD Bảo Vệ Sinh Mạng",
    aiPrompt: "Cinematic futuristic automotive safety HUD graphic overlay showing 3D wireframe car interior with mmWave Radar & optical in-cabin sensors actively scanning child presence in back seat, displaying real-time safety metrics: 'Child Detected', 'Interior Temp: 38°C -> 32°C Cooling', 'Window Vent: 20mm', 'Escalation Alert: Active'. Sleek dark glassmorphism UI, high-tech automotive engineering visualization, 8k. --ar 16:9 --v 6.1",
    sfxCue: "Âm thanh kỹ thuật số tương lai (tech chime resolve), tiếng chuông kết thúc ấm áp, âm hưởng an toàn và hy vọng."
  },
];
