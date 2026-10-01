## Pertemuan 6 — Reponsif Mobile-First
Menambahkan reponsif.css, Tambah dua titik henti: 48rem dan 60rem
Batasi gambar, beri wadah bergulir pada tabel lebar.

## Catatan penggunaan AI
Dikarenakan perbedaan penamaan class, sehingga membuat saya mencari solusi dengan penamaan class ganda dari worksheet sebelumnya dengan worksheet saat ini. Kemudian dikarenakan terdapat problem ketika pengujian 3 ukuran, dimana bagian tampilan tidak muncul sesuai rancangan worksheet, sehingga saya bertanya pada AI dimana problem utamanya, setelah mengotak - ngatik pada file html, responsif maupun layout, dimana terdapat pertentangan dari bagian .isi di layout dan .content di responsif, sehingga dari ai mendapatkan solusi penambahan -- grid-template-areas: none; -- .isi.content > .sisi,
.isi.content > .utama {
    grid-area: auto;
}
agar dapat mempertahankan kode dari worksheet - worksheet sebelumnya.

Kriteria selesai saya: Semua fase sudah dikerjakan dengan maksimal.