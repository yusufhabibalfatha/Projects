import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import AppLayout from './App/AppLayout';
import Homepage from "./App/Homepage";
import Cart from './App/Cart';
import Checkout from './App/Checkout';
import AppLayoutAdmin from "./Admin/AppLayoutAdmin";
import Dashboard from './Admin/Dashboard'
import Post from './Admin/Post';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Homepage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
      <Route path="/admin" element={<AppLayoutAdmin />}>
        <Route index element={<Dashboard />} />
        <Route path="post" element={<Post />} />
      </Route>
    </Route>,
  ),
);

export default function App() 
{
  return <RouterProvider router={router} />;
}