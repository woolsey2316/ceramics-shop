// #region Global Imports
import { SubscribeForm } from "@Components/SubscribeForm";
import { SocialMediaQuilt } from "@Components/SocialMediaQuilt";
import { MinimalistNavBar } from "@Components/MinimalistNavBar";
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { Container, Heading, Logo } from "./styled";
// #endregion Local Imports

// #region Interface Imports
import { ISubscribeSection } from "./SubscribeSection";
// #endregion Interface Imports

export const SubscribeSection: React.FunctionComponent<ISubscribeSection.IProps> = () => {
    return (
        <Container>
            <Logo src="/static/images/logo.png" />
            <Heading>Subscribe to our Newsletter</Heading>
            <SubscribeForm />
            <SocialMediaQuilt />
            <MinimalistNavBar />
        </Container>
    );
};
