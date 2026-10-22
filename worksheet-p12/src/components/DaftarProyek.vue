<script setup>
import { computed } from 'vue'
import { state, tambahFavorit } from '../state.js'
import { saring } from '../data.js'

const daftarTersaring = computed(() => {
  return saring(state.daftarProyek, state.kategoriAktif)
})
</script>

<template>
  <section id="bagian-3">
    <h2>Beranda</h2>
    
    <p v-if="state.memuat" class="muatg">Memuat data...</p>
    <p v-else-if="state.galat" class="pesan-kosong">{{ state.galat }}</p>
    
    <p v-else-if="daftarTersaring.length === 0" class="pesan-kosong">
      Belum ada film favorit yang ditambahkan.
    </p>

    <div v-else class="galeri grid">
      <figure 
        v-for="proyek in daftarTersaring" 
        :key="proyek.id" 
        class="kartu"
      >
        <img 
          :src="proyek.gambar ? `/${proyek.gambar}` : '/image.png'" 
          :alt="`Gambar film ${proyek.judul}`" 
          width="640" 
          height="360" 
          loading="lazy" 
        />
        <figcaption class="kartu__isi">
          <h3 class="kartu__judul">{{ proyek.judul }}</h3>
          <small style="display: block; color: #666; margin-bottom: 8px;">
            Tahun: {{ proyek.tahun || '-' }} · Rating: {{ proyek.rating || '-' }} · Episode: {{ proyek.episode || '1' }}
          </small>
          <p>{{ proyek.sinopsis || 'Tidak ada sinopsis ketersediaan saat ini.' }}</p>
          <button 
            type="button" 
            class="favorit"
            style="margin-top: 8px;"
            @click="tambahFavorit(proyek.id)"
          >
            {{ state.favorit.includes(proyek.id) ? '★ Favorit' : '☆ Tambah Favorit' }}
          </button>
        </figcaption>
      </figure>
    </div>
  </section>
</template>