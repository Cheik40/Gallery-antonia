import Navbar from "./componants/navbar/Navbar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./pages/error/Error";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import ProjectsRoutes from "./componants/navbar/sousMenu/ProjectsRoutes";
import CommissionRoutes from "./componants/navbar/sousMenu/CommissionRoutes";

const Root = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/projets/*",
                element: <ProjectsRoutes />,
            },
            {
                path: "/commissions/*",
                element: <CommissionRoutes />,
            },
            {
                path: "/a-propos",
                element: <About />,
            },
            {
                path: "/contacts",
                element: <Contact />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
