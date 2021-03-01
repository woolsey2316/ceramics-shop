// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { Container, GridContainer, TitleLink, Link } from "./styled";
// #endregion Local Imports

// #region Interface Imports
import { ISubMenu } from "./SubMenuCatalog";
// #endregion Interface Imports

export const SubMenuCatalog: React.FunctionComponent<
    ISubMenu.IProps
> = (props: ISubMenu.IProps) => {

    return (
        <Container className="dropdown">
            <GridContainer>
                <TitleLink href="#">BLUETOOTH EARBUD</TitleLink>
                <Link href="#">Bluetooth Earphone</Link>
                <Link href="#">Portable Earphone</Link>
                <Link href="#">V45 Earphone</Link>
                <Link href="#">M12 Earbud</Link>
                <Link href="#">XO1 Earbud</Link>
                <TitleLink href="#">IN-EAR</TitleLink>
                <Link href="#">Comfort Earphone</Link>
                <Link href="#">Slick Earphone</Link>
                <Link href="#">V50 Earphone</Link>
                <Link href="#">Scrutt Earbud</Link>
                <Link href="#">Brozzo Earbud</Link>
                <TitleLink href="#">SPORTS EARBUD</TitleLink>
                <Link href="#">In-Ear Earphone</Link>
                <Link href="#">Trendy Earbud</Link>
                <Link href="#">Wireless Earbud</Link>
                <Link href="#">Fossils Earbud</Link>
                <Link href="#">Beast Earbud</Link>
                <TitleLink href="#">WIRELESS</TitleLink>
                <Link href="#">Noise Isolation Earbud</Link>
                <Link href="#">V42 Earphone</Link>
                <Link href="#">Cambri Earbud</Link>
                <Link href="#">Bower Earbud</Link>
                <Link href="#">Griper Earbud</Link>
            </GridContainer>
        </Container>
    );
};

