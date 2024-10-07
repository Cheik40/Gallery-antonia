import NavItem from "./NavItem";
import NavList from "./NavList";

function Navbar() {
    return (
        <nav>
            <NavList>
                <NavItem path='/' label='Accueil' />
                <NavItem path='/projets/*' label='Projets' isParent>
                    <NavList>
                        <NavItem path='/projets/circus' label='Circus' />
                        <NavItem
                            path='/projets/les-echappees'
                            label='Les échappées'
                        />
                        <NavItem
                            path='/projets/cache-cache'
                            label='Cache - Cache'
                        />
                    </NavList>
                </NavItem>

                <NavItem path='/commissions/*' label='Commissions' isParent>
                    <NavList>
                        <NavItem
                            path='/commissions/ceremonie-des-cesars'
                            label='Cérémonie des Césars'
                        />
                        <NavItem
                            path='/commissions/cesar-lyceens'
                            label='César des Lycéens'
                        />
                        <NavItem
                            path='/commissions/dejeune-nommines'
                            label='Déjeuné des Nomminés'
                        />
                        <NavItem
                            path='/commissions/soire-revelation'
                            label='Soirée Révélation'
                        />
                    </NavList>
                </NavItem>

                <NavItem path='/a-propos' label='À propos' />
                <NavItem path='/contacts' label='Contact' />
            </NavList>
        </nav>
    );
}

export default Navbar;
