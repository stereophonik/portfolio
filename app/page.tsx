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

        fetch("/api?fileName=navigation", {
            method: "GET"
        })
            .then(fileNavigation => fileNavigation.json())
            .then(parsedFileNavigation => {
                setFromParsedFileNavigation(parsedFileNavigation);
            });

        fetch("/api?fileName=profile", {
            method: "GET"
        })
            .then(fileProfile => fileProfile.json())
            .then(parsedFileProfile => {
                setFromParsedFileProfile(parsedFileProfile);
            });

        fetch("/api?fileName=about", {
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
            className: fromParsedFileNavigation["classNameNav"],
            style: fromParsedFileNavigation["styleNav"]
        },
        ul: {
            style: fromParsedFileNavigation["styleUl"]
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
            style: fromParsedFileProfile["styleDiv"],
            content: fromParsedFileProfile["contentDiv"]
        },
        image: {
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
        headings: {
            section: {
                id: fromParsedFileProfile["idSectionHeadings"],
                style: fromParsedFileProfile["styleSectionHeadings"]
            },
            h1: {
                id: fromParsedFileProfile["idH1Headings"],
                content: fromParsedFileProfile["contentH1Headings"],
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
                id: fromParsedFileProfile["idH2Headings"],
                content: fromParsedFileProfile["contentH2Headings"],
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
                style: fromParsedFileAbout["styleDivIntro"],
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
        main: {
            section: {
                id: fromParsedFileAbout["idSectionMain"],
                style: fromParsedFileAbout["styleSectionMain"]
            },
            servings: {
                section: {
                    id: fromParsedFileAbout["idSectionServingsMain"],
                    style: {
                        overflow: fromParsedFileAbout["overflowStyleSectionServingsMain"],
                        width: fromParsedFileAbout["widthStyleSectionServingsMain"],
                        backgroundColor: fromParsedFileAbout["backgroundColorStyleSectionServingsMain"],
                        color: fromParsedFileAbout["colorStyleSectionServingsMain"],
                        textAlign: fromParsedFileAbout["textAlignStyleSectionServingsMain"],
                        height: checkInnerWidth(
                            areSizes,
                            ["90vw", "85vw", "70vw", "50vw", "40vw", "50vw", "50vw",
                                "55vw", "55vw", "55vw", "55vw", "50vw", "45vw", "40vw"]
                        )
                    }
                },
                div: {
                    id: fromParsedFileAbout["idDivServingsMain"],
                    style: fromParsedFileAbout["styleDivServingsMain"],
                    content: fromParsedFileAbout["contentDivServingsMain"]
                },
                h1: {
                    id: fromParsedFileAbout["idH1ServingsMain"],
                    content: fromParsedFileAbout["contentH1ServingsMain"],
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
                    style: fromParsedFileAbout["styleUlServingsMain"]
                },
                h2: {
                    id: fromParsedFileAbout["idH2ServingsMain"],
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
                        key: fromParsedFileAbout["keyAaLisServingsMain"],
                        style: fromParsedFileAbout["styleAaLisServingsMain"],
                        content: fromParsedFileAbout["contentAaLisServingsMain"]
                    },
                    {
                        key: fromParsedFileAbout["keyAbLisServingsMain"],
                        style: fromParsedFileAbout["styleAbLisServingsMain"],
                        content: fromParsedFileAbout["contentAbLisServingsMain"]
                    }
                ]
            },
            skills: {
                section: {
                    id: fromParsedFileAbout["idSectionSkillsMain"],
                    style: {
                        overflow: fromParsedFileAbout["overflowStyleSectionSkillsMain"],
                        width: fromParsedFileAbout["widthStyleSectionSkillsMain"],
                        backgroundColor: fromParsedFileAbout["backgroundColorStyleSectionSkillsMain"],
                        color: fromParsedFileAbout["colorStyleSectionSkillsMain"],
                        textAlign: fromParsedFileAbout["textAlignStyleSectionSkillsMain"],
                        borderRadius: fromParsedFileAbout["borderRadiusStyleSectionSkillsMain"],
                        height: checkInnerWidth(
                            areSizes,
                            ["90vw", "85vw", "70vw", "50vw", "40vw", "50vw", "50vw",
                                "55vw", "55vw", "55vw", "55vw", "50vw", "45vw", "40vw"]
                        )
                    }
                },
                div: {
                    id: fromParsedFileAbout["idDivSkillsMain"],
                    style: fromParsedFileAbout["styleDivSkillsMain"],
                    content: fromParsedFileAbout["contentDivSkillsMain"]
                },
                h1: {
                    id: fromParsedFileAbout["idH1SkillsMain"],
                    content: fromParsedFileAbout["contentH1SkillsMain"],
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
                    style: fromParsedFileAbout["styleUlSkillsMain"]
                },
                h2: {
                    id: fromParsedFileAbout["idH2SkillsMain"],
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
                        key: fromParsedFileAbout["keyAaLisSkillsMain"],
                        style: fromParsedFileAbout["styleAaLisSkillsMain"],
                        content: fromParsedFileAbout["contentAaLisSkillsMain"]
                    },
                    {
                        key: fromParsedFileAbout["keyAbLisSkillsMain"],
                        style: fromParsedFileAbout["styleAbLisSkillsMain"],
                        content: fromParsedFileAbout["contentAbLisSkillsMain"]
                    },
                    {
                        key: fromParsedFileAbout["keyAcLisSkillsMain"],
                        style: fromParsedFileAbout["styleAcLisSkillsMain"],
                        content: fromParsedFileAbout["contentAcLisSkillsMain"]
                    },
                    {
                        key: fromParsedFileAbout["keyAdLisSkillsMain"],
                        style: fromParsedFileAbout["styleAdLisSkillsMain"],
                        content: fromParsedFileAbout["contentAdLisSkillsMain"]
                    },
                    {
                        key: fromParsedFileAbout["keyAeLisSkillsMain"],
                        style: fromParsedFileAbout["styleAeLisSkillsMain"],
                        content: fromParsedFileAbout["contentAeLisSkillsMain"]
                    },
                    {
                        key: fromParsedFileAbout["keyAfLisSkillsMain"],
                        style: fromParsedFileAbout["styleAfLisSkillsMain"],
                        content: fromParsedFileAbout["contentAfLisSkillsMain"]
                    }
                ],
                links: [
                    {
                        href: `${fromParsedFileAbout["hrefAaLinksSkillsMain"]}`,
                        content: fromParsedFileAbout["contentAaLinksSkillsMain"]
                    },
                    {
                        href: `${fromParsedFileAbout["hrefAbLinksSkillsMain"]}`,
                        content: fromParsedFileAbout["contentAbLinksSkillsMain"]
                    },
                    {
                        href: `${fromParsedFileAbout["hrefAcLinksSkillsMain"]}`,
                        content: fromParsedFileAbout["contentAcLinksSkillsMain"]
                    },
                    {
                        href: `${fromParsedFileAbout["hrefAdLinksSkillsMain"]}`,
                        content: fromParsedFileAbout["contentAdLinksSkillsMain"]
                    },
                    {
                        href: `${fromParsedFileAbout["hrefAeLinksSkillsMain"]}`,
                        content: fromParsedFileAbout["contentAeLinksSkillsMain"]
                    },
                    {
                        href: `${fromParsedFileAbout["hrefAfLinksSkillsMain"]}`,
                        content: fromParsedFileAbout["contentAfLinksSkillsMain"]
                    }
                ]
            }
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
                style: fromParsedFileAbout["styleDivOutro"],
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