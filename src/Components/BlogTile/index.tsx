// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { DarkButton } from "@Definitions/StyledComponents";
import { ArticleHeader } from "../ArticleHeader";
import {
    BlogTileContainer,
    Heading,
    Text,
    Image,
    ImageContainer,
    Inner,
} from "./styled";
// #endregion Local Imports

// #region Interface Imports
import { IBlogTile } from "./BlogTile";
// #endregion Interface Imports

export const BlogTile: React.FunctionComponent<IBlogTile.IProps> = (
    props: IBlogTile.IProps
) => {
    const { title, preview, image, ...rest } = props;
    return (
        <BlogTileContainer>
            <ImageContainer>
                <Image src={`../images/${image}`} />
            </ImageContainer>
            <Inner>
                <Heading>{title}</Heading>
                <ArticleHeader {...rest} />
                <Text>{preview}</Text>
                <DarkButton>Read More</DarkButton>
            </Inner>
        </BlogTileContainer>
    );
};
