const ALAMAT = 'https://raw.githubusercontent.com/Diankr28/pabw-praktikum/main/worksheet-p10/data/proyek.json';   // relatif terhadap profil.html
export async function ambilProyek() {
  try {
    const respons = await fetch(ALAMAT);
    if (!respons.ok) throw new Error('status ' + respons.status);
    const data = await respons.json();
    return data;
  } catch (galat) {
    console.error('gagal memuat', galat.message);
    throw galat;
  }
}