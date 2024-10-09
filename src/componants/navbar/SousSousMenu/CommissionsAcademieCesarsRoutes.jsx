// src/components/CommissionsRoutes.js
import { Outlet, useRoutes } from "react-router-dom";
import CommissionCesarLyceen from "../../../pages/commissions/academie-des-cesars/CommissionCesarLyceen";
import CommissionDejeuneNommine from "../../../pages/commissions/academie-des-cesars/CommissionDejeuneNommine";
import CommissionSoireRevelation from "../../../pages/commissions/academie-des-cesars/CommissionSoireRevelation";
import CommissionCeremonieDesCesars from "../../../pages/commissions/academie-des-cesars/CommissionCeremonieDesCesars";

const CommissionsAcademieCesarsRoutes = () => {
    const routes = useRoutes([
        {
            path: "soiree-revelation",
            element: <CommissionSoireRevelation />,
        },
        {
            path: "dejeune-des-nommines",
            element: <CommissionDejeuneNommine />,
        },
        {
            path: "ceremonie-des-cesars",
            element: <CommissionCeremonieDesCesars />,
        },
        {
            path: "cesars-des-lyceens",
            element: <CommissionCesarLyceen />,
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
