import { useContext } from "react"
import { CartContext } from '../Context/CartContext'

export const useCartContext = () =>
{
    const context = useContext(CartContext)
    return context
}