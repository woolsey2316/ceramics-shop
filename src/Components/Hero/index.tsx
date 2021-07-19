// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { Container } from "./styled";
// #endregion Local Imports

// #region Interface Imports
import { IHero } from "./Hero";
// #endregion Interface Imports

export const Hero: React.FunctionComponent<IHero.IProps> = (
    props: IHero.IProps
) => {
    return <Container>{props.children}</Container>;
};
