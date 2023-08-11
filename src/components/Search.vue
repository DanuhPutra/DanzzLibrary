<template>
  <div class="searchBar">
    <input
      type="search"
      placeholder="Search Book Here"
      v-model="filteredBuku.mencari"
    />
    <button class="searchBtn" @click="searchBuku">Search</button>
  </div>
</template>
<script>
import { busEvent } from "../main";
export default {
  data() {
    return {
      filteredBuku: { mencari: "" }
    };
  },
  methods: {
    searchBuku() {
      busEvent.$emit("mencariBuku", this.filteredBuku);
      console.log("dari search " + this.filteredBuku);
    }
  }
};
</script>
<style>
.searchBar {
  display: flex;
  width: 90%;
  height: 50px;
  margin: 0 auto;
  gap: 20px;
  align-items: center;
  justify-content: center;
}
.searchBar .searchBtn {
  color: black;
  font-size: 16px;
  font-weight: bold;
  border-radius: 20px;
  padding: 5px;
}
.searchBar input {
  width: 50%;
  height: 50%;
  padding: 0px 20px;
  border-radius: 20px;
  background-color: wheat;
  border: none;
}
</style>
