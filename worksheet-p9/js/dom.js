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
    return; // 
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

