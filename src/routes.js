import HomePage from "./components/pages/HomePage.vue";
import DetailBuku from "./components/pages/DetailBuku.vue";
import AddBukuPage from "./components/pages/AddBukuPage.vue"
export const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage
  },
  {
    path: "/DetailBuku/:id",
    name: "detailBuku",
    component: DetailBuku
  },
  {
    path: "/MenambahkanBuku",
    name: "addBuku",
    component: AddBukuPage
  },
];
