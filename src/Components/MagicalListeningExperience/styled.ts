// #region Global Imports
import styled from "styled-components";
import { device } from "@Definitions/StyledComponents";
// #endregion Global Imports

export const SliderWrapper = styled("div")`
    position: relative;
    top: -170px;
    left: 0;
    .slick-list {
        padding: 190px 0 120px 0;
        margin-bottom: 40px;
    }
    .slick-dots {
        display: block;
        width: 100%;
        padding: 0;
        margin: 0;
        list-style: none;
        text-align: center;
    }
    .slick-dots li {
        position: relative;
        display: inline-block;
        width: 10px;
        height: 10px;
        margin: 0 5px;
        padding: 0;
        cursor: pointer;
        transition: width 0.3s ease-in-out;
        background: #fc846b;
    }
    .slick-dots li {
        position: relative;
        display: inline-block;
        width: 10px;
        height: 10px;
        margin: 0 5px;
        padding: 0;
        cursor: pointer;
        transition: width 0.3s ease-in-out;
        background: rgba(252, 132, 107, 0.3);
    }
    .slick-dots li.slick-active {
        background: #fc846b;
    }
    .slick-dots li button {
        font-size: 0;
        line-height: 0;

        display: block;

        width: 10px;
        height: 10px;
        padding: 5px;

        cursor: pointer;

        color: transparent;
        border: 0;
        outline: none;
        background: transparent;
    }
`;

export const Container = styled.div`
    position: relative;
    background-color: white;
    background-image: url("../images/section-bgimage-3.png");
    background-position: top left;
`;

export const ImageContainer = styled.div`
    flex-shrink: 0;
    margin-right: 20px;
    &::before {
        content: "";
        border-radius: 50px;
        position: absolute;
        top: 0;
        left: 18%;
        width: 25%;
        height: 150%;
        -webkit-transform: rotate(60deg);
        -moz-transform: rotate(60deg);
        -ms-transform: rotate(60deg);
        -o-transform: rotate(60deg);
        transform: rotate(60deg);
        transform-origin: center top;
        z-index: -1;
        background-color: #fff2f0;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
`;

export const Image = styled.img`
    border-radius: 50%;
    max-width: 100%;
    height: auto;
`;

export const Grid1x2 = styled.div`
    display: flex;
    align-items: flex-start;
    max-width: 1230px;
    width: 100%;
    @media ${device.laptop} {
        margin-left: calc(41% - 350px);
    }
    margin-right: auto;
`;

export const TextContainer = styled.div`
    padding: 0 20px;
    max-width: 768px;
    @media ${device.tablet} {
        padding: 0 50px;
    }
`;

export const CarouselItem = styled.div`
    cursor: grab;
    position: relative;
    width: auto;
    display: flex !important;
    flex-direction: column;
    justify-content: flex-start;
`;
export const AlignmentBox = styled.div`
    max-width: 1500px;
    margin-left: 0px;
    padding-top: 60px;
    padding-bottom: 65px;
    @media ${device.tablet} {
        padding-top: 90px;
        padding-bottom: 100px;
    }
    @media ${device.laptop} {
        padding-left: 41%;
    }
`;

export const Author = styled.p`
    font-family: Playfair Display;
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 5px;
    @media ${device.tablet} {
        font-size: 20px;
    }
    @media ${device.laptop} {
        font-size: 24px;
    }
`;

export const SlideDots = styled.button`
    background: rgba(252, 132, 107, 0.3);
    padding: 0;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    color: transparent;
    border: 0;
    outline: none;
`;
