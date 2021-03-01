// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { Container, ListItem, Link } from "./styled";
// #endregion Local Imports

// #region Interface Imports
import { ISubMenuPages } from "./SubMenuPages";
// #endregion Interface Imports

export const SubMenuPages: React.FunctionComponent<
    ISubMenuPages.IProps
> = (props: ISubMenuPages.IProps) => {

    return (
        <Container>
            <ListItem><Link>About</Link></ListItem>
            <ListItem><Link>Services</Link></ListItem>
            <ListItem><Link>FAQ</Link></ListItem>
            <ListItem><Link>Contact</Link></ListItem>
        </Container>
    );
};

