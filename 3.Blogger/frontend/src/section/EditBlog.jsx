import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link, Form } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

const EditBlog = () => {
    const [title, setTitle] = useState()
    const [content, setContent] = useState()
    const titleChange = (e) => {
        setTitle(e.target.value)
    }
    const contentChange = (e) => {
        setContent(e.target.value)
    }
    const [blog, setBlog] = useState()
    let params = useParams()
    let id = params.id
    useEffect(() => {
        const getBlog = async () => {
            const res = await fetch(`http://localhost:4000/blog/${id}`)
            const data = await res.json()
            setBlog(data[0])
            setTitle(data[0].title)
            setContent(data[0].content)
        }
        getBlog()
    }, [])
    const handleSubmit = async (e) => {
        e.preventDefault
        const theForm = new FormData(e.target)
        const updateData = Object.fromEntries(theForm)

        const res = await fetch(`http://localhost:4000/blog/edit/${blog.id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateData),
        })
        const finish = await res.json()
        {
            finish &&
                (finish.status == '1'
                    ? (location.href = '/')
                    : alert('cant post'))
        }
    }
    return (
        <div>
            <Link to=".." className="flex gap-1 pb-4">
                <FaArrowLeft size={20} />
                Back
            </Link>
            {blog && (
                <Form
                    action=""
                    method="post"
                    onSubmit={(e) => handleSubmit(e)}
                    className="flex flex-col items-center gap-3"
                >
                    <textarea
                        cols="30"
                        rows="2"
                        name="title"
                        value={title}
                        onInput={titleChange}
                        className="w-full rounded-md border border-one px-1"
                    />
                    <textarea
                        value={content}
                        onInput={contentChange}
                        name="content"
                        cols="30"
                        rows="10"
                        className="w-full rounded-md border border-one px-1"
                    ></textarea>
                    <div className="mt-9 flex items-center gap-3">
                        <button
                            type="submit"
                            className="rounded-md border border-one px-4 py-2 shadow-md"
                        >
                            Submit
                        </button>
                        <Link
                            target="_blank"
                            to="https://onlinehtmleditor.dev/"
                            className="rounded-md border border-one bg-green-400 px-4 py-2 shadow-md"
                        >
                            HTML Editor
                        </Link>
                    </div>
                </Form>
            )}
        </div>
    )
}

export default EditBlog
