import { Outlet, useRoutes } from "react-router-dom";
import CommissionCeremonieDesCesars from "../../../pages/commissions/academie-des-cesars/CommissionCeremonieDesCesars";
import CommissionJardinsVersailles from "../../../pages/commissions/CommissionJardinsVersailles";
import ClipsRoutes from "../SousSousMenu/ClipsRoutes";
import CommisionTheatre from "../../../pages/commissions/CommisionTheatre";

const CommissionRoutes = () => {
    const router = useRoutes([
        {
            path: "accademie-des-cesars",
            element: <CommissionCeremonieDesCesars />,
        },
        {
            path: "jardins-versailles",
            element: <CommissionJardinsVersailles />,
        },
        {
            path: "clip",
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
