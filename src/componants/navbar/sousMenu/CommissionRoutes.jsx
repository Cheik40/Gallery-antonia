import { Outlet, useRoutes } from "react-router-dom";
import CommissionJardinsVersailles from "../../../pages/commissions/CommissionJardinsVersailles";
import ClipsRoutes from "../SousSousMenu/ClipsRoutes";
import CommisionTheatre from "../../../pages/commissions/CommisionTheatre";
import CommissionsAcademieCesarsRoutes from "../SousSousMenu/CommissionsAcademieCesarsRoutes";

const CommissionRoutes = () => {
    const router = useRoutes([
        {
            path: "accademie-des-cesars/*",
            element: <CommissionsAcademieCesarsRoutes />,
        },
        {
            path: "jardins-versailles",
            element: <CommissionJardinsVersailles />,
        },
        {
            path: "clips/*",
            element: <ClipsRoutes />,
        },
        {
            path: "theatre",
            element: <CommisionTheatre />,
        },
    ]);
    return router || <Outlet />;
};

export default CommissionRoutes;
