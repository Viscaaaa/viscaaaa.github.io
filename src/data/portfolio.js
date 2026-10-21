/**
 * ============================================================
 *  PORTFOLIO DATA
 *  Edit semua konten website di file ini saja.
 *  Ganti nama, deskripsi, karir, sertifikat & project sesuai milikmu.
 * ============================================================
 */
import heroImg from '../assets/img/hero-drone.jpg'
import robotImg from '../assets/img/project-robot.jpg'
import droneImg from '../assets/img/project-drone.jpg'

export const profile = {
  name: 'Visca',
  fullName: 'Visca Pratama',
  greeting: 'Halo, saya',
  roles: [
    'Embedded Systems Engineer',
    2000,
    'Robotics Enthusiast',
    2000,
    'Drone Builder & Pilot',
    2000,
    'IoT Developer',
    2000,
  ],
  tagline:
    'Saya merancang dan membangun sistem cerdas — dari firmware microcontroller, robot otonom, hingga drone custom. Mengubah baris kode menjadi gerakan nyata di dunia fisik.',
  location: 'Indonesia',
  email: 'hello@visca.dev',
  cvUrl: '#',
  heroImage: heroImg,
  socials: {
    github: 'https://github.com/',
    linkedin: 'https://linkedin.com/',
    instagram: 'https://instagram.com/',
    youtube: 'https://youtube.com/',
  },
  stats: [
    { value: 5, suffix: '+', label: 'Tahun Pengalaman' },
    { value: 30, suffix: '+', label: 'Project Selesai' },
    { value: 12, suffix: '', label: 'Sertifikat & Award' },
  ],
}

export const about = {
  paragraphs: [
    'Saya adalah seorang <strong>engineer</strong> yang jatuh cinta pada dunia <strong>robotika, microcontroller, dan drone</strong> sejak pertama kali membuat LED berkedip dengan Arduino. Sejak saat itu, rasa penasaran saya terus berkembang ke sensor, aktuator, sistem kendali, hingga autonomous navigation.',
    'Saya senang bekerja di persimpangan antara <strong>hardware dan software</strong> — mendesain PCB, menulis firmware low-level di C/C++, hingga membangun dashboard monitoring IoT. Bagi saya, kepuasan terbesar adalah melihat sebuah ide di atas kertas berubah menjadi mesin yang benar-benar bergerak dan terbang.',
  ],
  interests: [
    { icon: 'robot', title: 'Robotics' },
    { icon: 'chip', title: 'Microcontroller' },
    { icon: 'drone', title: 'Drone / UAV' },
  ],
  skills: [
    { name: 'C / C++ (Embedded)', level: 92 },
    { name: 'Arduino / ESP32 / STM32', level: 90 },
    { name: 'Drone Build & Flight Controller', level: 85 },
    { name: 'PCB Design (KiCad)', level: 78 },
    { name: 'Python & ROS', level: 75 },
  ],
  stack: ['Arduino', 'ESP32', 'STM32', 'Raspberry Pi', 'C++', 'Python', 'ROS', 'ArduPilot', 'Betaflight', 'KiCad', 'Fusion 360', 'MQTT'],
}

export const career = [
  {
    period: '2024 — Sekarang',
    role: 'Senior Embedded Systems Engineer',
    company: 'PT Robotika Nusantara',
    location: 'Jakarta',
    desc: 'Memimpin pengembangan firmware untuk robot AGV (Automated Guided Vehicle) di lingkungan pabrik. Merancang arsitektur sistem kendali motor & integrasi sensor LiDAR.',
    tags: ['STM32', 'FreeRTOS', 'CAN Bus', 'ROS2'],
  },
  {
    period: '2022 — 2024',
    role: 'UAV / Drone Engineer',
    company: 'SkyTech Aerial Solutions',
    location: 'Bandung',
    desc: 'Membangun dan men-tuning drone multirotor untuk pemetaan & inspeksi. Mengembangkan misi autonomous menggunakan ArduPilot dan companion computer.',
    tags: ['ArduPilot', 'PX4', 'MAVLink', 'Raspberry Pi'],
  },
  {
    period: '2020 — 2022',
    role: 'IoT Developer',
    company: 'Smart Device Labs',
    location: 'Surabaya',
    desc: 'Mengembangkan perangkat IoT berbasis ESP32 untuk smart farming & monitoring energi, lengkap dengan dashboard real-time dan komunikasi MQTT.',
    tags: ['ESP32', 'MQTT', 'Node-RED', 'PCB Design'],
  },
  {
    period: '2016 — 2020',
    role: 'S1 Teknik Elektro',
    company: 'Universitas Teknologi Indonesia',
    location: 'Fokus: Sistem Kendali & Robotika',
    desc: 'Aktif di UKM Robotika dan menjadi kapten tim pada Kontes Robot Indonesia (KRI). Skripsi: Sistem navigasi otonom robot beroda berbasis sensor fusion.',
    tags: ['Robotika', 'Sistem Kendali', 'KRI'],
    education: true,
  },
]

