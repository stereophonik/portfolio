"use client"

import {useState, useEffect, Dispatch, SetStateAction} from "react";
import { NextFont } from "next/dist/compiled/@next/font";
import { Anonymous_Pro } from "next/font/google";
import { Roboto_Mono } from "next/font/google";

import MainComponent from "./components/Main";
import NavNavigationComponent from "./components/navigation/Nav";
import SectionProfileComponent from "./components/profile/Section";
import SectionAboutComponent from "./components/about/Section";

import { NavigationContext } from "./contexts/Navigation";
import { ProfileContext } from "./contexts/Profile";
import { AboutContext } from "./contexts/About";

import ValueNavigationInterface from "./interfaces/ValueNavigation";
import ValueProfileInterface from "./interfaces/ValueProfile";
import ValueAboutInterface from "./interfaces/ValueAbout";

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
    const [fromParsedFileNavigation, setFromParsedFileNavigation]: [{}, Dispatch<SetStateAction<{}>>] = useState({});
    const [fromParsedFileProfile, setFromParsedFileProfile]: [{}, Dispatch<SetStateAction<{}>>] = useState({});
    const [fromParsedFileAbout, setFromParsedFileAbout]: [{}, Dispatch<SetStateAction<{}>>] = useState({});

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
            .then(fileNavigation => fileNavigation.json())
            .then(parsedFileNavigation => {
                setFromParsedFileNavigation(parsedFileNavigation);
            });

        fetch("/files?fileName=profile", {
            method: "GET"
        })
            .then(fileProfile => fileProfile.json())
            .then(parsedFileProfile => {
                setFromParsedFileProfile(parsedFileProfile);
            });

        fetch("/files?fileName=about", {
            method: "GET"
        })
            .then(fileAbout => fileAbout.json())
            .then(parsedFileAbout => {
                setFromParsedFileAbout(parsedFileAbout);
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
            id: fromParsedFileNavigation["idNav"],
            className: fromParsedFileNavigation["classNameNav"]
        },
        ul: {
            id: fromParsedFileNavigation["id"],
            className: fromParsedFileNavigation["className"]
        },
        h3: {
            id: fromParsedFileNavigation["idH3"],
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
                key: fromParsedFileNavigation["keyAaLi"],
                style: fromParsedFileNavigation["styleAaLi"],
                content: fromParsedFileNavigation["contentAaLi"]
            },
            {
                key: fromParsedFileNavigation["keyAbLi"],
                style: fromParsedFileNavigation["styleAbLi"],
                content: fromParsedFileNavigation["contentAbLi"]
            },
            {
                key: fromParsedFileNavigation["keyAcLi"],
                style: fromParsedFileNavigation["styleAcLi"],
                content: fromParsedFileNavigation["contentAcLi"]
            },
            {
                key: fromParsedFileNavigation["keyAdLi"],
                style: fromParsedFileNavigation["styleAdLi"],
                content: fromParsedFileNavigation["contentAdLi"]
            },
            {
                key: fromParsedFileNavigation["keyAeLi"],
                style: fromParsedFileNavigation["styleAeLi"],
                content: fromParsedFileNavigation["contentAeLi"]
            }
        ],
        links: [
            {
                href: `${fromParsedFileNavigation["hrefAaLink"]}`,
                content: fromParsedFileNavigation["contentAaLink"]
            },
            {
                href: fromParsedFileNavigation["hrefAbLink"],
                content: fromParsedFileNavigation["contentAbLink"]
            },
            {
                href: `${fromParsedFileNavigation["hrefAcLink"]}`,
                content: fromParsedFileNavigation["contentAcLink"]
            },
            {
                href: fromParsedFileNavigation["hrefAdLink"],
                content: fromParsedFileNavigation["contentAdLink"]
            },
            {
                href: `${fromParsedFileNavigation["hrefAeLink"]}`,
                content: fromParsedFileNavigation["contentAeLink"]
            }
        ]
    }

    const valueProfile: ValueProfileInterface = {
        section: {
            id: fromParsedFileProfile["idSection"],
            style: {
                overflow: fromParsedFileProfile["overflowStyleSection"],
                width: fromParsedFileProfile["widthStyleSection"],
                backgroundColor: fromParsedFileProfile["backgroundColorStyleSection"],
                color: fromParsedFileProfile["colorStyleSection"],
                textAlign: fromParsedFileProfile["textAlignStyleSection"],
                height: checkInnerWidth(
                    areSizes,
                    ["95vw", "90vw", "75vw", "60vw", "55vw", "60vw", "60vw",
                        "60vw", "60vw", "60vw", "60vw", "55vw", "50vw", "45vw"]
                )
            }
        },
        div: {
            id: fromParsedFileProfile["idDiv"],
            className: fromParsedFileProfile["classNameDiv"],
            content: fromParsedFileProfile["contentDiv"]
        },
        image: {
            id: fromParsedFileProfile["idImage"],
            src: fromParsedFileProfile["srcImage"],
            alt: fromParsedFileProfile["altImage"],
            style: fromParsedFileProfile["styleImage"],
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
            id: fromParsedFileProfile["idH1"],
            content: fromParsedFileProfile["contentH1"],
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
            id: fromParsedFileProfile["idH2"],
            content: fromParsedFileProfile["contentH2"],
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

    const valueAbout: ValueAboutInterface = {
        section: {
            id: fromParsedFileAbout["idSection"],
            style: fromParsedFileAbout["styleSection"]
        },
        intro: {
            section: {
                id: fromParsedFileAbout["idSectionIntro"],
                style: {
                    overflow: fromParsedFileAbout["overflowStyleSectionIntro"],
                    width: fromParsedFileAbout["widthStyleSectionIntro"],
                    backgroundColor: fromParsedFileAbout["backgroundColorStyleSectionIntro"],
                    color: fromParsedFileAbout["colorStyleSectionIntro"],
                    textAlign: fromParsedFileAbout["textAlignStyleSectionIntro"],
                    borderRadius: fromParsedFileAbout["borderRadiusStyleSectionIntro"],
                    height: checkInnerWidth(
                        areSizes,
                        ["90vw", "85vw", "70vw", "50vw", "40vw", "50vw", "50vw",
                            "55vw", "55vw", "55vw", "55vw", "50vw", "45vw", "40vw"]
                    )
                }
            },
            div: {
                id: fromParsedFileAbout["idDivIntro"],
                className: fromParsedFileAbout["classNameDivIntro"],
                content: fromParsedFileAbout["contentDivIntro"]
            },
            h1: {
                id: fromParsedFileAbout["idH1Intro"],
                content: fromParsedFileAbout["contentH1Intro"],
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
                    id: fromParsedFileAbout["idAaH2sIntro"],
                    content: fromParsedFileAbout["contentAaH2sIntro"],
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
                    id: fromParsedFileAbout["idAbH2sIntro"],
                    content: fromParsedFileAbout["contentAbH2sIntro"],
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
        },
        servings: {
            section: {
                id: fromParsedFileAbout["idSectionServings"],
                style: {
                    overflow: fromParsedFileAbout["overflowStyleSectionServings"],
                    width: fromParsedFileAbout["widthStyleSectionServings"],
                    backgroundColor: fromParsedFileAbout["backgroundColorStyleSectionServings"],
                    color: fromParsedFileAbout["colorStyleSectionServings"],
                    textAlign: fromParsedFileAbout["textAlignStyleSectionServings"],
                    height: checkInnerWidth(
                        areSizes,
                        ["90vw", "85vw", "70vw", "50vw", "40vw", "50vw", "50vw",
                            "55vw", "55vw", "55vw", "55vw", "50vw", "45vw", "40vw"]
                    )
                }
            },
            div: {
                id: fromParsedFileAbout["idDivServings"],
                className: fromParsedFileAbout["classNameDivServings"],
                content: fromParsedFileAbout["contentDivServings"]
            },
            h1: {
                id: fromParsedFileAbout["idH1Servings"],
                content: fromParsedFileAbout["contentH1Servings"],
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
                id: fromParsedFileAbout["idUlServings"],
                className: fromParsedFileAbout["classNameUlServings"]
            },
            h2: {
                id: fromParsedFileAbout["idH2Servings"],
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
                    key: fromParsedFileAbout["keyAaLisServings"],
                    style: fromParsedFileAbout["styleAaLisServings"],
                    content: fromParsedFileAbout["contentAaLisServings"]
                },
                {
                    key: fromParsedFileAbout["keyAbLisServings"],
                    style: fromParsedFileAbout["styleAbLisServings"],
                    content: fromParsedFileAbout["contentAbLisServings"]
                }
            ]
        },
        skills: {
            section: {
                id: fromParsedFileAbout["idSectionSkills"],
                style: {
                    overflow: fromParsedFileAbout["overflowStyleSectionSkills"],
                    width: fromParsedFileAbout["widthStyleSectionSkills"],
                    backgroundColor: fromParsedFileAbout["backgroundColorStyleSectionSkills"],
                    color: fromParsedFileAbout["colorStyleSectionSkills"],
                    textAlign: fromParsedFileAbout["textAlignStyleSectionSkills"],
                    borderRadius: fromParsedFileAbout["borderRadiusStyleSectionSkills"],
                    height: checkInnerWidth(
                        areSizes,
                        ["90vw", "85vw", "70vw", "50vw", "40vw", "50vw", "50vw",
                            "55vw", "55vw", "55vw", "55vw", "50vw", "45vw", "40vw"]
                    )
                }
            },
            div: {
                id: fromParsedFileAbout["idDivSkills"],
                className: fromParsedFileAbout["classNameDivSkills"],
                content: fromParsedFileAbout["contentDivSkills"]
            },
            h1: {
                id: fromParsedFileAbout["idH1Skills"],
                content: fromParsedFileAbout["contentH1Skills"],
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
                id: fromParsedFileAbout["idUlSkills"],
                className: fromParsedFileAbout["classNameUlSkills"]
            },
            h2: {
                id: fromParsedFileAbout["idH2Skills"],
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
                    key: fromParsedFileAbout["keyAaLisSkills"],
                    style: fromParsedFileAbout["styleAaLisSkills"],
                    content: fromParsedFileAbout["contentAaLisSkills"]
                },
                {
                    key: fromParsedFileAbout["keyAbLisSkills"],
                    style: fromParsedFileAbout["styleAbLisSkills"],
                    content: fromParsedFileAbout["contentAbLisSkills"]
                },
                {
                    key: fromParsedFileAbout["keyAcLisSkills"],
                    style: fromParsedFileAbout["styleAcLisSkills"],
                    content: fromParsedFileAbout["contentAcLisSkills"]
                },
                {
                    key: fromParsedFileAbout["keyAdLisSkills"],
                    style: fromParsedFileAbout["styleAdLisSkills"],
                    content: fromParsedFileAbout["contentAdLisSkills"]
                },
                {
                    key: fromParsedFileAbout["keyAeLisSkills"],
                    style: fromParsedFileAbout["styleAeLisSkills"],
                    content: fromParsedFileAbout["contentAeLisSkills"]
                },
                {
                    key: fromParsedFileAbout["keyAfLisSkills"],
                    style: fromParsedFileAbout["styleAfLisSkills"],
                    content: fromParsedFileAbout["contentAfLisSkills"]
                }
            ],
            links: [
                {
                    href: `${fromParsedFileAbout["hrefAaLinksSkills"]}`,
                    content: fromParsedFileAbout["contentAaLinksSkills"]
                },
                {
                    href: `${fromParsedFileAbout["hrefAbLinksSkills"]}`,
                    content: fromParsedFileAbout["contentAbLinksSkills"]
                },
                {
                    href: `${fromParsedFileAbout["hrefAcLinksSkills"]}`,
                    content: fromParsedFileAbout["contentAcLinksSkills"]
                },
                {
                    href: `${fromParsedFileAbout["hrefAdLinksSkills"]}`,
                    content: fromParsedFileAbout["contentAdLinksSkills"]
                },
                {
                    href: `${fromParsedFileAbout["hrefAeLinksSkills"]}`,
                    content: fromParsedFileAbout["contentAeLinksSkills"]
                },
                {
                    href: `${fromParsedFileAbout["hrefAfLinksSkills"]}`,
                    content: fromParsedFileAbout["contentAfLinksSkills"]
                }
            ]
        },
        outro: {
            section: {
                id: fromParsedFileAbout["idSectionOutro"],
                style: {
                    overflow: fromParsedFileAbout["overflowStyleSectionOutro"],
                    width: fromParsedFileAbout["widthStyleSectionOutro"],
                    backgroundColor: fromParsedFileAbout["backgroundColorStyleSectionOutro"],
                    color: fromParsedFileAbout["colorStyleSectionOutro"],
                    textAlign: fromParsedFileAbout["textAlignStyleSectionOutro"],
                    height: checkInnerWidth(
                        areSizes,
                        ["65vw", "55vw", "45vw", "35vw", "30vw", "35vw", "35vw",
                            "35vw", "35vw", "40vw", "40vw", "35vw", "30vw", "25vw"]
                    )
                }
            },
            div: {
                id: fromParsedFileAbout["idDivOutro"],
                className: fromParsedFileAbout["classNameDivOutro"],
                content: fromParsedFileAbout["contentDivOutro"]
            },
            h1: {
                id: fromParsedFileAbout["idH1Outro"],
                content: fromParsedFileAbout["contentH1Outro"],
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
                id: fromParsedFileAbout["idH2Outro"],
                content: fromParsedFileAbout["contentH2Outro"],
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
            <AboutContext.Provider
                value={valueAbout}>
                <SectionAboutComponent />
            </AboutContext.Provider>
        </MainComponent>
    );
}