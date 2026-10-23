/**
 * ============================================================
 *  PORTFOLIO DATA
 *  Edit all website content in this file only.
 *  Change name, description, education, career, certificates
 *  & projects to yours.
 * ============================================================
 */
import heroImg from '../assets/img/hero-drone.jpg'
import profileImg from '../assets/img/profile.jpg'

export const profile = {
  name: 'Visca',
  fullName: 'Ni Kadek Viscayanti',
  greeting: 'Hello, I am',
  roles: [
    'Mobile Developer',
    2000,
    'Microcontroller Enthusiast',
    2000,
    'Flutter / Kotlin Developer',
    2000,
  ],
  tagline:
    'Junior Software Engineer who turns real industry problems into working systems — a curious, flexible learner who picks up whatever tech a project needs. Drawn to robotics, microcontrollers, and mobile development, with strong communication, leadership, and collaboration skills.',
  location: 'Indonesia',
  email: 'nikadekviscayanti@gmail.com',
  cvUrl: '/CV-Ni-Kadek-Viscayanti.pdf',
  heroImage: heroImg,
  photo: profileImg,
  socials: {
    email: 'mailto:nikadekviscayanti@gmail.com',
    github: 'https://github.com/',
    linkedin: 'https://linkedin.com/',
  },
}

export const about = {
  paragraphs: [
    'I am a <strong>developer</strong> who fell in love with <strong>mobile apps and microcontrollers</strong> since the first time I made an LED blink with an Arduino.',
  ],
  interests: [
    { icon: 'mobile', title: 'Mobile Development' },
    { icon: 'chip', title: 'Microcontroller' },
    { icon: 'wifi', title: 'IoT Devices' },
  ],
  stackNote:
    'Technologies I have used hands-on — from coursework and campus projects to internships and my current role:',
  stack: [
    'Flutter',
    'Kotlin',
    'Android Studio',
    'SQL Server',
    'PostgreSQL',
    'Git',
    'Laravel',
    'Vue.js',
    'Agentic AI',
  ],
}

export const education = [
  {
    period: 'Aug 2021 — Oct 2025',
    role: 'Software Engineering',
    company: 'Politeknik Negeri Bali',
    location: 'GPA: 3.93 / 4.00',
    desc: [
      'Built a solid foundation in software development: Java OOP and desktop apps (NetBeans), web development (HTML, CSS, PHP, Bootstrap, CodeIgniter 3), databases (MySQL Workbench), machine learning (Python, Jupyter), and networking fundamentals (Cisco Packet Tracer).',
    ],
    tags: ['Java', 'PHP', 'CodeIgniter', 'MySQL', 'Python', 'Machine Learning'],
  },
  {
    period: 'Aug 2023 — Jan 2024',
    role: 'Mobile Development Cohort',
    company: 'Bangkit Academy 2023',
    location: '',
    desc: [
      'Learned Android development with Kotlin and Jetpack Compose using Android Studio. As the mobile developer, collaborated with machine learning and cloud computing teams on a capstone project, building an app that detects AI-generated images.',
    ],
    tags: ['Kotlin', 'Jetpack Compose', 'Android Studio'],
  },
  {
    period: 'Aug 2021 — Aug 2022',
    role: 'Secretary',
    company: 'Campus Robotics Organization',
    location: 'IoT Division',
    desc: ['Active member in the IoT division, building projects with C++ and Arduino Uno.'],
    tags: ['C++', 'Arduino Uno', 'IoT'],
  },
]

