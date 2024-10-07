import { Outlet, useRoutes } from "react-router-dom";
import Circus from "../../../pages/projects/Circus";
import LesEchappes from "../../../pages/projects/LesEchappes";
import CacheCache from "../../../pages/projects/CacheCache";

const ProjectsRoutes = () => {
    const routes = useRoutes([
        { path: "circus", element: <Circus /> },
        { path: "les-echappees", element: <LesEchappes /> },
        { path: "cache-cache", element: <CacheCache /> },
    ]);

    return routes || <Outlet />;
};

export default ProjectsRoutes;
