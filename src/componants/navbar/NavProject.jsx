import NavItem from "./NavItem";
import NavList from "./NavList";

const NavProject = () => {
    return (
        <NavItem path='/projets/*' label='Projets' isParent>
            <NavList>
                <NavItem path='/projets/circus' label='Circus' />
                <NavItem path='/projets/les-echappees' label='Les échappées' />
                <NavItem path='/projets/cache-cache' label='Cache - Cache' />
            </NavList>
        </NavItem>
    );
};

export default NavProject;
