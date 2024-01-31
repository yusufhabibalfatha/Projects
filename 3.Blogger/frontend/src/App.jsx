import BloggerLayout from './section/BloggerLayout'
import DetailBlog from './section/DetailBlog'
import EditBlog from './section/EditBlog'
import Main from './section/Main'
import Posting from './section/Posting'
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from 'react-router-dom'

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route>
                <Route path="/" element={<BloggerLayout />}>
                    <Route index element={<Main />} />
                    <Route path=":id" element={<DetailBlog />} />
                    <Route path="edit/:id" element={<EditBlog />} />
                    <Route path="post" element={<Posting />} />
                </Route>
            </Route>
        )
    )
    return <RouterProvider router={router} />
}

export default App
