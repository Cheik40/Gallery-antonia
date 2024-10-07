import NavItem from "./NavItem";
import NavList from "./NavList";

function Navbar() {
    return (
        <nav>
            <NavList>
                <NavItem path='/' label='Accueil' />
                <NavItem path='projets' label='Projets' isParent>
                    <NavList>
                        <NavItem path='/projets/circus' label='Circus' />
                        <NavItem
                            path='/projets/Les-echappees'
                            label='Les échappées'
                        />
                        <NavItem
                            path='/projets/cache-cache'
                            label='Cache - Cache'
                        />
                    </NavList>
                </NavItem>
                <NavItem path='/a-propos' label='A propos' />
                <NavItem path='/contacts' label='Contact' />
            </NavList>
        </nav>
    );
}

export default Navbar;
