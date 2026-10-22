<script setup>
import { state, pilihKategori, aturUlang } from '../state.js'
</script>

<template>
  <div class="filter">
    <button 
      type="button" 
      class="tombol-filter" 
      :class="{ aktif: state.kategoriAktif === 'semua' }"
      @click="pilihKategori('semua')"
    >
      Semua
    </button>
    <button 
      type="button" 
      class="tombol-filter" 
      :class="{ aktif: state.kategoriAktif === '2026' }"
      @click="pilihKategori('2026')"
    >
      2026
    </button>
    <button 
      type="button" 
      class="tombol-filter" 
      :class="{ aktif: state.kategoriAktif === '2025' }"
      @click="pilihKategori('2025')"
    >
      2025
    </button>
    <button 
      type="button" 
      class="tombol-filter" 
      :class="{ aktif: state.kategoriAktif === '2024' }"
      @click="pilihKategori('2024')"
    >
      2024
    </button>
    <button 
      type="button" 
      class="tombol-filter" 
      :class="{ aktif: state.kategoriAktif === '2023' }"
      @click="pilihKategori('2023')"
    >
      2023
    </button>
    <button 
      type="button" 
      id="atur-ulang" 
      class="tombol-filter" 
      @click="aturUlang"
    >
      Atur Ulang
    </button>
  </div>
</template>