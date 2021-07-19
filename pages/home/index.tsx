// #region Global Imports
import * as React from "react";
import { NextPage } from "next";
import { useSelector, useDispatch } from "react-redux";
// #endregion Global Imports

// #region Local Imports
import { withTranslation } from "@Server/i18n";
import { Container } from "@Styled/Home";
import { IStore } from "@Redux/IStore";
import { HomeActions } from "@Actions";
import {
    AdvancedFeatures,
    GoodTreblePerformance,
    Heading,
    LocaleButton,
    LongLastingComfortSection,
    MagicalListeningExperience,
    SimplyAwesomeSection,
    SubscribeSection,
    TheRightHeadPhones,
} from "@Components";
import { Hero } from "@Components/Hero";
import { HeroSlickSlider } from "@Components/HeroSlickSlider";
import { Navbar } from "@Components/Navbar";
// #endregion Local Imports

// #region Interface Imports
import { IHomePage, ReduxNextPageContext } from "@Interfaces";
// #endregion Interface Imports

const Home: NextPage<IHomePage.IProps, IHomePage.InitialProps> = ({
    t,
    i18n,
}) => {
    const home = useSelector((state: IStore) => state.home);
    const dispatch = useDispatch();

    const renderLocaleButtons = (activeLanguage: string) =>
        ["en", "es", "tr"].map(lang => (
            <LocaleButton
                key={lang}
                lang={lang}
                isActive={activeLanguage === lang}
                onClick={() => i18n.changeLanguage(lang)}
            />
        ));

    return (
        <Container>
            <Hero>
                <Navbar />
                <HeroSlickSlider />
            </Hero>
            <SimplyAwesomeSection />
            <LongLastingComfortSection />
            <AdvancedFeatures />
            <MagicalListeningExperience />
            <TheRightHeadPhones />
            <GoodTreblePerformance />
            <SubscribeSection />
        </Container>
    );
};

Home.getInitialProps = async (
    ctx: ReduxNextPageContext
): Promise<IHomePage.InitialProps> => {
    await ctx.store.dispatch(
        HomeActions.GetApod({
            params: { hd: true },
        })
    );
    return { namespacesRequired: ["common"] };
};

const Extended = withTranslation("common")(Home);

export default Extended;
