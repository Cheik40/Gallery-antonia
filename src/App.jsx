import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import React, { lazy, Suspense } from "react";
const Navbar = lazy(() => import("./componants/navbar/Navbar"));
const Error = lazy(() => import("./pages/error/Error"));
const About = lazy(() => import("./pages/about/About"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const Home = lazy(() => import("./pages/home/Home"));
const ProjectsRoutes = lazy(() =>
    import("./componants/navbar/sousMenu/ProjectsRoutes")
);
const CommissionRoutes = lazy(() =>
    import("./componants/navbar/sousMenu/CommissionRoutes")
);
const Journal = lazy(() => import("./pages/journal/Journal"));
const Scenographie = lazy(() => import("./pages/scenographie/Scenographie"));

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
                element: (
                    <Suspense fallback={<div>Loading ...</div>}>
                        <Home />
                    </Suspense>
                ),
            },
            {
                path: "/projets/*",
                element: (
                    <Suspense fallback={<div>Loading ...</div>}>
                        <ProjectsRoutes />
                    </Suspense>
                ),
            },
            {
                path: "/commiison/*",
                element: (
                    <Suspense fallback={<div>Loading ...</div>}>
                        <CommissionRoutes />
                    </Suspense>
                ),
            },
            {
                path: "/journal",
                element: (
                    <Suspense fallback={<div>Loading ...</div>}>
                        <Journal />
                    </Suspense>
                ),
            },
            {
                path: "/scenographie",
                element: (
                    <Suspense fallback={<div>Loading ...</div>}>
                        <Scenographie />
                    </Suspense>
                ),
            },
            {
                path: "/a-propos",
                element: (
                    <Suspense fallback={<div>Loading ...</div>}>
                        <About />
                    </Suspense>
                ),
            },
            {
                path: "/contacts",
                element: (
                    <Suspense fallback={<div>Loading ...</div>}>
                        <Contact />
                    </Suspense>
                ),
            },
        ],
    },
]);

function App() {
    return (
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
}

export default App;
