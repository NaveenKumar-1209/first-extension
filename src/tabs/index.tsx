import React from "react";
import {createRoot} from "react-dom/client";
import Tab from "./tab";
import Home from "./component/Home";
import About from "./component/About";
import {
    createHashRouter,
    RouterProvider,
  } from "react-router-dom";


const router = createHashRouter([
    {
      path: "/",
      element: <Tab />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
            path: "about",
            element: <About />,
          },
      ],
    },
  ]);

function init(){
    const appContainer = document.createElement("div")
    document.body.appendChild(appContainer)
    if(!appContainer){
        throw new Error("Can't find appContainer")
    }
    const root = createRoot(appContainer)
    root.render(<RouterProvider router={router} />)
}

init()

