// #region Global Imports
import React, { useRef, useState } from "react";
// #endregion Global Imports

// #region Local Imports
import {
    PinkHeading,
    HeadingBorder,
    SmallHeading,
    Text,
} from "@Definitions/StyledComponents";
import Slider, { Settings } from "react-slick";
import styled from "styled-components";
import { device } from "@Definitions/StyledComponents";
import {
    Container,
    Grid1x2,
    Image,
    TextContainer,
    CarouselItem,
    AlignmentBox,
    Author,
    ImageContainer,
    SliderWrapper,
} from "./styled";
// #endregion Local Imports

// #region Interface Imports
import { IMagicalListeningExperience } from "./MagicalListeningExperience";
// #endregion Interface Imports

interface SliderDotProps {
    currentSlide: number;
    i: number;
}

const SliderDots = (props: SliderDotProps) => {
    const { currentSlide, i } = props;

    return <Dots i={i} currentSlide={currentSlide} />;
};

const Dots = styled.button<SliderDotProps>`
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
    @media ${device.laptopL} {
        ${({ currentSlide }) =>
            currentSlide === currentSlide && "background: #fc846b"};
    }
`;

export const MagicalListeningExperience: React.FunctionComponent<IMagicalListeningExperience.IProps> = (
    props: IMagicalListeningExperience.IProps
) => {
    const sliderRef = useRef<Slider>(null);

    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const settings: Settings = {
        appendDots: dots => <ul>{dots}</ul>,
        customPaging(i) {
            return <SliderDots i={i} currentSlide={currentSlide} />;
        },
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 750,
        variableWidth: false,
        infinite: false,
        arrows: false,
        dots: true,
        afterChange: (currentSlide: number) => handleChangeSlide(currentSlide),
    };

    const handleChangeSlide = (current_slide: number) => {
        setCurrentSlide(current_slide);
    };

    return (
        <Container>
            <AlignmentBox>
                <HeadingBorder />
                <SmallHeading>Magical Listening Experience</SmallHeading>
                <PinkHeading>
                    Wireless Headphones & Ear-buds are Comfort & Fit
                </PinkHeading>
            </AlignmentBox>
            <SliderWrapper>
                <Slider {...settings} ref={sliderRef}>
                    <CarouselItem>
                        <Grid1x2>
                            <ImageContainer>
                                <Image src="/static/images/testi-1_300x.png" />
                            </ImageContainer>
                            <TextContainer>
                                <Text>
                                    Vulputate mi sit amet mauris commodo quis
                                    imperdiet. Dolor purus non enim praesent
                                    elementum facilisis leo. Maecenas volutpat
                                    blandit aliquam etiam erat velit scelerisque
                                    in. Ac felis donec et odio pellentesque diam
                                    volutpat commodo sed. Ipsum consequat nisl
                                    vel pretium lectus quam id leo.
                                </Text>
                                <Author>Melvin Powell - Norway</Author>
                                <Text>Fitness Coach</Text>
                            </TextContainer>
                        </Grid1x2>
                    </CarouselItem>
                    <CarouselItem>
                        <Grid1x2>
                            <ImageContainer>
                                <Image src="/static/images/test-1_300x.jpg" />
                            </ImageContainer>
                            <TextContainer>
                                <Text>
                                    Vulputate mi sit amet mauris commodo quis
                                    imperdiet. Dolor purus non enim praesent
                                    elementum facilisis leo. Maecenas volutpat
                                    blandit aliquam etiam erat velit scelerisque
                                    in. Ac felis donec et odio pellentesque diam
                                    volutpat commodo sed. Ipsum consequat nisl
                                    vel pretium lectus quam id leo.
                                </Text>
                                <Author>Melvin Powell - Norway</Author>
                                <Text>Fitness Coach</Text>
                            </TextContainer>
                        </Grid1x2>
                    </CarouselItem>
                    <CarouselItem>
                        <Grid1x2>
                            <ImageContainer>
                                <Image src="/static/images/test-2_300x.jpg" />
                            </ImageContainer>
                            <TextContainer>
                                <Text>
                                    Vulputate mi sit amet mauris commodo quis
                                    imperdiet. Dolor purus non enim praesent
                                    elementum facilisis leo. Maecenas volutpat
                                    blandit aliquam etiam erat velit scelerisque
                                    in. Ac felis donec et odio pellentesque diam
                                    volutpat commodo sed. Ipsum consequat nisl
                                    vel pretium lectus quam id leo.
                                </Text>
                                <Author>Melvin Powell - Norway</Author>
                                <Text>Fitness Coach</Text>
                            </TextContainer>
                        </Grid1x2>
                    </CarouselItem>
                </Slider>
            </SliderWrapper>
        </Container>
    );
};
