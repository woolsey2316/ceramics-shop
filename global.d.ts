declare namespace Process {
    interface ProcessEnv {
        PROXY_MODE: string;
        NEXT_PUBLIC_STATIC_PATH: string;
        NEXT_PUBLIC_API_URL: string;
        NEXT_PUBLIC_API_KEY: string;
    }
}

declare namespace jest {
    interface Options {
        media?: string;
        modifier?: string;
        supports?: string;
    }

    interface Matchers<R> {
        toHaveStyleRule(property: string, value?: Value, options?: Options): R;
    }
}

declare module "react-country-flag" {
    import * as React from "react";

    export interface ReactCountryFlagProps<T>
        extends React.DetailedHTMLProps<React.LabelHTMLAttributes<T>, T> {
        cdnSuffix?: string;
        cdnUrl?: string;
        countryCode: string;
        svg?: boolean;
        style?: React.CSSProperties;
    }
    const ReactCountryFlag: React.FC<ReactCountryFlagProps<
        HTMLSpanElement | HTMLImageElement
    >> = ({
        cdnSuffix = "svg",
        cdnUrl = "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/",
        svg = false,
        style = {},
        countryCode,
    }) => React.ReactNode; // return should be HTMLImageElement or HTMLSpanElement but close enough for me.
    export default ReactCountryFlag;
}
