import NavigationHeader from "components/header";
import NavigationFooter from "components/footer";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import routes from "routes";
import NotFound from "./pages/not-found";

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
      <Suspense fallback="...loading">
        <NavigationHeader />
        <Routes>
          {getRoutes(routes)}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <NavigationFooter />
      </Suspense>
    </>
  );
}
