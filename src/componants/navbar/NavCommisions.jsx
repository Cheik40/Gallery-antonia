import NavItem from "./NavItem";
import NavList from "./NavList";

const NavCommisions = () => {
    return (
        <div>
            <NavItem path='/commissions/*' label='Commissions' isParent>
                <NavList>
                    <NavItem
                        path='/commissions/accademie-des-cesars/*'
                        label='Accademie des cesars'
                        isParent
                    >
                        <NavList>
                            <NavItem
                                path='/commissions/accademie-des-cesars/soiree-revelation'
                                label='Soirée Révélation'
                            />
                            <NavItem
                                path='/commissions/accademie-des-cesars/dejeune-des-nommines'
                                label='Déjeuné des Nomminés'
                            />
                            <NavItem
                                path='/commissions/accademie-des-cesars/ceremonie-des-cesars'
                                label='Cérémonie des Césars'
                            />
                            <NavItem
                                path='/commissions/accademie-des-cesars/cesars-des-lyceens'
                                label='César des lycéens'
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
                                path='/commissions/clips/silver-night'
                                label='Silver Night'
                            />
                            <NavItem
                                path='/commissions/clips/sugar-pills'
                                label='Sugar Pills'
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
