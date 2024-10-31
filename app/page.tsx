"use client"

import topDatumFile from "./datumFiles/top.json";
import homeDatumFile from "./datumFiles/home.json";
import aboutMeDatumFile from "./datumFiles/aboutMe.json";
import whatIOfferDatumFile from "./datumFiles/whatIOffer.json";
import myPortfolioDatumFile from "./datumFiles/myPortfolio.json";
import myExperiencesDatumFile from "./datumFiles/myExperiences.json";
import letsConnectDatumFile from "./datumFiles/letsConnect.json";
import bottomDatumFile from "./datumFiles/bottom.json";

import TopComponent from "./components/Top";
import HomeComponent from "./components/Home";
import AboutMeComponent from "./components/AboutMe";
import WhatIOfferComponent from "./components/WhatIOffer";
import MyPortfolioComponent from "./components/MyPortfolio";
import MyExperiencesComponent from "./components/MyExperiences";
import LetsConnectComponent from "./components/LetsConnect";
import BottomComponent from "./components/Bottom";

import { TopContext } from "./contexts/Top";
import { HomeContext } from "./contexts/Home";
import { AboutMeContext } from "./contexts/AboutMe";
import { WhatIOfferContext } from "./contexts/WhatIOffer";
import { MyPortfolioContext } from "./contexts/MyPortfolio";
import { MyExperiencesContext } from "./contexts/MyExperiences";
import { LetsConnectContext } from "./contexts/LetsConnect";
import { BottomContext } from "./contexts/Bottom";

import TopInterface from "./interfaces/Top";
import HomeInterface from "./interfaces/Home";
import AboutMeInterface from "./interfaces/AboutMe";
import WhatIOfferInterface from "./interfaces/WhatIOffer";
import MyPortfolioInterface from "./interfaces/MyPortfolio";
import MyExperiencesInterface from "./interfaces/MyExperiences";
import LetsConnectInterface from "./interfaces/LetsConnect";
import BottomInterface from "./interfaces/Bottom";

export default function Page(): React.ReactElement {
    const top: TopInterface = topDatumFile;
    const home: HomeInterface = homeDatumFile;
    const aboutMe: AboutMeInterface = aboutMeDatumFile;
    const whatIOffer: WhatIOfferInterface = whatIOfferDatumFile;
    const myPortfolio: MyPortfolioInterface = myPortfolioDatumFile;
    const myExperiences: MyExperiencesInterface = myExperiencesDatumFile;
    const letsConnect: LetsConnectInterface = letsConnectDatumFile;
    const bottom: BottomInterface = bottomDatumFile;

    return (
        <>
            <TopContext.Provider
                value={top["value"]}>
                <TopComponent />
            </TopContext.Provider>
            <HomeContext.Provider
                value={home["value"]}>
                <HomeComponent />
            </HomeContext.Provider>
            <AboutMeContext.Provider
                value={aboutMe["value"]}>
                <AboutMeComponent />
            </AboutMeContext.Provider>
            <WhatIOfferContext.Provider
                value={whatIOffer["value"]}>
                <WhatIOfferComponent />
            </WhatIOfferContext.Provider>
            <MyPortfolioContext.Provider
                value={myPortfolio["value"]}>
                <MyPortfolioComponent />
            </MyPortfolioContext.Provider>
            <LetsConnectContext.Provider
                value={letsConnect["value"]}>
                <LetsConnectComponent />
            </LetsConnectContext.Provider>
            <BottomContext.Provider
                value={bottom["value"]}>
                <BottomComponent />
            </BottomContext.Provider>
        </>
    );
}