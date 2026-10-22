<script setup>
import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'
import { profil } from './data.js'
</script>

<template>
  <div class="page">
    <KepalaProfil :profil="profil" />

    <main class="isi content">
      <div class="sisi">
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

        <FormKontak />
      </div>

      <div class="utama">
        <section id="bagian-3">
          <h2>Beranda</h2>
          <TombolFilter />
          <DaftarProyek />
        </section>
      </div>
    </main>

    <footer>
      <p>Dian Krisna Rusmayanti · 25523140 · 2026</p>
    </footer>
  </div>
</template>