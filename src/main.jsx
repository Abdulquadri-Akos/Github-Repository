import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import theme from "./theme.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </React.StrictMode>
  </BrowserRouter>
);
