## Pertemuan 10 — JavaScript Asinkron: fetch, Promise, dan JSON

## Catatan penggunaan AI
Yang Saya Kerjakan Sendiri:
Desain & HTML/CSS:
   - Bikin struktur halaman di `profil.html` (bagian biodata film, galeri grid, dan formulir review film).
   - Bikin styling tema, layout grid, dan komponen kartu lewat file CSS (`tokens.css`, `layout.css`, `komponen.css`, dll).
Data JSON (`data/proyek.json`):
   - Menyusun daftar film favorit saya lengkap dengan `id`, `judul`, `tahun`, `rating`, `episode`, gambar, dan sinopsisnya.
Eksperimen & Uji Coba Console:
   - Menghubungkan variabel ke `window.daftar` buat ngetes struktur data dan akses properti di DevTools Console.
   - Nyobain manipulasi form buat nambahin film baru ke tampilan.
Pengisian Worksheet:
   - Menjalankan tes 4 keadaan UI (Loading, Berhasil, Error, Empty) dan mencatat hasilnya di lembar kerja.

AI Membantu Saya
Troubleshooting & Debugging Error:
   - Jelasin pesan error WebSocket / Back-Forward Cache pas simulasi offline di browser.
Refactoring Kode & Pemisahan Lapisan (SoC):
   - AI bantu ngerapihin pembagian kode di `dom.js` supaya fungsi-fungsinya bisa di-export dengan rapi (`aturMemuat`, `tampilkanGalat`, `render`, `pasangFilter`, `pasangFormReview`).
   - AI bantu bikin struktur perakit utama di `app.js` pakai `try/catch/finally` biar alur *loading*, *success*, dan *error* berjalan mulus.
Penyusunan Kalimat Refleksi:
   - Diskusi konsep tentang kenapa `fetch` ga melempar error di status 404 dan perbedaan `.json()` vs `JSON.stringify()`.

Kriteria selesai saya: Semua fase sudah dikerjakan dengan maksimal.