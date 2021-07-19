// #region Global Imports
import styled, { keyframes } from "styled-components";
import { PinkButton, device } from "@Definitions/StyledComponents";
// #endregion Global Imports

const fadeInLeft = keyframes`
    0% {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }
    100% {
        opacity: 1;
        transform: none;
    }
`;

export const SliderWrapper = styled.div`
    position: absolute;
    width: 100%;
`;

export const CarouselItem = styled.div`
    position: relative;
    width: auto;
    height: 100vh;
    display: flex !important;
    flex-direction: column;
    justify-content: flex-start;
`;
export const TextWrap = styled.div`
    position: absolute;
    top: 35%;
    margin-left: 120px;
    width: 40%;
    @media ${device.laptopXL} {
        width: 30%;
    }
`;

export const BackgroundImage = styled.img`
    max-width: 100%;
    cursor: grab;
    margin: 0 auto;
`;

export const HeadingWithPinkLine = styled.h2`
    font-size: 18px;
    color: #0c0c0c;
    font-weight: 400;
    animation-name: ${fadeInLeft};
    animation-delay: 0.1s;
    animation-duration: 1200ms;
    animation-fill-mode: both;
    animation-iteration-count: 1;
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
export const LargePinkHeading = styled.h3`
    font-size: 24px;
    color: #fc846b;
    animation-name: ${fadeInLeft};
    animation-delay: 0.15s;
    animation-duration: 1200ms;
    animation-fill-mode: both;
    animation-iteration-count: 1;
    margin-bottom: 18px;
    line-height: normal;
    font-family: Playfair Display;
    font-weight: bold;
    letter-spacing: 0em;
    margin: 0 0 15px;
    @media ${device.tablet} {
        font-size: 30px;
    }
    @media ${device.laptopL} {
        font-size: 40px;
    }
    @media ${device.laptopXL} {
        font-size: 72px;
    }
`;

export const SliderInnerBlock = styled.div`
    text-align: left;
    color: #0c0c0c;
    letter-spacing: 0em;
    font-family: Poppins;
    font-weight: normal;
    font-size: 18px;
    line-height: 1.7;
    -webkit-font-smoothing: antialiased;
`;

export const Text = styled.div`
    animation-name: ${fadeInLeft};
    animation-delay: 0.2s;
    animation-duration: 1200ms;
    animation-fill-mode: both;
    animation-iteration-count: 1;
    font-family: Poppins;
    margin: 10px 0 25px;
    font-size: 18px;
    color: #0c0c0c;
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
const CarouselButton = styled.button`
    border: none;
    border-radius: 9999px;
    background-color: white;
    font-size: 24px;
    width: 50px;
    height: 50px;
    line-height: 4px;
    position: absolute;
    top: 50%;
    z-index: 49;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    &:hover {
        background: #373737;
        border-color: #373737;
        color: #fc846b;
    }
`;
export const LeftArrowButton = styled(CarouselButton)`
    left: calc(4% + 1px);
    top: 50%;
`;
export const RightArrowButton = styled(CarouselButton)`
    right: calc(4% + 1px);
    top: 50%;
`;
