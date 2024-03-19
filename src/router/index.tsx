import HomePage from "../pages/Home/HomePage";
import ProductPage from "../pages/Product/ProductPage";
const publicRouters = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/products",
    component: ProductPage,
  },
];

const privateRouters: never[] = [];

export { publicRouters, privateRouters };
