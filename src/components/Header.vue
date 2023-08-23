<template>
  <div>
    <navbar></navbar>
    <div class="header">
      <div class="judul-header">
        <div class="form-tambah-buku">
          <h1>Tambah Buku Baru!</h1>

          <div class="kotak-input">
            <input
              type="text"
              placeholder="Link Gambar"
              v-model="dataInputBuku.gambar"
            />
          </div>
          <div class="kotak-input">
            <input
              type="text"
              placeholder="Judul Buku"
              v-model="dataInputBuku.title"
            />
          </div>
          <div class="kotak-input">
            <input
              type="text"
              placeholder="Pengarang"
              v-model="dataInputBuku.pengarang"
            />
          </div>
          <div class="kotak-input">
            <input
              type="text"
              placeholder="Kategori Buku"
              v-model="dataInputBuku.kategori"
            />
          </div>
          <div class="kotak-input">
            <input
              type="text"
              placeholder="Tahun Terbit"
              v-model="dataInputBuku.terbit"
            />
          </div>
          <div class="kotak-input">
            <textarea
              name=""
              id=""
              cols="5"
              rows="5"
              placeholder="Deskripsi Buku"
              v-model="dataInputBuku.deskripsi"
            ></textarea>
          </div>
          <button @click="postBuku" class="inputBtn">TAMBAHKAN</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { busEvent } from "../main";
import Navbar from "./Navbar";
export default {
  data() {
    return {
      dataInputBuku: {
        gambar: "",
        title: "",
        deskripsi: "",
        pengarang: "",
        kategori: "",
        terbit: ""
      }
    };
  },
  components: {
    navbar: Navbar
  },
  methods: {
    postBuku() {
      this.$http
        .post(
          "https://perpustakaannew-default-rtdb.firebaseio.com/libraryDanz.json",
          this.dataInputBuku
        )
        .then(
          response => {
            this.tambahBuku();
          },
          error => {
            console.log(error);
          }
        );
    },
    tambahBuku() {
      console.log("clicked");
      busEvent.$emit("menambahkanBuku", this.dataInputBuku);
      this.$router.back();
      this.dataInputBuku.title = "";
      this.dataInputBuku.deskripsi = "";
      this.dataInputBuku.pengarang = "";
      this.dataInputBuku.kategori = "";
      this.dataInputBuku.terbit = "";
    }
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
body {
  background-color: #00c4ff;
}
.header {
  background-color: #00c4ff;
  padding-bottom: 20px;
  width: 50%;
  margin: 0 auto;
}
.header .judul-header .judul {
  font-size: 29px;
  font-weight: bold;
  text-align: center;
  background-color: #ffe7a0;
  padding: 20px;
}

.header .form-tambah-buku {
  background-color: orange;
  margin: 30px 10px;
  padding: 10px;
  border-radius: 20px;
}
.header .form-tambah-buku h1 {
  text-align: center;
  font-size: 22px;
  font-weight: 700;
}
.header .form-tambah-buku .kotak-input {
  padding: 10px 0px;
}
.header .form-tambah-buku .kotak-input input,
textarea {
  width: 90%;
  border-radius: 10px;
  margin: 0 auto;
  display: block;
  padding: 10px;
  font-size: 20px;
}
.inputBtn {
  width: 80%;
  margin: 0 auto;
  background-color: aqua;
  padding: 10px;
  border-radius: 20px;
  display: block;
}

.inputGambar {
  content: "Select some files";
  display: inline-block;
  background-color: white;
  border: 1px solid #999;
  border-radius: 3px;
  padding: 5px 8px;
  cursor: pointer;
  text-shadow: 1px 1px #fff;
  font-weight: 700;
  font-size: 10pt;
}
</style>
