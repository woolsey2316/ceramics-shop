// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import {
    Author,
    PublishDate,
    Outer,
    UserIcon,
    CalendarIcon,
    Separator,
} from "./styled";
// #endregion Local Imports

// #region Interface Imports
import { IArticleHeader } from "./ArticleHeader";
// #endregion Interface Imports

export const ArticleHeader: React.FunctionComponent<IArticleHeader.IProps> = (
    props: IArticleHeader.IProps
) => {
    const { author, publishDate } = props;

    return (
        <Outer>
            <UserIcon src="/static/images/user-icon.svg" />
            <Author>{`by ${author}`}</Author>
            <Separator>|</Separator>
            <CalendarIcon src="/static/images/calendar-icon.svg" />
            <PublishDate>{publishDate}</PublishDate>
        </Outer>
    );
};