export const career = [
  {
    period: 'Oct 2025 — Present',
    role: 'IT Developer, Staff',
    company: 'PT. Sentral Retailindo Dewata (Pepito Supermarket)',
    location: '',
    desc: [
      'I work as a Mobile and Web Developer, handling the full development cycle from requirements and design to deployment, while also managing vendor-built apps and supporting core systems across departments.',
      'I took over a vendor-built mobile project and independently built store operation apps, while also delivering internal web systems end to end, from design and data preparation to API development.',
      'I use Flutter and Android Studio with Firebase FCM for mobile, Laravel and Vue.js for web, and SQL Server, PostgreSQL, and Amazon S3, deployed on Windows and Linux servers.',
    ],
    tags: [
      'Flutter',
      'Android Studio',
      'Firebase FCM',
      'Laravel',
      'Vue.js',
      'SQL Server',
      'PostgreSQL',
      'Amazon S3',
    ],
  },
  {
    period: 'Aug 2024 — Feb 2025',
    role: 'Software Engineer, Internship',
    company: 'PT. Solusi Anak Sakti (Djoin)',
    location: '',
    desc: [
      'Contributed to developing basic features of the company’s system using Laravel, Laravel Admin, and Laravel Filament. Reviewed unit tests with test coverage analysis and explored Cloudflare to broaden my technical knowledge.',
    ],
    tags: ['Laravel', 'Laravel Admin', 'Laravel Filament', 'Unit Testing', 'Cloudflare'],
  },
]

export const certificates = [
  {
    title: 'Juara 1 — BARONAS National Robot Competition',
    issuer: 'EVOLUTION 2022 · Institut Teknologi Sepuluh Nopember, Surabaya',
    year: '2022',
    type: 'award',
    icon: 'trophy',
    desc: '1st place in the General Category of BARONAS — Lomba Robot Nasional, held by the Electrical Engineering Department of ITS. Certificate No. 4395/01/EVOLUTION/HIMATEKTRO/III/2022.',
    link: '/certificates/baronas-juara-1.png',
  },
  {
    title: 'Bangkit Academy — Mobile Development',
    issuer: 'Google · GoTo · Traveloka',
    year: '2024',
    type: 'cert',
    icon: 'mobile',
    desc: 'Certificate of Completion for Bangkit, specializing in Mobile Development. A Google-led academy producing technical talent for Indonesian tech companies. Jan 19, 2024.',
    link: '/certificates/bangkit.png',
  },
  {
    title: 'Juara I — Project Based Learning 2024',
    issuer: 'Politeknik Negeri Bali · Software Engineering',
    year: '2024',
    type: 'award',
    icon: 'trophy',
    desc: '1st place in the 2024 Project Based Learning program for "Sistem Informasi Desa Wisata Provinsi Bali Berbasis Mobile" — a mobile-based tourism village information system for Bali.',
    link: '/certificates/pbl-juara-1.png',
  },
  {
    title: 'TOEIC Listening & Reading — 525',
    issuer: 'ETS · Politeknik Negeri Bali',
    year: '2024',
    type: 'cert',
    icon: 'cert',
    desc: 'Official ETS score report: Listening 305, Reading 220, total 525. Test taken on Aug 16, 2024 at Politeknik Negeri Bali.',
    link: '/certificates/toeic-listening-reading.png',
  },
]

export const projectCategories = ['All', 'Mobile', 'IoT']

