// #region Global Imports
import styled, { keyframes } from "styled-components";
import { PinkButton, device } from "../../Definitions/StyledComponents";
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

export const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

const CarouselItem = styled.div`
    background: url("images/slider_2000x.png") no-repeat center center;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 60px;
`;
export const TextWrap = styled.div`
    margin-left: 120px;
    width: 40%;
    @media ${device.laptopL} {
        width: 30%;
    }
`;

export const CarouselItem1 = styled(CarouselItem)`
    background: url("images/slider_2000x.png") no-repeat center center;
`;

export const CarouselItem2 = styled(CarouselItem)`
    background: url("images/slider-2-bg_2000x.png") no-repeat center center;
`;

export const CarouselItem3 = styled(CarouselItem)`
    background: url("images/slider-3-bg_2000x.png") no-repeat center center;
`;

export const H2 = styled.h2`
    font-size: 18px;
    color: #373737;
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
export const H3 = styled.h3`
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
    @media ${device.laptop} {
        font-size: 40px;
    }
    @media ${device.desktop} {
        font-size: 72px;
    }
`;

export const SliderInnerBlock = styled.div`
    text-align: left;
    color: #373737;
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
    display: inline-block;
    font-family: Poppins;
    margin: 10px 0 25px;
    font-size: 18px;
    color: #373737;
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
`;
export const RightArrowButton = styled(CarouselButton)`
    right: calc(4% + 1px);
`;
