
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Signup from "./entry/Signup";

const Router =()=> {
    const router = createBrowserRouter([
        {
        path: "/",
        element: <Signup/>,
        errorElement: <ErrorPage/>
        }
    ])

    return <RouterProvider router={router} />
}

export default Router