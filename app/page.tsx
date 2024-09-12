"use client"

import { useState, useEffect, Dispatch, SetStateAction } from "react";

import MainComponent from "./components/Main";
import NavNavigationComponent from "./components/navigation/Nav";
import SectionProfileComponent from "./components/profile/Section";
import SectionWhatIOfferComponent from "./components/whatIOffer/Section";
import SectionPlatformComponent from "./components/platform/Section";
import SectionFrameworkComponent from "./components/framework/Section";
import SectionLetsConnectComponent from "./components/letsConnect/Section";
import SectionFooterComponent from "./components/footer/Section";

import { NavigationContext } from "./contexts/Navigation";
import { ProfileContext } from "./contexts/Profile";
import { IntroContext } from "./contexts/Intro";
import { WhatIOfferContext } from "./contexts/WhatIOffer";
import { PlatformContext } from "./contexts/Platform";
import { FrameworkContext } from "./contexts/Framework";
import { LetsConnectContext } from "./contexts/LetsConnect";

import ValueNavigationInterface from "./interfaces/ValueNavigation";
import ValueProfileInterface from "./interfaces/ValueProfile";
import ValueIntroInterface from "./interfaces/ValueIntro";
import ValueWhatIOfferInterface from "./interfaces/ValueWhatIOffer";
import ValuePlatformInterface from "./interfaces/ValuePlatform";
import ValueFrameworkInterface from "./interfaces/ValueFramework";
import ValueLetsConnectInterface from "./interfaces/ValueLetsConnect";

