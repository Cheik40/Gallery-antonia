import { memo } from "react";

// eslint-disable-next-line react/prop-types
function NavList({ children }) {
    return <ul>{children}</ul>;
}

export default memo(NavList);
