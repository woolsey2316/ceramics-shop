// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { Container, Grid1x2, Image, TextContainer } from "./styled";
import {
    PinkHeading,
    HeadingWithPinkLine,
    Text,
    DarkButton,
} from "@Definitions/StyledComponents";
// #endregion Local Imports

// #region Interface Imports
import { ISimplyAwesomeSection } from "./SimplyAwesomeSection";
// #endregion Interface Imports

export const SimplyAwesomeSection: React.FunctionComponent<ISimplyAwesomeSection.IProps> = (
    props: ISimplyAwesomeSection.IProps
) => {
    return (
        <Container>
            <Grid1x2>
                <Image src="../images/img-1a_960x.png"></Image>
                <TextContainer>
                    <HeadingWithPinkLine>Simply Awesome</HeadingWithPinkLine>
                    <PinkHeading>
                        Amazing music gadgets for music lovers
                    </PinkHeading>
                    <Text>
                        Sed viverra ipsum nunc aliquet bibendum. Viverra ipsum
                        nunc aliquet bibendum enim facilisis gravida neque.
                        Imperdiet massa tincidunt nunc pulvinar sapien et ligula
                        ullamcorper.
                    </Text>
                    <DarkButton> Buy Now</DarkButton>
                </TextContainer>
            </Grid1x2>
        </Container>
    );
};
