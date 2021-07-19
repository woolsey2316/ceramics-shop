// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { Container, NavLink, Separator } from "./styled";
// #endregion Local Imports

// #region Interface Imports
import { IMinimalistNavBar } from "./MinimalistNavBar";
// #endregion Interface Imports

export const MinimalistNavBar: React.FunctionComponent<IMinimalistNavBar.IProps> = () => {
    return (
        <Container>
            <NavLink>History</NavLink>
            <Separator>|</Separator>
            <NavLink>Privacy Policy</NavLink>
            <Separator>|</Separator>
            <NavLink>News</NavLink>
            <Separator>|</Separator>
            <NavLink>Terms & Condition</NavLink>
            <Separator>|</Separator>
            <NavLink>Contact</NavLink>
        </Container>
    );
};
