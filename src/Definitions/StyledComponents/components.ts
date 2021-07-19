// #region Global Imports
import styled from "styled-components";
import { device } from "./device";
// #endregion Global Imports

// resusable components

export const HoverLink = styled.a`
    color: #373737;
    -webkit-transition: all 0.4s ease-in-out;
    -moz-transition: all 0.4s ease-in-out;
    -ms-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    &:hover {
        color: #fc846b;
        text-decoration: none;
        -webkit-transition: all 0.4s ease-in-out;
        -moz-transition: all 0.4s ease-in-out;
        -ms-transition: all 0.4s ease-in-out;
        -o-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;
    }
`;

export const PinkButton = styled.a`
    border-radius: 30px;
    color: #fc846b;
    display: inline-block;
    line-height: 1.6em;
    z-index: 1;
    overflow: hidden;
    position: relative;
    padding: 10px 45px;
    margin: 10px 0 0;
    text-decoration: none;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    font-size: 18px;
    font-weight: 500;
    outline: none;
    -webkit-transition: all 0.4s ease-in-out;
    -moz-transition: all 0.4s ease-in-out;
    -ms-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
`;

export const DarkButton = styled(PinkButton)`
    background: #373737;
    color: #fc846b;
    border: none;
    font-family: Poppins;
    text-transform: capitalize;
    margin-top: 20px;
    font-size: 16px;
    font-weight: bold;
    padding: 14px 80px;
    &:hover {
        background: #fc846b;
        color: #ffffff;
        border: none;
        text-decoration: none;
    }
    @media ${device.laptop} {
        font-size: 18px;
    }
    @media ${device.laptopL} {
        font-size: 20px;
    }
`;

export const HeadingBorder = styled.div`
    background: #fc846b;
    content: "";
    width: 50px;
    height: 1px;
    vertical-align: middle;
    margin-bottom: 30px;
`;

export const SmallHeading = styled.h2`
    font-size: 18px;
    font-weight: 600;
    color: #0c0c0c;
    font-weight: 500;
    margin-bottom: 20px @media ${device.tablet} {
        font-size: 20px;
    }
    @media ${device.laptop} {
        font-size: 22px;
        margin-bottom: 40px;
    }
    @media ${device.laptopL} {
        font-size: 27px;
    }
`;

export const HeadingWithPinkLine = styled.h2`
    font-size: 18px;
    font-weight: 600;
    color: #0c0c0c;
    font-weight: 500;
    &::after {
        margin-left: 10px;
        background: #fc846b;
        content: "";
        display: inline-block;
        width: 50px;
        height: 1px;
        vertical-align: middle;
    }
    @media ${device.tablet} {
        font-size: 20px;
    }
    @media ${device.laptop} {
        font-size: 22px;
    }
    @media ${device.laptopL} {
        font-size: 27px;
    }
`;
export const PinkHeading = styled.h3`
    font-size: 24px;
    color: #fc846b;
    margin-bottom: 18px;
    line-height: normal;
    font-family: Playfair Display;
    font-weight: bold;
    letter-spacing: 0em;
    margin: 0 0 15px;
    @media ${device.tablet} {
        font-size: 30px;
    }
    @media ${device.laptop} {
        font-size: 40px;
    }
`;

export const Text = styled.p`
    line-height: 30.6px;
    font-family: Poppins;
    margin: 10px 0 25px;
    font-size: 18px;
    color: #0c0c0c;
`;

export const WhiteText = styled.p`
    font-family: Poppins;
    margin: 10px 0 25px;
    font-size: 18px;
    color: white;
`;

export const WhiteTextCentered = styled(WhiteText)`
    text-align: center;
    max-width: 767px;
`;
