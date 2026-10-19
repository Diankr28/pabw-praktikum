import { pilihKategori, tambahFavorit, aturUlang } from './state.js';

export function pasangPendengar() {
  const barisFilter = document.querySelector(".filter");
  const wadah = document.querySelector(".galeri.grid");
  const inputJudul = document.querySelector("#nama-kolom1");
  const formReview = document.querySelector("#bagian-2 form");
  const tombolAturUlang = document.querySelector("#atur-ulang");

  if (barisFilter) {
    barisFilter.addEventListener("click", (event) => {
      const tombol = event.target.closest("button");
      if (!tombol) return;
      const filterVal = tombol.dataset.filter || "semua";
      pilihKategori(filterVal);
    });
  }

  if (wadah) {
    wadah.addEventListener("click", (event) => {
      const tombol = event.target.closest(".favorit");
      if (!tombol) return;
      tambahFavorit(Number(tombol.dataset.id));
    });
  }

  if (tombolAturUlang) {
    tombolAturUlang.addEventListener("click", () => {
      aturUlang();
    });
  }

  if (inputJudul) {
    inputJudul.addEventListener("input", () => {
      if (inputJudul.value.trim() === "") {
        inputJudul.setCustomValidity("Judul tidak boleh hanya berisi spasi.");
      } else {
        inputJudul.setCustomValidity("");
      }
    });
  }

  if (formReview) {
    formReview.addEventListener("submit", (event) => {
      event.preventDefault();
      const inputTahun = document.querySelector("#nama-kolom2");
      const inputRating = document.querySelector("#nama-kolom3");

      const judul = inputJudul ? inputJudul.value.trim() : "";
      const tahun = inputTahun ? Number(inputTahun.value) : null;
      const rating = inputRating ? Number(inputRating.value) : null;

      if (!judul || !tahun || !rating) return;

    });
  }
}