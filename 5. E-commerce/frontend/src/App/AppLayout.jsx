import { Outlet } from "react-router-dom"
import AppNavbar from "./AppNavbar"

export default function AppLayout()
{
    return (
        <div className="bg-primary relative min-h-screen">
            <AppNavbar />
            <Outlet />
        </div>
    )
}