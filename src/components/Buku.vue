<template>
  <div class="wrapper-buku" v-bind:class="{ pindahHalaman: pindah }">
    <div class="judul-buku" v-bind:class="{ imageDetail: pindah }">
      <img :src="perpustakaan.gambar" :alt="perpustakaan.title" />
      <h1>{{ perpustakaan.title }}</h1>
    </div>
    <div class="deskripsi-buku" v-bind:class="{ deskripsiDetail: pindah }">
      <p>
        {{ perpustakaan.deskripsi }}
      </p>
      <h2>{{ perpustakaan.pengarang }}</h2>
      <h3>{{ perpustakaan.kategori }}</h3>
      <h4>{{ perpustakaan.terbit }}</h4>

      <div class="button">
        <button class="btnBuku" @click="HapusBuku" v-if="perpustakaan.id">
          HAPUS BUKU
        </button>
        <router-link
          class="btnBuku"
          tag="button"
          :to="{ name: 'detailBuku', params: { id: perpustakaan.id } }"
          v-if="perpustakaan.id"
          >DETAIL BUKU</router-link
        >
        <router-link
          class="btnBuku"
          tag="button"
          :to="{ name: 'Home' }"
          v-if="pindah"
          >Back to Home
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { busEvent } from "../main";
export default {
  props: ["pindah", "perpustakaan", "index"],
  methods: {
    HapusBuku() {
      busEvent.$emit("menghapusBuku", this.perpustakaan.id);
      console.log("menghapus " + this.perpustakaan.id);
    }
  }
};
</script>
<style>
.wrapper-buku {
  background-color: rgb(122, 169, 153);
  display: flex;
  border-width: 3px;
  border-style: solid;
  height: 230px;
  width: 350px;
  border-radius: 10px;
  margin: 0px 20px;
}
.wrapper-buku .judul-buku {
  color: white;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}
.wrapper-buku .judul-buku h1 {
  font-size: 24px;
  text-transform: capitalize;
}
.wrapper-buku .judul-buku img {
  width: 80px;
  height: 80px;
}
.wrapper-buku .deskripsi-buku {
  border-left: 2px solid;
  width: 50%;
  background-color: aliceblue;
  position: relative;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
.wrapper-buku .deskripsi-buku p {
  font-size: 12px;
  margin: 10px;
}
.wrapper-buku .deskripsi-buku h2 {
  font-size: 15px;
  text-align: center;
  font-weight: 600;
}
.wrapper-buku .deskripsi-buku h3 {
  text-align: center;
  font-size: 14px;
  font-weight: 400;
}
.deskripsi-buku h4 {
  font-size: 10px;
  font-weight: 100;
  bottom: 0;
  text-align: center;
}
.wrapper-buku .deskripsi-buku .button {
  width: 100%;
  height: 30px;
  position: absolute;
  bottom: 0;
  padding: 10px;
}
.btnBuku {
  background-color: aliceblue;
  color: black;
  padding: 5px;
  font-size: 10px;
  width: auto;
  border-radius: 10px;
  margin: 0 auto;
}
.btnBuku:hover {
  background-color: black;
  color: orange;
  cursor: pointer;
}
.pindahHalaman {
  background-color: red;
  height: 80vh;
  width: 80vw;
  margin: 0 auto;
  margin-top: 4%;
}
.pindahHalaman .imageDetail img {
  width: 80%;
  height: 80%;
  border-radius: 20px;
}
.pindahHalaman .imageDetail h1 {
  font-size: 0px;
}
.pindahHalaman .deskripsiDetail p {
  font-size: 24px;
}
.pindahHalaman .deskripsiDetail h2 {
  font-size: 22px;
  color: yellow;
}
.pindahHalaman .deskripsiDetail h3 {
  font-size: 22px;
  font-weight: bold;
  color: green;
}
.pindahHalaman .deskripsiDetail h4 {
  font-size: 22px;
  font-weight: bold;
  color: red;
}
</style>
