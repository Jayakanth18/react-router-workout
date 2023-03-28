import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function ContactLayout() {
  return (
    <div>
      <h1>Contact</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad tempora
        ipsum sequi quibusdam totam id iusto eaque, reiciendis provident vero
        atque repellendus cumque dolor accusamus temporibus, vel quisquam quasi
        non similique excepturi! Doloribus quibusdam maxime ut sequi suscipit
        vero quo fuga molestiae dolore, dolor distinctio facere quia in adipisci
        beatae minima esse iusto ab ad neque eum. Voluptates voluptas cum
        repellat ad porro cupiditate voluptatem, provident sit commodi laborum
        aperiam. Ipsa mollitia fugit aliquam debitis?
      </p>

      <NavLink to='mail'>Mail Us</NavLink>
      <NavLink to='phone'>Call Us</NavLink>
      <Outlet />
    </div>
  );
}

export default ContactLayout;
