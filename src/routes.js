import { Icon } from '@chakra-ui/react';
import Blogs from 'admin/blogs/blogs';
import ChangePassword from 'admin/dashboard/change-password';
import MainDashboard from 'admin/dashboard/dashboard';
import Profile from 'admin/dashboard/profile';
import OrderHistory from 'admin/orders/orders';
import { FaCartPlus, FaNewspaper, FaUser } from 'react-icons/fa';
import { IoBag, IoChatbox } from 'react-icons/io5';
import {
  MdCategory,
  MdOutlineDashboard,
  MdPerson,
  MdSettings,
} from 'react-icons/md';
import AllCategories from 'admin/products/categories';
import AllProducts from 'admin/products/products';
import UsersHistory from 'admin/users/users';
import Contact from 'admin/contact/contact';
import CreateCategory from 'admin/products/createcategory';

const sidebarRoutes = [
  {
    name: 'Dashboard',
    secondary: 'Analytics',
    layout: '/admin',
    path: '/dashboard',
    icon: (
      <Icon
        as={MdOutlineDashboard}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    component: MainDashboard,
  },
  {
    name: 'Orders',
    secondary: 'Management',
    layout: '/admin',
    path: '/orders',
    icon: <Icon as={FaCartPlus} width="20px" height="20px" color="inherit" />,
    component: OrderHistory,
  },
  {
    name: 'Users',
    secondary: 'Management',
    layout: '/admin',
    path: '/users',
    icon: <Icon as={FaUser} width="20px" height="20px" color="inherit" />,
    component: UsersHistory,
  },
  {
    name: 'Products',
    secondary: 'Ecommerce',
    layout: '/admin',
    path: '/products',
    icon: <Icon as={IoBag} width="20px" height="20px" color="inherit" />,
    component: AllProducts,
  },
  {
    name: 'Categories',
    secondary: 'Ecommerce',
    layout: '/admin',
    path: '/categories',
    icon: <Icon as={MdCategory} width="20px" height="20px" color="inherit" />,
    component: AllCategories,
  },
  {
    name: 'Add Category',
    secondary: 'Ecommerce',
    layout: '/admin',
    path: '/addcategory',
    icon: <Icon as={MdCategory} width="20px" height="20px" color="inherit" />,
    component: CreateCategory,
    isHide: true,
  },
  // {
  //   name: 'Tailors',
  //   secondary: 'Management',
  //   layout: '/admin',
  //   path: '/tailors',
  //   icon: <Icon as={MdWork} width="20px" height="20px" color="inherit" />,
  //   component: Tailors,
  // },
  // {
  //   name: 'Collaborations',
  //   secondary: 'Views',
  //   layout: '/admin',
  //   path: '/collaborations',
  //   icon: <Icon as={MdSupport} width="20px" height="20px" color="inherit" />,
  //   component: Collaborations,
  // },
  {
    name: 'Blogs',
    secondary: 'Views',
    layout: '/admin',
    path: '/blogs',
    icon: <Icon as={FaNewspaper} width="20px" height="20px" color="inherit" />,
    component: Blogs,
  },
  {
    name: 'Contacts',
    secondary: 'Reports',
    layout: '/admin',
    path: '/contacts',
    icon: <Icon as={IoChatbox} width="20px" height="20px" color="inherit" />,
    component: Contact,
  },
  {
    name: 'Change Password',
    secondary: 'Profile',
    layout: '/admin',
    icon: <Icon as={MdSettings} width="20px" height="20px" color="inherit" />,
    path: '/change-password',
    component: ChangePassword,
    isHide: true,
  },
  {
    name: 'Profile',
    secondary: 'Profile',
    layout: '/admin',
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    path: '/profile',
    component: Profile,
    isHide: true,
  },
];
const routes = [...sidebarRoutes];

export default routes;
export { sidebarRoutes };
