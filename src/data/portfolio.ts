export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image?: string;
  demoUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Antrian Rutan",
    description:
      "Sistem antrian digital terintegrasi untuk mengoptimalkan alur pelayanan publik di Rumah Tahanan Negara Kelas IIA Batam. Tersedia di antrian.rutanbatam.id.",
    tech: ["Web Development", "Database", "UI/UX", "Process Automation"],
    demoUrl: "https://antrian.rutanbatam.id",
  },
  {
    id: "2",
    title: "RekanIkan",
    description:
      "Produk IoT smart-feeder end-to-end sebagai bagian dari Bangkit Academy Incubation Program. Mengembangkan model klasifikasi dengan Python, berkolaborasi dengan tim Cloud dan Mobile Development.",
    tech: ["Python", "Machine Learning", "IoT", "scikit-learn", "TensorFlow"],
  },
  {
    id: "3",
    title: "Rutan Batam Website",
    description:
      "Pengelolaan website institusi resmi rutanbatam.id, memastikan penyampaian informasi tepat waktu dan komunikasi yang lancar dengan stakeholder eksternal.",
    tech: ["Web Development", "CMS", "Public Relations", "Content Management"],
    demoUrl: "https://rutanbatam.id",
  },
  {
    id: "4",
    title: "Dimsum App",
    description:
      "Restaurant POS System — Dimsum Mentai. Sistem point of sale untuk restoran dimsum mentai.",
    tech: ["PHP", "Web Development", "Database Management"],
    githubUrl: "https://github.com/ripaldomarbun/dimsum-app",
  },
  {
    id: "5",
    title: "Keuangan Grabike",
    description:
      "Sistem manajemen keuangan untuk aplikasi Grabike.",
    tech: ["JavaScript", "Web Development"],
    githubUrl: "https://github.com/ripaldomarbun/keuangan-grabike",
  },
  {
    id: "6",
    title: "Rutan Kelas IIA Batam",
    description:
      "Sistem informasi untuk Rumah Tahanan Negara Kelas IIA Batam — pengelolaan data dan layanan.",
    tech: ["PHP", "Web Development", "Database Management"],
    githubUrl: "https://github.com/ripaldomarbun/rutan-kelas-iia-batam",
  },
  {
    id: "7",
    title: "Todo List PHP",
    description:
      "Aplikasi Todo List sederhana menggunakan PHP untuk manajemen tugas harian.",
    tech: ["PHP", "Web Development", "Database Management"],
    githubUrl: "https://github.com/ripaldomarbun/todo-list-php",
  },
];

export interface PersonalInfo {
  name: string;
  tagline: string;
  about: string;
  email: string;
  phone: string;
  location: string;
  social: { github: string; linkedin: string };
  skills: string[];
}

export const personalInfo: PersonalInfo = {
  name: "Ripaldo Lumban Batu",
  tagline:
    "Information Systems Graduate | Digitization & IoT Enthusiast | Public Service Digital Transformation",
  about: `Information Systems graduate with a strong track record in driving digitization and operational efficiency. Experienced in developing integrated digital systems for public services and managing end-to-end IoT and machine learning projects. Possesses a balanced mix of technical capabilities and leadership skills gained from diverse organizational roles and cross-cultural environments, including a national student exchange program.

Education
- Universitas Katolik Santo Thomas (2020-2025) — S.Kom, Information Systems
- Universitas Katolik Indonesia Atma Jaya Jakarta (2022-2023) — Student Exchange, GPA 4.0
- SMA Negeri 1 Pollung (2017-2020) — Science, Avg 90/100

Experience
- Rutan Kelas IIA Batam — IT Support & PR Intern (Jan 2026-Present)
- RekanIkan / Bangkit Academy — Machine Learning & IoT Developer (Feb-Sep 2024)
- HIMASI UKST — Head of Information & Communication Division (2024)
- HIMASI UKST — Secretary of Upgrading Session Committee (2023)
- HIMASI Atma Jaya — Head of Social Contribution Committee (2022)`,
  email: "ripaldomarbun27@gmail.com",
  phone: "+62 822-3593-6214",
  location: "Batam, Indonesia",
  social: {
    github: "https://github.com/ripaldomarbun",
    linkedin: "",
  },
  skills: [
    "Digitization",
    "Python",
    "Machine Learning",
    "IoT Development",
    "scikit-learn",
    "TensorFlow",
    "JavaScript",
    "Web Development",
    "SQL Database",
    "Database Management",
    "Microsoft Office 365",
    "Microsoft Excel",
    "Tableau",
    "Matplotlib",
    "Agile",
    "Leadership",
    "Project Management",
    "Public Speaking",
    "Event Planning",
    "Cross-functional Collaboration",
    "Operations & Planning",
    "Analytics",
    "Deep Learning",
    "Automation",
    "Monitoring",
  ],
};
