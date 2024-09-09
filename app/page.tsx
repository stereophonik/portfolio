"use client"

import {useState, useEffect, Dispatch, SetStateAction} from "react";

import MainComponent from "./components/Main";
import NavNavigationComponent from "./components/navigation/Nav";
import SectionProfileComponent from "./components/profile/Section";
import SectionIntroComponent from "./components/intro/Section";
import SectionServingsComponent from "./components/servings/Section";
import SectionSkillsComponent from "./components/skills/Section";
import SectionPlatformComponent from "./components/platform/Section";
import SectionFrameworkComponent from "./components/framework/Section";
import SectionLibraryComponent from "./components/library/Section";
import SectionOutroComponent from "./components/outro/Section";

import { NavigationContext } from "./contexts/Navigation";
import { ProfileContext } from "./contexts/Profile";
import { IntroContext } from "./contexts/Intro";
import { ServingsContext } from "./contexts/Servings";
import { SkillsContext } from "./contexts/Skills";
import { OutroContext } from "./contexts/Outro";

import ValueNavigationInterface from "./interfaces/ValueNavigation";
import ValueProfileInterface from "./interfaces/ValueProfile";
import ValueIntroInterface from "./interfaces/ValueIntro";
import ValueServingsInterface from "./interfaces/ValueServings";
import ValueSkillsInterface from "./interfaces/ValueSkills";
import ValueOutroInterface from "./interfaces/ValueOutro";

