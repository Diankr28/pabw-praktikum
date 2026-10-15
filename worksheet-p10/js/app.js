import { ambilProyek } from './api.js';
import { render, pasangFilter, aturMemuat, tampilkanGalat } from './dom.js';

async function muat() {
  aturMemuat(true); // 1. Tampilkan indikator memuat
  try {
    const daftar = await ambilProyek(); // Ambil data dari api.js
    pasangFilter(daftar);               // Pasang event listener filter
    render(daftar);                     // Gambar kartu ke halaman
  } catch (galat) {
    tampilkanGalat('Data gagal dimuat. Periksa koneksi, lalu muat ulang halaman.');
    console.error(galat.message);
  } finally {
    aturMemuat(false); // Sembunyikan indikator memuat
  }
}
muat();