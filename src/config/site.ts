export const siteConfig = {
  brand: "PonselPintar",
  url: "https://ISI_DOMAIN",
  description:
    "Layanan informasi dan konsultasi monitoring perangkat secara bertanggung jawab.",
  logo: "/images/logo-ponselpintar.svg",

  whatsapp: {
    enabled: true,
    number: "ISI_NOMOR_WHATSAPP",
  },

  analytics: {
    enabled: false,
    provider: "google-analytics",
    measurementId: "",
  },

  theme: {
    defaultMode: "system",
  },
};

export type SiteConfig = typeof siteConfig;

export const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Fitur", href: "/#fitur" },
  { label: "Cara Kerja", href: "/#cara-kerja" },
  { label: "Paket", href: "/#paket" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/#faq" },
] as const;

export const legalLinks = [
  { label: "Ketentuan Penggunaan", href: "/ketentuan-penggunaan" },
  { label: "Kebijakan Privasi", href: "/kebijakan-privasi" },
] as const;

export const packages = [
  {
    name: "Paket Dasar",
    duration: "1 Bulan",
    summary: "Informasi aktivitas perangkat dasar untuk kebutuhan singkat.",
    features: ["Informasi aktivitas perangkat", "Ringkasan laporan sederhana", "Dukungan konsultasi via WhatsApp", "Panduan konfigurasi dasar"],
    price: "Rp [HUBUNGI KAMI]",
    highlighted: false,
  },
  {
    name: "Paket Keluarga",
    duration: "3 Bulan",
    summary: "Pemantauan perangkat keluarga dengan dukungan lebih lengkap.",
    features: ["Seluruh fitur Paket Dasar", "Pengelolaan dan pemantauan perangkat", "Dukungan kompatibilitas perangkat", "Konsultasi prioritas"],
    price: "Rp [HUBUNGI KAMI]",
    highlighted: true,
  },
  {
    name: "Paket Organisasi",
    duration: "12 Bulan",
    summary: "Pengelolaan perangkat organisasi dengan otorisasi yang tepat.",
    features: ["Seluruh fitur Paket Keluarga", "Pengelolaan multi-perangkat", "Pengaturan akun dan layanan", "Dukungan konsultasi berkelanjutan"],
    price: "Rp [HUBUNGI KAMI]",
    highlighted: false,
  },
] as const;

