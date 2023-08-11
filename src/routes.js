import DetailBuku from "./components/pages/DetailBuku.vue";
import HomePage from "./components/pages/HomePage.vue";
export const routes = [
  {
    path: "/",
    name: "Home",
    components: HomePage
  },
  {
    path: "/DetailBuku",
    name: "detailBuku",
    components: DetailBuku
  }
];
