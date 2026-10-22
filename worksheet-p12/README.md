# PABW — Dian Krisna Rusmayanti — 25523140
 
Repo ini memuat pekerjaan mata kuliah Pengembangan Aplikasi
Berbasis Web, satu folder untuk setiap pertemuan.
 
## Pertemuan 12  -  Build Tooling, npm, dan Framework SPA
 node : v24.22.0
 npm  : 11.19.1
 port : http://localhost:5173/
 
## Catatan penggunaan AI
Migrasi & Struktur Komponen: Membantu memecah halaman HTML monolitik P11 (profil.html) menjadi 4 komponen Vue 3 SFC (KepalaProfil.vue, TombolFilter.vue, DaftarProyek.vue, dan FormKontak.vue).   
Reaktivitas & State Management: Menghubungkan state bersama menggunakan reactive() pada state.js, menggantikan fungsi render(state) manual dengan reaktivitas bawaan Vue, serta mengonfigurasi localStorage dan watch.   
Perbaikan Tata Letak (Layout): Mengembalikan struktur layout 2 kolom (.sisi dan .utama) agar tabel biodata film, kartu film, dan form review kembali presisi seperti pada P11.   
Validasi & Event Handling: Memperbaiki fungsi tombol Atur Ulang serta validasi spasi dan pesan galat pada formulir review film.   
Penyelesaian Masalah Asset: Memperbaiki jalur pemanggilan gambar yang pecah (broken image) dengan memindahkan file pendukung ke folder public/.   
Dokumentasi & Refleksi: Membantu pengisian tabel evaluasi Lembar D, E, dan F (DevTools, build, git)