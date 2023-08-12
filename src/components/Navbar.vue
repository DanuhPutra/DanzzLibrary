<template>
<div class="navContainer">
<div class="navLogo"><h1>DanzzLibrary</h1></div>
<div class="navList">
<router-link :to="{name: 'Home'}" tag="button" class="buttonNav"> Home </router-link>
 <router-link :to="{name: 'addBuku'}" tag="button" class="buttonNav"> Add Buku</router-link>
</div>
</div>
</template>
<style>
.navContainer{
    background-color: #1D5D9B;
    display: flex;
    height: 70px;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;

}
.navContainer .navLogo h1{
    color: white;
    font-size: 30px;
    text-transform: uppercase;
}
.navContainer .navList .buttonNav{
    padding: 10px;
    font-size: 18px;
    border-radius: 20px;
    font-weight: bold;
    cursor: pointer;
    background-color: #75C2F6;
    color: black;
    width: 120px;
    margin: 10px;
}
.navContainer .navList .buttonNav:hover{
    background-color: #4682A9;
    color: white;
}
</style>