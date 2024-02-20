import { useCartContext } from '../Hooks/useCartContext'
import { IoShirt } from "react-icons/io5"
import { IoShirtOutline } from "react-icons/io5"
import * as Toast from '@radix-ui/react-toast';
import { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io"

export default function HomepageDisplayProducts({ products })
{
    const [toastOpen, setToastOpen] = useState(false)
    const { addProduct } = useCartContext()

    const addToCart = (e, product) => 
    {
        e.preventDefault();
        addProduct(product);
        setToastOpen(true)
    }
    return(
        <Toast.Provider swipeDirection='right'>
            <div className='p-4 flex flex-wrap gap-6'>
                {products && products.map((product, i) => (
                    <div className="border border-black w-40 rounded-md p-4 flex flex-col justify-between" key={i}>
                        <div>
                            <p className='text-center capitalize font-bold'>{product.name}</p>
                            <div className='text-gray-700 text-sm'>
                                <p>Price : Rp. {product.price} </p>
                                <p className='capitalize flex items-center'>Type : {product.category} ({product.category == 'black' ? <IoShirt /> : <IoShirtOutline />})</p>
                            </div>
                            <img src={`http://localhost:4000/image/${product.image}`} alt="try" className='max-h-40 my-2 mx-auto'/>
                        </div>
                        <button onClick={(e) => addToCart(e, product)} className='flex items-center justify-center hover:bg-gray-200'>Add to Cart <IoIosArrowForward /></button>
                    </div>
                ))}
            </div>
            <Toast.Root open={toastOpen} onOpenChange={setToastOpen} className='absolute right-0 px-4 py-2 rounded-md shadow-md bottom-5 bg-white border border-black'>
                <Toast.Title>Add to Cart Successful.</Toast.Title>
                <Toast.Description className='text-slate-700'>Now you can check your cart in the top of App.</Toast.Description>
            </Toast.Root>
            <Toast.Viewport />
        </Toast.Provider>
    )
}