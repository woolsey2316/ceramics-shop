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
import { ILongLastingComfortSection } from "./LongLastingComfortSection";
// #endregion Interface Imports

export const LongLastingComfortSection: React.FunctionComponent<ILongLastingComfortSection.IProps> = (
    props: ILongLastingComfortSection.IProps
) => {
    return (
        <Container>
            <Grid1x2>
                <TextContainer>
                    <HeadingWithPinkLine>
                        Long Lasting Comfort
                    </HeadingWithPinkLine>
                    <PinkHeading>
                        Amazing music gadgets for music lovers
                    </PinkHeading>
                    <Text>
                        Sed viverra ipsum nunc aliquet bibendum. Viverra ipsum
                        nunc aliquet bibendum enim facilisis gravida neque.
                        Imperdiet massa tincidunt nunc pulvinar sapien et ligula
                        ullamcorper.
                    </Text>
                    <DarkButton>Buy Now</DarkButton>
                </TextContainer>
                <Image src="../images/img-2_960x.png"></Image>
            </Grid1x2>
        </Container>
    );
};
