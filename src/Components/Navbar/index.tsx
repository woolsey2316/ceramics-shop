import * as React from "react";

import { INavbar } from "./Navbar";
import {
    Container,
    HamburgerIcon,
    Wrap,
    Icon,
    InnerWrap,
    Left,
    Right,
    TopBarItem,
    Link,
    Logo,
    LogoImg
} from "@Styled/NavBar";
import { SubMenuCatalog } from '../SubMenuCatalog'
import { SubMenuPages } from '../SubMenuPages'
import { Dropdown } from '../Dropdown'
import { ShoppingCartIcon } from "@Components/ShoppingCartIcon";

const Navbar: React.FunctionComponent<INavbar.IProps> = (): JSX.Element => {
    return (
        <Container>
            <Wrap>
                <InnerWrap>
                    <HamburgerIcon src="images/hamburger.svg"/>
                    <Logo>
                        <LogoImg src="images/logo.png"></LogoImg>
                    </Logo>

                    <Left>
                        <TopBarItem><Link>Home</Link></TopBarItem>
                        <TopBarItem>
                            <Link>Catalog</Link>
                            <SubMenuCatalog/>
                        </TopBarItem>
                        <TopBarItem><Link>Blog</Link></TopBarItem>
                        <TopBarItem>
                            <Link>Pages</Link>
                            <SubMenuPages/>
                        </TopBarItem>
                    </Left>
                    <Right>
                        <Dropdown/>
                        <ShoppingCartIcon/>
                        <Icon className="mt-1 ml-2 fa-2x fa fa-user"></Icon>
                    </Right>
                </InnerWrap>
            </Wrap>
        </Container>    
    )
};

export { Navbar };
