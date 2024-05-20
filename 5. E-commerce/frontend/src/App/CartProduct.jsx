import { useRef } from "react"
import { useCartContext } from '../Hooks/useCartContext'

export default function CartProduct({ product, index })
{
  const { addProduct, removeProduct, updateQuantityProduct } = useCartContext();
  const quantityField = useRef();

  const handleQuantity = (e, product) => 
  {
    e.preventDefault();
    let quantity = Number(quantityField.current.value)
    let sumQuantity = e.target.innerHTML == "+"
    
    if (sumQuantity)
    {
      quantityField.current.value = quantity + 1
      addProduct(product)
    }
    else{
      quantityField.current.value = quantity - 1
      removeProduct(product);
    }
  }

  return (
    <div className="border border-black w-56 rounded-md p-2 flex flex-col justify-between">
      <div className="px-4 py-2">
        <img
          className="mx-auto h-20 rounded"
          src={`http://localhost:4000/image/${product.image}`}
          alt="product-image"
        />
      </div>
      <div>
        <h1>
          {index + 1}. {product.name}
        </h1>
        <p className="text-sm">Price : Rp. {product.price}</p>
        <p className="my-4 text-center ">Quantity</p>
      </div>
      <div className="mx-auto flex w-1/2 justify-between text-center">
        <button
          className="w-1/2 bg-black text-white"
          onClick={(e) => handleQuantity(e, product)}
        >
          -
        </button>
        <input
          type="text"
          value={product.quantity}
          onChange={(e) =>
            updateQuantityProduct(product.id, Number(e.target.value))
          }
          className="w-1/2 text-center"
          ref={quantityField}
        />
        <button
          className="w-1/2 bg-black text-white"
          onClick={(e) => handleQuantity(e, product)}
        >
          +
        </button>
      </div>
    </div>
  )
}