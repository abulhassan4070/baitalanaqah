import React from "react";
import ReactDOM from "react-dom";
import "assets/css/App.css";
import { Route, BrowserRouter, Router } from "react-router-dom";
import AuthLayout from "views/auth";
import HomeLayout from "views/home";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
  <ChakraProvider>
    <React.StrictMode>
      <BrowserRouter>
        <Router>
          <Route path="/" component={HomeLayout} />
          <Route path="/auth" component={AuthLayout} />
        </Router>
      </BrowserRouter>
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById("root")
);
