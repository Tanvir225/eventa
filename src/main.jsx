import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import myCreatedRoute from "./Routes/Routes";
import AuthProvider from "./Hook/AuthProvider";
import CategoryProvider from "./Hook/CategoryProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <CategoryProvider>
          <RouterProvider router={myCreatedRoute}></RouterProvider>
        </CategoryProvider>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);
