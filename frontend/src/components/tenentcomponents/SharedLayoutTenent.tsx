import { Outlet } from "react-router-dom";

const SharedLayoutTenent = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Outlet />
    </div>
  );
};

export default SharedLayoutTenent;
