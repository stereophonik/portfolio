"use client"

import {useState, useEffect, Dispatch, SetStateAction} from "react";
import { NextFont } from "next/dist/compiled/@next/font";
import { Anonymous_Pro } from "next/font/google";
import { Roboto_Mono } from "next/font/google";

import MainComponent from "./components/Main";
import NavNavigationComponent from "./components/navigation/Nav";
import SectionProfileComponent from "./components/profile/Section";
import SectionIntroComponent from "./components/intro/Section";
import SectionServingsComponent from "./components/servings/Section";
import SectionSkillsComponent from "./components/skills/Section";
import SectionPlatformComponent from "./components/platform/Section";
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

const anonymousPro: NextFont = Anonymous_Pro({
    weight: "400",
    subsets: ["latin"]
});

const robotoMono: NextFont = Roboto_Mono({
    weight: "700",
    subsets: ["latin"]
});

export default function Page(): React.ReactElement {
    const [areSizes, setAreSizes]: [any[], Dispatch<SetStateAction<any[]>>] = useState([]);
    const [navigationParsedFromFile, setNavigationParsedFromFile]: [{}, Dispatch<SetStateAction<{}>>] = useState({});
    const [profileParsedFromFile, setProfileParsedFromFile]: [{}, Dispatch<SetStateAction<{}>>] = useState({});
    const [introParsedFromFile, setIntroParsedFromFile]: [{}, Dispatch<SetStateAction<{}>>] = useState({});
    const [servingsParsedFromFile, setServingsParsedFromFile]: [{}, Dispatch<SetStateAction<{}>>] = useState({});
    const [skillsParsedFromFile, setSkillsParsedFromFile]: [{}, Dispatch<SetStateAction<{}>>] = useState({});
    const [outroParsedFromFile, setOutroParsedFromFile]: [{}, Dispatch<SetStateAction<{}>>] = useState({});

    useEffect(() => {
        function executeSetAreSizes(): void {
            setAreSizes([
                window.innerWidth <= 360, window.innerWidth > 360 && window.innerWidth <= 440,
                window.innerWidth > 440 && window.innerWidth <= 520, window.innerWidth > 520 && window.innerWidth <= 600,
                window.innerWidth > 600 && window.innerWidth <= 680, window.innerWidth > 680 && window.innerWidth <= 760,
                window.innerWidth > 760 && window.innerWidth <= 840, window.innerWidth > 840 && window.innerWidth <= 920,
                window.innerWidth > 920 && window.innerWidth <= 1000, window.innerWidth > 1000 && window.innerWidth <= 1080,
                window.innerWidth > 1080 && window.innerWidth <= 1160, window.innerWidth > 1160 && window.innerWidth <= 1240,
                window.innerWidth > 1240 && window.innerWidth <= 1320
            ]);
        }

        executeSetAreSizes();
        window.onresize = executeSetAreSizes;

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

    function checkInnerWidth(areSizes: any, sizes: any): any {
        return areSizes[0] ? sizes[0]
            : areSizes[1] ? sizes[1]
                : areSizes[2] ? sizes[2]
                    : areSizes[3] ? sizes[3]
                        : areSizes[4]? sizes[4]
                            : areSizes[5]? sizes[5]
                                : areSizes[6]? sizes[6]
                                    : areSizes[7]? sizes[7]
                                        : areSizes[8]? sizes[8]
                                            : areSizes[9]? sizes[9]
                                                : areSizes[10]? sizes[10]
                                                    : areSizes[11]? sizes[11]
                                                        : areSizes[12]? sizes[12]
                                                            : sizes[13];
    }

    const valueNavigation: ValueNavigationInterface = {
        nav: {
            id: navigationParsedFromFile["idNav"],
            className: navigationParsedFromFile["classNameNav"]
        },
        ul: {
            id: navigationParsedFromFile["id"],
            className: navigationParsedFromFile["className"]
        },
        h3: {
            id: navigationParsedFromFile["idH3"],
            className: anonymousPro.className,
            style: {
                fontSize: checkInnerWidth(
                    areSizes,
                    ["0.75rem", "0.75rem", "0.75rem", "0.75rem", "0.75rem", "1.25rem", "1.5rem",
                        "1.75rem", "2rem", "2.25rem", "2.5rem", "2.5rem", "2.5rem", "2.5rem"]
                )
            }
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
            className: profileParsedFromFile["classNameSection"],
            style: {
                height: checkInnerWidth(
                    areSizes,
                    ["95vw", "90vw", "75vw", "60vw", "55vw", "60vw", "60vw",
                        "60vw", "60vw", "60vw", "60vw", "55vw", "50vw", "45vw"]
                )
            }
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
            width: checkInnerWidth(
                areSizes,
                [130, 130, 130, 130, 130, 160, 180, 200, 220, 240, 260, 260, 260, 260]
            ),
            height: checkInnerWidth(
                areSizes,
                [175, 175, 175, 175, 175, 214, 241, 267, 294, 321, 348, 348, 348, 348]
            )
        },
        h1: {
            id: profileParsedFromFile["idH1"],
            content: profileParsedFromFile["contentH1"],
            className: robotoMono.className,
            style: {
                fontSize: checkInnerWidth(
                    areSizes,
                    ["2.75rem", "2.75rem", "2.75rem", "2.75rem", "2.75rem", "3.25rem", "3.5rem",
                        "3.75rem", "4rem", "4.25rem", "4.5rem", "4.5rem", "4.5rem", "4.5rem"]
                )
            }
        },
        h2: {
            id: profileParsedFromFile["idH2"],
            content: profileParsedFromFile["contentH2"],
            className: anonymousPro.className,
            style: {
                fontSize: checkInnerWidth(
                    areSizes,
                    ["1.25rem", "1.25rem", "1.25rem", "1.25rem", "1.25rem", "1.75rem", "2rem",
                        "2.25rem", "2.5rem", "2.75rem", "3rem", "3rem", "3rem", "3rem"]
                )
            }
        }
    }

    const valueIntro: ValueIntroInterface = {
        section: {
            id: introParsedFromFile["idSection"],
            className: introParsedFromFile["classNameSection"],
            style: {
                height: checkInnerWidth(
                    areSizes,
                    ["90vw", "85vw", "70vw", "50vw", "40vw", "50vw", "50vw",
                        "55vw", "55vw", "55vw", "55vw", "50vw", "45vw", "40vw"]
                )
            }
        },
        div: {
            id: introParsedFromFile["idDiv"],
            className: introParsedFromFile["classNameDiv"],
            content: introParsedFromFile["contentDiv"]
        },
        h1: {
            id: introParsedFromFile["idH1"],
            content: introParsedFromFile["contentH1"],
            className: robotoMono.className,
            style: {
                fontSize: checkInnerWidth(
                    areSizes,
                    ["2.75rem", "2.75rem", "2.75rem", "2.75rem", "2.75rem", "3.25rem", "3.5rem",
                        "3.75rem", "4rem", "4.25rem", "4.5rem", "4.5rem", "4.5rem", "4.5rem"]
                )
            }
        },
        h2s: [
            {
                id: introParsedFromFile["idAaH2s"],
                content: introParsedFromFile["contentAaH2s"],
                className: anonymousPro.className,
                style: {
                    fontSize: checkInnerWidth(
                        areSizes,
                        ["1.25rem", "1.25rem", "1.25rem", "1.25rem", "1.25rem", "1.75rem", "2rem",
                            "2.25rem", "2.5rem", "2.75rem", "3rem", "3rem", "3rem", "3rem"]
                    )
                }
            },
            {
                id: introParsedFromFile["idAbH2s"],
                content: introParsedFromFile["contentAbH2s"],
                className: anonymousPro.className,
                style: {
                    fontSize: checkInnerWidth(
                        areSizes,
                        ["1.25rem", "1.25rem", "1.25rem", "1.25rem", "1.25rem", "1.75rem", "2rem",
                            "2.25rem", "2.5rem", "2.75rem", "3rem", "3rem", "3rem", "3rem"]
                    )
                }
            }
        ]
    }

    const valueServings: ValueServingsInterface = {
        section: {
            id: servingsParsedFromFile["idSection"],
            className: servingsParsedFromFile["classNameSection"],
            style: {
                height: checkInnerWidth(
                    areSizes,
                    ["90vw", "85vw", "70vw", "50vw", "40vw", "50vw", "50vw",
                        "55vw", "55vw", "55vw", "55vw", "50vw", "45vw", "40vw"]
                )
            }
        },
        div: {
            id: servingsParsedFromFile["idDiv"],
            className: servingsParsedFromFile["classNameDiv"],
            content: servingsParsedFromFile["contentDiv"]
        },
        h1: {
            id: servingsParsedFromFile["idH1"],
            content: servingsParsedFromFile["contentH1"],
            className: robotoMono.className,
            style: {
                fontSize: checkInnerWidth(
                    areSizes,
                    ["2.75rem", "2.75rem", "2.75rem", "2.75rem", "2.75rem", "3.25rem", "3.5rem",
                        "3.75rem", "4rem", "4.25rem", "4.5rem", "4.5rem", "4.5rem", "4.5rem"]
                )
            }
        },
        ul: {
            id: servingsParsedFromFile["idUl"],
            className: servingsParsedFromFile["classNameUl"]
        },
        h2: {
            id: servingsParsedFromFile["idH2"],
            className: anonymousPro.className,
            style: {
                fontSize: checkInnerWidth(
                    areSizes,
                    ["1.25rem", "1.25rem", "1.25rem", "1.25rem", "1.25rem", "1.75rem", "2rem",
                        "2.25rem", "2.5rem", "2.75rem", "3rem", "3rem", "3rem", "3rem"]
                )
            }
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
            }
        ]
    }

    const valueSkills: ValueSkillsInterface = {
        section: {
            id: skillsParsedFromFile["idSection"],
            className: skillsParsedFromFile["classNameSection"],
            style: {
                height: checkInnerWidth(
                    areSizes,
                    ["90vw", "85vw", "70vw", "50vw", "40vw", "50vw", "50vw",
                        "55vw", "55vw", "55vw", "55vw", "50vw", "45vw", "40vw"]
                )
            }
        },
        div: {
            id: skillsParsedFromFile["idDiv"],
            className: skillsParsedFromFile["classNameDiv"],
            content: skillsParsedFromFile["contentDiv"]
        },
        h1: {
            id: skillsParsedFromFile["idH1"],
            content: skillsParsedFromFile["contentH1"],
            className: robotoMono.className,
            style: {
                fontSize: checkInnerWidth(
                    areSizes,
                    ["2.75rem", "2.75rem", "2.75rem", "2.75rem", "2.75rem", "3.25rem", "3.5rem",
                        "3.75rem", "4rem", "4.25rem", "4.5rem", "4.5rem", "4.5rem", "4.5rem"]
                )
            }
        },
        ul: {
            id: skillsParsedFromFile["idUl"],
            className: skillsParsedFromFile["classNameUl"]
        },
        h2: {
            id: skillsParsedFromFile["idH2"],
            className: anonymousPro.className,
            style: {
                fontSize: checkInnerWidth(
                    areSizes,
                    ["1.25rem", "1.25rem", "1.25rem", "1.25rem", "1.25rem", "1.75rem", "2rem",
                        "2.25rem", "2.5rem", "2.75rem", "3rem", "3rem", "3rem", "3rem"]
                )
            }
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
            },
            {
                className: skillsParsedFromFile["classNameAdLis"],
                key: skillsParsedFromFile["keyAdLis"],
                content: skillsParsedFromFile["contentAdLis"]
            },
            {
                className: skillsParsedFromFile["classNameAeLis"],
                key: skillsParsedFromFile["keyAeLis"],
                content: skillsParsedFromFile["contentAeLis"]
            },
            {
                className: skillsParsedFromFile["classNameAfLis"],
                key: skillsParsedFromFile["keyAfLis"],
                content: skillsParsedFromFile["contentAfLis"]
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
            },
            {
                href: `${skillsParsedFromFile["hrefAdLinks"]}`,
                content: skillsParsedFromFile["contentAdLinks"]
            },
            {
                href: `${skillsParsedFromFile["hrefAeLinks"]}`,
                content: skillsParsedFromFile["contentAeLinks"]
            },
            {
                href: `${skillsParsedFromFile["hrefAfLinks"]}`,
                content: skillsParsedFromFile["contentAfLinks"]
            }
        ]
    }

    const valueOutro: ValueOutroInterface = {
        section: {
            id: outroParsedFromFile["idSection"],
            className: outroParsedFromFile["classNameSection"],
            style: {
                height: checkInnerWidth(
                    areSizes,
                    ["65vw", "55vw", "45vw", "35vw", "30vw", "35vw", "35vw",
                        "35vw", "35vw", "40vw", "40vw", "35vw", "30vw", "25vw"]
                )
            }
        },
        div: {
            id: outroParsedFromFile["idDiv"],
            className: outroParsedFromFile["classNameDiv"],
            content: outroParsedFromFile["contentDiv"]
        },
        h1: {
            id: outroParsedFromFile["idH1"],
            content: outroParsedFromFile["contentH1"],
            className: robotoMono.className,
            style: {
                fontSize: checkInnerWidth(
                    areSizes,
                    ["2.75rem", "2.75rem", "2.75rem", "2.75rem", "2.75rem", "3.25rem", "3.5rem",
                        "3.75rem", "4rem", "4.25rem", "4.5rem", "4.5rem", "4.5rem", "4.5rem"]
                )
            }
        },
        h2: {
            id: outroParsedFromFile["idH2"],
            content: outroParsedFromFile["contentH2"],
            className: anonymousPro.className,
            style: {
                fontSize: checkInnerWidth(
                    areSizes,
                    ["1.25rem", "1.25rem", "1.25rem", "1.25rem", "1.25rem", "1.75rem", "2rem",
                        "2.25rem", "2.5rem", "2.75rem", "3rem", "3rem", "3rem", "3rem"]
                )
            }
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
            </SkillsContext.Provider>
            <OutroContext.Provider
                value={valueOutro}>
                <SectionOutroComponent />
            </OutroContext.Provider>
        </MainComponent>
    );
}