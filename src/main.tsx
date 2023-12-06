// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
// import {ColorModeScript} from "@chakra-ui/color-mode"
import "./style/global.css";
import "./i18n/i18n.ts";
// import { BrowserRouter } from "react-router-dom";
import { ChekUserProvider } from "./context/ChekUser.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  // <BrowserRouter>
  <ChekUserProvider>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </ChekUserProvider>
  // </BrowserRouter>
  // </React.StrictMode>
);
