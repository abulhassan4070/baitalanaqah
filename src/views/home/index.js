import NavigationHeader from "components/header";
import NavigationFooter from "components/footer";
import React from "react";
import { Route, Routes } from "react-router-dom";
import routes from "routes";

export default function Home() {
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "") {
        return (
          <Route
            path={prop.layout + prop.path}
            element={<prop.component name={prop.name.toLowerCase()} />}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  return (
    <>
      <NavigationHeader />
      <Routes>{getRoutes(routes)}</Routes>
      <NavigationFooter />
    </>
  );
}
