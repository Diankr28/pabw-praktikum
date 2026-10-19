// js/dom.js
import { saring } from './data.js';

const wadah = document.querySelector(".galeri.grid");
const pesanKosong = document.querySelector(".pesan-kosong");
const muatEl = document.querySelector(".muatg");
const barisFilter = document.querySelector(".filter");

export function aturMemuat(aktif) {
  if (muatEl) {
    muatEl.hidden = !aktif;
  }
}

export function tampilkanGalat(pesan) {
  if (wadah) wadah.textContent = "";
  if (pesanKosong) {
    pesanKosong.textContent = pesan;
    pesanKosong.hidden = false;
  }
}

function buatKartu(proyek, favorit = []) {
  const figure = document.createElement("figure");
  figure.className = "kartu";

  const img = document.createElement("img");
  img.src = proyek.gambar || "image.png"; // Gambar default dari kode awal kamu
  img.alt = `Gambar film ${proyek.judul}`;
  img.width = 640;
  img.height = 360;
  img.loading = "lazy";

  const figcaption = document.createElement("figcaption");
  figcaption.className = "kartu__isi";

  const h3 = document.createElement("h3");
  h3.className = "kartu__judul";
  h3.textContent = proyek.judul;

  const info = document.createElement("small");
  info.style.display = "block";
  info.style.color = "#666";
  info.style.marginBottom = "8px";
  info.textContent = `Tahun: ${proyek.tahun || "-"} · Rating: ${proyek.rating || "-"} · Episode: ${proyek.episode || "1"}`;

  const p = document.createElement("p");
  p.textContent = proyek.sinopsis || "Tidak ada sinopsis ketersediaan saat ini.";

  // Tombol favorit kecil (sesuai Lembar C)
  const tombolFav = document.createElement("button");
  tombolFav.type = "button";
  tombolFav.className = "favorit";
  tombolFav.dataset.id = proyek.id;
  tombolFav.style.marginTop = "8px";
  tombolFav.textContent = favorit.includes(proyek.id) ? "★ Favorit" : "☆ Tambah Favorit";

  figcaption.append(h3, info, p, tombolFav);
  figure.append(img, figcaption);

  return figure;
}

function tandaiTombolAktif(kategoriAktif) {
  if (!barisFilter) return;
  barisFilter.querySelectorAll("button").forEach((tombol) => {
    const filterVal = tombol.dataset.filter || "semua";
    tombol.classList.toggle("aktif", filterVal === kategoriAktif);
  });
}

// render(state) — Menerima objek state
export function render(state) {
  if (!wadah) return;
  wadah.textContent = ""; // Kosongkan wadah

  const tampil = saring(state.daftarProyek, state.kategoriAktif);

  if (tampil.length === 0) {
    if (pesanKosong) {
      pesanKosong.textContent = "Belum ada film favorit yang ditambahkan.";
      pesanKosong.hidden = false;
    }
    tandaiTombolAktif(state.kategoriAktif);
    return;
  }

  if (pesanKosong) pesanKosong.hidden = true;

  tampil.forEach((proyek) => {
    const kartu = buatKartu(proyek, state.favorit);
    wadah.append(kartu);
  });

  tandaiTombolAktif(state.kategoriAktif);
}