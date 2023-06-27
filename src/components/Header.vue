<template>
  <div class="header">
    <div class="judul-header">
      <h1 class="judul">DanzzLibrary</h1>
      <div class="form-tambah-buku">
        <h1>Tambah Buku Baru!</h1>
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
export default {
  data() {
    return {
      dataInputBuku: {
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
      this.$emit("menambahkanBuku", this.dataInputBuku);
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
</style>
