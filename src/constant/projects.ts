export interface Project {
  id: number;
  title: string;
  description: string;
  category_role_id: number;
  image: string;
  tags: string[];
  codeUrl: string;
  demoUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Sistem Ujian Essay Online Berbasis AI & Monitoring Real-Time",
    description: "Platform ujian online dengan penilaian esai otomatis menggunakan AI NLP dan deteksi kecurangan real-time berbasis kamera pengawas peserta.",
    category_role_id: 3,
    image: "/img/gambar1.jpg",
    tags: ["Laravel", "React", "Python", "Tailwind CSS"],
    codeUrl: "https://github.com/username/sistem-ujian-ai",
    demoUrl: "https://ujian-ai.demo.dev"
  },
  {
    id: 2,
    title: "E-Commerce Platform dengan AR Product Preview",
    description: "Toko online modern yang dilengkapi fitur Augmented Reality (AR) untuk melihat produk secara 3D langsung di ruangan pengguna menggunakan kamera HP.",
    category_role_id: 1,
    image: "/img/gambar1.jpg",
    tags: ["Next.js", "Three.js", "Tailwind CSS", "Node.js"],
    codeUrl: "https://github.com/username/ar-ecommerce",
    demoUrl: "https://ar-store.demo.dev"
  },
  {
    id: 3,
    title: "Smart Waste Management IoT Dashboard",
    description: "Dashboard pemantauan tempat sampah pintar secara real-time untuk optimalisasi rute pengumpulan sampah berbasis IoT sensor.",
    category_role_id: 1,
    image: "/img/gambar1.jpg",
    tags: ["React", "Node.js", "Express", "MQTT", "Leaflet"],
    codeUrl: "https://github.com/username/smart-waste-dashboard",
    demoUrl: "https://waste-dashboard.demo.dev"
  },
  {
    id: 4,
    title: "Telemedicine App dengan Konsultasi Video WebRTC",
    description: "Aplikasi kesehatan terintegrasi untuk janji temu dokter, resep digital, dan konsultasi tatap muka real-time dengan WebRTC berkinerja tinggi.",
    category_role_id: 3,
    image: "/img/gambar1.jpg",
    tags: ["React Native", "NestJS", "WebRTC", "Socket.io"],
    codeUrl: "https://github.com/username/telemedicine-app",
    demoUrl: "https://telehealth.demo.dev"
  },
  {
    id: 5,
    title: "AI-Powered Personal Finance Tracker",
    description: "Aplikasi pencatatan keuangan otomatis menggunakan kecerdasan buatan untuk mendeteksi struk belanja dan mengkategorikan pengeluaran bulanan.",
    category_role_id: 2,
    image: "/img/gambar1.jpg",
    tags: ["Svelte", "FastAPI", "Python", "PostgreSQL"],
    codeUrl: "https://github.com/username/ai-finance-tracker",
    demoUrl: "https://smart-finance.demo.dev"
  },
  {
    id: 6,
    title: "Virtual Event & Exhibition 3D Platform",
    description: "Ruang pameran virtual 3D interaktif yang memungkinkan pengunjung menjelajahi booth pameran menggunakan avatar kustom secara real-time.",
    category_role_id: 1,
    image: "/img/gambar1.jpg",
    tags: ["React", "React Three Fiber", "WebSockets", "Go"],
    codeUrl: "https://github.com/username/virtual-exhibition-3d",
    demoUrl: "https://expo3d.demo.dev"
  },
  {
    id: 7,
    title: "Collaborative Real-time Whiteboard Tool",
    description: "Aplikasi papan tulis kolaboratif mirip Figma/Miro untuk tim melakukan brainstorming secara sinkron dengan latensi ultra-rendah.",
    category_role_id: 1,
    image: "/img/gambar1.jpg",
    tags: ["Next.js", "Canvas API", "Liveblocks", "TypeScript"],
    codeUrl: "https://github.com/username/realtime-whiteboard",
    demoUrl: "https://collab-board.demo.dev"
  },
  {
    id: 8,
    title: "Decentralized Music Streaming Platform (Web3)",
    description: "Platform streaming musik berbasis blockchain yang memberikan royalti langsung kepada musisi menggunakan smart contract Ethereum.",
    category_role_id: 3,
    image: "/img/gambar1.jpg",
    tags: ["React", "Solidity", "IPFS", "Ethers.js"],
    codeUrl: "https://github.com/username/music-web3-dapp",
    demoUrl: "https://decentral-music.demo.dev"
  },
  {
    id: 9,
    title: "AI Job Resume Screener & ATS Dashboard",
    description: "Sistem pelacak pelamar kerja (ATS) cerdas yang menyaring dan mengurutkan ribuan CV secara otomatis berdasarkan kecocokan deskripsi pekerjaan.",
    category_role_id: 2,
    image: "/img/gambar1.jpg",
    tags: ["Django", "React", "OpenAI API", "PostgreSQL"],
    codeUrl: "https://github.com/username/ai-resume-screener",
    demoUrl: "https://smart-ats.demo.dev"
  },
  {
    id: 10,
    title: "Gamified Interactive Language Learning App",
    description: "Aplikasi belajar bahasa asing interaktif dengan sistem gamifikasi, pengenalan ucapan (Speech Recognition) untuk melatih pelafalan.",
    category_role_id: 1,
    image: "/img/gambar1.jpg",
    tags: ["Next.js", "Tailwind CSS", "Web Speech API", "Zustand"],
    codeUrl: "https://github.com/username/lang-learn-game",
    demoUrl: "https://lingo-play.demo.dev"
  },
  {
    id: 11,
    title: "Smart Agriculture Dashboard IoT Monitoring",
    description: "Sistem pemantauan kelembapan tanah, suhu udara, serta sistem irigasi otomatis berbasis sensor pertanian cerdas.",
    category_role_id: 3,
    image: "/img/gambar1.jpg",
    tags: ["React", "Node.js", "Express", "InfluxDB", "Chart.js"],
    codeUrl: "https://github.com/username/smart-agriculture-iot",
    demoUrl: "https://smart-farm.demo.dev"
  },
  {
    id: 12,
    title: "SaaS Agile Project Management Tool",
    description: "Alat manajemen proyek berbasis Kanban dan Scrum dengan fitur grafik Burn-down, pelacakan waktu kerja, dan integrasi Slack.",
    category_role_id: 2,
    image: "/img/gambar1.jpg",
    tags: ["React", "Redux Toolkit", "Spring Boot", "MySQL"],
    codeUrl: "https://github.com/username/saas-agile-pm",
    demoUrl: "https://agile-board.demo.dev"
  }
];
