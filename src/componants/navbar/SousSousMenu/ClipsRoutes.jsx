import { Outlet, useRoutes } from "react-router-dom";
import { lazy, Suspense } from "react";

const CommissionClipsSilverNight = lazy(() =>
    import("../../../pages/commissions/clips/CommissionClipsSilverNight")
);
const SugarPills = lazy(() =>
    import("../../../pages/commissions/clips/SugarPills")
);

const ClipsRoutes = () => {
    const routes = useRoutes([
        {
            path: "silver-night",
            element: (
                <Suspense fallback={<div>Loading ...</div>}>
                    <CommissionClipsSilverNight />
                </Suspense>
            ),
        },
        {
            path: "sugar-pills",
            element: (
                <Suspense fallback={<div>Loading ...</div>}>
                    <SugarPills />
                </Suspense>
            ),
        },
    ]);

    return routes || <Outlet />;
};

export default ClipsRoutes;
