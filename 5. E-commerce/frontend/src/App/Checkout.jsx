import { useCartContext } from "../Hooks/useCartContext"
import { Link } from "react-router-dom"
import { IoIosArrowForward } from "react-icons/io"

export default function Checkout()
{
    const { totalPayment, cart } = useCartContext()

    return (
        <div className="text-center p-6 md:w-2/3 md:mx-auto w-full">
            <h2 className="font-bold text-3xl md:text-6xl">Checkout</h2>
            {cart &&
            cart.map((product, index) => (
                <div key={product.id} className="border-b-[1px] border-black p-4">
                <h1>
                    {index + 1}. {product.name}
                </h1>
                <p>Price : Rp. {product.price}</p>
                <p>Quantity : {product.quantity}</p>
                </div>
            ))}
            <p className="p-4">
                <b>Total payment :</b> ${totalPayment}
            </p>
            <Link onClick={()=>window.location.reload()} className="flex justify-center items-center hover:bg-gray-200 w-fit px-4 py-1 mx-auto">Payment <IoIosArrowForward /></Link>
        </div>
    )
}