export default function Page(): React.ReactElement {
    const [navigationParsedFromFile, setNavigationParsedFromFile]: [{}, Dispatch<SetStateAction<{}>>] = useState({});
    const [profileParsedFromFile, setProfileParsedFromFile]: [{}, Dispatch<SetStateAction<{}>>] = useState({});
    const [introParsedFromFile, setIntroParsedFromFile]: [{}, Dispatch<SetStateAction<{}>>] = useState({});
    const [whatIOfferParsedFromFile, setWhatIOfferParsedFromFile]: [{}, Dispatch<SetStateAction<{}>>] = useState({});
    const [platformParsedFromFile, setPlatformParsedFromFile]: [{}, Dispatch<SetStateAction<{}>>] = useState({});
    const [frameworkParsedFromFile, setFrameworkParsedFromFile]: [{}, Dispatch<SetStateAction<{}>>] = useState({});
    const [letsConnectParsedFromFile, setLetsConnectParsedFromFile]: [{}, Dispatch<SetStateAction<{}>>] = useState({});

    useEffect(() => {
        fetch("/files?fileName=navigation", {
            method: "GET"
        })
            .then(fromFile => fromFile.json())
            .then(parsedFromFile => {
                setNavigationParsedFromFile(parsedFromFile);
            });

        fetch("/files?fileName=profile", {
            method: "GET"
        })
            .then(fromFile => fromFile.json())
            .then(parsedFromFile => {
                setProfileParsedFromFile(parsedFromFile);
            });

        fetch("/files?fileName=intro", {
            method: "GET"
        })
            .then(fromFile => fromFile.json())
            .then(parsedFromFile => {
                setIntroParsedFromFile(parsedFromFile);
            });

        fetch("/files?fileName=whatIOffer", {
            method: "GET"
        })
            .then(fromFile => fromFile.json())
            .then(parsedFromFile => {
                setWhatIOfferParsedFromFile(parsedFromFile);
            });

        fetch("/files?fileName=platform", {
            method: "GET"
        })
            .then(fromFile => fromFile.json())
            .then(parsedFromFile => {
                setPlatformParsedFromFile(parsedFromFile);
            });

        fetch("/files?fileName=framework", {
            method: "GET"
        })
            .then(fromFile => fromFile.json())
            .then(parsedFromFile => {
                setFrameworkParsedFromFile(parsedFromFile);
            });

        fetch("/files?fileName=letsConnect", {
            method: "GET"
        })
            .then(fromFile => fromFile.json())
            .then(parsedFromFile => {
                setLetsConnectParsedFromFile(parsedFromFile);
            });
    }, []);

    const valueNavigation: ValueNavigationInterface = {
        nav: {
            id: navigationParsedFromFile["idNav"],
            className: navigationParsedFromFile["classNameNav"]
        },
        ul: {
            id: navigationParsedFromFile["idUl"],
            className: navigationParsedFromFile["classNameUl"]
        },
        lis: [
            {
                className: navigationParsedFromFile["classNameAaLis"],
                key: navigationParsedFromFile["keyAaLis"],
                content: navigationParsedFromFile["contentAaLis"]
            },
            {
                className: navigationParsedFromFile["classNameAbLis"],
                key: navigationParsedFromFile["keyAbLis"],
                content: navigationParsedFromFile["contentAbLis"]
            },
            {
                className: navigationParsedFromFile["classNameAcLis"],
                key: navigationParsedFromFile["keyAcLis"],
                content: navigationParsedFromFile["contentAcLis"]
            },
            {
                className: navigationParsedFromFile["classNameAdLis"],
                key: navigationParsedFromFile["keyAdLis"],
                content: navigationParsedFromFile["contentAdLis"]
            },
            {
                className: navigationParsedFromFile["classNameAeLis"],
                key: navigationParsedFromFile["keyAeLis"],
                content: navigationParsedFromFile["contentAeLis"]
            }
        ],
        as: [
            {
                href: `${navigationParsedFromFile["hrefAaAs"]}`,
                content: navigationParsedFromFile["contentAaAs"]
            },
            {
                href: `${navigationParsedFromFile["hrefAbAs"]}`,
                content: navigationParsedFromFile["contentAbAs"]
            },
            {
                href: `${navigationParsedFromFile["hrefAcAs"]}`,
                content: navigationParsedFromFile["contentAcAs"]
            },
            {
                href: `${navigationParsedFromFile["hrefAdAs"]}`,
                content: navigationParsedFromFile["contentAdAs"]
            },
            {
                href: `${navigationParsedFromFile["hrefAeAs"]}`,
                content: navigationParsedFromFile["contentAeAs"]
            }
        ]
    }

    const valueProfile: ValueProfileInterface = {
        section: {
            id: profileParsedFromFile["idSection"],
            className: profileParsedFromFile["classNameSection"]
        },
        img: {
            id: profileParsedFromFile["idImg"],
            className: profileParsedFromFile["classNameImg"],
            src: profileParsedFromFile["srcImg"],
            alt: profileParsedFromFile["altImg"]
        },
        h1: {
            id: profileParsedFromFile["idH1"],
            className: profileParsedFromFile["classNameH1"],
            content: profileParsedFromFile["contentH1"]
        },
        h2: {
            id: profileParsedFromFile["idH2"],
            className: profileParsedFromFile["classNameH2"],
            content: profileParsedFromFile["contentH2"]
        }
    }

    const valueIntro: ValueIntroInterface = {
        section: {
            id: introParsedFromFile["idSection"],
            className: introParsedFromFile["classNameSection"]
        },
        h1: {
            id: introParsedFromFile["idH1"],
            className: introParsedFromFile["classNameH1"],
            content: introParsedFromFile["contentH1"]
        },
        h2: {
            id: introParsedFromFile["idH2"],
            className: introParsedFromFile["classNameH2"],
            content: introParsedFromFile["contentH2"]
        },
        ul: {
            id: introParsedFromFile["idUl"],
            className: introParsedFromFile["classNameUl"]
        },
        lis: [
            {
                className: introParsedFromFile["classNameAaLis"],
                key: introParsedFromFile["keyAaLis"],
                content: introParsedFromFile["contentAaLis"]
            },
            {
                className: introParsedFromFile["classNameAbLis"],
                key: introParsedFromFile["keyAbLis"],
                content: introParsedFromFile["contentAbLis"]
            }
        ]
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
        h2: {
            id: letsConnectParsedFromFile["idH2"],
            className: letsConnectParsedFromFile["classNameH2"],
            content: letsConnectParsedFromFile["contentH2"]
        },
        a: {
            href: `${letsConnectParsedFromFile["hrefA"]}`,
            content: letsConnectParsedFromFile["contentA"]
        }
    }

    return (
        <MainComponent>
            <NavigationContext.Provider
                value={valueNavigation}>
                <NavNavigationComponent />
            </NavigationContext.Provider>
            <ProfileContext.Provider
                value={valueProfile}>
                <IntroContext.Provider
                    value={valueIntro}>
                    <SectionProfileComponent />
                </IntroContext.Provider>
            </ProfileContext.Provider>
            <WhatIOfferContext.Provider
                value={valueWhatIOffer}>
                <SectionWhatIOfferComponent />
            </WhatIOfferContext.Provider>
            <PlatformContext.Provider
                value={valuePlatform}>
                <SectionPlatformComponent />
            </PlatformContext.Provider>
            <FrameworkContext.Provider
                value={valueFramework}>
                <SectionFrameworkComponent />
            </FrameworkContext.Provider>
            <LetsConnectContext.Provider
                value={valueLetsConnect}>
                <SectionLetsConnectComponent />
            </LetsConnectContext.Provider>
            <NavigationContext.Provider
                value={valueNavigation}>
                <SectionFooterComponent />
            </NavigationContext.Provider>
        </MainComponent>
    );
}