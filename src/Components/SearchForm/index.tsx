// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { Container } from "./styled";
// #endregion Local Imports

// #region Interface Imports
import { ISearchForm } from "./SearchForm";
// #endregion Interface Imports

export const SearchForm: React.FunctionComponent<
    ISearchForm.IProps
> = (props: ISearchForm.IProps) => {

    return (
        <Container>
            SearchForm Page
        </Container>
    );
};

