import { ambilProyek } from './api.js';
import { isiProyek, pulihkan, muat } from './state.js';
import { aturMemuat, tampilkanGalat } from './dom.js';
import { pasangPendengar } from './events.js';

async function mulai() {
  pulihkan(muat());      // Pulihkan pilihan dari localStorage (atau nilai bawaan)
  pasangPendengar();     // Pasang event listeners
  aturMemuat(true);      // Tampilkan indikator memuat

  try {
    const daftar = await ambilProyek(); // Ambil data dari api.js
    isiProyek(daftar);                 // Mengisi state & memanggil render(state)
  } catch (galat) {
    tampilkanGalat('Data gagal dimuat. Periksa koneksi, lalu muat ulang halaman.');
    console.error(galat.message);
  } finally {
    aturMemuat(false);     // 
  }
}

mulai();