// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { Container, Picture, BackgroundImage, BannerContent, PinkHeading, PlayLink, PlayButton } from "./styled";
import { WhiteTextCentered } from "@Definitions/StyledComponents";
// #endregion Local Imports

// #region Interface Imports
import { ITheRightHeadPhones } from "./TheRightHeadPhones";
// #endregion Interface Imports

export const TheRightHeadPhones: React.FunctionComponent<ITheRightHeadPhones.IProps> = (
    props: ITheRightHeadPhones.IProps
) => {
    return (
        <Container>
            <BannerContent>
                <PinkHeading>The Right Headphones</PinkHeading>
                <WhiteTextCentered>
                    In ornare quam viverra orci sagittis. Duis ultricies lacus
                    sed turpis tincidunt id aliquet risus. Arcu felis bibendum
                    ut tristique et.
                </WhiteTextCentered>
                <PlayButton>
                    <img src="/static/images/play-button.svg"/>
                </PlayButton>
            </BannerContent>
            <Picture>
                <BackgroundImage
                    src="/static/images/video-bg.jpg"
                    alt="man using earphones"
                />
            </Picture>
        </Container>
    );
};
