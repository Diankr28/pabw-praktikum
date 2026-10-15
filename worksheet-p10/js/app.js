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

// Ambil elemen wadah kartu dan pesan kosong dari HTML
const wadah = document.querySelector(".galeri.grid");
const pesanKosong = document.querySelector(".pesan-kosong");

async function muatData() {
  try {
    const daftar = await ambilProyek();
    console.log('Data berhasil dimuat:', daftar);
  } catch (galat) {
    // 1. Catat di console
    console.error('Galat ditangkap di app.js:', galat.message);

    // 2. Tampilkan langsung ke halaman HTML (sesuai instruksi Lembar B)
    if (wadah) wadah.textContent = "";
    if (pesanKosong) {
      pesanKosong.textContent = "Data gagal dimuat. Periksa koneksi atau alamat API.";
      pesanKosong.hidden = false;
    }
  }
}

muatData();