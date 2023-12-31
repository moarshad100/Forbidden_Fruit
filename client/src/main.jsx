import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainFamily from "./pages/createMainFamily.jsx";
import SavedFamily from "./pages/SavedFamiliesPages.jsx";
import Member from "./pages/singleFamily.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/mainfamily",
        element: <MainFamily />,
      },
      {
        path: "/savedfamily",
        element: <SavedFamily />,
      },
      {
        path: "/member/:memberId",
        element: <Member />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
