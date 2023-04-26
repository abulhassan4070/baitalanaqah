import BlogPage from "views/home/pages/blog";
import CartPage from "views/home/pages/cart";
import HomePage from "views/home/pages/home";
import ShowroomPage from "views/home/pages/showrooms";
import TailorsPage from "views/tailors/tailor";
import ContactPage from "views/home/pages/contact";
import LoginPage from "views/auth/loginpage";
import RegisterPage from "views/auth/registerpage";
import ForgotPage from "views/auth/forgotpage";
import AboutPage from "views/about/about";
import CollaborationsPage from "views/collaborations/collaborations";
import HowItWorksPage from "views/howitworks/howitworks";
import CustomizePage from "views/customize/customize";
import ShopCategories from "views/shop/helpers/categories";
import AbayaCategory from "views/shop/helpers/abaya";
import ShopPage from "views/shop/shop";
import SuitsCategory from "views/shop/helpers/suits";

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
  {
    name: "Home",
    secondary: "How It Works",
    layout: "",
    path: "/howitworks",
    component: HowItWorksPage,
  },
  {
    name: "Home",
    secondary: "Customize",
    layout: "",
    path: "/customize",
    component: CustomizePage,
  },
  {
    name: "Shop",
    secondary: "Shop",
    layout: "",
    path: "/shop/*",
    component: ShopPage,
  },
];

const shopRoutes = [
  {
    name: "Home",
    secondary: "Shop",
    layout: "",
    path: "/shop",
    component: ShopCategories,
  },
  {
    name: "Suits",
    secondary: "Suits",
    layout: "",
    path: "/shop/suits",
    component: SuitsCategory,
  },
  {
    name: "Abaya",
    secondary: "Abaya",
    layout: "",
    path: "/shop/abaya",
    component: AbayaCategory,
  },
];
const routes = [...sidebarRoutes, ...shopRoutes];

export default routes;
export { sidebarRoutes, shopRoutes };
