// Mock data for Medical Physics Laboratory

export const labInfo = {
  name: "Laboratorium Fisika Medik",
  tagline: "Advancing Healthcare Through Medical Physics Excellence",
  description: "Pusat penelitian dan pengembangan teknologi fisika medik terdepan yang berfokus pada inovasi dalam radioterapi, pencitraan medis, dan dosimetri radiasi untuk meningkatkan kualitas layanan kesehatan.",
  established: "2010",
  certifications: ["ISO 9001:2015", "Akreditasi KEMENKES", "IAEA Collaboration"]
};

export const staffMembers = [
  {
    id: 1,
    name: "Dr. Budi Santoso, M.Si",
    role: "Kepala Laboratorium",
    specialization: "Radioterapi & Dosimetri",
    image: "https://images.unsplash.com/photo-1758573466942-fbc45731e6eb",
    bio: "Pakar fisika medik dengan pengalaman 15 tahun dalam radioterapi dan dosimetri radiasi. Berfokus pada optimasi treatment planning dan quality assurance.",
    education: "Ph.D. Medical Physics - Stanford University",
    publications: 45,
    status: "available"
  },
  {
    id: 2,
    name: "Dr. Siti Aminah, M.Sc",
    role: "Peneliti Senior",
    specialization: "Pencitraan Medis",
    image: "https://images.pexels.com/photos/7723354/pexels-photo-7723354.jpeg",
    bio: "Spesialis dalam CT, MRI, dan PET imaging. Mengembangkan protokol pencitraan untuk diagnosis kanker dan penyakit neurologis.",
    education: "M.Sc. Medical Imaging - University of Tokyo",
    publications: 32,
    status: "available"
  },
  {
    id: 3,
    name: "Dr. Ahmad Hidayat, M.Si",
    role: "Fisikawan Medis",
    specialization: "Proteksi Radiasi",
    image: "https://images.unsplash.com/photo-1606206873764-fd15e242df52",
    bio: "Ahli dalam proteksi radiasi dan keselamatan kerja. Bertanggung jawab atas monitoring radiasi dan compliance dengan regulasi nasional.",
    education: "M.Si. Radiation Protection - ITB",
    publications: 28,
    status: "available"
  },
  {
    id: 4,
    name: "Dr. Maya Kusuma, M.Sc",
    role: "Peneliti",
    specialization: "Radiobiologi",
    image: "https://images.unsplash.com/photo-1576669801838-1b1c52121e6a",
    bio: "Meneliti efek radiasi pada sel dan jaringan biologis. Fokus pada pengembangan terapi radiasi yang lebih efektif dengan efek samping minimal.",
    education: "M.Sc. Radiobiology - UCLA",
    publications: 21,
    status: "available"
  },
  {
    id: 5,
    name: "Dr. Rizki Pratama, M.Si",
    role: "Teknisi Senior",
    specialization: "Kalibrasi & QA",
    image: "https://images.unsplash.com/photo-1758101512269-660feabf64fd",
    bio: "Spesialis dalam kalibrasi peralatan medis dan quality assurance. Memastikan semua peralatan beroperasi dengan akurasi tinggi.",
    education: "M.Si. Medical Physics - UGM",
    publications: 15,
    status: "available"
  },
  {
    id: 6,
    name: "Dr. Dewi Lestari, M.Sc",
    role: "Peneliti",
    specialization: "Monte Carlo Simulation",
    image: "https://images.pexels.com/photos/3845129/pexels-photo-3845129.jpeg",
    bio: "Ahli dalam simulasi Monte Carlo untuk perencanaan pengobatan dan penelitian dosimetri. Mengembangkan model komputasi untuk optimasi terapi.",
    education: "M.Sc. Computational Physics - NUS",
    publications: 19,
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
  address: "Gedung Radiodiagnostik Lt. 3, RSUP Dr. Sardjito, Jl. Kesehatan No. 1, Yogyakarta 55281",
  phone: "+62 274 587333",
  email: "info@labfismed.ac.id",
  fax: "+62 274 583745",
  operatingHours: {
    weekdays: "08:00 - 16:00 WIB",
    saturday: "08:00 - 12:00 WIB",
    sunday: "Tutup"
  },
  socialMedia: {
    twitter: "@labfismed",
    instagram: "@labfismed",
    linkedin: "lab-fisika-medik"
  },
  coordinates: {
    lat: -7.768732,
    lng: 110.373523
  }
};