export default function Page(): React.ReactElement {
    const [navigationParsedFromFile, setNavigationParsedFromFile]: [{}, Dispatch<SetStateAction<{}>>] = useState({});
    const [profileParsedFromFile, setProfileParsedFromFile]: [{}, Dispatch<SetStateAction<{}>>] = useState({});
    const [introParsedFromFile, setIntroParsedFromFile]: [{}, Dispatch<SetStateAction<{}>>] = useState({});
    const [servingsParsedFromFile, setServingsParsedFromFile]: [{}, Dispatch<SetStateAction<{}>>] = useState({});
    const [skillsParsedFromFile, setSkillsParsedFromFile]: [{}, Dispatch<SetStateAction<{}>>] = useState({});
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

        fetch("/files?fileName=skills", {
            method: "GET"
        })
            .then(fromFile => fromFile.json())
            .then(parsedFromFile => {
                setSkillsParsedFromFile(parsedFromFile);
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
            id: navigationParsedFromFile["id"],
            className: navigationParsedFromFile["className"]
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
        links: [
            {
                href: `${navigationParsedFromFile["hrefAaLink"]}`,
                content: navigationParsedFromFile["contentAaLink"]
            },
            {
                href: `${navigationParsedFromFile["hrefAbLink"]}`,
                content: navigationParsedFromFile["contentAbLink"]
            },
            {
                href: `${navigationParsedFromFile["hrefAcLink"]}`,
                content: navigationParsedFromFile["contentAcLink"]
            },
            {
                href: `${navigationParsedFromFile["hrefAdLink"]}`,
                content: navigationParsedFromFile["contentAdLink"]
            }
        ]
    }

    const valueProfile: ValueProfileInterface = {
        section: {
            id: profileParsedFromFile["idSection"],
            className: profileParsedFromFile["classNameSection"]
        },
        div: {
            id: profileParsedFromFile["idDiv"],
            className: profileParsedFromFile["classNameDiv"],
            content: profileParsedFromFile["contentDiv"]
        },
        image: {
            id: profileParsedFromFile["idImage"],
            className: profileParsedFromFile["classNameImage"],
            src: profileParsedFromFile["srcImage"],
            alt: profileParsedFromFile["altImage"],
            width: 320,
            height: 489
        },
        h1: {
            id: profileParsedFromFile["idH1"],
            content: profileParsedFromFile["contentH1"],
            className: "classNameH1"
        },
        h2: {
            id: profileParsedFromFile["idH2"],
            content: profileParsedFromFile["contentH2"],
            className: "classNameH2"
        }
    }

    const valueIntro: ValueIntroInterface = {
        section: {
            id: introParsedFromFile["idSection"],
            className: introParsedFromFile["classNameSection"]
        },
        div: {
            id: introParsedFromFile["idDiv"],
            className: introParsedFromFile["classNameDiv"],
            content: introParsedFromFile["contentDiv"]
        },
        h1: {
            id: introParsedFromFile["idH1"],
            content: introParsedFromFile["contentH1"],
            className: "classNameH1"
        },
        h2s: [
            {
                id: introParsedFromFile["idAaH2s"],
                content: introParsedFromFile["contentAaH2s"],
                className: "classNameH2"
            },
            {
                id: introParsedFromFile["idAbH2s"],
                content: introParsedFromFile["contentAbH2s"],
                className: "classNameH2"
            }
        ]
    }

    const valueServings: ValueServingsInterface = {
        section: {
            id: servingsParsedFromFile["idSection"],
            className: servingsParsedFromFile["classNameSection"]
        },
        div: {
            id: servingsParsedFromFile["idDiv"],
            className: servingsParsedFromFile["classNameDiv"],
            content: servingsParsedFromFile["contentDiv"]
        },
        h1: {
            id: servingsParsedFromFile["idH1"],
            content: servingsParsedFromFile["contentH1"],
            className: "classNameH1"
        },
        ul: {
            id: servingsParsedFromFile["idUl"],
            className: servingsParsedFromFile["classNameUl"]
        },
        h2: {
            id: servingsParsedFromFile["idH2"],
            className: "classNameH2"
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

    const valueSkills: ValueSkillsInterface = {
        section: {
            id: skillsParsedFromFile["idSection"],
            className: skillsParsedFromFile["classNameSection"]
        },
        div: {
            id: skillsParsedFromFile["idDiv"],
            className: skillsParsedFromFile["classNameDiv"],
            content: skillsParsedFromFile["contentDiv"]
        },
        h1: {
            id: skillsParsedFromFile["idH1"],
            content: skillsParsedFromFile["contentH1"],
            className: "classNameH1"
        },
        ul: {
            id: skillsParsedFromFile["idUl"],
            className: skillsParsedFromFile["classNameUl"]
        },
        h2: {
            id: skillsParsedFromFile["idH2"],
            className: "classNameH2"
        },
        lis: [
            {
                className: skillsParsedFromFile["classNameAaLis"],
                key: skillsParsedFromFile["keyAaLis"],
                content: skillsParsedFromFile["contentAaLis"]
            },
            {
                className: skillsParsedFromFile["classNameAbLis"],
                key: skillsParsedFromFile["keyAbLis"],
                content: skillsParsedFromFile["contentAbLis"]
            },
            {
                className: skillsParsedFromFile["classNameAcLis"],
                key: skillsParsedFromFile["keyAcLis"],
                content: skillsParsedFromFile["contentAcLis"]
            }
        ],
        links: [
            {
                href: `${skillsParsedFromFile["hrefAaLinks"]}`,
                content: skillsParsedFromFile["contentAaLinks"]
            },
            {
                href: `${skillsParsedFromFile["hrefAbLinks"]}`,
                content: skillsParsedFromFile["contentAbLinks"]
            },
            {
                href: `${skillsParsedFromFile["hrefAcLinks"]}`,
                content: skillsParsedFromFile["contentAcLinks"]
            }
        ]
    }

    const valueOutro: ValueOutroInterface = {
        section: {
            id: outroParsedFromFile["idSection"],
            className: outroParsedFromFile["classNameSection"]
        },
        div: {
            id: outroParsedFromFile["idDiv"],
            className: outroParsedFromFile["classNameDiv"],
            content: outroParsedFromFile["contentDiv"]
        },
        h1: {
            id: outroParsedFromFile["idH1"],
            content: outroParsedFromFile["contentH1"],
            className: "classNameH1"
        },
        h2: {
            id: outroParsedFromFile["idH2"],
            content: outroParsedFromFile["contentH2"],
            className: "classNameH2"
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
                <SectionProfileComponent />
            </ProfileContext.Provider>
            <IntroContext.Provider
                value={valueIntro}>
                <SectionIntroComponent />
            </IntroContext.Provider>
            <ServingsContext.Provider
                value={valueServings}>
                <SectionServingsComponent />
            </ServingsContext.Provider>
            <SkillsContext.Provider
                value={valueSkills}>
                <SectionSkillsComponent />
                <SectionPlatformComponent />
                <SectionFrameworkComponent />
                <SectionLibraryComponent />
            </SkillsContext.Provider>
            <OutroContext.Provider
                value={valueOutro}>
                <SectionOutroComponent />
            </OutroContext.Provider>
        </MainComponent>
    );
}