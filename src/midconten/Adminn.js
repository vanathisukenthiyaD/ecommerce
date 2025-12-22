import { useState } from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";

export default function AdminDashboard() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [page, setPage] = useState("");

  return (
    <div className="dashboard">

      {/* TOP BAR */}
      <div className="topbar">
        <h2>Dashboard</h2>

        {/* ADMIN ICON */}
        <div className="admin-icon" onClick={() => setShowSidebar(!showSidebar)}>
          Admin ⬇
        </div>
      </div>

      {/* SIDEBAR ONLY WHEN CLICK */}
      {showSidebar && <Sidebar setPage={setPage} />}

      {/* CONTENT */}
      <div className="content">
        {page === "jewellery" && <Jewellery />}
      </div>

    </div>
  );
}