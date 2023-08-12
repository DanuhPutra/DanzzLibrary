<template>
  <div class="detailContainer">
    <detail-unit :perpustakaan="detailBukuId"></detail-unit>
  </div>
  

</template>
<script>
import Buku from "../Buku.vue"
export default {
  data: function(){
    return{
      detailBukuId : {},
      detailBuku : this.$route.params.id
    }
  },
  props:["perpustakaan"],
  methods:{
    detailBukuBaru(){
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
            if ( key === this.detailBuku){
              this.detailBukuId = inputBuku[key];
              console.log(this.detailBukuId)
            }
          }
        });
    }
  },
  mounted(){
    this.detailBukuBaru();
  },
  created(){
    this.detailBukuBaru();
  },
  components:{
    "detail-unit" : Buku
  }
}
</script>
