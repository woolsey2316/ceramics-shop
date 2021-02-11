// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { Container, Wrap } from "./styled";
import { FullWidthMenu } from "../FullWidthMenu"
// #endregion Local Imports

// #region Interface Imports
import { IBanner } from "./Banner";
// #endregion Interface Imports

export const Banner: React.FunctionComponent<
    IBanner.IProps
> = (props: IBanner.IProps) => {

    return (
        <Container>
            <Wrap>
                <FullWidthMenu/>
            </Wrap>
        </Container>
    );
};

