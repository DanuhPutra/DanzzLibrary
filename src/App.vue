<template>
  <div class="container">
    <header-library @menambahkanBuku="bukuBaru"></header-library>

    <div class="kotak-buku">
      <item-search @mencariBuku="filterBuku"></item-search>
      <div class="pembungkus-buku" v-if="memfilterBuku.length > 0">
        <item-buku
          v-for="(data, index) in memfilterBuku"
          :key="index"
          :perpustakaan="data"
          :index="index"
        ></item-buku>
      </div>

      <div class="kosong" v-else>
        <p>
          Buku di perpustakaan kosong
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "./components/Header";
import Buku from "./components/Buku.vue";
import Search from "./components/Search.vue";
import { busEvent } from "./main";
export default {
  data() {
    return {
      dataBuku: [
        {
          title: "Bhs.Indonesia",
          deskripsi:
            "buku ini berisi tentang materi-materi yang berkaitan dengan bahasa indonesia. didalam nya lengkap bersi dari pengetahuan dasar sampai pengetahuan expert",
          pengarang: "Siti",
          kategori: "pengetahuan",
          terbit: "20/02/2023"
        }
      ],
      memfilterBuku: [
        {
          title: "Bhs.Indonesia",
          deskripsi:
            "buku ini berisi tentang materi-materi yang berkaitan dengan bahasa indonesia. didalam nya lengkap bersi dari pengetahuan dasar sampai pengetahuan expert",
          pengarang: "Siti",
          kategori: "pengetahuan",
          terbit: "20/02/2023"
        }
      ]
    };
  },
  components: {
    "header-library": Header,
    "item-buku": Buku,
    "item-search": Search
  },
  methods: {
    bukuBaru(dataInputBuku) {
      this.dataBuku.push({ ...dataInputBuku });
      this.memfilterBuku.push({ ...dataInputBuku });
      console.log(dataInputBuku);
      console.log(this.dataBuku);
    },
    filterBuku(filteredBuku) {
      this.memfilterBuku = this.dataBuku.filter(data => {
        return (
          data.title.toLowerCase().search(filteredBuku.mencari.toLowerCase()) !=
          -1
        );
      });
      console.log(this.memfilterBuku);
      console.log(filteredBuku.mencari);
    }
  },
  mounted() {
    busEvent.$on("menghapusBuku", index => {
      this.dataBuku.splice(index, 1);
      this.memfilterBuku.splice(index, 1);
      console.log(this.memfilterBuku.length);
    });
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
.container {
  background-color: #30a2ff;
  display: flex;
  height: 100vh;
  width: 100vw;
}
.kotak-buku {
  margin-top: 20px;
  margin: 10px;
  margin-right: 0px;
  margin-bottom: 0px;
  padding-bottom: 30px;
  display: block;
  flex-basis: 80%;
}
.pembungkus-buku {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: auto;
  width: 100%;
  gap: 30px;
}
.kosong {
  color: rgb(0, 0, 0);
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 85vh;
  width: 100%;
  font-weight: bold;
}

@media only screen and (max-width: 800px) {
  .container {
    display: block;
    height: auto;
  }
}
</style>
