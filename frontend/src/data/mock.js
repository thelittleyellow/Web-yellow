// Mock data for Medical Physics Laboratory

export const labInfo = {
  name: "Laboratorium Fisika Medik",
  institution: "Universitas Hasanuddin",
  faculty: "Fakultas Matematika dan Ilmu Pengetahuan Alam (FMIPA)",
  department: "Departemen Fisika",
  tagline: "Advancing Healthcare Through Medical Physics Excellence",
  description: "Pusat penelitian dan pengembangan teknologi fisika medik di Universitas Hasanuddin yang berfokus pada inovasi dalam radioterapi, pencitraan medis, dosimetri radiasi, dan proteksi radiasi untuk meningkatkan kualitas layanan kesehatan di Indonesia Timur.",
  established: "2005",
  certifications: ["Akreditasi BAN-PT", "Terakreditasi Unggul", "Kerjasama BATAN"]
};

export const staffMembers = [
  {
    id: 1,
    name: "Prof. Dr. Syamsir Dewang, M.Eng.Sc.",
    role: "Kepala Laboratorium",
    specialization: "Optoelectronics & Fisika Medik",
    image: "https://ui-avatars.com/api/?name=Syamsir+Dewang&size=400&background=06b6d4&color=ffffff&bold=true",
    bio: "Profesor dengan keahlian dalam optoelectronics dan fisika medik. Memimpin berbagai penelitian inovatif dalam bidang instrumentasi medis dan teknologi optoelektronika untuk aplikasi kesehatan.",
    education: "Doktor Optoelectronics - Universitas Indonesia, M.Si. Optoelectron - Universitas Indonesia, Sarjana - Universitas Hasanuddin",
    email: "dewang@fmipa.unhas.ac.id",
    address: "Jl. Sunu Komp. Unhas Blok KX. 13",
    publications: 65,
    status: "available"
  },
  {
    id: 2,
    name: "Dr. Sri Dewi Astuty Ilyas, S.Si., M.Si.",
    role: "Dosen & Peneliti",
    specialization: "Fisika Medik & Biofisika",
    image: "https://ui-avatars.com/api/?name=Sri+Dewi+Astuty&size=400&background=14b8a6&color=ffffff&bold=true",
    bio: "Ahli dalam bidang fisika medik dan biofisika dengan fokus pada pengembangan metode pengukuran dosis radiasi dan aplikasi fisika dalam sistem biologis untuk keperluan medis.",
    education: "Dr. Fisika Medik dan Biofisika - Universitas Airlangga, M.Si. Fisika Instrumentasi dan Elektronika - ITB",
    email: "dewiastuti@fmipa.unhas.ac.id",
    address: "BTN Minasa Upa Blok G2/11",
    publications: 35,
    status: "available"
  },
  {
    id: 3,
    name: "Ajeng Anggreny Ibrahim, S.Pd., M.Si",
    role: "Dosen & Peneliti",
    specialization: "Fisika Radiasi",
    image: "https://ui-avatars.com/api/?name=Ajeng+Anggreny&size=400&background=22d3ee&color=ffffff&bold=true",
    bio: "Berpengalaman dalam penelitian fisika radiasi dengan fokus pada aplikasi radiasi dalam bidang medis dan proteksi radiasi. Aktif dalam pengembangan metode pembelajaran fisika medik.",
    education: "S.Pd., M.Si. - Universitas Hasanuddin",
    publications: 22,
    status: "available"
  },
  {
    id: 4,
    name: "Ayu Hardianti Pratiwi, S.Pd., M.Si",
    role: "Dosen & Peneliti",
    specialization: "Fisika Instrumentasi Medis",
    image: "https://ui-avatars.com/api/?name=Ayu+Hardianti&size=400&background=0891b2&color=ffffff&bold=true",
    bio: "Spesialis dalam fisika instrumentasi medis dengan penelitian yang berfokus pada pengembangan dan optimasi peralatan medis untuk diagnosis dan terapi. Berkontribusi dalam inovasi teknologi kesehatan.",
    education: "S.Pd., M.Si. - Universitas Hasanuddin",
    publications: 18,
    status: "available"
  },
  {
    id: 5,
    name: "Arfinna, S.Si., M.Si., F.Med",
    role: "Fisikawan Medis",
    specialization: "Fisika Medik Klinis",
    image: "https://ui-avatars.com/api/?name=Arfinna&size=400&background=06b6d4&color=ffffff&bold=true",
    bio: "Fisikawan medis bersertifikat dengan keahlian dalam aplikasi fisika medik klinis. Berpengalaman dalam quality assurance peralatan radioterapi dan pencitraan medis serta proteksi radiasi di fasilitas kesehatan.",
    education: "S.Si., M.Si., F.Med - Universitas Hasanuddin",
    publications: 15,
    status: "available"
  }
];

