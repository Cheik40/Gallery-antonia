// src/components/CommissionsRoutes.js
import { Outlet, useRoutes } from "react-router-dom";
import CommissionCeremonieDesCesars from "../../../pages/commissions/academie-des-cesars/CommissionCeremonieDesCesars";
import CommissionCesarLyceen from "../../../pages/commissions/academie-des-cesars/CommissionCesarLyceen";
import CommissionDejeuneNommine from "../../../pages/commissions/academie-des-cesars/CommissionDejeuneNommine";
import CommissionSoireRevelation from "../../../pages/commissions/academie-des-cesars/CommissionSoireRevelation";

const CommissionsAcademieCesarsRoutes = () => {
    const routes = useRoutes([
        {
            path: "ceremonie-des-cesars",
            element: <CommissionCeremonieDesCesars />,
        },
        {
            path: "cesar-lyceen",
            element: <CommissionCesarLyceen />,
        },
        {
            path: "dejeune-nommines",
            element: <CommissionDejeuneNommine />,
        },
        {
            path: "soire-revelation",
            element: <CommissionSoireRevelation />,
        },
    ]);

    return routes || <Outlet />;
};

export default CommissionsAcademieCesarsRoutes;
