// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import {
    PinkHeading,
    HeadingBorder,
    SmallHeading,
} from "@Definitions/StyledComponents";
import { Container, BlogListContainer } from "./styled";
import { BlogTile } from "../BlogTile";
// #endregion Local Imports

// #region Interface Imports
import { IGoodTreblePerformance } from "./GoodTreblePerformance";
// #endregion Interface Imports

export const GoodTreblePerformance: React.FunctionComponent<IGoodTreblePerformance.IProps> = () => {
    return (
        <Container>
            <HeadingBorder />
            <SmallHeading>Good Treble Performance</SmallHeading>
            <PinkHeading>Rhythmic Music Blog</PinkHeading>
            <BlogListContainer>
                <BlogTile
                    image="blog-5_1024x1024.jpg"
                    title="White Wireless Earbud"
                    publishDate="2018-07-07"
                    comments={4}
                    author="Ramamoorthi M"
                    preview="Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum elementum."
                />
                <BlogTile
                    image="blog-7_1024x1024.jpg"
                    title="Loudest Wireless Earbud"
                    comments={3}
                    publishDate="2018-07-07"
                    author="Ramamoorthi M"
                    preview="Justo eget magna fermentum iaculis eu. Ut consequat semper viverra nam libero justo laoreet sit amet. Viverra aliquet eget sit amet."
                />
                <BlogTile
                    image="blog-67_1024x1024.jpg"
                    title="Fun With Friends"
                    comments={2}
                    publishDate="2018-07-07"
                    author="Ramamoorthi M"
                    preview="Aliquam sem et tortor consequat id porta nibh venenatis cras. Mollis aliquam ut porttitor leo a diam sollicitudin. Venenatis lectus mag."
                />
            </BlogListContainer>
        </Container>
    );
};
