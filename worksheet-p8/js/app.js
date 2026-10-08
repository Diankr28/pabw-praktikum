const profil = {
  name: "Dian Krisna Rusmayanti",
  role: "Student of Informatics, Learn Front - End",
  ability: ["Menulis puisi", "Berbahasa mandarin", "css", "java", "html"],
};

const daftarProyek = [
  { judul: "Halaman Profil", tahun: 2026, selesai: true },
  { judul: "Katalog Produk", tahun: 2026, selesai: false },
];

const kalimat = `Nama saya ${profil.name}, dan saya belajar sebanyak ${profil.ability.length}.`;
console.log(kalimat);

// 1. Menyusun kalimat perkenalan dari satu object
function buatPerkenalan({ name, role }) {
  return `${name} — ${role}`;
}

// 2. Merapikan daftar keahlian menjadi satu baris teks
const formatKeahlian = (daftar) => daftar.join(" · ");

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.ability));

console.table(profil.ability);
console.table(daftarProyek);

const selesai = daftarProyek.filter((proyek) => proyek.selesai);
console.table(selesai);

const katalog = daftarProyek.find((proyek) => proyek.judul === "Katalog Produk");
console.log(katalog);
