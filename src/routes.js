import BlogPage from "views/home/pages/blog";
import CustomizePage from "views/home/pages/customize";
import HomePage from "views/home/pages/home";
import ShopPage from "views/home/pages/shop";
import ShowroomPage from "views/home/pages/showrooms";

const sidebarRoutes = [
  {
    name: "Home",
    secondary: "Home",
    layout: "",
    path: "/",
    component: HomePage,
  },
  {
    name: "Home",
    secondary: "Customize",
    layout: "",
    path: "/customize",
    component: CustomizePage,
  },

  {
    name: "Home",
    secondary: "Shop",
    layout: "",
    path: "/shop",
    component: ShopPage,
  },

  {
    name: "Home",
    secondary: "Showrooms",
    layout: "",
    path: "/showrooms",
    component: ShowroomPage,
  },

  {
    name: "Home",
    secondary: "Blogs",
    layout: "",
    path: "/blogs",
    component: BlogPage,
  },
];
const routes = [...sidebarRoutes];

export default routes;
export { sidebarRoutes };
