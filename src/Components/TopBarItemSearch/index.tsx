// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { Container } from "./styled";
// #endregion Local Imports

// #region Interface Imports
import { ITopBarItemSearch } from "./TopBarItemSearch";
// #endregion Interface Imports

export const TopBarItemSearch: React.FunctionComponent<
    ITopBarItemSearch.IProps
> = (props: ITopBarItemSearch.IProps) => {

    return (
        <Container>
            TopBarItemSearch Page
        </Container>
    );
};

