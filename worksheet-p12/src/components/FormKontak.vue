<script setup>
import { ref } from 'vue'

const judul = ref('')
const tahun = ref('')
const rating = ref('')

function tangganiInputJudul(e) {
  const el = e.target
  if (el.value.trim() === '' && el.value.length > 0) {
    el.setCustomValidity('Judul tidak boleh hanya berisi spasi.')
  } else {
    el.setCustomValidity('')
  }
}

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
    <form @submit.prevent="handleSubmit" action="/simpan" method="post">
      <div class="form-kolom">
        <label for="nama-kolom1">Judul</label>
        <input 
          type="text" 
          id="nama-kolom1" 
          name="nama-kolom1"
          v-model="judul" 
          @input="tangganiInputJudul"
          required
        >
        <span class="pesan-galat">Masukkan judul film favorit Anda</span>
      </div>
      <div class="form-kolom">
        <label for="nama-kolom2">Tahun</label>
        <input 
          type="number" 
          id="nama-kolom2" 
          name="nama-kolom2"
          v-model="tahun" 
          min="1000" 
          max="2027" 
          required
        >
        <span class="pesan-galat">Masukkan tahun rilis film favorit Anda</span>
      </div>
      <div class="form-kolom">
        <label for="nama-kolom3">Rating</label>
        <input 
          type="number" 
          id="nama-kolom3" 
          name="nama-kolom3"
          v-model="rating" 
          min="1" 
          max="100" 
          required
        >
        <span class="pesan-galat">Masukkan rating film favorit Anda</span>
      </div>
      <button type="submit">Simpan</button>
    </form>
  </section>
</template>