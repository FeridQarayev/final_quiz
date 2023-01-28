import React from "react";
import Add from "../pages/add";
import Detail from "../pages/detail";
import Home from "../pages/home";
import MainRoot from "../pages/MainRoot";

export const ROUTES = [
  {
    path: "/",
    element: <MainRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "add",
        element: <Add />,
      },
      {
        path: "detail/:id",
        element: <Detail />,
      },
    ],
  },
];
