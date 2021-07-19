// #region Global Imports
import styled from "styled-components";
import { PinkButton } from "@Definitions/StyledComponents";
// #endregion Global Imports

export const Container = styled.div`
    background: url("../images/footer-bg_1920X.jpg") no-repeat center center;
    display: flex;
    flex-direction: column;
    flex: 1 1 100%;
    justify-content: flex-start;
    align-items: center;
    padding: 80px 0 40px 0;
`;

export const Heading = styled.h3`
    color: #ffffff;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 20px;
    font-family: Playfair Display;
    font-weight: bold;
    letter-spacing: 0em;
    margin: 0 0 15px;
    line-height: 1.5;
`;

export const Logo = styled.img`
    max-width: 100%;
    margin: 0 0 30px 0;
    height: 50px;
    color: #373737;
`;

export const Button = styled(PinkButton)`
    display: inline-block;
`;
