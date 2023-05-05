// Chakra imports
import {
  Portal,
  Box,
  useDisclosure,
  CircularProgress,
  Text,
  Center,
} from '@chakra-ui/react';
import Footer from 'components/footer/FooterAdmin.js';
// Layout components
import NavbarAdmin from 'components/navbar/NavbarAdmin.js';
import Sidebar from 'components/sidebar/Sidebar.js';
import { AdminContext } from 'contexts/AdminContext';
import { SidebarContext } from 'contexts/SidebarContext';
import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import routes from 'routes.js';
export default function Dashboard(props) {
  const { ...rest } = props;
  const [fixed] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [loading, setLoading] = useState(false);
  const getActiveRoute = routes => {
    let activeRoute = 'Default Brand Text';
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveRoute = getActiveRoute(routes[i].items);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else if (routes[i].category) {
        let categoryActiveRoute = getActiveRoute(routes[i].items);
        if (categoryActiveRoute !== activeRoute) {
          return categoryActiveRoute;
        }
      } else {
        if (
          window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          return routes[i].name;
        }
      }
    }
    return activeRoute;
  };
  const getActiveNavbar = routes => {
    let activeNavbar = false;
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveNavbar = getActiveNavbar(routes[i].items);
        if (collapseActiveNavbar !== activeNavbar) {
          return collapseActiveNavbar;
        }
      } else if (routes[i].category) {
        let categoryActiveNavbar = getActiveNavbar(routes[i].items);
        if (categoryActiveNavbar !== activeNavbar) {
          return categoryActiveNavbar;
        }
      } else {
        if (
          window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          return routes[i].secondary;
        }
      }
    }
    return activeNavbar;
  };
  const getActiveNavbarText = routes => {
    let activeNavbar = false;
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveNavbar = getActiveNavbarText(routes[i].items);
        if (collapseActiveNavbar !== activeNavbar) {
          return collapseActiveNavbar;
        }
      } else if (routes[i].category) {
        let categoryActiveNavbar = getActiveNavbarText(routes[i].items);
        if (categoryActiveNavbar !== activeNavbar) {
          return categoryActiveNavbar;
        }
      } else {
        if (
          window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          return routes[i].messageNavbar;
        }
      }
    }
    return activeNavbar;
  };
  const getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === '/admin') {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      if (prop.collapse) {
        return getRoutes(prop.items);
      }
      if (prop.category) {
        return getRoutes(prop.items);
      } else {
        return null;
      }
    });
  };
  const { onOpen } = useDisclosure();

  return (
    <Box>
      {!loading ? (
        <AdminContext.Provider value={{ setLoading }}>
          <SidebarContext.Provider
            value={{
              toggleSidebar,
              setToggleSidebar,
            }}
          >
            <Sidebar routes={routes} display="none" {...rest} />
            <Box
              float="right"
              minHeight="100vh"
              height="100%"
              overflow="auto"
              position="relative"
              maxHeight="100%"
              w={{ base: '100%', xl: 'calc( 100% - 290px )' }}
              maxWidth={{ base: '100%', xl: 'calc( 100% - 290px )' }}
              transition="all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
              transitionDuration=".2s, .2s, .35s"
              transitionProperty="top, bottom, width"
              transitionTimingFunction="linear, linear, ease"
            >
              <Portal>
                <Box>
                  <NavbarAdmin
                    onOpen={onOpen}
                    logoText={'Bait Al Anaqah'}
                    brandText={getActiveRoute(routes)}
                    secondary={getActiveNavbar(routes)}
                    message={getActiveNavbarText(routes)}
                    fixed={fixed}
                    {...rest}
                  />
                </Box>
              </Portal>
              <>
                <Box
                  mx="auto"
                  p={{ base: '20px', md: '30px' }}
                  pe="20px"
                  minH="100vh"
                  pt="50px"
                >
                  <Switch>
                    {getRoutes(routes)}
                    <Redirect from="/" to="/admin/dashboard" />
                  </Switch>
                </Box>
              </>
              <Box>
                <Footer />
              </Box>
            </Box>
          </SidebarContext.Provider>
        </AdminContext.Provider>
      ) : (
        <Center>
          <div style={{ marginTop: '50vh' }}></div>
          <CircularProgress isIndeterminate color="green.300" />
          <br />
          <Text ml="2">Loading...</Text>
        </Center>
      )}
    </Box>
  );
}
