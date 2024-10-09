import { Outlet, useRoutes } from "react-router-dom";
// import Circus from "../../../pages/projects/Circus";
// import LesEchappes from "../../../pages/projects/LesEchappes";
// import CacheCache from "../../../pages/projects/CacheCache";
import { lazy, Suspense } from "react";

const Circus = lazy(() => import("../../../pages/projects/Circus"));
const LesEchappes = lazy(() => import("../../../pages/projects/LesEchappes"));
const CacheCache = lazy(() => import("../../../pages/projects/CacheCache"));

const ProjectsRoutes = () => {
    const routes = useRoutes([
        {
            path: "circus",
            element: (
                <Suspense fallback={<div>Loading ...</div>}>
                    <Circus />
                </Suspense>
            ),
        },
        {
            path: "les-echappees",
            element: (
                <Suspense fallback={<div>Loading ...</div>}>
                    <LesEchappes />
                </Suspense>
            ),
        },
        {
            path: "cache-cache",
            element: (
                <Suspense fallback={<div>Loading ...</div>}>
                    <CacheCache />
                </Suspense>
            ),
        },
    ]);

    return routes || <Outlet />;
};

export default ProjectsRoutes;
