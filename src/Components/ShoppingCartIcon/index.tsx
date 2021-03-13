// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { Icon } from "./styled";
import { ShoppingCartWrap } from '../../Styled/NavBar';
// #endregion Local Imports

// #region Interface Imports
import { IShoppingCartIcon } from "./ShoppingCartIcon";
// #endregion Interface Imports

export const ShoppingCartIcon: React.FunctionComponent<
    IShoppingCartIcon.IProps
> = (props: IShoppingCartIcon.IProps) => {

    return (
        <ShoppingCartWrap><Icon className="fa-2x fa fa-shopping-bag"></Icon></ShoppingCartWrap>
    );
};

