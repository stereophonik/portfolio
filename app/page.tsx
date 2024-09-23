"use client"

import { useState, useEffect, Dispatch, SetStateAction } from "react";

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
    const [topParsedFromFile, setTopParsedFromFile]: [{}, Dispatch<SetStateAction<{}>>] = useState({});
    const [homeParsedFromFile, setHomeParsedFromFile]: [{}, Dispatch<SetStateAction<{}>>] = useState({});
    const [aboutMeParsedFromFile, setAboutMeParsedFromFile]: [{}, Dispatch<SetStateAction<{}>>] = useState({});
    const [whatIOfferParsedFromFile, setWhatIOfferParsedFromFile]: [{}, Dispatch<SetStateAction<{}>>] = useState({});
    const [myPortfolioParsedFromFile, setMyPortfolioParsedFromFile]: [{}, Dispatch<SetStateAction<{}>>] = useState({});
    const [myExperiencesParsedFromFile, setMyExperiencesParsedFromFile]: [{}, Dispatch<SetStateAction<{}>>] = useState({});
    const [letsConnectParsedFromFile, setLetsConnectParsedFromFile]: [{}, Dispatch<SetStateAction<{}>>] = useState({});
    const [bottomParsedFromFile, setBottomParsedFromFile]: [{}, Dispatch<SetStateAction<{}>>] = useState({});

    useEffect(() => {
        fetch("/serving/datum?fileName=top", {
            method: "GET"
        })
            .then(fromFile => fromFile.json())
            .then(parsedFromFile => {
                setTopParsedFromFile(parsedFromFile);
            });

        fetch("/serving/datum?fileName=home", {
            method: "GET"
        })
            .then(fromFile => fromFile.json())
            .then(parsedFromFile => {
                setHomeParsedFromFile(parsedFromFile);
            });

        fetch("/serving/datum?fileName=aboutMe", {
            method: "GET"
        })
            .then(fromFile => fromFile.json())
            .then(parsedFromFile => {
                setAboutMeParsedFromFile(parsedFromFile);
            });

        fetch("/serving/datum?fileName=whatIOffer", {
            method: "GET"
        })
            .then(fromFile => fromFile.json())
            .then(parsedFromFile => {
                setWhatIOfferParsedFromFile(parsedFromFile);
            });

        fetch("/serving/datum?fileName=myPortfolio", {
            method: "GET"
        })
            .then(fromFile => fromFile.json())
            .then(parsedFromFile => {
                setMyPortfolioParsedFromFile(parsedFromFile);
            });

        fetch("/serving/datum?fileName=myExperiences", {
            method: "GET"
        })
            .then(fromFile => fromFile.json())
            .then(parsedFromFile => {
                setMyExperiencesParsedFromFile(parsedFromFile);
            });

        fetch("/serving/datum?fileName=letsConnect", {
            method: "GET"
        })
            .then(fromFile => fromFile.json())
            .then(parsedFromFile => {
                setLetsConnectParsedFromFile(parsedFromFile);
            });

        fetch("/serving/datum?fileName=bottom", {
            method: "GET"
        })
            .then(fromFile => fromFile.json())
            .then(parsedFromFile => {
                setBottomParsedFromFile(parsedFromFile);
            });
    }, []);

    const top: TopInterface = {
        value: {
            nav: {
                id: topParsedFromFile["idNav"],
                className: topParsedFromFile["classNameNav"]
            },
            ul: {
                id: topParsedFromFile["idUl"],
                className: topParsedFromFile["classNameUl"]
            },
            lis: [
                {
                    className: topParsedFromFile["classNameAaLis"],
                    key: topParsedFromFile["keyAaLis"],
                    content: topParsedFromFile["contentAaLis"]
                },
                {
                    className: topParsedFromFile["classNameAbLis"],
                    key: topParsedFromFile["keyAbLis"],
                    content: topParsedFromFile["contentAbLis"]
                },
                {
                    className: topParsedFromFile["classNameAcLis"],
                    key: topParsedFromFile["keyAcLis"],
                    content: topParsedFromFile["contentAcLis"]
                },
                {
                    className: topParsedFromFile["classNameAdLis"],
                    key: topParsedFromFile["keyAdLis"],
                    content: topParsedFromFile["contentAdLis"]
                },
                {
                    className: topParsedFromFile["classNameAeLis"],
                    key: topParsedFromFile["keyAeLis"],
                    content: topParsedFromFile["contentAeLis"]
                },
                {
                    className: topParsedFromFile["classNameAfLis"],
                    key: topParsedFromFile["keyAfLis"],
                    content: topParsedFromFile["contentAfLis"]
                }
            ],
            as: [
                {
                    href: `${topParsedFromFile["hrefAaAs"]}`,
                    target: topParsedFromFile["targetAaAs"],
                    content: topParsedFromFile["contentAaAs"]
                },
                {
                    href: `${topParsedFromFile["hrefAbAs"]}`,
                    target: topParsedFromFile["targetAbAs"],
                    content: topParsedFromFile["contentAbAs"]
                },
                {
                    href: `${topParsedFromFile["hrefAcAs"]}`,
                    target: topParsedFromFile["targetAcAs"],
                    content: topParsedFromFile["contentAcAs"]
                },
                {
                    href: `${topParsedFromFile["hrefAdAs"]}`,
                    target: topParsedFromFile["targetAdAs"],
                    content: topParsedFromFile["contentAdAs"]
                },
                {
                    href: `${topParsedFromFile["hrefAeAs"]}`,
                    target: topParsedFromFile["targetAeAs"],
                    content: topParsedFromFile["contentAeAs"]
                },
                {
                    href: `${topParsedFromFile["hrefAfAs"]}`,
                    target: topParsedFromFile["targetAfAs"],
                    content: topParsedFromFile["contentAfAs"]
                }
            ],
            a: {
                href: `${topParsedFromFile["hrefA"]}`,
                target: topParsedFromFile["targetA"],
                content: topParsedFromFile["contentA"]
            },
            img: {
                id: topParsedFromFile["idImg"],
                className: topParsedFromFile["classNameImg"],
                src: topParsedFromFile["srcImg"],
                alt: topParsedFromFile["altImg"]
            }
        }
    }

    const home: HomeInterface = {
        value: {
            section: {
                id: homeParsedFromFile["idSection"],
                className: homeParsedFromFile["classNameSection"]
            },
            img: {
                id: homeParsedFromFile["idImg"],
                className: homeParsedFromFile["classNameImg"],
                src: homeParsedFromFile["srcImg"],
                alt: homeParsedFromFile["altImg"]
            },
            div: {
                id: homeParsedFromFile["idDiv"],
                className: homeParsedFromFile["classNameDiv"]
            },
            h1: {
                id: homeParsedFromFile["idH1"],
                className: homeParsedFromFile["classNameH1"],
                content: homeParsedFromFile["contentH1"]
            },
            zySpan: {
                id: homeParsedFromFile["idZySpan"],
                className: homeParsedFromFile["classNameZySpan"],
                content: homeParsedFromFile["contentZySpan"]
            },
            zzSpan: {
                id: homeParsedFromFile["idZzSpan"],
                className: homeParsedFromFile["classNameZzSpan"],
                content: homeParsedFromFile["contentZzSpan"]
            },
            aaSpan: {
                id: homeParsedFromFile["idAaSpan"],
                className: homeParsedFromFile["classNameAaSpan"],
                content: homeParsedFromFile["contentAaSpan"]
            },
            abSpan: {
                id: homeParsedFromFile["idAbSpan"],
                className: homeParsedFromFile["classNameAbSpan"],
                content: homeParsedFromFile["contentAbSpan"]
            },
            acSpan: {
                id: homeParsedFromFile["idAcSpan"],
                className: homeParsedFromFile["classNameAcSpan"],
                content: homeParsedFromFile["contentAcSpan"]
            },
            adSpan: {
                id: homeParsedFromFile["idAdSpan"],
                className: homeParsedFromFile["classNameAdSpan"],
                content: homeParsedFromFile["contentAdSpan"]
            },
            aaH2: {
                id: homeParsedFromFile["idAaH2"],
                className: homeParsedFromFile["classNameAaH2"],
                content: homeParsedFromFile["contentAaH2"]
            },
            abH2: {
                id: homeParsedFromFile["idAbH2"],
                className: homeParsedFromFile["classNameAbH2"],
                content: homeParsedFromFile["contentAbH2"]
            },
            button: {
                id: homeParsedFromFile["idButton"],
                className: homeParsedFromFile["classNameButton"],
                content: homeParsedFromFile["contentButton"]
            },
            openWindow: {
                url: homeParsedFromFile["urlOpenWindow"],
                target: homeParsedFromFile["targetOpenWindow"]
            }
        }
    }

    const aboutMe: AboutMeInterface = {
        value: {
            section: {
                id: aboutMeParsedFromFile["idSection"],
                className: aboutMeParsedFromFile["classNameSection"]
            },
            img: {
                id: aboutMeParsedFromFile["idImg"],
                className: aboutMeParsedFromFile["classNameImg"],
                src: aboutMeParsedFromFile["srcImg"],
                alt: aboutMeParsedFromFile["altImg"]
            },
            div: {
                id: aboutMeParsedFromFile["idDiv"],
                className: aboutMeParsedFromFile["classNameDiv"]
            },
            h1: {
                id: aboutMeParsedFromFile["idH1"],
                className: aboutMeParsedFromFile["classNameH1"],
                content: aboutMeParsedFromFile["contentH1"]
            },
            zySpan: {
                id: aboutMeParsedFromFile["idZySpan"],
                className: aboutMeParsedFromFile["classNameZySpan"],
                content: aboutMeParsedFromFile["contentZySpan"]
            },
            zzSpan: {
                id: aboutMeParsedFromFile["idZzSpan"],
                className: aboutMeParsedFromFile["classNameZzSpan"],
                content: aboutMeParsedFromFile["contentZzSpan"]
            },
            aaSpan: {
                id: aboutMeParsedFromFile["idAaSpan"],
                className: aboutMeParsedFromFile["classNameAaSpan"],
                content: aboutMeParsedFromFile["contentAaSpan"]
            },
            abSpan: {
                id: aboutMeParsedFromFile["idAbSpan"],
                className: aboutMeParsedFromFile["classNameAbSpan"],
                content: aboutMeParsedFromFile["contentAbSpan"]
            },
            acSpan: {
                id: aboutMeParsedFromFile["idAcSpan"],
                className: aboutMeParsedFromFile["classNameAcSpan"],
                content: aboutMeParsedFromFile["contentAcSpan"]
            },
            adSpan: {
                id: aboutMeParsedFromFile["idAdSpan"],
                className: aboutMeParsedFromFile["classNameAdSpan"],
                content: aboutMeParsedFromFile["contentAdSpan"]
            },
            h2: {
                id: aboutMeParsedFromFile["idH2"],
                className: aboutMeParsedFromFile["classNameH2"],
                content: aboutMeParsedFromFile["contentH2"]
            },
            ul: {
                id: aboutMeParsedFromFile["idUl"],
                className: aboutMeParsedFromFile["classNameUl"]
            },
            lis: [
                {
                    className: aboutMeParsedFromFile["classNameAaLis"],
                    key: aboutMeParsedFromFile["keyAaLis"],
                    content: aboutMeParsedFromFile["contentAaLis"]
                },
                {
                    className: aboutMeParsedFromFile["classNameAbLis"],
                    key: aboutMeParsedFromFile["keyAbLis"],
                    content: aboutMeParsedFromFile["contentAbLis"]
                },
                {
                    className: aboutMeParsedFromFile["classNameAcLis"],
                    key: aboutMeParsedFromFile["keyAcLis"],
                    content: aboutMeParsedFromFile["contentAcLis"]
                }
            ],
            button: {
                id: aboutMeParsedFromFile["idButton"],
                className: aboutMeParsedFromFile["classNameButton"],
                content: aboutMeParsedFromFile["contentButton"]
            },
            openWindow: {
                url: aboutMeParsedFromFile["urlOpenWindow"],
                target: aboutMeParsedFromFile["targetOpenWindow"]
            }
        }
    }

    const whatIOffer: WhatIOfferInterface = {
        value: {
            section: {
                id: whatIOfferParsedFromFile["idSection"],
                className: whatIOfferParsedFromFile["classNameSection"]
            },
            h1: {
                id: whatIOfferParsedFromFile["idH1"],
                className: whatIOfferParsedFromFile["classNameH1"],
                content: whatIOfferParsedFromFile["contentH1"]
            },
            aaSpan: {
                id: whatIOfferParsedFromFile["idAaSpan"],
                className: whatIOfferParsedFromFile["classNameAaSpan"],
                content: whatIOfferParsedFromFile["contentAaSpan"]
            },
            abSpan: {
                id: whatIOfferParsedFromFile["idAbSpan"],
                className: whatIOfferParsedFromFile["classNameAbSpan"],
                content: whatIOfferParsedFromFile["contentAbSpan"]
            },
            ul: {
                id: whatIOfferParsedFromFile["idUl"],
                className: whatIOfferParsedFromFile["classNameUl"]
            },
            h2: {
                id: whatIOfferParsedFromFile["idH2"],
                className: whatIOfferParsedFromFile["classNameH2"],
                content: whatIOfferParsedFromFile["contentH2"]
            },
            lis: [
                {
                    className: whatIOfferParsedFromFile["classNameAaLis"],
                    key: whatIOfferParsedFromFile["keyAaLis"],
                    content: whatIOfferParsedFromFile["contentAaLis"]
                },
                {
                    className: whatIOfferParsedFromFile["classNameAbLis"],
                    key: whatIOfferParsedFromFile["keyAbLis"],
                    content: whatIOfferParsedFromFile["contentAbLis"]
                },
                {
                    className: whatIOfferParsedFromFile["classNameAcLis"],
                    key: whatIOfferParsedFromFile["keyAcLis"],
                    content: whatIOfferParsedFromFile["contentAcLis"]
                }
            ]
        }
    }

    const myPortfolio: MyPortfolioInterface = {
        value: {
            section: {
                id: myPortfolioParsedFromFile["idSection"],
                className: myPortfolioParsedFromFile["classNameSection"]
            },
            h1: {
                id: myPortfolioParsedFromFile["idH1"],
                className: myPortfolioParsedFromFile["classNameH1"],
                content: myPortfolioParsedFromFile["contentH1"]
            },
            aaSpan: {
                id: myPortfolioParsedFromFile["idAaSpan"],
                className: myPortfolioParsedFromFile["classNameAaSpan"],
                content: myPortfolioParsedFromFile["contentAaSpan"]
            },
            abSpan: {
                id: myPortfolioParsedFromFile["idAbSpan"],
                className: myPortfolioParsedFromFile["classNameAbSpan"],
                content: myPortfolioParsedFromFile["contentAbSpan"]
            },
            aaH2: {
                id: myPortfolioParsedFromFile["idAaH2"],
                className: myPortfolioParsedFromFile["classNameAaH2"],
                content: myPortfolioParsedFromFile["contentAaH2"]
            },
            acSpan: {
                id: myPortfolioParsedFromFile["idAcSpan"],
                className: myPortfolioParsedFromFile["classNameAcSpan"],
                content: myPortfolioParsedFromFile["contentAcSpan"]
            },
            aaA: {
                href: `${myPortfolioParsedFromFile["hrefAaA"]}`,
                target: myPortfolioParsedFromFile["targetAaA"],
                content: myPortfolioParsedFromFile["contentAaA"]
            },
            abH2: {
                id: myPortfolioParsedFromFile["idAbH2"],
                className: myPortfolioParsedFromFile["classNameAbH2"],
                content: myPortfolioParsedFromFile["contentAbH2"]
            },
            adSpan: {
                id: myPortfolioParsedFromFile["idAdSpan"],
                className: myPortfolioParsedFromFile["classNameAdSpan"],
                content: myPortfolioParsedFromFile["contentAdSpan"]
            },
            abA: {
                href: `${myPortfolioParsedFromFile["hrefAbA"]}`,
                target: myPortfolioParsedFromFile["targetAbA"],
                content: myPortfolioParsedFromFile["contentAbA"]
            }
        }
    }

    const myExperiences: MyExperiencesInterface = {
        value: {
            section: {
                id: myExperiencesParsedFromFile["idSection"],
                className: myExperiencesParsedFromFile["classNameSection"]
            },
            h1: {
                id: myExperiencesParsedFromFile["idH1"],
                className: myExperiencesParsedFromFile["classNameH1"],
                content: myExperiencesParsedFromFile["contentH1"]
            },
            aaSpan: {
                id: myExperiencesParsedFromFile["idAaSpan"],
                className: myExperiencesParsedFromFile["classNameAaSpan"],
                content: myExperiencesParsedFromFile["contentAaSpan"]
            },
            abSpan: {
                id: myExperiencesParsedFromFile["idAbSpan"],
                className: myExperiencesParsedFromFile["classNameAbSpan"],
                content: myExperiencesParsedFromFile["contentAbSpan"]
            },
            h2: {
                id: myExperiencesParsedFromFile["idH2"],
                className: myExperiencesParsedFromFile["classNameH2"],
                content: myExperiencesParsedFromFile["contentH2"]
            },
            span: {
                id: myExperiencesParsedFromFile["idSpan"],
                className: myExperiencesParsedFromFile["classNameSpan"],
                content: myExperiencesParsedFromFile["contentSpan"]
            },
            a: {
                href: `${myExperiencesParsedFromFile["hrefA"]}`,
                target: myExperiencesParsedFromFile["targetA"],
                content: myExperiencesParsedFromFile["contentA"]
            }
        }
    }

    const letsConnect: LetsConnectInterface = {
        value: {
            section: {
                id: letsConnectParsedFromFile["idSection"],
                className: letsConnectParsedFromFile["classNameSection"]
            },
            h1: {
                id: letsConnectParsedFromFile["idH1"],
                className: letsConnectParsedFromFile["classNameH1"],
                content: letsConnectParsedFromFile["contentH1"]
            },
            aaSpan: {
                id: letsConnectParsedFromFile["idAaSpan"],
                className: letsConnectParsedFromFile["classNameAaSpan"],
                content: letsConnectParsedFromFile["contentAaSpan"]
            },
            abSpan: {
                id: letsConnectParsedFromFile["idAbSpan"],
                className: letsConnectParsedFromFile["classNameAbSpan"],
                content: letsConnectParsedFromFile["contentAbSpan"]
            },
            h2: {
                id: letsConnectParsedFromFile["idH2"],
                className: letsConnectParsedFromFile["classNameH2"],
                content: letsConnectParsedFromFile["contentH2"]
            },
            a: {
                href: `${letsConnectParsedFromFile["hrefA"]}`,
                target: letsConnectParsedFromFile["targetA"],
                content: letsConnectParsedFromFile["contentA"]
            },
            button: {
                id: letsConnectParsedFromFile["idButton"],
                className: letsConnectParsedFromFile["classNameButton"],
                content: letsConnectParsedFromFile["contentButton"]
            },
            openWindow: {
                url: letsConnectParsedFromFile["urlOpenWindow"],
                target: letsConnectParsedFromFile["targetOpenWindow"]
            }
        }
    }

    const bottom: BottomInterface = {
        value: {
            footer: {
                id: bottomParsedFromFile["idFooter"],
                className: bottomParsedFromFile["classNameFooter"]
            },
            ul: {
                id: bottomParsedFromFile["idUl"],
                className: bottomParsedFromFile["classNameUl"]
            },
            lis: [
                {
                    className: bottomParsedFromFile["classNameAaLis"],
                    key: bottomParsedFromFile["keyAaLis"],
                    content: bottomParsedFromFile["contentAaLis"]
                },
                {
                    className: bottomParsedFromFile["classNameAbLis"],
                    key: bottomParsedFromFile["keyAbLis"],
                    content: bottomParsedFromFile["contentAbLis"]
                }
            ],
            as: [
                {
                    href: `${bottomParsedFromFile["hrefAaAs"]}`,
                    target: bottomParsedFromFile["targetAaAs"],
                    content: bottomParsedFromFile["contentAaAs"]
                },
                {
                    href: `${bottomParsedFromFile["hrefAbAs"]}`,
                    target: bottomParsedFromFile["targetAbAs"],
                    content: bottomParsedFromFile["contentAbAs"]
                }
            ],
            imgs: [
                {
                    id: bottomParsedFromFile["idAaImgs"],
                    className: bottomParsedFromFile["classNameAaImgs"],
                    src: bottomParsedFromFile["srcAaImgs"],
                    alt: bottomParsedFromFile["altAaImgs"]
                },
                {
                    id: bottomParsedFromFile["idAbImgs"],
                    className: bottomParsedFromFile["classNameAbImgs"],
                    src: bottomParsedFromFile["srcAbImgs"],
                    alt: bottomParsedFromFile["altAbImgs"]
                }
            ],
            divs: [
                {
                    id: bottomParsedFromFile["idAaDivs"],
                    className: bottomParsedFromFile["classNameAaDivs"],
                    content: bottomParsedFromFile["contentAaDivs"]
                },
                {
                    id: bottomParsedFromFile["idAbDivs"],
                    className: bottomParsedFromFile["classNameAbDivs"],
                    content: bottomParsedFromFile["contentAbDivs"]
                }
            ],
            a: {
                href: `${bottomParsedFromFile["hrefA"]}`,
                target: bottomParsedFromFile["targetA"],
                content: bottomParsedFromFile["contentA"]
            },
            img: {
                id: bottomParsedFromFile["idImg"],
                className: bottomParsedFromFile["classNameImg"],
                src: bottomParsedFromFile["srcImg"],
                alt: bottomParsedFromFile["altImg"]
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