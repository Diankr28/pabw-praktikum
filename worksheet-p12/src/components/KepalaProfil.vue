<script setup>
const props = defineProps({
  profil: { type: Object, required: true },
})
</script>

<template>
  <header>
    <input type="checkbox" id="tema" class="pengalih-tema">
    <label for="tema" class="tombol-tema">Tema gelap</label>

    <div class="header-baris">
      <h1>List Film Favorit</h1>
      <nav class="navbar" aria-label="Navigasi utama">
        <ul>
          <li><a href="#bagian-3">Beranda</a></li>
          <li><a href="#bagian-1">Biodata Film</a></li>
          <li><a href="#bagian-2">Review Film</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>