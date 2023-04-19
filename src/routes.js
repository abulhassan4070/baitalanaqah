import BlogPage from "views/home/pages/blog";
import CartPage from "views/home/pages/cart";
import CustomizePage from "views/home/pages/customize";
import ForgotPasswordPage from "views/home/pages/forgotpage";
import HomePage from "views/home/pages/home";
import LoginPage from "views/home/pages/loginpage";
import RegisterPage from "views/home/pages/registerpage";
import ShopPage from "views/home/pages/shop";
import ShowroomPage from "views/home/pages/showrooms";
import TailorsPage from "views/tailors/tailor";

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
  {
    name: "Home",
    secondary: "Login",
    layout: "",
    path: "/login",
    component: LoginPage,
  },
  {
    name: "Home",
    secondary: "Register",
    layout: "",
    path: "/register",
    component: RegisterPage,
  },
  {
    name: "Home",
    secondary: "Forgot Password",
    layout: "",
    path: "/forgot-password",
    component: ForgotPasswordPage,
  },
  {
    name: "Home",
    secondary: "Cart",
    layout: "",
    path: "/cart",
    component: CartPage,
  },

  {
    name: "Home",
    secondary: "Tailors",
    layout: "",
    path: "/tailors",
    component: TailorsPage,
  },
];
const routes = [...sidebarRoutes];

export default routes;
export { sidebarRoutes };
