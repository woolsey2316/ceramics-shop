// #region Global Imports
import styled from "styled-components";
import { device } from "../../Definitions/StyledComponents";
// #endregion Global Imports

export const Container = styled.div`
    background: #fc846b;
    background-image: url(//cdn.shopify.com/s/files/1/0437/0454/9536/files/bg-2.png?v=1595597862);
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    display: flex;
    align-items: center;
    padding-top: 100px;
    padding-bottom: 100px;
`;

export const HeadingWithWhiteLine = styled.h2`
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 30px;
    color: white;
    &::after {
        margin-left: 10px;
        background: white;
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

export const WhiteText = styled.p`
    font-size: 20px;
    font-weight: 500;
    color: white;
    line-height: 0.9;
    @media ${device.tablet} {
        font-size: 24px;
    }
    @media ${device.laptop} {
        font-size: 30px;
    }
`;

export const BlackHeading = styled.h3`
    font-size: 24px;
    color: #000000;
    margin-bottom: 48px;
    line-height: normal;
    font-family: Playfair Display;
    font-weight: bold;
    letter-spacing: 0em;
    @media ${device.tablet} {
        font-size: 30px;
    }
    @media ${device.laptop} {
        font-size: 40px;
    }
`;

export const BulletPointItem = styled.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 4rem;
`;

export const Icon = styled.img`
    margin-right: 1rem;
`;

export const Image = styled.img`
    max-width: 100%;
    height: auto;
    mask-image: url(//cdn.shopify.com/s/files/1/0437/0454/9536/t/26/assets/mask-image.png?v=1141769…);
    -webkit-mask-image: url(//cdn.shopify.com/s/files/1/0437/0454/9536/t/26/assets/mask-image.png?v=1141769…);
    mask-position: center center;
    -webkit-mask-position: center center;
    mask-repeat: no-repeat;
    -webkit-mask-repeat: no-repeat;
    mask-size: cover;
    -webkit-mask-size: cover;
`;

export const ImageContainer = styled.div`
    width: 50%;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
