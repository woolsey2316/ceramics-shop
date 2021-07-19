// #region Global Imports
import React, { useRef, useState } from "react";
// #endregion Global Imports

// #region Local Imports
import {
    SliderWrapper,
    CarouselItem,
    BackgroundImage,
    SliderInnerBlock,
    TextWrap,
    LargePinkHeading,
    HeadingWithPinkLine,
    Text,
    DarkButton,
} from "./styled";
import Slider, { Settings } from "react-slick";
import styled from "styled-components";
import { device } from "../../Definitions/StyledComponents";
// #endregion Local Imports

// #region Interface Imports
import { IHeroSlickSlider } from "./HeroSlickSlider";
// #endregion Interface Imports

interface SliderArrowProps {
    type: "next" | "prev";
    onClick: () => void;
}

const SliderArrow = (props: SliderArrowProps) => {
    const { type, ...rest } = props;

    return (
        <SliderNav type={type} {...rest}>
            {type === "next" ? ">" : "<"}
        </SliderNav>
    );
};

const SliderNav = styled.div<SliderArrowProps>`
    ${({ type }) => type === "next" && "right: calc(4% + 1px)"};
    ${({ type }) => type === "prev" && "left: calc(4% + 1px)"};
    cursor: pointer;
    border-radius: 9999px;
    background-color: white;
    padding: 1.45rem 1rem;
    font-size: 30px;
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
    @media ${device.laptopL} {
        ${({ type }) => type === "next" && "right: calc(3% + 1px)"};
        ${({ type }) => type === "prev" && "left: calc(3% + 1px)"};
    }
`;

export const HeroSlickSlider: React.FunctionComponent<IHeroSlickSlider.IProps> = (
    props: IHeroSlickSlider.IProps
) => {
    const sliderRef = useRef<Slider>(null);
    const sliderWrapperRef = useRef<HTMLDivElement>(null);

    const [showRightArrow, setShowRightArrow] = useState<boolean>(true);
    const [showLeftArrow, setShowLeftArrow] = useState<boolean>(false);

    const settings: Settings = {
        centerMode: false,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 750,
        variableWidth: false,
        infinite: false,
        arrows: false,
        afterChange: (currentSlide: number) => handleChangeSlide(currentSlide),
    };

    const handleChangeSlide = (currentSlide: number) => {
        const leftArrowVisible = currentSlide !== 0;

        const rightArrowVisible = currentSlide < 2;

        setShowLeftArrow(leftArrowVisible);

        setShowRightArrow(rightArrowVisible);
    };
    return (
        <SliderWrapper ref={sliderWrapperRef}>
            {showLeftArrow && (
                <SliderArrow
                    type="prev"
                    onClick={() => sliderRef.current?.slickPrev()}
                />
            )}
            <Slider {...settings} ref={sliderRef}>
                <CarouselItem>
                    <BackgroundImage
                        srcSet="images/slider_2000x.png 800w,
                                images\mob-slider-1_767x.jpg 767w"
                        src="images/slider_2000x.png"
                    />
                    <TextWrap>
                        <HeadingWithPinkLine>Sing Along</HeadingWithPinkLine>
                        <LargePinkHeading>
                            Inspired Design & Quality Sound With Beats
                        </LargePinkHeading>
                        <SliderInnerBlock>
                            <Text>
                                Love what you listen, listen to what you love.
                                Music speaks when words don’t. Make it clear.
                                Let music reach your heart.
                            </Text>
                            <DarkButton>Buy Now</DarkButton>
                        </SliderInnerBlock>
                    </TextWrap>
                </CarouselItem>
                <CarouselItem>
                    <BackgroundImage src="images/slider-2-bg_2000x.png" />
                    <TextWrap>
                        <HeadingWithPinkLine>
                            Feel the Rhythm
                        </HeadingWithPinkLine>
                        <LargePinkHeading>
                            Spark Up Your Passion With Good Music.
                        </LargePinkHeading>
                        <SliderInnerBlock>
                            <Text>
                                Experience the decibles like your ears deserve
                                to. Safe for the ears, good for the heart. A
                                treat to your ears.
                            </Text>
                            <DarkButton>Buy Now</DarkButton>
                        </SliderInnerBlock>
                    </TextWrap>
                </CarouselItem>
                <CarouselItem>
                    <BackgroundImage src="images/slider-3-bg_2000x.png" />
                    <TextWrap>
                        <HeadingWithPinkLine>Stay Tuned</HeadingWithPinkLine>
                        <LargePinkHeading>
                            Overdose On Music. Overdose On Quality
                        </LargePinkHeading>
                        <SliderInnerBlock>
                            <Text>
                                Headphones so good, you will not want to take it
                                off. Leaving home without headphones would be a
                                mistake.
                            </Text>
                            <DarkButton>Shop Now</DarkButton>
                        </SliderInnerBlock>
                    </TextWrap>
                </CarouselItem>
            </Slider>
            {showRightArrow && (
                <SliderArrow
                    type="next"
                    onClick={() => sliderRef?.current?.slickNext()}
                />
            )}
        </SliderWrapper>
    );
};
