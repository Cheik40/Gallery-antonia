import NavItem from "./NavItem";
import NavList from "./NavList";

const NavCommisions = () => {
    return (
        <div>
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
                    <NavItem path='/commissions/clips/*' label='Clips' isParent>
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
        </div>
    );
};

export default NavCommisions;
