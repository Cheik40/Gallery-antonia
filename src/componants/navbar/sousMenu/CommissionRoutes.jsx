import { Outlet, useRoutes } from "react-router-dom";
import ClipsRoutes from "../SousSousMenu/ClipsRoutes";
import CommissionsAcademieCesarsRoutes from "../SousSousMenu/CommissionsAcademieCesarsRoutes";
import { lazy, Suspense } from "react";

const CommissionJardinsVersailles = lazy(() =>
    import("../../../pages/commissions/CommissionJardinsVersailles")
);
const CommisionTheatre = lazy(() =>
    import("../../../pages/commissions/CommisionTheatre")
);

const CommissionRoutes = () => {
    const router = useRoutes([
        {
            path: "accademie-des-cesars/*",
            element: <CommissionsAcademieCesarsRoutes />,
        },
        {
            path: "jardins-versailles",
            element: (
                <Suspense fallback={<div>Loading ...</div>}>
                    <CommissionJardinsVersailles />
                </Suspense>
            ),
        },
        {
            path: "clips/*",
            element: <ClipsRoutes />,
        },
        {
            path: "theatre",
            element: (
                <Suspense fallback={<div>Loading ...</div>}>
                    <CommisionTheatre />
                </Suspense>
            ),
        },
    ]);
    return router || <Outlet />;
};

export default CommissionRoutes;
