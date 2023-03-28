import React from "react";
import { Link, Outlet } from "react-router-dom";

function CareersLayout() {
  return (
    <div>
      <h3>Careers:</h3>
      <Outlet />
    </div>
  );
}

export default CareersLayout;
