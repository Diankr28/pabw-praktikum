import { reactive } from 'vue'

export const state = reactive({
  kategoriAktif: 'semua',
  daftarProyek: [],
  favorit: [],
  memuat: true,
  galat: ''
})

export function pilihKategori(nilai) {
  state.kategoriAktif = nilai
}

export function tambahFavorit(id) {
  const indeks = state.favorit.indexOf(id)
  if (indeks === -1) {
    state.favorit.push(id)
  } else {
    state.favorit.splice(indeks, 1)
  }
}

export function isiProyek(daftar) {
  state.daftarProyek = daftar
}

export function aturUlang() {
  state.kategoriAktif = 'semua'
  state.favorit = []
}

export function simpan(nilai) {
  try {
    localStorage.setItem('pabw-p11', JSON.stringify(nilai))
  } catch (e) {
    console.error('Gagal menyimpan ke localStorage', e)
  }
}

export function muat() {
  try {
    const data = localStorage.getItem('pabw-p11')
    return data ? JSON.parse(data) : null
  } catch (e) {
    return null
  }
}

export function pulihkan(data) {
  if (!data) return
  if (data.kategoriAktif) state.kategoriAktif = data.kategoriAktif
  if (Array.isArray(data.favorit)) state.favorit = data.favorit
}