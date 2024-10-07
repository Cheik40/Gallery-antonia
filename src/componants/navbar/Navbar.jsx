import NavItem from "./NavItem";
import NavList from "./NavList";

function Navbar() {
    return (
        <nav>
            <NavList>
                <NavItem path='/' label='Accueil' />
                <NavItem path='/a-propos' label='A propos' />
                <NavItem path='/contacts' label='Contact' />
            </NavList>
        </nav>
    );
}

export default Navbar;
