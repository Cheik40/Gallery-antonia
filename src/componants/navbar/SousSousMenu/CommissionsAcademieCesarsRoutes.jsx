// src/components/CommissionsRoutes.js
import { lazy, Suspense } from "react";
import { Outlet, useRoutes } from "react-router-dom";
// import CommissionCesarLyceen from "../../../pages/commissions/academie-des-cesars/CommissionCesarLyceen";
// import CommissionDejeuneNommine from "../../../pages/commissions/academie-des-cesars/CommissionDejeuneNommine";
// import CommissionSoireRevelation from "../../../pages/commissions/academie-des-cesars/CommissionSoireRevelation";
// import CommissionCeremonieDesCesars from "../../../pages/commissions/academie-des-cesars/CommissionCeremonieDesCesars";

const CommissionCesarLyceen = lazy(() =>
    import(
        "../../../pages/commissions/academie-des-cesars/CommissionCesarLyceen"
    )
);
const CommissionDejeuneNommine = lazy(() =>
    import(
        "../../../pages/commissions/academie-des-cesars/CommissionDejeuneNommine"
    )
);
const CommissionSoireRevelation = lazy(() =>
    import(
        "../../../pages/commissions/academie-des-cesars/CommissionSoireRevelation"
    )
);
const CommissionCeremonieDesCesars = lazy(() =>
    import(
        "../../../pages/commissions/academie-des-cesars/CommissionCeremonieDesCesars"
    )
);

const CommissionsAcademieCesarsRoutes = () => {
    const routes = useRoutes([
        {
            path: "soiree-revelation",
            element: (
                <Suspense fallback={<div>Loading ...</div>}>
                    <CommissionSoireRevelation />
                </Suspense>
            ),
        },
        {
            path: "dejeune-des-nommines",
            element: (
                <Suspense fallback={<div>Loading ...</div>}>
                    <CommissionDejeuneNommine />
                </Suspense>
            ),
        },
        {
            path: "ceremonie-des-cesars",
            element: (
                <Suspense fallback={<div>Loading ...</div>}>
                    <CommissionCeremonieDesCesars />
                </Suspense>
            ),
        },
        {
            path: "cesars-des-lyceens",
            element: (
                <Suspense fallback={<div>Loading ...</div>}>
                    <CommissionCesarLyceen />
                </Suspense>
            ),
        },
    ]);

    return (
        <>
            {routes}
            <Outlet />
        </>
    );
};

export default CommissionsAcademieCesarsRoutes;
