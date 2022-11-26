import * as React from "react";

import Head from "next/head";

import styled from "styled-components";
import { LayoutProps } from "./Layout";

const Body = styled.body`
    font-family: "Poppins";
`;

const Layout: React.FunctionComponent<LayoutProps> = ({
    children,
}): JSX.Element => {
    return (
        <div>
            <Head>
                <link
                    rel="preload"
                    href="/fonts/NotoSans-Regular.ttf"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/NotoSans-BoldItalic.ttf"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/NotoSans-Italic.ttf"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/NotoSans-Regular.ttf"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/Poppins-Black.ttf"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/Poppins-BlackItalic.ttf"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/Poppins-Medium.ttf"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/Poppins-Regular.ttf"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/Poppins-SemiBold.ttf"
                    as="font"
                    crossOrigin=""
                />
            </Head>
            <Body>{children}</Body>
        </div>
    );
};

export { Layout };
