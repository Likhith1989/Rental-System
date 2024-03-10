import { Outlet } from "react-router-dom";
import { Header } from "../Header";

const SharedLayoutOwner = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Outlet />
    </div>
  );
};

export default SharedLayoutOwner;