export const equipment = [
  {
    id: 1,
    name: "Linear Accelerator (LINAC)",
    category: "Radioterapi",
    manufacturer: "Varian Medical Systems",
    model: "TrueBeam STx",
    image: "https://images.unsplash.com/photo-1606206873764-fd15e242df52",
    description: "Sistem radioterapi canggih untuk IMRT, VMAT, dan SBRT dengan presisi tinggi.",
    year: 2020,
    status: "Operasional"
  },
  {
    id: 2,
    name: "CT Simulator",
    category: "Pencitraan",
    manufacturer: "Siemens Healthineers",
    model: "SOMATOM Confidence",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514",
    description: "CT scanner khusus untuk perencanaan pengobatan radioterapi dengan akurasi geometri tinggi.",
    year: 2019,
    status: "Operasional"
  },
  {
    id: 3,
    name: "Dosimeter System",
    category: "Dosimetri",
    manufacturer: "PTW Freiburg",
    model: "UNIDOS webline",
    image: "https://images.unsplash.com/photo-1595464144526-5fb181b74625",
    description: "Sistem dosimetri presisi untuk kalibrasi dan verifikasi dosis radiasi.",
    year: 2021,
    status: "Operasional"
  },
  {
    id: 4,
    name: "Treatment Planning System",
    category: "Software",
    manufacturer: "Varian",
    model: "Eclipse v16.1",
    image: "https://images.unsplash.com/photo-1758101512269-660feabf64fd",
    description: "Software perencanaan pengobatan dengan algoritma optimasi canggih untuk radioterapi.",
    year: 2021,
    status: "Operasional"
  },
  {
    id: 5,
    name: "Radiation Survey Meter",
    category: "Proteksi Radiasi",
    manufacturer: "Fluke Biomedical",
    model: "451P",
    image: "https://images.unsplash.com/photo-1576669801838-1b1c52121e6a",
    description: "Alat ukur radiasi portabel untuk monitoring area dan keselamatan kerja.",
    year: 2020,
    status: "Operasional"
  },
  {
    id: 6,
    name: "Phantom Set",
    category: "Quality Assurance",
    manufacturer: "CIRS",
    model: "Model 062M",
    image: "https://images.pexels.com/photos/3845129/pexels-photo-3845129.jpeg",
    description: "Phantom antropomorfik untuk verifikasi dan quality assurance sistem pencitraan.",
    year: 2019,
    status: "Operasional"
  }
];

