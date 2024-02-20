import { IoIosArrowForward } from "react-icons/io"

export default function Post()
{
    function handleSubmit(e)
    {
        e.preventDefault();
        let payload = new FormData(e.target)
        async function postImage(payload)
        {
            const res = await fetch ('http://localhost:4000/products',{
                method: 'POST',
                body: payload
            })
            const data = await res.json();
            console.log('data', data)
        }
        postImage(payload);
    }
    return (
        <div className="md:w-1/2 md:mx-auto w-full p-6">
            <h2 className="font-bold text-3xl md:text-6xl text-center">Post product</h2>
            <form action="/" method="post" onSubmit={(e)=>handleSubmit(e)} className="flex flex-col mt-8 gap-2">
                <label htmlFor="name">Name*</label>
                <input type="text" name="name" className="border border-black bg-transparent px-2 py-1"/>
                <label htmlFor="price">Price*</label>
                <input type="number" name="price" className="border border-black bg-transparent px-2 py-1"/>
                <label htmlFor="category">Category*</label>
                <select name="category" >
                    <option value="black">Black</option>
                    <option value="white">White</option>
                </select>
                <label htmlFor="image">Image*</label>
                <input type="file" name="image" />
                <button type="submit" className="flex justify-center items-center hover:bg-gray-200 w-fit px-4 py-1 mx-auto">Post <IoIosArrowForward /></button>
            </form>
        </div>
    )
}