import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { HomePageOwner } from "./pages/Owner-pages/HomePageOwner";
import SharedLayoutOwner from "./components/ownercomponents/SharedLayoutOwner";
import { HomePageTenent } from "./pages/Tenent-Pages/HomePageTenent";
import SharedLayoutTenent from "./components/tenentcomponents/SharedLayoutTenent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login/:role" element={<Login />} />
        <Route path="/register/:role" element={<Register />} />
        <Route path="/owner" element={<SharedLayoutOwner />}>
          <Route index element={<HomePageOwner />} />
        </Route>
        <Route path="/tenent" element={<SharedLayoutTenent />}>
          <Route index element={<HomePageTenent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
