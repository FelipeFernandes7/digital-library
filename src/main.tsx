import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import { GlobalStyles } from "./styles.ts";
import { AuthProvider } from "./context/AuthContext.tsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <ChakraProvider>
        <Toaster position="top-center" reverseOrder={false} />
        <GlobalStyles />
        <RouterProvider router={router} />
      </ChakraProvider>
    </AuthProvider>
  </React.StrictMode>,
);
