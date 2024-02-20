import { useEffect, useState } from "react"
import HomepageDisplayProducts from "./HomepageDisplayProducts"
import HomepageHeader from "./HomepageHeader"
import HomepageNavProducts from "./HomepageNavProducts"

export default function Homepage()
{
    const [products, setProducts] = useState(false)

    useEffect(() => 
    {
        function getProducts()
        {
            fetch("http://localhost:4000/products/")
            .then(res=>res.json())
            .then(data=>setProducts(data))
        }
        {!products && getProducts()}
    }, [])

    return (
        <div className="md:w-1/2 md:mx-auto w-full">
            <HomepageHeader />
            <HomepageNavProducts products={products} setProducts={setProducts} />
            <HomepageDisplayProducts products={products} />
        </div>
    )
}