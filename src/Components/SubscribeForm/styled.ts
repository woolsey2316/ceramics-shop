// #region Global Imports
import styled from "styled-components";
// #endregion Global Imports

import { device, DarkButton } from "@Definitions/StyledComponents";

export const Outer = styled.div`
    position: relative;
    margin: 15px auto 40px;
    width: 90%;
    @media ${device.tablet} {
        width: 70%;
    }
    @media ${device.laptop} {
        width: 60%;
    }
`;

export const Input = styled.input`
    width: 100%;
    padding: 15px 180px 15px 25px;
    border: none;
    font-weight: 400;
    font-size: 18px;
    height: 70px;
    border-radius: 50px;
`;

export const SignUpButton = styled(DarkButton)`
    position: absolute;
    right: 6px;
    top: 6px;
    margin: auto;
    font-weight: 400;
    font-size: 18px;
    padding: 14px 40px;
    @media ${device.tablet} {
        padding: 14px 80px;
    }
`;
