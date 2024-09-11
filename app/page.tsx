"use client"

import { useState, useEffect, Dispatch, SetStateAction } from "react";

import MainComponent from "./components/Main";
import NavNavigationComponent from "./components/navigation/Nav";
import SectionProfileComponent from "./components/profile/Section";
import SectionIntroComponent from "./components/intro/Section";
import SectionServingsComponent from "./components/servings/Section";
import SectionSkillSetsComponent from "./components/skillSets/Section";
import SectionPlatformComponent from "./components/platform/Section";
import SectionFrameworkComponent from "./components/framework/Section";
import SectionLibraryComponent from "./components/library/Section";
import SectionOutroComponent from "./components/outro/Section";

import { NavigationContext } from "./contexts/Navigation";
import { ProfileContext } from "./contexts/Profile";
import { IntroContext } from "./contexts/Intro";
import { ServingsContext } from "./contexts/Servings";
import { SkillSetsContext } from "./contexts/SkillSets";
import { PlatformContext } from "./contexts/Platform";
import { FrameworkContext } from "./contexts/Framework";
import { LibraryContext } from "./contexts/Library";
import { OutroContext } from "./contexts/Outro";

import ValueNavigationInterface from "./interfaces/ValueNavigation";
import ValueProfileInterface from "./interfaces/ValueProfile";
import ValueIntroInterface from "./interfaces/ValueIntro";
import ValueServingsInterface from "./interfaces/ValueServings";
import ValueSkillSetsInterface from "./interfaces/ValueSkillSets";
import ValuePlatformInterface from "./interfaces/ValuePlatform";
import ValueFrameworkInterface from "./interfaces/ValueFramework";
import ValueLibraryInterface from "./interfaces/ValueLibrary";
import ValueOutroInterface from "./interfaces/ValueOutro";

