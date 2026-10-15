## Pertemuan 9 — DOM, Event, dan Interaktivitas
Daftar proyek |	.galeri.grid |	Menyimpan Kumpulan kartu film	| wadah
Baris tombol filter |	.filter	| Menyimpan tombol penyaring data gambar |	tombol-filter
Pesan daftar kosong |	.galeri	| Menampilkan pesan saat tidak ada data  |	pesan-kosong
Form dan tiap kolomnya | #form-kolom #nama-kolom1 #nama-kolom2 #nama-kolom3	| Membaca input review film |formReview

## Catatan penggunaan AI
HTML & Selector: Mengoreksi data-filter tombol 2024 & 2023 yang sebelumnya bernilai "2025", serta menyelaraskan selector dari #filter menjadi .filter.

Variabel & Render: Menggunakan variabel global daftarProyek, menyimpelkan parameter render(daftar), dan menambahkan kondisi daftar.length === 0 untuk menampilkan .pesan-kosong.

CSS & Tema: Menerapkan styling .filter, .tombol-filter, .tombol-filter.aktif, dan .pesan-kosong menggunakan variabel warna semantik (var(--primary), var(--surface), var(--border)).

Validasi Form : Menambahkan setCustomValidity() dengan pengecekan .trim() === "" pada event input agar teks berisi spasi murni tetap terdeteksi tidak sah.

Kriteria selesai saya: Semua fase sudah dikerjakan dengan maksimal.