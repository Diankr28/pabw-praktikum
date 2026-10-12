const wadah = document.querySelector(".galeri.grid");

function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";
  li.textContent = proyek.judul; // Teks, bukan HTML
  return li;
}
function render(daftar) {
  wadah.textContent = ""; 

  if (daftar.length === 0) {
    const pesan = document.createElement("p");
    pesan.className = "pesan-kosong";
    pesan.textContent = "Tidak ada film yang sesuai dengan kategori ini.";
    wadah.append(pesan);
    return; // Berhenti di sini, tidak perlu jalankan forEach
  }
  daftar.forEach((proyek) => wadah.append(buatKartu(proyek)));
}

render(daftarProyek);

const barisFilter = document.querySelector(".filter");

function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll(".filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

if (barisFilter) {
  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return; 

    const filterVal = tombol.dataset.filter;
    const terpilih = daftarProyek.filter(
      (proyek) => filterVal === "semua" || String(proyek.tahun) === filterVal
    );

    tandaiTombolAktif(tombol);
    render(terpilih);
  });
}

const formReview = document.querySelector("#bagian-2 form");
const inputJudul = document.querySelector("#nama-kolom1");

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

    const inputJudul = document.querySelector("#nama-kolom1");
    const inputTahun = document.querySelector("#nama-kolom2");
    const inputRating = document.querySelector("#nama-kolom3");

    const judul = inputJudul.value.trim();
    const tahun = Number(inputTahun.value);
    const rating = Number(inputRating.value);

    if (!judul || !tahun || !rating) {
      return;
    }

    const filmBaru = {
      judul: judul,
      tahun: tahun,
      rating: rating,
      episode: 1
    };

    daftarProyek.push(filmBaru);

    render(daftarProyek);


    formReview.reset();
  });
}