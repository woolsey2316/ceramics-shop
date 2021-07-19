// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { Outer, Input, SignUpButton } from "./styled";
// #endregion Local Imports

// #region Interface Imports
import { ISubscribeForm } from "./SubscribeForm";
// #endregion Interface Imports

export const SubscribeForm: React.FunctionComponent<ISubscribeForm.IProps> = () => {
    return (
        <Outer>
            <Input placeholder="Your email address" />
            <SignUpButton>Sign Up</SignUpButton>
        </Outer>
    )
};

