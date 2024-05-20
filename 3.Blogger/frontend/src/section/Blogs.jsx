import { useEffect } from 'react'
import { useState } from 'react'
import Blog from './Blog'
import { Link } from 'react-router-dom'

const Blogs = () => {
    const [allBlogs, setAllBlogs] = useState()
    useEffect(() => {
        const getAllBlog = async () => {
            const res = await fetch('http://localhost:4000/blog')
            const data = await res.json()
            setAllBlogs(data)
        }
        getAllBlog()
    }, [])
    return (
        <div className="mt-6 flex flex-col gap-6">
            {allBlogs &&
                allBlogs.map((blog, index) => (
                    <Link to={`${blog.id}`} key={index}>
                        <Blog blog={blog} />
                    </Link>
                ))}
            <Link
                to="post"
                className="mx-auto mt-6 w-max rounded-md border border-one px-4 py-2 shadow-md"
            >
                Post new blog
            </Link>
        </div>
    )
}

export default Blogs
