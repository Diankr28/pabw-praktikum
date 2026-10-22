<script setup>
import { ref } from 'vue'

const judul = ref('')
const tahun = ref('')
const rating = ref('')

function handleSubmit() {
  if (!judul.value.trim() || !tahun.value || !rating.value) return
  judul.value = ''
  tahun.value = ''
  rating.value = ''
}
</script>

<template>
  <section id="bagian-2">
    <h2>Review Film</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-kolom">
        <label for="nama-kolom1">Judul</label>
        <input type="text" id="nama-kolom1" v-model="judul" required>
        <span class="pesan-galat">Masukkan judul film favorit Anda</span>
      </div>
      <div class="form-kolom">
        <label for="nama-kolom2">Tahun</label>
        <input type="number" id="nama-kolom2" v-model="tahun" min="1000" max="2027" required>
        <span class="pesan-galat">Masukkan tahun rilis film favorit Anda</span>
      </div>
      <div class="form-kolom">
        <label for="nama-kolom3">Rating</label>
        <input type="number" id="nama-kolom3" v-model="rating" min="1" max="100" required>
        <span class="pesan-galat">Masukkan rating film favorit Anda</span>
      </div>
      <button type="submit">Simpan</button>
    </form>
  </section>
</template>