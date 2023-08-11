<template>
  <div class="header">
    <div class="judul-header">
      <h1 class="judul">DanzzLibrary</h1>
      <div class="form-tambah-buku">
        <h1>Tambah Buku Baru!</h1>
        <!-- <div class="uploadImg">
          <h1 class="heading">Upload Gambar :</h1>
          <div class="kotak-input ">
            <input
              type="file"
              class="inputGambar"
              placeholder="Link Gambar"
              v-on:click="gambarFileChange"
            />
          </div>
        </div> -->

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
        <button @click="tambahBuku" class="inputBtn">TAMBAHKAN</button>
      </div>
    </div>
  </div>
</template>
<script>
import { busEvent } from "../main";
export default {
  data() {
    return {
      dataInputBuku: {
        gambarApi: "",
        gambar: "",
        title: "",
        deskripsi: "",
        pengarang: "",
        kategori: "",
        terbit: ""
      }
    };
  },
  methods: {
    tambahBuku() {
      console.log("clicked");
      busEvent.$emit("menambahkanBuku", this.dataInputBuku);
      this.dataInputBuku.title = "";
      this.dataInputBuku.deskripsi = "";
      this.dataInputBuku.pengarang = "";
      this.dataInputBuku.kategori = "";
      this.dataInputBuku.terbit = "";
    }
    // changeTobase64(file) {
    //   return new Promise((resolve, reject) => {
    //     const reader = new FileReader();
    //     reader.readAsDataURL(file);
    //     reader.onload = () => resolve(reader.result);
    //     reader.onerror = reject;
    //     console.log(reader);
    //   });
    // },
    // gambarFileChange(e) {
    //   console.log(e.target.files);
    //   const files = e.target.files;
    //   console.log(files);
    //   if (!files.length) {
    //     return (this.dataInputBuku.gambarApi = this.changeTobase64(files));
    //   }
    //   console.log(files);
    // }
  }
};
</script>
<style>
.header {
  background-color: #00c4ff;
  flex-basis: 20%;
  padding-bottom: 20px;
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
