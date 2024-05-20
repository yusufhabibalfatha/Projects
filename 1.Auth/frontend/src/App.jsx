import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from 'react-router-dom'
import Homepage from './section/Homepage'
import Signup from './section/Signup'
import Login from './section/Login'
import AuthLayout from './section/AuthLayout'

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route>
                <Route path="/" element={<AuthLayout />}>
                    <Route index element={<Homepage />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                </Route>
            </Route>
        )
    )
    return <RouterProvider router={router} />
}

export default App
