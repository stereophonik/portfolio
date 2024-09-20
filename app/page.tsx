"use client"

import { useState, useEffect, Dispatch, SetStateAction } from "react";

import NavTopComponent from "./components/top/Nav";
import SectionHomeComponent from "./components/home/Section";
import SectionAboutMeComponent from "./components/aboutMe/Section";
import SectionWhatIOfferComponent from "./components/whatIOffer/Section";
import SectionPlatformComponent from "./components/platform/Section";
import SectionFrameworkComponent from "./components/framework/Section";
import SectionLetsConnectComponent from "./components/letsConnect/Section";
import FooterBottomComponent from "./components/bottom/Footer";

import { TopContext } from "./contexts/Top";
import { HomeContext } from "./contexts/Home";
import { AboutMeContext } from "./contexts/AboutMe";
import { WhatIOfferContext } from "./contexts/WhatIOffer";
import { PlatformContext } from "./contexts/Platform";
import { FrameworkContext } from "./contexts/Framework";
import { LetsConnectContext } from "./contexts/LetsConnect";
import { BottomContext } from "./contexts/Bottom";

import ValueTopInterface from "./interfaces/ValueTop";
import ValueHomeInterface from "./interfaces/ValueHome";
import ValueAboutMeInterface from "./interfaces/ValueAboutMe";
import ValueWhatIOfferInterface from "./interfaces/ValueWhatIOffer";
import ValuePlatformInterface from "./interfaces/ValuePlatform";
import ValueFrameworkInterface from "./interfaces/ValueFramework";
import ValueLetsConnectInterface from "./interfaces/ValueLetsConnect";
import ValueBottomInterface from "./interfaces/ValueBottom";

export default function Page(): React.ReactElement {
    const [topParsedFromFile, setTopParsedFromFile]: [{}, Dispatch<SetStateAction<{}>>] = useState({});
    const [homeParsedFromFile, setHomeParsedFromFile]: [{}, Dispatch<SetStateAction<{}>>] = useState({});
    const [aboutMeParsedFromFile, setAboutMeParsedFromFile]: [{}, Dispatch<SetStateAction<{}>>] = useState({});
    const [whatIOfferParsedFromFile, setWhatIOfferParsedFromFile]: [{}, Dispatch<SetStateAction<{}>>] = useState({});
    const [platformParsedFromFile, setPlatformParsedFromFile]: [{}, Dispatch<SetStateAction<{}>>] = useState({});
    const [frameworkParsedFromFile, setFrameworkParsedFromFile]: [{}, Dispatch<SetStateAction<{}>>] = useState({});
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

        fetch("/serving/datum?fileName=platform", {
            method: "GET"
        })
            .then(fromFile => fromFile.json())
            .then(parsedFromFile => {
                setPlatformParsedFromFile(parsedFromFile);
            });

        fetch("/serving/datum?fileName=framework", {
            method: "GET"
        })
            .then(fromFile => fromFile.json())
            .then(parsedFromFile => {
                setFrameworkParsedFromFile(parsedFromFile);
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

    const valueTop: ValueTopInterface = {
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
                className: topParsedFromFile["classNameZzLis"],
                key: topParsedFromFile["keyZzLis"],
                content: topParsedFromFile["contentZzLis"]
            },
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
                href: `${topParsedFromFile["hrefZzAs"]}`,
                target: topParsedFromFile["targetZzAs"],
                content: topParsedFromFile["contentZzAs"]
            },
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

    const valueHome: ValueHomeInterface = {
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

    const valueAboutMe: ValueAboutMeInterface = {
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

    const valueWhatIOffer: ValueWhatIOfferInterface = {
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

    const valuePlatform: ValuePlatformInterface = {
        section: {
            id: platformParsedFromFile["idSection"],
            className: platformParsedFromFile["classNameSection"]
        },
        h1: {
            id: platformParsedFromFile["idH1"],
            className: platformParsedFromFile["classNameH1"],
            content: platformParsedFromFile["contentH1"]
        },
        h2: {
            id: platformParsedFromFile["idH2"],
            className: platformParsedFromFile["classNameH2"],
            content: platformParsedFromFile["contentH2"]
        },
        span: {
            id: platformParsedFromFile["idSpan"],
            className: platformParsedFromFile["classNameSpan"],
            content: platformParsedFromFile["contentSpan"]
        },
        a: {
            href: `${platformParsedFromFile["hrefA"]}`,
            target: platformParsedFromFile["targetA"],
            content: platformParsedFromFile["contentA"]
        }
    }

    const valueFramework: ValueFrameworkInterface = {
        section: {
            id: frameworkParsedFromFile["idSection"],
            className: frameworkParsedFromFile["classNameSection"]
        },
        h1: {
            id: frameworkParsedFromFile["idH1"],
            className: frameworkParsedFromFile["classNameH1"],
            content: frameworkParsedFromFile["contentH1"]
        },
        h2: {
            id: frameworkParsedFromFile["idH2"],
            className: frameworkParsedFromFile["classNameH2"],
            content: frameworkParsedFromFile["contentH2"]
        },
        span: {
            id: frameworkParsedFromFile["idSpan"],
            className: frameworkParsedFromFile["classNameSpan"],
            content: frameworkParsedFromFile["contentSpan"]
        },
        a: {
            href: `${frameworkParsedFromFile["hrefA"]}`,
            target: frameworkParsedFromFile["targetA"],
            content: frameworkParsedFromFile["contentA"]
        }
    }

    const valueLetsConnect: ValueLetsConnectInterface = {
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

    const valueBottom: ValueBottomInterface = {
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

    return (
        <>
            <TopContext.Provider
                value={valueTop}>
                <NavTopComponent />
            </TopContext.Provider>
            <HomeContext.Provider
                value={valueHome}>
                <SectionHomeComponent />
            </HomeContext.Provider>
            <AboutMeContext.Provider
                value={valueAboutMe}>
                <SectionAboutMeComponent />
            </AboutMeContext.Provider>
            <WhatIOfferContext.Provider
                value={valueWhatIOffer}>
                <SectionWhatIOfferComponent />
            </WhatIOfferContext.Provider>
            <FrameworkContext.Provider
                value={valueFramework}>
                <PlatformContext.Provider
                    value={valuePlatform}>
                    <SectionPlatformComponent />
                </PlatformContext.Provider>
                    <SectionFrameworkComponent />
            </FrameworkContext.Provider>
            <LetsConnectContext.Provider
                value={valueLetsConnect}>
                <SectionLetsConnectComponent />
            </LetsConnectContext.Provider>
            <BottomContext.Provider
                value={valueBottom}>
                <FooterBottomComponent />
            </BottomContext.Provider>
        </>
    );
}