const profil = {
  name: "Dian Krisna Rusmayanti",
  role: "Student of Informatics, Learn Front - End",
  ability: ["Menulis puisi", "Berbahasa mandarin", "css", "java", "html"],
};

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