export const projects = [
  {
    title: 'Aims Mobile Apps',
    category: 'Mobile',
    image: '/projects/aims-mobile-apps/aims-06-sinkron-esl.png',
    icon: 'mobile',
    desc: "An enterprise Electronic Shelf Label (ESL) management app built with Flutter, communicating with a REST API. Scan a product's barcode to connect it to its linked ESL and turn on the ESL's indicator light so the physical label is easy to locate on the shelf. Also includes a partial monthly stock report for inventory tracking.",
    tags: ['Flutter', 'REST API', 'Barcode Scanner', 'ESL'],
    docs: [
      '/projects/aims-mobile-apps/aims-01-login.png',
      '/projects/aims-mobile-apps/aims-06-sinkron-esl.png',
      '/projects/aims-mobile-apps/aims-07-detail-produk.png',
    ],
  },
  {
    title: 'Sekarya',
    category: 'Mobile',
    image: '/projects/sekarya/cover-github.png',
    icon: 'mobile',
    desc: 'Through Sekarya, I applied the knowledge acquired during my participation in the Bangkit Academy program with a focus on Mobile Development. Its core feature detects whether an image a user wants to post was created by a human or generated by AI, helping keep the artwork shared across the platform authentic.',
    tags: ['Kotlin', 'Android', 'AI Image Detection'],
    github: 'https://github.com/Capstone-Project-Sekarya',
    demo: 'https://lnkd.in/p/gYUsciyZ',
    demoLabel: 'Documentation',
  },
  {
    title: 'FinTrack — Expense Tracker App',
    category: 'Mobile',
    image: null,
    icon: 'mobile',
    desc: 'A cross-platform expense tracker built with Flutter: local-first storage, monthly analytics charts, budget reminders, and cloud sync via Firebase. Smooth 60fps animations throughout.',
    tags: ['Flutter', 'Dart', 'Firebase', 'Hive'],
    github: '#',
    demo: '#',
  },
  {
    title: 'WarungPOS — Retail App',
    category: 'Mobile',
    image: null,
    icon: 'mobile',
    desc: 'Point-of-sale app for small shops built with Kotlin & Jetpack Compose: barcode scanning, offline-first SQLite data, printable receipts, and daily revenue reports that sync when back online.',
    tags: ['Kotlin', 'Jetpack Compose', 'SQLite', 'REST API'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Momenfipon — Automatic Fish Care System',
    category: 'IoT',
    image: '/projects/momenfipon/momenfipon-1.png',
    desc: 'Momenfipon is a technology that uses an automatic working mechanism for the maintenance required in ornamental fish care. The device utilizes the DS18B20 sensor as a water turbidity sensor, the Turbidity Sensor as a temperature detector, a Thermoelectric Cooler as a temperature regulator, and a Servo as the fish feeding lever, all based on the ESP8266.',
    tags: ['ESP8266', 'DS18B20', 'Turbidity Sensor', 'Servo', 'Thermoelectric Cooler'],
    docs: [
      '/projects/momenfipon/momenfipon-1.png',
      '/projects/momenfipon/momenfipon-2.png',
    ],
  },
  {
    title: 'Automatic Light/Night Switch',
    category: 'IoT',
    image: '/projects/automatic-light-switch/auto-light-2.png',
    desc: 'A light-sensitive switch circuit that automatically turns on an LED when the surrounding environment becomes dark. Built from discrete components on a perfboard, it uses an LDR to sense ambient light and a transistor as the switching element to drive the LED.',
    tags: ['LDR', 'Transistor', 'LED', 'Resistor'],
    docs: [
      '/projects/automatic-light-switch/auto-light-1.png',
      '/projects/automatic-light-switch/auto-light-2.png',
    ],
  },
  {
    title: 'Automatic Light/Night Switch — Arduino',
    category: 'IoT',
    image: '/projects/automatic-light-switch-arduino/arduino-light-2.png',
    desc: 'The digital evolution of my analog light-sensitive lamp switch — moving from a physical transistor circuit to an intelligent, programmable system built on the Arduino Uno. An LDR senses ambient light levels, and the Arduino switches a high-power LED COB / HPL module on when it gets dark, with the switching logic fully reprogrammable in code.',
    tags: ['Arduino Uno', 'LDR', 'LED COB / HPL', 'Resistor', 'LED'],
    docs: [
      '/projects/automatic-light-switch-arduino/arduino-light-1.png',
      '/projects/automatic-light-switch-arduino/arduino-light-2.png',
      '/projects/automatic-light-switch-arduino/arduino-light-3.png',
    ],
  },
]

/* ------------------------------------------------------------
 * Resolve root-absolute public paths (CV, certificates, project
 * media) against Vite's BASE_URL so they keep working when the
 * site is hosted under a sub-path — GitHub Pages serves this at
 * /nikadekvisca_porto/ instead of the domain root.
 *
 * Keep writing paths normally ('/projects/...'); this applies the
 * prefix automatically. Paths starting with http(s) or '#' pass
 * through untouched.
 * ------------------------------------------------------------ */
const BASE = import.meta.env.BASE_URL
const prefixed = (p) => (typeof p === 'string' && p.startsWith('/') ? BASE + p.slice(1) : p)

const prefixMedia = (item) => {
  for (const key of ['image', 'link', 'cvUrl', 'docs']) {
    if (Array.isArray(item[key])) item[key] = item[key].map(prefixed)
    else if (typeof item[key] === 'string') item[key] = prefixed(item[key])
  }
  return item
}

profile.cvUrl = prefixed(profile.cvUrl)
certificates.forEach(prefixMedia)
projects.forEach(prefixMedia)
