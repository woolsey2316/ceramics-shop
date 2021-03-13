// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { 
    LeftArrowButton,
    RightArrowButton,
    Container,
    CarouselItem1,
    CarouselItem2,
    CarouselItem3,
    SliderInnerBlock,
    TextWrap,
    H3,
    H2,
    Text,
    DarkButton } from "./styled";
// #endregion Local Imports

// #region Interface Imports
import { IHeroSlider } from "./HeroSlider";
// #endregion Interface Imports

// this component is not actually used in this application 
// as react-multi-carousel does not support opacity fade animations
const ButtonGroup = ({ next, previous, ...rest }) => {
    const {
        carouselState: { currentSlide, totalItems, slidesToShow }
    } = rest;
    console.log(totalItems - currentSlide - 1)
    return (
        <div className="carousel-button-group">
            { currentSlide &&
            <LeftArrowButton aria-label="Go to previous slide"
                onClick={() => previous()}>
                    <i className="fa-md fa fa-chevron-left"></i>
            </LeftArrowButton>}
            { (totalItems - currentSlide - 1) && 
            <RightArrowButton aria-label="Go to next slide" 
                onClick={() => next()}>
                    <i className="fa-md fa fa-chevron-right"></i>
            </RightArrowButton>}
        </div>
    );
};

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};

export const HeroSlider: React.FunctionComponent<
    IHeroSlider.IProps
> = (props: IHeroSlider.IProps) => {

    return (
        <Container>
            {/* <Carousel
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            autoPlaySpeed={1000}
            keyBoardControl={true}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            customTransition="transform 1200ms ease-in-out"
            transitionDuration={500}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            arrows={false}
            customButtonGroup={<ButtonGroup
                next={props.next}
                previous={props.previous}
                rest={props.rest}
            />} */}
                <CarouselItem1>
                    <TextWrap>
                        <H2>Sing Along</H2>
                        <H3>Inspired Design & Quality Sound With Beats</H3>
                        <SliderInnerBlock>
                            <Text>
                                Love what you listen, listen to what you love. 
                                Music speaks when words don’t. Make it clear. 
                                Let music reach your heart.
                            </Text>
                            <DarkButton>Buy Now</DarkButton>
                        </SliderInnerBlock>
                    </TextWrap>
                </CarouselItem1>
                <CarouselItem2>
                    <TextWrap>
                        <H2>Feel the Rhythm</H2>
                        <H3>Spark Up Your Passion With Good Music.</H3>
                        <SliderInnerBlock>
                            <Text>
                                Experience the decibles like your ears deserve to.
                                Safe for the ears, good for the heart. A treat to your ears.
                            </Text>
                            <DarkButton>Buy Now</DarkButton>
                        </SliderInnerBlock>
                    </TextWrap>
                </CarouselItem2>
                <CarouselItem3>
                    <TextWrap>
                        <H2>Stay Tuned</H2>
                        <H3>Overdose On Music. Overdose On Quality</H3>
                        <SliderInnerBlock>
                            <Text>
                                Headphones so good, you will not want to take it off. 
                                Leaving home without headphones would be a mistake. 
                            </Text>
                            <DarkButton>Shop Now</DarkButton>
                        </SliderInnerBlock>
                    </TextWrap>
                </CarouselItem3>
            {/* </Carousel> */}
        </Container>
    );
};

