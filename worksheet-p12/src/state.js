import { render } from './dom.js';

const KUNCI = "pabw-p11";
const VERSI = 2;

// Objek state tunggal
export const state = {
  daftarProyek: [],
  kategoriAktif: "semua",
  favorit: [],
};

export function isiProyek(daftar) {
  state.daftarProyek = Array.isArray(daftar) ? daftar : (daftar?.data || []);
  render(state);
}

export function pilihKategori(kategori) {
  state.kategoriAktif = kategori;
  simpan(state);
  render(state);
}

export function tambahFavorit(id) {
  if (state.favorit.includes(id)) {
    state.favorit = state.favorit.filter((favId) => favId !== id);
  } else {
    state.favorit = [...state.favorit, id];
  }
  simpan(state);
  render(state);
}

export function simpan(state) {
  const isi = {
    versi: VERSI,
    kategoriAktif: state.kategoriAktif,
    favorit: state.favorit,
  };
  localStorage.setItem(KUNCI, JSON.stringify(isi));
}

export function muat() {
  try {
    const teks = localStorage.getItem(KUNCI);
    if (!teks) return null;

    const isi = JSON.parse(teks);
    if (isi?.versi !== VERSI) {
      localStorage.removeItem(KUNCI);
      return null;
    }
    return isi;
  } catch {
    localStorage.removeItem(KUNCI);
    return null;
  }
}

export function pulihkan(isi) {
  if (!isi) return;
  state.kategoriAktif = isi.kategoriAktif || "semua";
  state.favorit = Array.isArray(isi.favorit) ? isi.favorit : [];
}

export function aturUlang() {
  localStorage.removeItem(KUNCI);
  state.kategoriAktif = "semua";
  state.favorit = [];
  render(state);
}