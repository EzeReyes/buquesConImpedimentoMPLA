import { Routes, Route } from "react-router-dom";
import Vessels from "../pages/Vessel";
import NewVessel from "../pages/NewVessel";
import EditVessel from "../pages/EditVessel";
import Code17 from "../pages/Code17";
import Code30 from "../pages/Code30";
import EditInspection from "../pages/EditInspection";
import VesselDetail from "../pages/VesselDetail";
import Login from "../pages/Login";
import Panel from "../pages/Panel";
import ProtectedRoute from "../pages/ProtectRoute";

export default function Router() {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path="/panel" element={<Panel />} />
        <Route path="/new-inspection" element={<NewVessel />} />
        <Route path="/edit-inspection/admin/:id" element={<EditInspection />} />
        <Route path="/edit/:id" element={<EditVessel />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Vessels />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
      <Route path="/:id" element={<VesselDetail />} />
      <Route path="/vessels-code-17" element={<Code17 />} />
      <Route path="/vessels-code-30" element={<Code30 />} />
    </Routes>
  );
}