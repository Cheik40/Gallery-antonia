import { Outlet, useRoutes } from "react-router-dom";
// import ClipsRoutes from "../SousSousMenu/ClipsRoutes";
// import CommissionsAcademieCesarsRoutes from "../SousSousMenu/CommissionsAcademieCesarsRoutes";
import { lazy, Suspense } from "react";

const CommissionJardinsVersailles = lazy(() =>
    import("../../../pages/commissions/CommissionJardinsVersailles")
);
const CommisionTheatre = lazy(() =>
    import("../../../pages/commissions/CommisionTheatre")
);
const ClipsRoutes = lazy(() => import("../SousSousMenu/ClipsRoutes"));
const CommissionsAcademieCesarsRoutes = lazy(() =>
    import("../SousSousMenu/CommissionsAcademieCesarsRoutes")
);

const CommissionRoutes = () => {
    const router = useRoutes([
        {
            path: "accademie-des-cesars/*",
            element: (
                // <Suspense fallback={<div>Loading ...</div>}>
                <CommissionsAcademieCesarsRoutes />
                // {/* </Suspense> */}
            ),
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
            element: (
                <Suspense fallback={<div>Loading ...</div>}>
                    <ClipsRoutes />
                </Suspense>
            ),
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
