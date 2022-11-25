// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import {
    Container,
    HeadingWithWhiteLine,
    BlackHeading,
    WhiteText,
    BulletPointItem,
    Icon,
    Image,
    TextContainer,
    ImageContainer,
} from "./styled";
// #endregion Local Imports

// #region Interface Imports
import { IAdvancedFeatures } from "./AdvancedFeatures";
// #endregion Interface Imports

export const AdvancedFeatures: React.FunctionComponent<IAdvancedFeatures.IProps> = (
    props: IAdvancedFeatures.IProps
) => {
    return (
        <Container>
            <ImageContainer>
                <Image src="/static/images/img-3_900x.jpg" />
            </ImageContainer>
            <TextContainer>
                <HeadingWithWhiteLine>Advanced Features</HeadingWithWhiteLine>
                <BlackHeading>Ultimate comfort and best sound</BlackHeading>
                <BulletPointItem>
                    <Icon src="/static/images/icon-1_grande.png" />
                    <WhiteText>Bluetooth connectivity</WhiteText>
                </BulletPointItem>
                <BulletPointItem>
                    <Icon src="/static/images/icon-2_grande.png" />
                    <WhiteText>Wireless headphones</WhiteText>
                </BulletPointItem>
                <BulletPointItem>
                    <Icon src="/static/images/icon-3_grande.png" />
                    <WhiteText>Long lasting battery</WhiteText>
                </BulletPointItem>
                <BulletPointItem>
                    <Icon src="/static/images/icon-4_grande.png" />
                    <WhiteText>Higher water & dust resistance</WhiteText>
                </BulletPointItem>
                <BulletPointItem>
                    <Icon src="/static/images/icon-5_grande.png" />
                    <WhiteText>One Touch Control</WhiteText>
                </BulletPointItem>
                <BulletPointItem>
                    <Icon src="/static/images/icon-6_grande.png" />
                    <WhiteText>Active Noise Cancelling</WhiteText>
                </BulletPointItem>
            </TextContainer>
        </Container>
    );
};
