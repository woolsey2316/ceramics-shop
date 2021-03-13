// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { Container, Advertisement } from "./styled";
// #endregion Local Imports

// #region Interface Imports
import { IAdvertisementBanner } from "./AdvertisementBanner";
// #endregion Interface Imports

export const AdvertisementBanner: React.FunctionComponent<
    IAdvertisementBanner.IProps
> = (props: IAdvertisementBanner.IProps) => {

    return (
        <Container>
            <Advertisement src="images/Boom_Mega_Menu_01_850x.png"/>
            <Advertisement src="images/Boom_Mega_Menu_02_850x.png"/>
        </Container>
    );
};

