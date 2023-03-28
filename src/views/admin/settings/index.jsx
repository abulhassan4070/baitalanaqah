import { Box, Icon, LinkBox, SimpleGrid, Text } from "@chakra-ui/react";

import React from "react";
import Card from "components/card/Card";
import { NavLink, Route, Switch } from "react-router-dom";
import { AdminContext } from "contexts/AdminContext";
import { settingsRoutes } from "routes";

export default function AdminSettings() {
  const admin = React.useContext(AdminContext);
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin/settings") {
        if (
          admin.user.permissions.includes(
            prop.layout.replace("/admin", "") + prop.path
          ) ||
          admin.user.type === "Super admin"
        ) {
          return (
            <Route
              path={prop.layout + prop.path}
              component={prop.component}
              key={key}
            />
          );
        }
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
  return (
    <Switch>
      {getRoutes(settingsRoutes)}
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        <Card w="100%" p="10px">
          <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} spacing={5}>
            {settingsRoutes.map(
              (route, index) =>
                !route.isHide && (
                  <NavLink
                    to={route.layout + route.path}
                    style={{ textDecoration: "none" }}
                  >
                    <LinkBox
                      as="article"
                      maxW="sm"
                      p="5"
                      borderWidth="1px"
                      rounded="md"
                      textAlign={{ sm: "center" }}
                      overflow="hidden"
                    >
                      <Icon as={route.icon} w={20} h={20} color="brand.500" />
                      <Text fontWeight="bold" textAlign="center" fontSize="xl">
                        {route.name}
                      </Text>
                    </LinkBox>
                  </NavLink>
                )
            )}
          </SimpleGrid>
        </Card>
      </Box>
    </Switch>
  );
}
