import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import parse from 'html-react-parser'

const DetailBlog = () => {
    const [blog, setBlog] = useState()
    let params = useParams()
    let id = params.id
    useEffect(() => {
        const getBlog = async () => {
            const res = await fetch(`http://localhost:4000/blog/${id}`)
            const data = await res.json()
            setBlog(data[0])
        }
        getBlog()
    }, [])
    const handleDelete = async (e, id) => {
        if (confirm('Are you sure to delete the post?') == true) {
            await fetch(`http://localhost:4000/blog/delete/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
        } else {
            e.preventDefault()
            alert('ok')
        }
    }
    return (
        <div>
            <Link to=".." className="flex gap-1 pb-4">
                <FaArrowLeft size={20} />
                Back
            </Link>
            {blog && (
                <div>
                    <h1 className="pb-2 text-4xl font-semibold">
                        {blog.title}
                    </h1>
                    <p className="mt-6">{parse(blog.content)}</p>
                    <div className="mt-9 flex justify-center gap-3 ">
                        <Link
                            to={`/edit/${blog.id}`}
                            className="rounded-md border border-one px-4 py-2 shadow-md"
                        >
                            Edit
                        </Link>
                        <Link
                            to=".."
                            onClick={(e) => handleDelete(e, blog.id)}
                            className="rounded-md border border-one bg-red-400 px-4 py-2 shadow-md"
                        >
                            Delete
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default DetailBlog
