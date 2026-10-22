<script setup>
import { onMounted, watch } from 'vue'
import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'
import { profil } from './data.js'
import { state, simpan, muat, pulihkan, isiProyek } from './state.js'
import { ambilProyek } from './api.js'

onMounted(async () => {
  pulihkan(muat())
  try {
    const daftar = await ambilProyek()
    isiProyek(daftar)
  } catch (galat) {
    state.galat = 'Data gagal dimuat. Periksa koneksi, lalu muat ulang halaman.'
  } finally {
    state.memuat = false
  }
})

watch(state, (nilai) => simpan(nilai), { deep: true })
</script>

<template>
  <div class="page">
    <KepalaProfil :profil="profil" />

    <main class="isi content">
      <!-- Kolom Kiri (.sisi) -->
      <div class="sisi">
        <!-- Section 1: Tabel Biodata Film -->
        <section id="bagian-1">
          <h2>Biodata Film</h2>
          <div class="table-wrap">
            <table>
              <caption>Tabel. Biodata Film</caption>
              <thead>
                <tr>
                  <th scope="col">Tahun</th>
                  <th scope="col">Judul</th>
                  <th scope="col">Episode</th>
                  <th scope="col">Rating</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">2026</th>
                  <td>Hidden Love</td>
                  <td>24</td>
                  <td>95</td>
                </tr>
                <tr>
                  <th scope="row">2025</th>
                  <td>Moonlight Mystique</td>
                  <td>40</td>
                  <td>98</td>
                </tr>
                <tr>
                  <th scope="row">2024</th>
                  <td>Moana 2</td>
                  <td>1</td>
                  <td>98</td>
                </tr>
                <tr>
                  <th scope="row">2005</th>
                  <td>The Chronicles of Narnia: The Lion, the Witch and the Wardrobe</td>
                  <td>1</td>
                  <td>98</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- Section 2: Form Review Film -->
        <FormKontak />
      </div>

      <!-- Kolom Kanan (.utama) -->
      <div class="utama">
        <TombolFilter />
        <DaftarProyek />
      </div>
    </main>
    <footer>
      <p>{{profil.name}}  ·  {{profil.role}}  ·  25523140  ·  2026</p>
    </footer>
  </div>
</template>