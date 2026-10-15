import { ambilProyek } from './api.js';
// const profil = {
//   name: "Dian Krisna Rusmayanti",
//   role: "Student of Informatics, Learn Front - End",
//   ability: ["Menulis puisi", "Berbahasa mandarin", "css", "java", "html"],
// };
// window.profil = profil;

// const name = "Dian";           // teks
// const jumlahProyek = 3;       // angka, bukan "3"
// let pilihanAktif = "semua";   // akan berubah saat disaring

// console.log(typeof name);         
// console.log(typeof jumlahProyek);  
// console.log(typeof belumDibuat); 

// // const daftarProyek = [
// //   { judul: "Hidden Love", tahun: 2026, rating: 95, episode: 24 },
// //   { judul: "Moonlight Mystique", tahun: 2025, rating: 98, episode: 40 },
// //   { judul: "Moana 2", tahun: 2024, rating: 98, episode: 1}
// // ];
// window.daftarProyek = daftarProyek;

// const kalimat = `Nama saya ${profil.name}, dan saya belajar sebanyak ${profil.ability.length}.`;
// console.log(kalimat);

// window.kalimat = kalimat;

// // 1. Menyusun kalimat perkenalan dari satu object
// function buatPerkenalan({ name, role }) {
//   return `${name} — ${role}`;
// }
// window.buatPerkenalan = buatPerkenalan;

// function buatKalimat({name, ability}){
//     return `Nama saya ${name} dengan kemampuan yang saya punya yaitu ${ability}`;
// }
// window.buatKalimat = buatKalimat;

// // 2. Merapikan daftar keahlian menjadi satu baris teks
// const formatKeahlian = (daftar) => daftar.join(" · ");
// window.formatKeahlian = formatKeahlian;

// console.log(buatPerkenalan(profil));
// console.log(formatKeahlian(profil.ability));

// console.table(profil.ability);
// console.table(daftarProyek);

// const selesai = daftarProyek.filter((proyek) => proyek.selesai);
// console.table(selesai);

// window.selesai = selesai;
// ``
// const katalog = daftarProyek.find((proyek) => proyek.judul === "Katalog Produk");
// console.log(katalog);

// window.katalog = katalog;

// const judulProyek = daftarProyek.map((proyek) => proyek.judul);
// console.table(judulProyek);

// window.judulProyek = judulProyek;
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

// Jalankan perakit saat halaman dimuat
muat();