export const researchProjects = [
  {
    id: 1,
    title: "Optimasi IMRT untuk Kanker Nasofaring",
    category: "Radioterapi",
    status: "Ongoing",
    principal: "Dr. Budi Santoso",
    startDate: "2023-01",
    description: "Penelitian untuk mengoptimalkan teknik IMRT dalam pengobatan kanker nasofaring dengan fokus pada pengurangan dosis ke organ at risk.",
    funding: "Kemenristek",
    collaborators: ["RSUP Dr. Sardjito", "BATAN"]
  },
  {
    id: 2,
    title: "Pengembangan Protokol CT Low-Dose",
    category: "Pencitraan",
    status: "Ongoing",
    principal: "Dr. Siti Aminah",
    startDate: "2023-06",
    description: "Pengembangan protokol CT dengan dosis rendah tanpa mengurangi kualitas diagnostik untuk screening kanker paru.",
    funding: "BPJS Kesehatan",
    collaborators: ["RS Kanker Dharmais"]
  },
  {
    id: 3,
    title: "Simulasi Monte Carlo untuk Brachytherapy",
    category: "Dosimetri",
    status: "Completed",
    principal: "Dr. Dewi Lestari",
    startDate: "2022-03",
    endDate: "2024-02",
    description: "Penggunaan simulasi Monte Carlo untuk perhitungan distribusi dosis yang akurat dalam brachytherapy.",
    funding: "LPDP",
    collaborators: ["ITB", "BATAN"],
    publications: 3
  },
  {
    id: 4,
    title: "Radiobiologi Efek Hipofraksionasi",
    category: "Radiobiologi",
    status: "Ongoing",
    principal: "Dr. Maya Kusuma",
    startDate: "2023-09",
    description: "Studi in-vitro tentang efek biologis dari radioterapi hipofraksionasi pada sel kanker payudara.",
    funding: "Internal",
    collaborators: ["FK UGM"]
  },
  {
    id: 5,
    title: "Quality Assurance AI-based IGRT",
    category: "Quality Assurance",
    status: "Ongoing",
    principal: "Dr. Rizki Pratama",
    startDate: "2024-01",
    description: "Implementasi sistem quality assurance berbasis AI untuk image-guided radiotherapy.",
    funding: "Kemenristek",
    collaborators: ["UI", "RSUPN Cipto Mangunkusumo"]
  }
];

export const publications = [
  {
    id: 1,
    title: "Machine Learning Approach for Dose Prediction in IMRT Planning",
    authors: ["Santoso B", "Aminah S", "Lestari D"],
    journal: "Medical Physics",
    year: 2024,
    volume: "51(2)",
    pages: "145-156",
    doi: "10.1002/mp.12345",
    citations: 8
  },
  {
    id: 2,
    title: "Low-Dose CT Protocol for Lung Cancer Screening in Indonesian Population",
    authors: ["Aminah S", "Kusuma M"],
    journal: "Journal of Medical Imaging",
    year: 2024,
    volume: "11(1)",
    pages: "012001",
    doi: "10.1117/1.JMI.11.1.012001",
    citations: 5
  },
  {
    id: 3,
    title: "Monte Carlo Simulation for HDR Brachytherapy Dose Calculations",
    authors: ["Lestari D", "Santoso B", "Pratama R"],
    journal: "Physics in Medicine & Biology",
    year: 2023,
    volume: "68(15)",
    pages: "155012",
    doi: "10.1088/1361-6560/ace123",
    citations: 12
  },
  {
    id: 4,
    title: "Radiobiological Effects of Hypofractionated Radiotherapy",
    authors: ["Kusuma M", "Aminah S"],
    journal: "International Journal of Radiation Biology",
    year: 2023,
    volume: "99(8)",
    pages: "1234-1245",
    doi: "10.1080/09553002.2023.2123456",
    citations: 15
  }
];

export const contactInfo = {
  address: "Laboratorium Fisika Medik, Departemen Fisika, Fakultas Matematika dan Ilmu Pengetahuan Alam (FMIPA), Universitas Hasanuddin, Jl. Perintis Kemerdekaan KM 10, Tamalanrea, Makassar, Sulawesi Selatan 90245",
  phone: "+62 411 586 025",
  email: "fisika@unhas.ac.id",
  fax: "+62 411 586 025",
  website: "https://fmipa.unhas.ac.id/fisika",
  operatingHours: {
    weekdays: "08:00 - 16:00 WITA",
    saturday: "08:00 - 12:00 WITA",
    sunday: "Tutup"
  },
  socialMedia: {
    twitter: "@unhas_official",
    instagram: "@unhas_official",
    linkedin: "universitas-hasanuddin"
  },
  coordinates: {
    lat: -5.135167,
    lng: 119.489167
  }
};