export const certificates = [
  {
    title: 'Juara 1 Kontes Robot Indonesia (KRI) Tingkat Nasional',
    issuer: 'Kemendikbudristek — Pusat Prestasi Nasional',
    year: '2019',
    type: 'award',
    icon: 'trophy',
    link: '#',
  },
  {
    title: 'Certified Drone Pilot (Remote Pilot License)',
    issuer: 'Direktorat Jenderal Perhubungan Udara',
    year: '2022',
    type: 'cert',
    icon: 'drone',
    link: '#',
  },
  {
    title: 'Embedded Systems Essentials with Arm',
    issuer: 'Arm Education — edX',
    year: '2021',
    type: 'cert',
    icon: 'chip',
    link: '#',
  },
  {
    title: 'ROS 2 for Beginners & Advanced Robotics',
    issuer: 'The Construct / Udemy',
    year: '2023',
    type: 'cert',
    icon: 'robot',
    link: '#',
  },
  {
    title: 'Best Innovation Award — Hackathon IoT Nasional',
    issuer: 'Indonesia IoT Forum',
    year: '2021',
    type: 'award',
    icon: 'medal',
    link: '#',
  },
  {
    title: 'PCB Design Professional with KiCad',
    issuer: 'Contextual Electronics',
    year: '2020',
    type: 'cert',
    icon: 'cert',
    link: '#',
  },
]

export const projectCategories = ['Semua', 'Robotics', 'Drone', 'IoT']

export const projects = [
  {
    title: 'Autonomous Line Follower Robot',
    category: 'Robotics',
    image: robotImg,
    desc: 'Robot line follower berkecepatan tinggi dengan kontrol PID, 8-channel IR sensor array, dan motor driver custom. Mampu menyelesaikan lintasan kompleks < 12 detik.',
    tags: ['Arduino', 'PID Control', 'C++', 'IR Sensor'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Custom 5" FPV Racing Drone',
    category: 'Drone',
    image: droneImg,
    desc: 'Drone FPV racing rakitan sendiri dengan frame carbon, flight controller F7, dan tuning PID Betaflight untuk respon agresif. Top speed ~140 km/jam.',
    tags: ['Betaflight', 'F7 FC', 'ESC BLHeli32', 'FPV'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Smart Greenhouse Monitoring',
    category: 'IoT',
    image: null,
    icon: 'wifi',
    desc: 'Sistem monitoring & otomasi greenhouse berbasis ESP32: sensor suhu, kelembaban tanah, intensitas cahaya, dan pompa otomatis dengan dashboard real-time via MQTT.',
    tags: ['ESP32', 'MQTT', 'Node-RED', 'Sensor'],
    github: '#',
    demo: '#',
  },
  {
    title: '6-DOF Robotic Arm',
    category: 'Robotics',
    image: null,
    icon: 'arm',
    desc: 'Lengan robot 6 derajat kebebasan dengan servo high-torque, inverse kinematics, dan kontrol via aplikasi web serta joystick. Seluruh part dicetak 3D.',
    tags: ['STM32', 'Inverse Kinematics', '3D Print', 'Servo'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Autonomous Mapping Drone',
    category: 'Drone',
    image: null,
    icon: 'satellite',
    desc: 'Quadcopter untuk pemetaan udara dengan misi waypoint otomatis (ArduPilot), GPS RTK, dan companion computer Raspberry Pi untuk pengolahan citra on-board.',
    tags: ['ArduPilot', 'MAVLink', 'GPS RTK', 'Python'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Smart Energy Meter',
    category: 'IoT',
    image: null,
    icon: 'bolt',
    desc: 'Perangkat pengukur konsumsi listrik rumah tangga dengan PCB custom, sensor PZEM-004T, notifikasi Telegram, dan analisis penggunaan harian.',
    tags: ['ESP8266', 'PCB KiCad', 'Telegram Bot', 'Firebase'],
    github: '#',
    demo: '#',
  },
]
