import { Outlet } from 'react-router-dom'

const BloggerLayout = () => {
    return (
        <div className="mx-auto p-6 pt-16 font-thisisfont text-one md:w-3/4 lg:w-2/4">
            <Outlet />
        </div>
    )
}

export default BloggerLayout
