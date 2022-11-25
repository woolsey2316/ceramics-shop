// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { Container, Image } from "./styled";
// #endregion Local Imports

// #region Interface Imports
import { ISocialMediaQuilt } from "./SocialMediaQuilt";
// #endregion Interface Imports

export const SocialMediaQuilt: React.FunctionComponent<ISocialMediaQuilt.IProps> = () => {
    return (
        <Container>
            <Image
                alt="social media icon"
                src="/static/images/icons/twitter-brands.svg"
            />
            <Image
                alt="social media icon"
                src="/static/images/icons/facebook-f-brands.svg"
            />
            <Image
                alt="social media icon"
                src="/static/images/icons/pinterest-brands.svg"
            />
            <Image
                alt="social media icon"
                src="/static/images/icons/instagram-brands.svg"
            />
        </Container>
    );
};
