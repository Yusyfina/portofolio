export const projects = [
  {
    id: 1,
    title: "BiteCraft Kitchen",
    category: "Mobile App",
    image: "/project/bitecraftkitchen.png",
    github: "https://github.com/Yusyfina/BiteCraftKitchen",

    description:
      "Aplikasi pemesanan makanan restoran berbasis Flutter dengan sistem keranjang dan transaksi.",

    longDescription:
      "BiteCraft Kitchen adalah aplikasi pemesanan makanan berbasis mobile yang dikembangkan menggunakan Flutter dan Firebase. Aplikasi untuk membantu pelanggan melakukan pemesanan makanan secara mandiri tanpa harus mengantri di kasir. Pengguna dapat melihat daftar menu, mencari makanan, menambahkan pesanan ke keranjang, serta melihat riwayat transaksi dan struk pemesanan. Aplikasi ini juga menyediakan fitur laporan penjualan yang dapat diakses oleh admin untuk memantau transaksi dan hasil penjualan restoran.",

    technologies: ["Flutter", "Dart", "Firebase", "Figma"],

    features: [
      "Registrasi dan login pengguna (pelanggan dan admin)",
      "Menampilkan dan mencari menu makanan",
      "Keranjang pesanan dan sistem checkout",
      "Struk pemesanan dan riwayat transaksi",
      "Laporan penjualan khusus admin",
    ],
  },
  {
    id: 2,
    title: "Yumee App",
    category: "Mobile App",
    image: "/project/yumee.png",
    github: "https://github.com/Yusyfina/Aplikasi-Resep-Makanan_Yumee",

    description:
      "Aplikasi mobile untuk menemukan dan mengelola berbagai resep makanan dengan mudah.",

    longDescription:
      "Yumee adalah aplikasi resep makanan berbasis Flutter yang dirancang untuk membantu pengguna menemukan berbagai resep dengan cepat. Aplikasi ini menyediakan fitur pencarian resep, penyimpanan favorit menggunakan Hive, serta perencanaan menu harian.  Yumee memudahkan pengguna dalam menjelajahi resep, membaca artikel makanan, dan mengelola daftar masakan.",

    technologies: ["Flutter", "Dart", "Hive", "Figma"],

    features: [
      "Pencarian resep makanan secara cepat",
      "Menyimpan resep favorit menggunakan Hive",
      "Perencanaan menu harian",
      "Menampilkan artikel seputar makanan",
    ],
  },
  {
    id: 3,
    title: "Portofolio",
    category: "Website",
    image: "/project/portofolio.png",
    github: "https://github.com/Yusyfina/portofolio",

    description:
      "Portofolio yang menampilkan proyek-proyek, sertifikat dan keterampilan",

    longDescription:
      "Website portofolio ini dikembangkan menggunakan React dan Vite, Tailwind CSS, dan Framer Motion . Selain itu, integrasi Firebase digunakan untuk menyimpan data live comment, sementara EmailJS memungkinkan pengunjung mengirim pesan langsung melalui halaman email tanpa perlu meninggalkan website ",

    technologies: ["React", "Vite", "TailwindCSS", "Firebase", "EmailJS", "Framer Motion"],

    features: [
      "Halaman profil",
      "Menampilkan daftar proyek portofolio beserta detailnya",
      "Formulir kontak yang terhubung langsung ke email menggunakan EmailJS",
      "Live comment yang disimpan di Firebase dan ditampilkan secara real-time",
    ],
  },

  {
    id: 4,
    title: "Bike Sharing Data Analysis",
    category: "Data Analysis",
    image: "/project/dataanalis.png",
    github: "https://github.com/Yusyfina/bike-sharing-analysis",

    description:
      "Analisis data penyewaan sepeda untuk menemukan faktor yang mempengaruhi jumlah rental.",

    longDescription:
      "Bike Sharing Data Analysis merupakan proyek analisis data menggunakan Python untuk mengidentifikasi faktor-faktor yang mempengaruhi jumlah penyewaan sepeda. Analisis dilakukan melalui proses data wrangling, exploratory data analysis (EDA), visualisasi data, serta pembuatan model prediksi menggunakan Linear Regression. Hasil analisis menunjukkan bahwa jumlah pengguna terdaftar dan pengguna kasual memiliki pengaruh paling besar terhadap total penyewaan sepeda. Proyek ini juga dilengkapi dengan dashboard interaktif menggunakan Streamlit untuk menampilkan hasil analisis dan visualisasi korelasi antar variabel.",

    technologies: ["Python", "Pandas", "Seaborn", "Matplotlib", "Streamlit"],

    features: [
      "Data wrangling dan pembersihan dataset",
      "Exploratory Data Analysis (EDA)",
      "Visualisasi korelasi variabel terhadap jumlah rental sepeda",
      "Model prediksi menggunakan Linear Regression",
    ],
  },

  {
    id: 5,
    title: "Street Animals: Neon Rebellion (Kelompok)",
    category: "Game Development",
    image: "/project/game.png",
    github: "https://github.com/Yusyfina/street-animals-neon-rebellion",

    description:
      "Project Kelompok : Game RPG 2D yang dikembangkan menggunakan Unity dengan gameplay petualangan dan penghindaran musuh",

    longDescription:
      "Street Animals: Neon Rebellion adalah game RPG 2D yang dikembangkan menggunakan Unity. Pemain berperan sebagai karakter hewan jalanan yang berpetualang di dunia menghadapi berbagai musuh karena kejaran helix crop yang ditentang hewan karena telah membuat experimen dari hewan. Game ini menampilkan sistem pergerakan karakter, eksplorasi map, serta elemen gameplay RPG seperti nyawa karakter",

    technologies: ["Unity", "C#"],

    features: [
      "Gameplay RPG 2D dengan sistem musuh dan pergerakan karakter",
      "Kontrol karakter",
      "Nyawa karakter yang dapat habis jika terkena serangan musuh",
      "Cerita yang menarik dengan latar belakang dunia yang unik",
    ],
  },

  {
    id: 6,
    title: "Moonfall Night",
    category: "Game Development",
    image: "/project/gamemoon.png",
    github: "https://github.com/Yusyfina/MoonfallNight",
    demo: "https://yusyfina.itch.io/moonfall-night",

    description:
      "Game platformer 2D yang dibuat menggunakan Construct 3.",

    longDescription:
      "Moonfall Night adalah game short platformer 2D yang dikembangkan menggunakan Construct 3. Pemain mengendalikan karakter untuk melompati rintangan, dan memanjat tangga untuk mencapai tujuan permainan.",

    technologies: ["Construct 3", "HTML5"],

    features: [
      "Gameplay platformer 2D",
      "Kontrol karakter berjalan dan melompat",
      "Sistem panjat tangga",
    ],

    controls: [
      "Left / Right Arrow — Move",
      "Up Arrow — Jump / Climb ladder",
    ],
  }

];

export const certificates = [
  { id: 1, image: "/certificates/web.png" },
  { id: 2, image: "/certificates/frontend.png" },
  { id: 3, image: "/certificates/javascript.png" },
  { id: 4, image: "/certificates/flutter.png" },
  { id: 5, image: "/certificates/backend.png" },
  { id: 6, image: "/certificates/Cloud.png" },
  { id: 7, image: "/certificates/SQL.png" },
  { id: 8, image: "/certificates/python.png" },
  { id: 9, image: "/certificates/r.png" },
  { id: 10, image: "/certificates/datascience.png" },
  { id: 11, image: "/certificates/machinelearning.png" },
];

export const techStack = [
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
  },
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
  },
  {
    name: "Vite",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg"
  },
  {
    name: "Go",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg"
  },
  {
    name: "Flutter",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
  },
  {
    name: "Dart",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg"
  },
  {
    name: "Firebase",
    icon: "https://firebase.google.com/static/downloads/brand-guidelines/PNG/logo-logomark.png"
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
  },
  {
    name: "R",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg"
  },
  {
    name: "Tableau",
    icon: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg"
  },
  {
    name: "C++",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
  },
  {
    name: "Unity",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg"
  },
];