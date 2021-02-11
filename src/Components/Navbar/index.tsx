import * as React from "react";

import { INavbar } from "./Navbar";

import {
    Container,
    Wrap,
    InnerWrap,
    Left,
    Right,
    TopBarItem,
    Link,
} from "@Styled/NavBar";

import {Dropdown} from '../Dropdown'

const Navbar: React.FunctionComponent<INavbar.IProps> = (): JSX.Element => {
    return (
        <Container>
            <Wrap>
                <InnerWrap>
                    <Left>
                        <TopBarItem><Link>My Account</Link></TopBarItem>
                        <TopBarItem><Link>My WishList</Link></TopBarItem>
                        <TopBarItem><Link>Compare</Link></TopBarItem>
                        <TopBarItem><Link>Checkout</Link></TopBarItem>
                        <TopBarItem><Link>Register</Link></TopBarItem>
                    </Left>
                    <Right></Right>
                        <Dropdown/>
                        <TopBarItem><Link>Login</Link></TopBarItem>
                </InnerWrap>
            </Wrap>
        </Container>    
    )
};

export { Navbar };
