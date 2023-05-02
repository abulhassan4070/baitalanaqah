import React from "react";
import ReactDOM from "react-dom";
import "assets/css/App.css";
import "assets/css/customize.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomeLayout from "views/home";
import { ChakraProvider } from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/keyboard";
import "swiper/css/autoplay";
import "./i18nConfig";
import Wrapper from "contexts/Wrapper";

ReactDOM.render(
  <ChakraProvider>
    <React.StrictMode>
      <Wrapper>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<HomeLayout />} />
          </Routes>
        </BrowserRouter>
      </Wrapper>
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById("root")
);
