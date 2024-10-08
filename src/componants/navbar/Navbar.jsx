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
                            path='/commissions/accademie-des-cesars/*'
                            label='Cérémonie des Césars'
                            isParent
                        >
                            <NavList>
                                <NavItem
                                    path='/commissions/jardins-versailles'
                                    label='César des Lycéens'
                                />
                                <NavItem
                                    path='/commissions/clip/*'
                                    label='Déjeuné des Nomminés'
                                />
                                <NavItem
                                    path='/commissions/theatre'
                                    label='Soirée Révélation'
                                />
                            </NavList>
                        </NavItem>

                        <NavItem
                            path='/commissions/jardins-versailles'
                            label='César des Lycéens'
                        />

                        <NavItem
                            path='/commissions/clips/*'
                            label='Clips'
                            isParent
                        >
                            <NavList>
                                <NavItem
                                    path='/commissions/clips/clips-silver-night'
                                    label='Théatre'
                                />
                                <NavItem
                                    path='/commissions/clips/sugar-pills'
                                    label='Théatre'
                                />
                            </NavList>
                        </NavItem>
                        <NavItem path='/commissions/theatre' label='Théatre' />
                    </NavList>
                </NavItem>

                <NavItem path='/a-propos' label='À propos' />
                <NavItem path='/contacts' label='Contact' />
            </NavList>
        </nav>
    );
}

export default Navbar;
