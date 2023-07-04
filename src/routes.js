import BlogPage from "views/home/pages/blog";
import CartPage from "views/home/pages/cart";
import HomePage from "views/home/pages/home";
import ShowroomPage from "views/home/pages/showrooms";
import TailorsPage from "views/tailors/tailor";
import ContactPage from "views/home/pages/contact";
import ForgotPage from "views/auth/forgotpage";
import AboutPage from "views/about/about";
import CollaborationsPage from "views/collaborations/collaborations";
import HowItWorksPage from "views/howitworks/howitworks";
import CustomizePage from "views/customize/customize";
import ShopCategories from "views/shop/helpers/categories";
import Category from "views/shop/helpers/category";
import Product from "views/products/helpers/product";
import BlogView from "views/blog/BlogView";
import Profile from "views/auth/profile";
import RegistrationComponent from "views/auth/register";
import LoginCompoent from "views/auth/login";

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
    secondary: "Blog",
    layout: "",
    path: "/blogs/blog",
    component: BlogView,
  },
  {
    name: "Home",
    secondary: "Login",
    layout: "",
    path: "/login",
    component: LoginCompoent,
  },
  {
    name: "Home",
    secondary: "Register",
    layout: "",
    path: "/register",
    component: RegistrationComponent,
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
    secondary: "Profile",
    layout: "",
    path: "/profile",
    component: Profile,
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
    name: "Home",
    secondary: "Shop",
    layout: "",
    path: "/shop",
    component: ShopCategories,
  },
  {
    name: "Shop",
    secondary: "Shop",
    layout: "",
    path: "/shop/:category",
    component: Category,
  },
];

const productsRoutes = [
  {
    name: "Product",
    secondary: "Product",
    layout: "",
    path: "/products/:product",
    component: Product,
  },
];
const routes = [...sidebarRoutes, ...productsRoutes];

export default routes;
export { sidebarRoutes, productsRoutes };
