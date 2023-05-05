import { Icon } from '@chakra-ui/react';
import ChangePassword from 'admin/dashboard/change-password';
import MainDashboard from 'admin/dashboard/dashboard';
import Profile from 'admin/dashboard/profile';
import { MdOutlineDashboard, MdPerson, MdSettings } from 'react-icons/md';

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
