// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { Container, BackgroundImage, BannerContent } from "./styled";
import { PinkHeading, WhiteTextCentered } from "@Definitions/StyledComponents";
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
                <img src="../images/play-button.svg" />
            </BannerContent>
            <BackgroundImage
                src="../images/video-bg.jpg"
                alt="man using earphones"
            />
        </Container>
    );
};
