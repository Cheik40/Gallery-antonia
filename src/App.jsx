import Navbar from "./componants/navbar/Navbar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./pages/error/Error";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Circus from "./pages/projects/Circus";
import LesEchappes from "./pages/projects/LesEchappes";
import CacheCache from "./pages/projects/CacheCache";

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
                path: "projets",
                children: [
                    {
                        path: "circus",
                        element: <Circus />,
                    },
                    {
                        path: "les-echappees",
                        element: <LesEchappes />,
                    },
                    {
                        path: "cache-cache",
                        element: <CacheCache />,
                    },
                ],
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
