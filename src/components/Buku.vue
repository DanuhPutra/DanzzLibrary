<template>
  <div class="wrapper-buku">
    <div class="judul-buku">
      <img :src="perpustakaan.gambar" :alt="perpustakaan.title" />
      <h1>{{ perpustakaan.title }}</h1>
    </div>
    <div class="deskripsi-buku">
      <p>
        {{ perpustakaan.deskripsi }}
      </p>
      <h2>{{ perpustakaan.pengarang }}</h2>
      <h3>{{ perpustakaan.kategori }}</h3>
      <h4>{{ perpustakaan.terbit }}</h4>
      <button class="btnBuku" @click="HapusBuku">HAPUS BUKU</button>
    </div>
  </div>
</template>
<script>
import { busEvent } from "../main";
export default {
  props: ["perpustakaan", "index"],
  methods: {
    HapusBuku() {
      busEvent.$emit("menghapusBuku", this.index);
      console.log("menghapus " + this.index);
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
  margin: 0 auto;
  border-radius: 10px;
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
.btnBuku {
  background-color: aliceblue;
  color: black;
  padding: 3px;
  font-size: 7px;
  width: auto;
  bottom: 0;
  position: absolute;
  margin: 3px;
  right: 0;
  border-radius: 10px;
}
.btnBuku:hover {
  background-color: black;
  color: orange;
  cursor: pointer;
}
</style>
