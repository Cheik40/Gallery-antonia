import NavCommisions from "./NavCommisions";
import NavItem from "./NavItem";
import NavList from "./NavList";
import NavProject from "./NavProject";

function Navbar() {
    return (
        <nav>
            <NavList>
                <NavItem path='/' label='Accueil' />
                <NavProject />
                <NavCommisions />
                <NavItem path='/journal' label='Journal' />
                <NavItem path='/scenographie' label='Scénographie' />
                <NavItem path='/a-propos' label='À propos' />
                <NavItem path='/contacts' label='Contact' />
            </NavList>
        </nav>
    );
}

export default Navbar;
