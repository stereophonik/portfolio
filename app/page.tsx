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

    const myPortfolio: MyPortfolioInterface = {
        value: {
            section: myPortfolioDatumFile["value"]["section"],
            h1: myPortfolioDatumFile["value"]["h1"],
            aaSpan: myPortfolioDatumFile["value"]["aaSpan"],
            abSpan: myPortfolioDatumFile["value"]["abSpan"],
            aaH2: {
                id: myPortfolioDatumFile["value"]["idAaH2"],
                className: myPortfolioDatumFile["value"]["classNameAaH2"],
                content: myPortfolioDatumFile["value"]["contentAaH2"]
            },
            acSpan: {
                id: myPortfolioDatumFile["value"]["idAcSpan"],
                className: myPortfolioDatumFile["value"]["classNameAcSpan"],
                content: myPortfolioDatumFile["value"]["contentAcSpan"]
            },
            aaA: {
                href: `${myPortfolioDatumFile["value"]["hrefAaA"]}`,
                target: myPortfolioDatumFile["value"]["targetAaA"],
                content: myPortfolioDatumFile["value"]["contentAaA"]
            },
            abH2: {
                id: myPortfolioDatumFile["value"]["idAbH2"],
                className: myPortfolioDatumFile["value"]["classNameAbH2"],
                content: myPortfolioDatumFile["value"]["contentAbH2"]
            },
            adSpan: {
                id: myPortfolioDatumFile["value"]["idAdSpan"],
                className: myPortfolioDatumFile["value"]["classNameAdSpan"],
                content: myPortfolioDatumFile["value"]["contentAdSpan"]
            },
            abA: {
                href: `${myPortfolioDatumFile["value"]["hrefAbA"]}`,
                target: myPortfolioDatumFile["value"]["targetAbA"],
                content: myPortfolioDatumFile["value"]["contentAbA"]
            }
        }
    }

    const myExperiences: MyExperiencesInterface = {
        value: {
            section: {
                id: myExperiencesDatumFile["idSection"],
                className: myExperiencesDatumFile["classNameSection"]
            },
            h1: {
                id: myExperiencesDatumFile["idH1"],
                className: myExperiencesDatumFile["classNameH1"],
                content: myExperiencesDatumFile["contentH1"]
            },
            aaSpan: {
                id: myExperiencesDatumFile["idAaSpan"],
                className: myExperiencesDatumFile["classNameAaSpan"],
                content: myExperiencesDatumFile["contentAaSpan"]
            },
            abSpan: {
                id: myExperiencesDatumFile["idAbSpan"],
                className: myExperiencesDatumFile["classNameAbSpan"],
                content: myExperiencesDatumFile["contentAbSpan"]
            },
            span: {
                id: myExperiencesDatumFile["idSpan"],
                className: myExperiencesDatumFile["classNameSpan"],
                content: myExperiencesDatumFile["contentSpan"]
            },
            a: {
                href: `${myExperiencesDatumFile["hrefA"]}`,
                target: myExperiencesDatumFile["targetA"],
                content: myExperiencesDatumFile["contentA"]
            }
        }
    }

    const letsConnect: LetsConnectInterface = {
        value: {
            section: {
                id: letsConnectDatumFile["idSection"],
                className: letsConnectDatumFile["classNameSection"]
            },
            h1: {
                id: letsConnectDatumFile["idH1"],
                className: letsConnectDatumFile["classNameH1"],
                content: letsConnectDatumFile["contentH1"]
            },
            aaSpan: {
                id: letsConnectDatumFile["idAaSpan"],
                className: letsConnectDatumFile["classNameAaSpan"],
                content: letsConnectDatumFile["contentAaSpan"]
            },
            abSpan: {
                id: letsConnectDatumFile["idAbSpan"],
                className: letsConnectDatumFile["classNameAbSpan"],
                content: letsConnectDatumFile["contentAbSpan"]
            },
            h2: {
                id: letsConnectDatumFile["idH2"],
                className: letsConnectDatumFile["classNameH2"],
                content: letsConnectDatumFile["contentH2"]
            },
            a: {
                href: `${letsConnectDatumFile["hrefA"]}`,
                target: letsConnectDatumFile["targetA"],
                content: letsConnectDatumFile["contentA"]
            },
            button: {
                id: letsConnectDatumFile["idButton"],
                className: letsConnectDatumFile["classNameButton"],
                content: letsConnectDatumFile["contentButton"]
            },
            openWindow: {
                url: letsConnectDatumFile["urlOpenWindow"],
                target: letsConnectDatumFile["targetOpenWindow"]
            }
        }
    }

    const bottom: BottomInterface = {
        value: {
            footer: {
                id: bottomDatumFile["idFooter"],
                className: bottomDatumFile["classNameFooter"]
            },
            ul: {
                id: bottomDatumFile["idUl"],
                className: bottomDatumFile["classNameUl"]
            },
            lis: [
                {
                    className: bottomDatumFile["classNameAaLis"],
                    key: bottomDatumFile["keyAaLis"],
                    content: bottomDatumFile["contentAaLis"]
                },
                {
                    className: bottomDatumFile["classNameAbLis"],
                    key: bottomDatumFile["keyAbLis"],
                    content: bottomDatumFile["contentAbLis"]
                }
            ],
            as: [
                {
                    href: `${bottomDatumFile["hrefAaAs"]}`,
                    target: bottomDatumFile["targetAaAs"],
                    content: bottomDatumFile["contentAaAs"]
                },
                {
                    href: `${bottomDatumFile["hrefAbAs"]}`,
                    target: bottomDatumFile["targetAbAs"],
                    content: bottomDatumFile["contentAbAs"]
                }
            ],
            imgs: [
                {
                    id: bottomDatumFile["idAaImgs"],
                    className: bottomDatumFile["classNameAaImgs"],
                    src: bottomDatumFile["srcAaImgs"],
                    alt: bottomDatumFile["altAaImgs"]
                },
                {
                    id: bottomDatumFile["idAbImgs"],
                    className: bottomDatumFile["classNameAbImgs"],
                    src: bottomDatumFile["srcAbImgs"],
                    alt: bottomDatumFile["altAbImgs"]
                }
            ],
            divs: [
                {
                    id: bottomDatumFile["idAaDivs"],
                    className: bottomDatumFile["classNameAaDivs"],
                    content: bottomDatumFile["contentAaDivs"]
                },
                {
                    id: bottomDatumFile["idAbDivs"],
                    className: bottomDatumFile["classNameAbDivs"],
                    content: bottomDatumFile["contentAbDivs"]
                }
            ],
            a: {
                href: `${bottomDatumFile["hrefA"]}`,
                target: bottomDatumFile["targetA"],
                content: bottomDatumFile["contentA"]
            },
            img: {
                id: bottomDatumFile["idImg"],
                className: bottomDatumFile["classNameImg"],
                src: bottomDatumFile["srcImg"],
                alt: bottomDatumFile["altImg"]
            }
        }
    }

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
            <MyExperiencesContext.Provider
                value={myExperiences["value"]}>
                <MyExperiencesComponent />
            </MyExperiencesContext.Provider>
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