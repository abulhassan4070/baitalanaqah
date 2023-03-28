import {
  Text,
  Box,
  SimpleGrid,
  LinkBox,
  Icon,
  useToast,
} from "@chakra-ui/react";
import React from "react";

import Card from "components/card/Card";
import { AdminContext } from "contexts/AdminContext";
import { NavLink, Route, Switch, useLocation } from "react-router-dom";
import axios from "axios";
import { singleUserReportRoutes } from "routes";
import InputField from "components/fields/InputField";
import { userApiUrl } from "variables/constants";
export default function SingleUserReport() {
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = React.useState(true);
  const location = useLocation().search;
  const [userid, setUserid] = React.useState("");
  const [data, setData] = React.useState(null);
  const admin = React.useContext(AdminContext);
  const toast = useToast();
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin/userreports") {
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
  React.useEffect(() => {
    if (location) {
      const params = new URLSearchParams(location);
      const userid = params.get("id");
      setUserid(userid);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (userid.length === 10) {
      axios
        .get(
          `${userApiUrl()}?action=dashboard&mode=getUserData&username=${
            admin.user.username
          }&token=${admin.user.token}&userid=${userid}`
        )
        .then((res) => {
          if (res.data.error.code === "#200") {
            setData(res.data.data.user);
          } else {
            toast({
              title: "Error",
              description: res.data.error.message,
              status: "error",
              duration: 9000,
              isClosable: true,
            });
          }
        });
    } else {
      setData(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userid]);
  return (
    <Switch>
      {getRoutes(singleUserReportRoutes)}
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        <Card w="100%" p="10px">
          <InputField
            name="MB Userid"
            label="Mahabhojanam Userid"
            value={userid}
            onChange={(e) => {
              setUserid(e.target.value);
              window.history.pushState(
                {},
                "",
                `/admin/userreports/singleuser?id=${e.target.value}`
              );
            }}
            placeholder="MB Userid"
          />
          {data && (
            <>
              <Text fontSize="xl" fontWeight="bold">
                Name: {data.first_name} {data.last_name}
              </Text>
              <Text fontSize="xl" fontWeight="bold">
                Telephone: {data.telephone}
              </Text>
              <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} spacing={5}>
                {singleUserReportRoutes.map((route, index) =>
                  route.isHide ? (
                    <></>
                  ) : admin.user.permissions.includes(
                      route.layout.replace("admin/", "") + route.path
                    ) ||
                    admin.user.permissions.includes(route.path) ||
                    admin.user.type === "Super admin" ? (
                    <NavLink
                      to={route.layout + route.path + "?id=" + userid}
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
                        key={index}
                      >
                        <Icon as={route.icon} w={20} h={20} color="brand.500" />
                        <Text
                          fontWeight="bold"
                          textAlign="center"
                          fontSize="xl"
                        >
                          {route.name}
                        </Text>
                      </LinkBox>
                    </NavLink>
                  ) : (
                    <></>
                  )
                )}
              </SimpleGrid>
            </>
          )}
        </Card>
      </Box>
    </Switch>
  );
}
