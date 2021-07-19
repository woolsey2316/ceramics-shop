// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { Container, Heading, Logo } from "./styled";
// #endregion Local Imports

// #region Interface Imports
import { ISubscribeSection } from "./SubscribeSection";
// #endregion Interface Imports

export const SubscribeSection: React.FunctionComponent<ISubscribeSection.IProps> = (
    props: ISubscribeSection.IProps
) => {
    return (
        <Container>
            <Logo src="../images/logo.png" />
            <Heading>Subscribe to our Newsletter</Heading>
        </Container>
    );
};
