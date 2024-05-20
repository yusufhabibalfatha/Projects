import { NavLink } from "react-router-dom"
import { LuStore } from "react-icons/lu"
import { RiShoppingBag3Line } from "react-icons/ri"
import { FaRegUserCircle } from "react-icons/fa"
  
export default function AppNavbar()
{
    return(
        <nav className="flex justify-between border-b-2 p-4">
            <NavLink to="/" className="flex flex-col items-center w-fit">
                <LuStore size={24} />
                <h1>My Store</h1>
            </NavLink>
            <div className="flex items-center gap-4">
                <NavLink to="cart" className="flex flex-col items-center w-fit">
                    <RiShoppingBag3Line size={24} />
                    <h2>Cart</h2>
                </NavLink>
                <NavLink to="/admin" className="flex flex-col items-center w-fit">
                    <FaRegUserCircle size={24} />
                    <h2>Account</h2>
                </NavLink>
            </div>
        </nav>
    )
}