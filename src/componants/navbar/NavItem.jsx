import { memo } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function NavItem({ path, label, children, isParent }) {
    return (
        <li>
            <Link to={path}>{label}</Link>
            {isParent && children}
        </li>
    );
}

export default memo(NavItem);
