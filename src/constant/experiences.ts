export interface Experience {
  id: number;
  period: string;
  year: string;
  title: string;
  company: string;
  type: "work" | "education" | "freelance";
  description: string;
  achievements: string[];
  techStack: string[];
  icon: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    period: "2024 — Sekarang",
    year: "2024",
    title: "Fullstack Web Developer",
    company: "Freelance",
    type: "freelance",
    description:
      "Mengembangkan berbagai aplikasi web untuk klien dengan fokus pada performa, UI/UX modern, dan arsitektur yang scalable.",
    achievements: [
      "Membangun 5+ aplikasi web full-stack",
      "Mengimplementasikan CI/CD pipeline",
      "Optimasi performa hingga 40% lebih cepat",
    ],
    techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    icon: "code",
  },
  {
    id: 2,
    period: "2023 — 2024",
    year: "2023",
    title: "Frontend Developer",
    company: "Project Kampus",
    type: "work",
    description:
      "Bertanggung jawab dalam pengembangan antarmuka pengguna untuk sistem informasi kampus dengan teknologi modern.",
    achievements: [
      "Membangun design system dari nol",
      "Menerapkan responsive design untuk 3 platform",
      "Kolaborasi tim menggunakan Git workflow",
    ],
    techStack: ["React", "JavaScript", "CSS3", "Figma", "Git"],
    icon: "web",
  },
  {
    id: 3,
    period: "2022 — 2023",
    year: "2022",
    title: "Junior Web Developer",
    company: "Self-Learning & Bootcamp",
    type: "education",
    description:
      "Memulai perjalanan sebagai web developer melalui kursus online, bootcamp, dan proyek pribadi untuk membangun fondasi yang kuat.",
    achievements: [
      "Menyelesaikan 10+ kursus web development",
      "Membangun 15+ proyek latihan",
      "Menguasai fundamental HTML, CSS, JavaScript",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "PHP"],
    icon: "school",
  },
  {
    id: 4,
    period: "2021 — 2022",
    year: "2021",
    title: "Mahasiswa Informatika",
    company: "Universitas",
    type: "education",
    description:
      "Memulai studi di Program Studi Informatika dan menemukan passion di bidang pengembangan web.",
    achievements: [
      "Memahami dasar-dasar ilmu komputer",
      "Mengenal paradigma pemrograman",
      "Mulai membangun proyek pertama",
    ],
    techStack: ["C++", "Python", "HTML", "CSS"],
    icon: "menu_book",
  },
];
