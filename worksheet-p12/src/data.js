export const profil = {
  name: "Dian Krisna Rusmayanti",
  role: "Student of Informatics, Learn Front - End",
  ability: ["Menulis puisi", "Berbahasa mandarin", "css", "java", "html"],
};

export function buatPerkenalan({ name, role }) {return `${name} — ${role}`;}
export const formatKeahlian = (daftar) => daftar.join(" · ");

export function saring(daftar, kategori) {
  if (!daftar || !Array.isArray(daftar)) return [];
  if (!kategori || kategori === "semua") return daftar;

  return daftar.filter((proyek) => String(proyek.tahun) === String(kategori));
}