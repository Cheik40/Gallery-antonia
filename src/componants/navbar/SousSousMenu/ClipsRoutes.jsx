// src/components/CommissionsRoutes.js
import { Outlet, useRoutes } from "react-router-dom";
import CommissionClipsSilverNight from "../../../pages/commissions/clips/CommissionClipsSilverNight";
import SugarPills from "../../../pages/commissions/clips/SugarPills";

const ClipsRoutes = () => {
    const routes = useRoutes([
        {
            path: "clips-silver-night",
            element: <CommissionClipsSilverNight />,
        },
        {
            path: "sugar-pills",
            element: <SugarPills />,
        },
    ]);

    return routes || <Outlet />;
};

export default ClipsRoutes;
