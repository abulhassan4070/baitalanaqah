import React from "react";
import ReactDOM from "react-dom";
import "assets/css/App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomeLayout from "views/home";
import { ChakraProvider } from "@chakra-ui/react";
ReactDOM.render(
  <ChakraProvider>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<HomeLayout />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById("root")
);
