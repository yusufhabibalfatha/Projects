import { Outlet } from "react-router-dom";
import AppNavbarAdmin from "./AppNavbarAdmin";

export default function AppLayoutAdmin()
{
    return (
        <div className="bg-primary relative min-h-screen">
            <AppNavbarAdmin />
            <Outlet />
        </div>
    )
}