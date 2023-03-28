import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact"
import ContactLayout from "./layouts/ContactLayout";
import Mail from "./Components/Mail";
import Phone from "./Components/Phone";

let Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<ContactLayout />}>
        <Route path="mail" element={<Mail />} /> 
        <Route path="phone" element={<Phone />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={Router} />;
}

export default App;
