import { NavLink } from "react-router-dom"
import { LuStore } from "react-icons/lu"
import { FaRegUserCircle } from "react-icons/fa"
import { GiClothes } from "react-icons/gi"

export default function AppNavbarAdmin()
{
    return(
        <nav className="flex justify-between border-b-2 p-4">
            <NavLink to="/" className="flex flex-col items-center w-fit">
                <LuStore size={24} />
                <h1>My Store</h1>
            </NavLink>
            <div className="flex items-center gap-4">
                <NavLink to="post" className="flex flex-col items-center w-fit">
                    <GiClothes size={24} />
                    <h2>Add Product</h2>
                </NavLink>
                <NavLink to="/admin" className="flex flex-col items-center w-fit">
                    <FaRegUserCircle size={24} />
                    <h2>Account</h2>
                </NavLink>
            </div>
        </nav>
    )
}