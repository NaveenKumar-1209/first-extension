import React from "react";
import {createRoot} from "react-dom/client"
import "../assets/tailwind.css"
import Login from "./component/login";



const container = document.createElement("div")
document.body.appendChild(container)
if(!container){
    throw new Error("Container not found")
}
container.classList.add("root")
const root = createRoot(container)
root
root.render(<Login />)