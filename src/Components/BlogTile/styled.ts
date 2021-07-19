// #region Global Imports
import styled from "styled-components";
import { device } from "@Definitions/StyledComponents";
// #endregion Global Imports

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 100%;
    justify-content: flex-start;
    align-items: flex-start;
    min-height: 100vh;
    padding: 0 30px;
    @media ${device.tablet} {
        max-width: 543px;
    }
`;

export const Inner = styled.div`
    padding: 35px 0 0;
`;

export const SmallText = styled.p`
    color: #646464;
    margin: 0 0 15px 0;
`;

export const Text = styled.p`
    letter-spacing: 0em;
    font-family: Poppins;
    font-weight: normal;
    font-size: 18px;
    line-height: 1.7;
`;

export const Heading = styled.h2`
    font-size: 30px;
    margin-bottom: 8px;
    font-family: Playfair Display;
    font-weight: 700;
    letter-spacing: 0em;
    line-height: 1.5;
    @media ${device.tablet} {
        font-size: 26px;
    }
`;

export const Link = styled.a`
    color: #373737;
`;

export const ImageContainer = styled.div`
    border-radius: 30px;
    position: relative;
    overflow: hidden;
    &:hover:before {
        opacity: 0.8;
    }
    &:before {
        background-image: linear-gradient(
            180deg,
            rgba(252, 132, 107, 0),
            #fc846b
        );
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: all linear 0.3s;
        position: absolute;
        pointer-events: none;
    }
    
`;
export const Image = styled.img`
    max-width: 100%;
    border-radius: 30px;
    &:hover {
    }
`;
