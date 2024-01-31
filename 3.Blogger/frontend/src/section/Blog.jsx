import moment from 'moment'

const Blog = ({ blog }) => {
    return (
        <div className="flex items-center justify-between font-semibold">
            <h1 className="md:text-xl">{blog.title}</h1>
            <p className="md:text-md text-nowrap text-end text-xs text-two">
                {moment(blog.postdate).format('DD MMMM YYYY')}
            </p>
        </div>
    )
}

export default Blog
