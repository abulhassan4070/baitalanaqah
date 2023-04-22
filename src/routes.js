import BlogPage from "views/home/pages/blog";
import CartPage from "views/home/pages/cart";
import CustomizePage from "views/home/pages/customize";
import HomePage from "views/home/pages/home";
import ShopPage from "views/home/pages/shop";
import ShowroomPage from "views/home/pages/showrooms";
import TailorsPage from "views/tailors/tailor";
import ContactPage from "views/home/pages/contact";
import LoginPage from "views/auth/loginpage";
import RegisterPage from "views/auth/registerpage";
import ForgotPage from "views/auth/forgotpage";
import AboutPage from "views/about/about";
import CollaborationsPage from "views/collaborations/collaborations";

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
    component: ForgotPage,
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
    secondary: "Collaborations",
    layout: "",
    path: "/collaborations",
    component: CollaborationsPage,
  },
  {
    name: "Home",
    secondary: "Tailors",
    layout: "",
    path: "/tailors",
    component: TailorsPage,
  },
  {
    name: "Home",
    secondary: "Contact",
    layout: "",
    path: "/contact",
    component: ContactPage,
  },
  {
    name: "Home",
    secondary: "About",
    layout: "",
    path: "/about",
    component: AboutPage,
  },
];
const routes = [...sidebarRoutes];

export default routes;
export { sidebarRoutes };
