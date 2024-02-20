import { Link } from "react-router-dom"
import { useEffect } from "react"
import CartProduct from "./CartProduct"
import { useCartContext } from '../Hooks/useCartContext'
import { IoIosArrowForward } from "react-icons/io"

export default function Cart() 
{
  const { cart, countTotalPayment, totalPayment } = useCartContext();

  useEffect(() =>
  {
    countTotalPayment()
  }, [countTotalPayment])

  return (
    <div className="text-center p-6 md:w-2/3 md:mx-auto w-full">
        <h2 className="font-bold text-3xl md:text-6xl">Your cart</h2>
        <div className="p-4 flex flex-col gap-3 items-center">
            {cart &&
            cart.map((product, index) => (
                <CartProduct product={product} index={index} key={product.id} />
            ))}
        </div>
        <p className="font-bold">Total Payment = Rp. {totalPayment}</p>
        <Link to="/checkout" className="flex justify-center items-center hover:bg-gray-200 w-fit px-4 py-1 mx-auto">Checkout <IoIosArrowForward /></Link>
    </div>
  );
}
