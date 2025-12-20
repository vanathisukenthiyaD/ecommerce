import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./adminn.css";

const Admin = () => {
    return (    
        <div className="admin-container">
            <nav className="admin-sidebar">
                 <Link to="/admin/dashboard">Dashboard</Link>
                <Link to="/admin/gold">Gold</Link>
                <Link to="/admin/diamond">Diamond</Link>
                <Link to="/admin/platinum">Platinum</Link>
               <Link to="/admin/silver">Silver</Link>
            </nav>  
            <div className="admin-content">
              <Outlet/>
            </div> 
        </div>
    );
}           
export default Admin;