export default function Page(): React.ReactElement {
    const [navigationParsedFromFile, setNavigationParsedFromFile]: [{}, Dispatch<SetStateAction<{}>>] = useState({});
    const [profileParsedFromFile, setProfileParsedFromFile]: [{}, Dispatch<SetStateAction<{}>>] = useState({});
    const [introParsedFromFile, setIntroParsedFromFile]: [{}, Dispatch<SetStateAction<{}>>] = useState({});
    const [servingsParsedFromFile, setServingsParsedFromFile]: [{}, Dispatch<SetStateAction<{}>>] = useState({});
    const [skillSetsParsedFromFile, setSkillSetsParsedFromFile]: [{}, Dispatch<SetStateAction<{}>>] = useState({});
    const [platformParsedFromFile, setPlatformParsedFromFile]: [{}, Dispatch<SetStateAction<{}>>] = useState({});
    const [frameworkParsedFromFile, setFrameworkParsedFromFile]: [{}, Dispatch<SetStateAction<{}>>] = useState({});
    const [libraryParsedFromFile, setLibraryParsedFromFile]: [{}, Dispatch<SetStateAction<{}>>] = useState({});
    const [outroParsedFromFile, setOutroParsedFromFile]: [{}, Dispatch<SetStateAction<{}>>] = useState({});

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

        fetch("/files?fileName=servings", {
            method: "GET"
        })
            .then(fromFile => fromFile.json())
            .then(parsedFromFile => {
                setServingsParsedFromFile(parsedFromFile);
            });

        fetch("/files?fileName=skillSets", {
            method: "GET"
        })
            .then(fromFile => fromFile.json())
            .then(parsedFromFile => {
                setSkillSetsParsedFromFile(parsedFromFile);
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

        fetch("/files?fileName=library", {
            method: "GET"
        })
            .then(fromFile => fromFile.json())
            .then(parsedFromFile => {
                setLibraryParsedFromFile(parsedFromFile);
            });

        fetch("/files?fileName=outro", {
            method: "GET"
        })
            .then(fromFile => fromFile.json())
            .then(parsedFromFile => {
                setOutroParsedFromFile(parsedFromFile);
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

    const valueServings: ValueServingsInterface = {
        section: {
            id: servingsParsedFromFile["idSection"],
            className: servingsParsedFromFile["classNameSection"]
        },
        h1: {
            id: servingsParsedFromFile["idH1"],
            className: servingsParsedFromFile["classNameH1"],
            content: servingsParsedFromFile["contentH1"]
        },
        ul: {
            id: servingsParsedFromFile["idUl"],
            className: servingsParsedFromFile["classNameUl"]
        },
        h2: {
            id: servingsParsedFromFile["idH2"],
            className: servingsParsedFromFile["classNameH2"],
            content: servingsParsedFromFile["contentH2"]
        },
        lis: [
            {
                className: servingsParsedFromFile["classNameAaLis"],
                key: servingsParsedFromFile["keyAaLis"],
                content: servingsParsedFromFile["contentAaLis"]
            },
            {
                className: servingsParsedFromFile["classNameAbLis"],
                key: servingsParsedFromFile["keyAbLis"],
                content: servingsParsedFromFile["contentAbLis"]
            },
            {
                className: servingsParsedFromFile["classNameAcLis"],
                key: servingsParsedFromFile["keyAcLis"],
                content: servingsParsedFromFile["contentAcLis"]
            }
        ]
    }

    const valueSkillSets: ValueSkillSetsInterface = {
        section: {
            id: skillSetsParsedFromFile["idSection"],
            className: skillSetsParsedFromFile["classNameSection"]
        },
        h1: {
            id: skillSetsParsedFromFile["idH1"],
            className: skillSetsParsedFromFile["classNameH1"],
            content: skillSetsParsedFromFile["contentH1"]
        },
        h2: {
            id: skillSetsParsedFromFile["idH2"],
            className: skillSetsParsedFromFile["classNameH2"],
            content: skillSetsParsedFromFile["contentH2"]
        },
        ul: {
            id: skillSetsParsedFromFile["idUl"],
            className: skillSetsParsedFromFile["classNameUl"]
        },
        lis: [
            {
                className: skillSetsParsedFromFile["classNameAaLis"],
                key: skillSetsParsedFromFile["keyAaLis"],
                content: skillSetsParsedFromFile["contentAaLis"]
            },
            {
                className: skillSetsParsedFromFile["classNameAbLis"],
                key: skillSetsParsedFromFile["keyAbLis"],
                content: skillSetsParsedFromFile["contentAbLis"]
            },
            {
                className: skillSetsParsedFromFile["classNameAcLis"],
                key: skillSetsParsedFromFile["keyAcLis"],
                content: skillSetsParsedFromFile["contentAcLis"]
            }
        ],
        as: [
            {
                href: `${skillSetsParsedFromFile["hrefAaAs"]}`,
                content: skillSetsParsedFromFile["contentAaAs"]
            },
            {
                href: `${skillSetsParsedFromFile["hrefAbAs"]}`,
                content: skillSetsParsedFromFile["contentAbAs"]
            },
            {
                href: `${skillSetsParsedFromFile["hrefAcAs"]}`,
                content: skillSetsParsedFromFile["contentAcAs"]
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

    const valueLibrary: ValueLibraryInterface = {
        section: {
            id: libraryParsedFromFile["idSection"],
            className: libraryParsedFromFile["classNameSection"]
        },
        h1: {
            id: libraryParsedFromFile["idH1"],
            className: libraryParsedFromFile["classNameH1"],
            content: libraryParsedFromFile["contentH1"]
        },
        h2: {
            id: libraryParsedFromFile["idH2"],
            className: libraryParsedFromFile["classNameH2"],
            content: libraryParsedFromFile["contentH2"]
        },
        ul: {
            id: libraryParsedFromFile["idUl"],
            className: libraryParsedFromFile["classNameUl"]
        },
        lis: [
            {
                className: libraryParsedFromFile["classNameAaLis"],
                key: libraryParsedFromFile["keyAaLis"],
                content: libraryParsedFromFile["contentAaLis"]
            },
            {
                className: libraryParsedFromFile["classNameAbLis"],
                key: libraryParsedFromFile["keyAbLis"],
                content: libraryParsedFromFile["contentAbLis"]
            }
        ],
        as: [
            {
                href: `${libraryParsedFromFile["hrefAaAs"]}`,
                content: libraryParsedFromFile["contentAaAs"]
            },
            {
                href: `${libraryParsedFromFile["hrefAbAs"]}`,
                content: libraryParsedFromFile["contentAbAs"]
            }
        ]
    }

    const valueOutro: ValueOutroInterface = {
        section: {
            id: outroParsedFromFile["idSection"],
            className: outroParsedFromFile["classNameSection"]
        },
        h1: {
            id: outroParsedFromFile["idH1"],
            className: outroParsedFromFile["classNameH1"],
            content: outroParsedFromFile["contentH1"]
        },
        h2: {
            id: outroParsedFromFile["idH2"],
            className: outroParsedFromFile["classNameH2"],
            content: outroParsedFromFile["contentH2"]
        },
        div: {
            id: outroParsedFromFile["idDiv"],
            className: outroParsedFromFile["classNameDiv"],
            content: outroParsedFromFile["contentDiv"]
        },
        a: {
            href: `${outroParsedFromFile["hrefA"]}`,
            content: outroParsedFromFile["contentA"]
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
            <ServingsContext.Provider
                value={valueServings}>
                <SectionServingsComponent />
            </ServingsContext.Provider>
            <SkillSetsContext.Provider
                value={valueSkillSets}>
                <SectionSkillSetsComponent />
            </SkillSetsContext.Provider>
            <PlatformContext.Provider
                value={valuePlatform}>
                <SectionPlatformComponent />
            </PlatformContext.Provider>
            <FrameworkContext.Provider
                value={valueFramework}>
                <SectionFrameworkComponent />
            </FrameworkContext.Provider>
            <LibraryContext.Provider
                value={valueLibrary}>
                <SectionLibraryComponent />
            </LibraryContext.Provider>
            <OutroContext.Provider
                value={valueOutro}>
                <SectionOutroComponent />
            </OutroContext.Provider>
        </MainComponent>
    );
}