export const faqs = [
  {
    q: "Apa itu layanan PonselPintar?",
    a: "PonselPintar menyediakan informasi dan konsultasi seputar layanan monitoring perangkat berbasis aplikasi PonselPintar. Kami membantu Anda memahami fitur, kompatibilitas, dan penggunaan layanan secara bertanggung jawab.",
  },
  { q: "Apakah datanya real-time?", a: "Ya. Data biasanya tersinkronisasi dalam waktu sekitar 5 menit." },
  {
    q: "Bagaimana cara kerja PONSELPINTAR?",
    a: "Aplikasi memantau aktivitas perangkat target secara tersembunyi. Semua data dikirim ke akun Anda dalam bentuk dashboard yang mudah dibaca. Untuk mulai, Anda perlu berlangganan, masuk ke akun, dan mengikuti panduan konfigurasi yang sesuai dengan perangkat target.",
  },
  { q: "Apakah legal digunakan?", a: "Legal jika:\n• Anda adalah pemilik perangkat, atau\n• Anda sudah mendapat izin dari pemilik/pengguna perangkat." },
  { q: "Seberapa sering data diperbarui?", a: "Secara default setiap 5 menit (Android). Interval bisa disesuaikan tergantung pengaturan perangkat dan koneksi internet." },
  { q: "Bagaimana cara melacak lokasi ponsel?", a: "Anda bisa melihat lokasi real-time dan riwayat lokasi di peta interaktif setelah masuk ke akun." },
  { q: "Bisakah melacak hanya dengan nomor telepon?", a: "Tidak. Tidak ada teknologi yang bisa melacak hanya dengan nomor telepon. Hati-hati dengan penawaran palsu." },
  { q: "Apakah bisa melacak lokasi seseorang lewat ponselnya?", a: "Ya, dengan menginstal aplikasi di perangkat target. Setelah itu lokasi bisa dilihat secara real-time." },
  { q: "Berapa banyak perangkat yang bisa dipantau?", a: "Satu langganan untuk satu perangkat. Anda bisa mengganti perangkat kapan saja, tapi hanya satu yang aktif dalam satu waktu." },
  { q: "Di mana data bisa dilihat?", a: "Semua data muncul di akun pribadi Anda. Bisa diakses dari perangkat atau komputer mana pun dengan login." },
  { q: "Apakah ikon aplikasi terlihat?", a: "Setelah instalasi di Android, ikon bisa disembunyikan dari menu." },
  { q: "Apakah bisa instal dari jarak jauh?", a: "Tidak. Diperlukan akses fisik singkat ke perangkat target (kurang dari 1 menit)." },
  { q: "Perangkat apa yang didukung?", a: "Ketersediaan fitur dan dukungan perangkat dapat berbeda berdasarkan sistem operasi, versi aplikasi, dan ketentuan layanan PonselPintar. Hubungi kami via WhatsApp untuk berkonsultasi mengenai kompatibilitas perangkat Anda." },
  { q: "Apakah penggunaan harus memiliki izin?", a: "Ya. Penggunaan layanan monitoring perangkat harus dilakukan dengan izin yang sah dari pemilik perangkat atau orang yang wajar untuk dipantau sesuai hukum yang berlaku. Kami tidak mendukung penggunaan yang tidak sah atau tidak etis." },
  { q: "Bagaimana cara berkonsultasi?", a: "Anda dapat menghubungi kami melalui tombol WhatsApp yang tersedia di seluruh halaman website. Tim kami siap membantu menjelaskan fitur, paket, dan kompatibilitas sebelum Anda memutuskan." },
  { q: "Apakah semua fitur tersedia pada setiap perangkat?", a: "Tidak. Ketersediaan fitur dapat berbeda berdasarkan perangkat, sistem operasi, versi aplikasi, paket, dan ketentuan layanan. Kami akan menjelaskan fitur yang relevan untuk perangkat Anda." },
  { q: "Bagaimana data pengguna diproses?", a: "Kami hanya mengumpulkan data yang diperlukan untuk konsultasi dan layanan, seperti nama, nomor WhatsApp, dan informasi transaksi. Detail lengkap tersedia di halaman Kebijakan Privasi." },
  { q: "Bagaimana cara mendapatkan dukungan?", a: "Dukungan tersedia melalui WhatsApp. Setelah berkonsultasi dan memilih layanan, tim kami akan membantu Anda melalui proses instalasi dan konfigurasi resmi sesuai ketentuan layanan." },
] as const;

export const trustPoints = [
  { icon: "shield-check", title: "Izin yang Sah", desc: "Penggunaan layanan dengan izin dan transparansi yang sesuai." },
  { icon: "eye", title: "Informasi Transparan", desc: "Penjelasan fitur secara jelas tanpa janji yang belum diverifikasi." },
  { icon: "headset", title: "Dukungan Konsultasi", desc: "Tim kami siap membantu sebelum dan selama menggunakan layanan." },
  { icon: "smartphone", title: "Pengelolaan Bertanggung Jawab", desc: "Pengelolaan perangkat sesuai ketentuan dan tanggung jawab pengguna." },
] as const;

