// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { Container,
    Wrap,
    NavWrap,
    MenuList,
    MenuItem,
    MenuLink } from "./styled";
// #endregion Local Imports

// #region Interface Imports
import { IFullWidthMenu } from "./FullWidthMenu";
// #endregion Interface Imports

export const FullWidthMenu: React.FunctionComponent<
    IFullWidthMenu.IProps
> = (props: IFullWidthMenu.IProps) => {

    return (
        <Container>
            <Wrap>
                <NavWrap>
                    <MenuList>
                        <MenuItem><MenuLink>Skins</MenuLink></MenuItem>
                        <MenuItem><MenuLink>Features</MenuLink></MenuItem>
                        <MenuItem><MenuLink>Diabetes</MenuLink></MenuItem>
                        <MenuItem><MenuLink>Cosmetics</MenuLink></MenuItem>
                        <MenuItem><MenuLink>Medicines</MenuLink></MenuItem>
                        <MenuItem><MenuLink>Blogs and News</MenuLink></MenuItem>
                        <MenuItem><MenuLink>Pages</MenuLink></MenuItem>
                        <MenuItem><MenuLink>Support</MenuLink></MenuItem>
                    </MenuList>
                </NavWrap>
            </Wrap>
        </Container>
    );
};

