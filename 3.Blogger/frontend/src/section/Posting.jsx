import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

const Posting = () => {
    const postingblog = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)

        const res = await fetch('http://localhost:4000/blog/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
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
                <FaArrowLeft size={18} />
                Back
            </Link>
            <form
                action=""
                method="post"
                onSubmit={postingblog}
                className="flex flex-col items-center gap-3"
            >
                <div className="w-full">
                    <label htmlFor="title">Title*</label>
                    <textarea
                        cols="30"
                        rows="2"
                        name="title"
                        id="title"
                        className="w-full rounded-md border border-one px-1"
                    />
                </div>
                <div className="w-full">
                    <label htmlFor="content">Content*</label>
                    <textarea
                        name="content"
                        id="content"
                        cols="30"
                        rows="10"
                        className="w-full rounded-md border border-one px-1"
                    />
                </div>
                <div className="mt-9 flex items-center gap-3">
                    <button
                        type="submit"
                        className="rounded-md border border-one px-4 py-2 shadow-md"
                    >
                        Post
                    </button>
                    <Link
                        target="_blank"
                        to="https://onlinehtmleditor.dev/"
                        className="rounded-md border border-one bg-green-400 px-4 py-2 shadow-md"
                    >
                        HTML Editor
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Posting
