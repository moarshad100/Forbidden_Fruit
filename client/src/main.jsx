import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateFamily from "./pages/createFamilyPage.jsx";
import BasicModal from "./components/modal_details.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/createfamily",
        element: <CreateFamily />,
      },
      {
        path: "/basicmodal",
        element: <BasicModal />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
