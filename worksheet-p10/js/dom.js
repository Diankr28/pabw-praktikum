const wadah = document.querySelector(".galeri.grid");
const pesanKosong = document.querySelector(".pesan-kosong");
const muatEl = document.querySelector(".muatg");
const barisFilter = document.querySelector(".filter");
const formReview = document.querySelector("#bagian-2 form");
const inputJudul = document.querySelector("#nama-kolom1");

// 1. Indikator Keadaan Memuat (Loading State)
export function aturMemuat(aktif) {
  if (muatEl) {
    muatEl.hidden = !aktif;
  }
}

// 2. Indikator Keadaan Gagal (Error State)
export function tampilkanGalat(pesan) {
  if (wadah) wadah.textContent = "";
  if (pesanKosong) {
    pesanKosong.textContent = pesan;
    pesanKosong.hidden = false;
  }
}

// 3. Pembuat Elemen Kartu Lengkap (Gambar, Judul, Info, & Sinopsis)
function buatKartu(proyek) {
  const figure = document.createElement("figure");
  figure.className = "kartu";

  // Elemen Gambar
  const img = document.createElement("img");
  img.src = proyek.gambar || "image.png"; // Gambar default jika tidak ada di JSON
  img.alt = `Gambar film ${proyek.judul}`;
  img.width = 640;
  img.height = 360;
  img.loading = "lazy";

  // Konten Kartu
  const figcaption = document.createElement("figcaption");
  figcaption.className = "kartu__isi";

  const h3 = document.createElement("h3");
  h3.className = "kartu__judul";
  h3.textContent = proyek.judul;

  const info = document.createElement("small");
  info.style.display = "block";
  info.style.color = "#666";
  info.style.marginBottom = "8px";
  info.textContent = `Tahun: ${proyek.tahun} · Rating: ${proyek.rating} · Episode: ${proyek.episode}`;

  const p = document.createElement("p");
  p.textContent = proyek.sinopsis || "Tidak ada sinopsis ketersediaan saat ini.";

  figcaption.append(h3, info, p);
  figure.append(img, figcaption);

  return figure;
}

// 4. Penggambar Utama (Keadaan Berhasil / Kosong)
export function render(daftar) {
  if (!wadah) return;
  wadah.textContent = ""; // Kosongkan wadah terlebih dahulu

  if (!daftar || daftar.length === 0) {
    if (pesanKosong) {
      pesanKosong.textContent = "Belum ada film favorit yang ditambahkan.";
      pesanKosong.hidden = false;
    }
    return;
  }

  if (pesanKosong) pesanKosong.hidden = true;

  daftar.forEach((proyek) => {
    const kartu = buatKartu(proyek);
    wadah.append(kartu);
  });
}

// 5. Fungsi Penanda Tombol Aktif Filter
function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll(".filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

// 6. Penyaring Kategori (Filter)
export function pasangFilter(daftar) {
  if (!barisFilter) return;

  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return;

    const filterVal = tombol.dataset.filter;
    const terpilih = daftar.filter(
      (proyek) => filterVal === "semua" || String(proyek.tahun) === filterVal
    );

    tandaiTombolAktif(tombol);
    render(terpilih);
  });
}

// 7. Penanganan Form Review & Validasi Input
if (inputJudul) {
  inputJudul.addEventListener("input", () => {
    if (inputJudul.value.trim() === "") {
      inputJudul.setCustomValidity("Judul tidak boleh hanya berisi spasi.");
    } else {
      inputJudul.setCustomValidity("");
    }
  });
}

export function pasangFormReview(daftar) {
  if (!formReview) return;

  formReview.addEventListener("submit", (event) => {
    event.preventDefault();

    const inputJudul = document.querySelector("#nama-kolom1");
    const inputTahun = document.querySelector("#nama-kolom2");
    const inputRating = document.querySelector("#nama-kolom3");

    const judul = inputJudul.value.trim();
    const tahun = Number(inputTahun.value);
    const rating = Number(inputRating.value);

    if (!judul || !tahun || !rating) {
      return;
    }
  });
}