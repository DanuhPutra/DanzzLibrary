<template>
  <div class="container">
  <navbar-buku></navbar-buku>
  <item-search></item-search>
    <div class="kotak-buku">
      
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
import navbar from "../Navbar"
import Buku from "../Buku";
import Search from "../Search";
import { busEvent } from "../../main.js";
export default {
  data() {
    return {
      dataBuku: [
        {
          id: 1,
          gambar:
            "https://disk.mediaindonesia.com/files/news/2022/12/30/WhatsApp%20Image%202022-12-22%20at%2017.06.28.jpg ",
          title: "Bhs.Indonesia ",
          deskripsi:
            "buku ini berisi tentang materi-materi yang berkaitan dengan bahasa indonesia. didalam nya lengkap bersi dari pengetahuan dasar sampai pengetahuan expert",
          pengarang: "Siti",
          kategori: "pengetahuan",
          terbit: "20/02/2023"
        }
      ],
      memfilterBuku: [
        {
          id: 2,
          gambar:
            "https://disk.mediaindonesia.com/files/news/2022/12/30/WhatsApp%20Image%202022-12-22%20at%2017.06.28.jpg",
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
    "item-buku": Buku,
    "item-search": Search,
    "navbar-buku": navbar
  },
  methods: {
    bukuBaru(dataInputBuku) {
      this.dataBuku.push({ ...dataInputBuku });
      this.memfilterBuku.push({ ...dataInputBuku });
      console.log(dataInputBuku);
      console.log(this.dataBuku);
    },
    getNewBukuData() {
      this.$http
        .get(
          "https://perpustakaannew-default-rtdb.firebaseio.com/libraryDanz.json"
        )
        .then(response => {
          console.log(response.json());
          return response.json();
        })
        .then(inputBuku => {
          console.log(inputBuku);
          for (let key in inputBuku) {
            // if (!this.dataBuku.find(data => data.id == inputBuku[key].id)) {
            //   this.dataBuku.push({ ...inputBuku[key], id: key });
            //   this.memfilterBuku.push({ ...inputBuku[key], id: key });
            // }
            // console.log(this.dataBuku);
            const urutanBuku = {
              ...inputBuku[key],
              id : key
            };
            this.dataBuku.push(urutanBuku);
            this.memfilterBuku.push(urutanBuku);
            console.log(this.memfilterBuku)
          }
        });
    }
  },
  mounted() {
    busEvent.$on("menghapusBuku", index => {
      this.dataBuku.splice(index, 1);
      this.memfilterBuku.splice(index, 1);
      console.log(this.memfilterBuku.length);
    });
    busEvent.$on("mencariBuku", filteredBuku => {
      this.memfilterBuku = this.dataBuku.filter(data => {
        return (
          data.title.toLowerCase().search(filteredBuku.mencari.toLowerCase()) !=
          -1
        );
      });
      console.log("mencari " + this.memfilterBuku);
      console.log("filter buku " + filteredBuku.mencari);
    });
    this.getNewBukuData();
    // busEvent.$on("menambahkanBuku", dataInputBuku => {
    //   this.$http
    //     .post(
    //       "https://perpustakaannew-default-rtdb.firebaseio.com/libraryDanz.json",
    //       dataInputBuku
    //     )
    //     .then(
    //       response => {
    //         this.getNewBukuData();
    //       },
    //       error => {
    //         console.log(error);
    //       }
    //     );
    // });
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
  height: 100vh;
  width: 100vw;
}
.navbar{
  background-color: black;
  color: white;
  text-align: center;
  padding: 20px;
}
.kotak-buku {
  margin-top: 20px;
  margin: 10px;
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
  align-items: center;
  justify-content: center;
}
.kosong {
  color: rgb(0, 0, 0);
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
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
