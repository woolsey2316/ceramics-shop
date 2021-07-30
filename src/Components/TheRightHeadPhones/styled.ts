// #region Global Imports
import styled from "styled-components";
import { device } from "@Definitions/StyledComponents"
// #endregion Global Imports

export const Container = styled.div`
    height: "500px";
    position: relative;
    @media ${device.laptop} {
        height: "600px";
    }
`

export const Picture = styled.picture`
    height: 100%;
    position: relative;
`;

export const BackgroundImage = styled.img`
    height: 600px;
    width: 100%;
    object-fit: cover;
    object-position: center;
    @media ${device.tablet} {
        width: 100%;
        height: auto;
    }
`;

export const BannerContent = styled.div`
    max-width: 714px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 15px;
    position: absolute;
    top: 60%;
    left: 0;
    right: 0;
    z-index: 1;
    margin: 0 auto;
    -webkit-transform: translateY(-75%);
    -moz-transform: translateY(-75%);
    -ms-transform: translateY(-75%);
    -o-transform: translateY(-75%);
    transform: translateY(-75%);
    @media ${device.laptop} {
        top: 60%;
    }
`;

export const PinkHeading = styled.h3`
    font-size: 35px;
    color: #fc846b;
    margin-bottom: 18px;
    line-height: normal;
    font-family: Playfair Display;
    font-weight: bold;
    letter-spacing: 0em;
    margin: 0 0 15px;   
    @media ${device.laptop} {
        font-size: 40px;
    }
`;

export const PlayButton = styled.a`
   
`

export const PlayLink = styled.a`
    cursor: pointer;
    position: relative;
    display: flex;
    width: 90px;
    height: 90px;
    padding: 0;
    font-size: 25px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 2px solid;
    border-color: #fc846b;
    border-radius: 50px;
    margin: auto;
    z-index: 1;
    transition: all 0.3s linear;
`
