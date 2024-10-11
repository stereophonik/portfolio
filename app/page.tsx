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

    const whatIOffer: WhatIOfferInterface = {
        value: {
            section: {
                id: whatIOfferDatumFile["idSection"],
                className: whatIOfferDatumFile["classNameSection"]
            },
            h1: {
                id: whatIOfferDatumFile["idH1"],
                className: whatIOfferDatumFile["classNameH1"],
                content: whatIOfferDatumFile["contentH1"]
            },
            aaSpan: {
                id: whatIOfferDatumFile["idAaSpan"],
                className: whatIOfferDatumFile["classNameAaSpan"],
                content: whatIOfferDatumFile["contentAaSpan"]
            },
            abSpan: {
                id: whatIOfferDatumFile["idAbSpan"],
                className: whatIOfferDatumFile["classNameAbSpan"],
                content: whatIOfferDatumFile["contentAbSpan"]
            },
            ul: {
                id: whatIOfferDatumFile["idUl"],
                className: whatIOfferDatumFile["classNameUl"]
            },
            h2: {
                id: whatIOfferDatumFile["idH2"],
                className: whatIOfferDatumFile["classNameH2"],
                content: whatIOfferDatumFile["contentH2"]
            },
            lis: [
                {
                    className: whatIOfferDatumFile["classNameAaLis"],
                    key: whatIOfferDatumFile["keyAaLis"],
                    content: whatIOfferDatumFile["contentAaLis"]
                },
                {
                    className: whatIOfferDatumFile["classNameAbLis"],
                    key: whatIOfferDatumFile["keyAbLis"],
                    content: whatIOfferDatumFile["contentAbLis"]
                },
                {
                    className: whatIOfferDatumFile["classNameAcLis"],
                    key: whatIOfferDatumFile["keyAcLis"],
                    content: whatIOfferDatumFile["contentAcLis"]
                }
            ]
        }
    }

    const myPortfolio: MyPortfolioInterface = {
        value: {
            section: {
                id: myPortfolioDatumFile["idSection"],
                className: myPortfolioDatumFile["classNameSection"]
            },
            h1: {
                id: myPortfolioDatumFile["idH1"],
                className: myPortfolioDatumFile["classNameH1"],
                content: myPortfolioDatumFile["contentH1"]
            },
            aaSpan: {
                id: myPortfolioDatumFile["idAaSpan"],
                className: myPortfolioDatumFile["classNameAaSpan"],
                content: myPortfolioDatumFile["contentAaSpan"]
            },
            abSpan: {
                id: myPortfolioDatumFile["idAbSpan"],
                className: myPortfolioDatumFile["classNameAbSpan"],
                content: myPortfolioDatumFile["contentAbSpan"]
            },
            aaH2: {
                id: myPortfolioDatumFile["idAaH2"],
                className: myPortfolioDatumFile["classNameAaH2"],
                content: myPortfolioDatumFile["contentAaH2"]
            },
            acSpan: {
                id: myPortfolioDatumFile["idAcSpan"],
                className: myPortfolioDatumFile["classNameAcSpan"],
                content: myPortfolioDatumFile["contentAcSpan"]
            },
            aaA: {
                href: `${myPortfolioDatumFile["hrefAaA"]}`,
                target: myPortfolioDatumFile["targetAaA"],
                content: myPortfolioDatumFile["contentAaA"]
            },
            abH2: {
                id: myPortfolioDatumFile["idAbH2"],
                className: myPortfolioDatumFile["classNameAbH2"],
                content: myPortfolioDatumFile["contentAbH2"]
            },
            adSpan: {
                id: myPortfolioDatumFile["idAdSpan"],
                className: myPortfolioDatumFile["classNameAdSpan"],
                content: myPortfolioDatumFile["contentAdSpan"]
            },
            abA: {
                href: `${myPortfolioDatumFile["hrefAbA"]}`,
                target: myPortfolioDatumFile["targetAbA"],
                content: myPortfolioDatumFile["contentAbA"]
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