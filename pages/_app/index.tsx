// #region Global Imports
import * as React from "react";
import App, { AppInitialProps, AppContext } from "next/app";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import withRedux from "next-redux-wrapper";
// #endregion Global Imports

// #region Local Imports
import { theme } from "@Definitions/Styled";
import { appWithTranslation } from "@Server/i18n";
import { AppWithStore } from "@Interfaces";
import { makeStore } from "@Redux";
import { library } from "@fortawesome/fontawesome-svg-core"
import { faChevronDown, faUser, faShoppingBag } from "@fortawesome/free-solid-svg-icons"

import "@Static/css/main.scss";
// #endregion Local Imports

library.add(
    // solid icon
    faChevronDown,
    faUser,
    faShoppingBag
)

class WebApp extends App<AppWithStore> {
    static async getInitialProps({
        Component,
        ctx,
    }: AppContext): Promise<AppInitialProps> {
        const pageProps = Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {};

        return { pageProps };
    }
    render() {
        const { Component, pageProps, store } = this.props;

        return (
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </Provider>
        );
    }
}

export default withRedux(makeStore)(appWithTranslation(WebApp));