export const features = [
  { icon: "whatsapp", title: "Pemantauan WhatsApp", desc: "Akses informasi aktivitas WhatsApp pada perangkat yang terpantau.", detail: "Pantau aktivitas WhatsApp pada perangkat yang terdaftar, termasuk pesan teks, kontak, dan riwayat percakapan.", label: "Memerlukan akses resmi ke perangkat", highlights: ["Riwayat pesan teks", "Daftar kontak", "Stempel waktu aktivitas"] },
  { icon: "facebook", title: "Pemantauan Media Sosial", desc: "Informasi aktivitas Facebook dan platform media sosial lainnya.", detail: "Lihat aktivitas Facebook Messenger dan platform media sosial populer lainnya yang terpasang pada perangkat.", label: "Ketersediaan tergantung OS & versi aplikasi", highlights: ["Facebook Messenger", "Instagram", "Snapchat", "Telegram"] },
  { icon: "phone", title: "Informasi Panggilan Telepon", desc: "Riwayat panggilan masuk, keluar, dan tidak terjawab.", detail: "Akses riwayat panggilan telepon pada perangkat yang terpantau, termasuk nomor kontak, durasi panggilan, dan stempel waktu.", label: "Tersedia untuk panggilan seluler", highlights: ["Riwayat panggilan masuk & keluar", "Durasi panggilan", "Info kontak"] },
  { icon: "mail", title: "Pemantauan Email", desc: "Akses informasi aktivitas email pada perangkat yang terpantau.", detail: "Pantau aktivitas email yang terkirim dan diterima melalui perangkat yang terdaftar.", label: "Mendukung aplikasi email populer", highlights: ["Email masuk & keluar", "Info pengirim & penerima", "Stempel waktu"] },
  { icon: "map-pin", title: "Lokasi & Geolocation", desc: "Pelacakan lokasi perangkat secara real-time dan riwayat lokasi.", detail: "Lihat lokasi perangkat secara real-time melalui peta interaktif, serta riwayat lokasi.", label: "Memerlukan GPS aktif & izin lokasi", highlights: ["Lokasi real-time", "Riwayat lokasi", "Geofencing & peringatan zona"] },
  { icon: "video", title: "Rekam Layar & Tangkapan", desc: "Rekam aktivitas layar perangkat dan ambil tangkapan secara berkala.", detail: "Fitur rekam layar memungkinkan Anda melihat apa yang sedang terjadi di layar perangkat yang terpantau.", label: "Ketersediaan terbatas — konsultasi dahulu", highlights: ["Tangkapan layar berkala", "Rekam video layar", "Aktivitas real-time"] },
  { icon: "image", title: "Galeri & File Media", desc: "Akses foto, video, dan file media yang tersimpan di perangkat.", detail: "Lihat foto, video, dan file media yang tersimpan di galeri perangkat yang terpantau.", label: "Akses ke penyimpanan perangkat", highlights: ["Foto & video galeri", "File yang diterima", "Stempel waktu media"] },
  { icon: "globe", title: "Riwayat Browser & Web", desc: "Pantau situs web yang dikunjungi dan riwayat browsing.", detail: "Akses riwayat browsing pada perangkat yang terpantau, termasuk daftar situs web yang dikunjungi.", label: "Mendukung browser populer", highlights: ["Riwayat situs web", "Bookmark & bookmark tersembunyi", "Frekuensi kunjungan"] },
  { icon: "key", title: "Keylogger & Input Teks", desc: "Catat input teks yang diketik pada perangkat yang terpantau.", detail: "Fitur keylogger mencatat setiap teks yang diketik pada perangkat.", label: "Ketersediaan terbatas pada iOS", highlights: ["Input teks lengkap", "Pencarian & pesan", "Aplikasi yang digunakan"] },
] as const;

export const howItWorks = [
  { title: "Konsultasikan Kebutuhan Anda", desc: "Hubungi kami via WhatsApp untuk membahas kebutuhan monitoring perangkat Anda." },
  { title: "Pastikan Perangkat & Penggunaan Memenuhi Ketentuan", desc: "Verifikasi kompatibilitas perangkat dan pastikan penggunaan memiliki izin yang sah." },
  { title: "Pilih Layanan atau Paket yang Sesuai", desc: "Kami bantu pilih paket yang paling sesuai dengan kebutuhan dan perangkat Anda." },
  { title: "Ikuti Proses Instalasi & Konfigurasi Resmi", desc: "Panduan instalasi dan konfigurasi resmi sesuai ketentuan layanan PonselPintar." },
  { title: "Gunakan Layanan Sesuai Izin & Ketentuan", desc: "Manfaatkan layanan secara bertanggung jawab sesuai izin dan ketentuan yang berlaku." },
] as const;

export const useCases = [
  { icon: "users", title: "Pengawasan Perangkat Anak", desc: "Pantau perangkat anak dengan pengetahuan dan izin yang sesuai untuk edukasi keamanan digital." },
  { icon: "smartphone", title: "Pengelolaan Perangkat Sendiri", desc: "Kelola dan pantau perangkat milik sendiri untuk pemahaman pola penggunaan yang lebih baik." },
  { icon: "building", title: "Pengelolaan Perangkat Organisasi", desc: "Kelola perangkat organisasi dengan otorisasi yang tepat dan sesuai ketentuan internal." },
  { icon: "book-open", title: "Edukasi Keamanan Digital Keluarga", desc: "Gunakan layanan sebagai alat edukasi kebiasaan digital keluarga yang sehat." },
] as const;

export const socialProofData = [
  { name: "And***", phone: "+62 812-***-**45", action: "konsultasi paket keluarga", time: "5 menit lalu" },
  { name: "Bud***", phone: "+62 813-***-**12", action: "konsultasi paket dasar", time: "12 menit lalu" },
  { name: "Cit***", phone: "+62 819-***-**88", action: "konsultasi kompatibilitas perangkat", time: "23 menit lalu" },
  { name: "Dew***", phone: "+62 821-***-**03", action: "konsultasi paket organisasi", time: "38 menit lalu" },
  { name: "Eka***", phone: "+62 822-***-**67", action: "konsultasi fitur monitoring", time: "1 jam lalu" },
] as const;
