import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

function RootLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      {/* outlet is from react-router-dom which is used to render all links */}
    </div>
  );
}

export default RootLayout;
