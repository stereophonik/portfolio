"use client"

import { useState, useEffect } from "react";
import { Anonymous_Pro } from "next/font/google";
import { Roboto_Mono } from "next/font/google";

import MainComponent from "./components/Main";
import NavNavigationComponent from "./components/navigation/Nav";
import SectionProfileComponent from "./components/profile/Section";
import SectionAboutComponent from "./components/about/Section";

import { NavigationContext } from "./contexts/Navigation";
import { ProfileContext } from "./contexts/Profile";
import { AboutContext } from "./contexts/About";

const anonymousPro = Anonymous_Pro({
    weight: "400",
    subsets: ["latin"]
});

const robotoMono = Roboto_Mono({
    weight: "700",
    subsets: ["latin"]
});

export default function Page() {
    const [areSizes, setAreSizes] = useState([]);
    const [navigation, setNavigation] = useState({});
    const [profile, setProfile] = useState({});
    const [about, setAbout] = useState({});

    useEffect(() => {
        function executeSetAreSizes() {
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
                setNavigation(parsedFileNavigation);
            });

        fetch("/api?fileName=profile", {
            method: "GET"
        })
            .then(fileProfile => fileProfile.json())
            .then(parsedFileProfile => {
                setProfile(parsedFileProfile);
            });

        fetch("/api?fileName=about", {
            method: "GET"
        })
            .then(fileAbout => fileAbout.json())
            .then(parsedFileAbout => {
                setAbout(parsedFileAbout);
            });
    }, []);

    function checkInnerWidth(areSizes, sizes) {
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

    const navNavigation = {
        id: navigation["idNav"],
        className: navigation["classNameNav"],
        style: navigation["styleNav"]
    }

    const ulNavigation = {
        style: navigation["styleUl"]
    }

    const h3Navigation = {
        id: navigation["idH3"],
        className: anonymousPro.className,
        style: {
            fontSize: checkInnerWidth(
                areSizes,
                ["0.75rem", "0.75rem", "0.75rem", "0.75rem", "0.75rem", "1.25rem", "1.5rem",
                    "1.75rem", "2rem", "2.25rem", "2.5rem", "2.5rem", "2.5rem", "2.5rem"]
            )
        }
    }

    const lisNavigation = [
        {
            key: navigation["keyAaLi"],
            style: navigation["styleAaLi"],
            content: navigation["contentAaLi"]
        },
        {
            key: navigation["keyAbLi"],
            style: navigation["styleAbLi"],
            content: navigation["contentAbLi"]
        },
        {
            key: navigation["keyAcLi"],
            style: navigation["styleAcLi"],
            content: navigation["contentAcLi"]
        },
        {
            key: navigation["keyAdLi"],
            style: navigation["styleAdLi"],
            content: navigation["contentAdLi"]
        },
        {
            key: navigation["keyAeLi"],
            style: navigation["styleAeLi"],
            content: navigation["contentAeLi"]
        }
    ]

    const linksNavigation = [
        {
            href: `${navigation["hrefAaLink"]}`,
            content: navigation["contentAaLink"]
        },
        {
            href: navigation["hrefAbLink"],
            content: navigation["contentAbLink"]
        },
        {
            href: `${navigation["hrefAcLink"]}`,
            content: navigation["contentAcLink"]
        },
        {
            href: navigation["hrefAdLink"],
            content: navigation["contentAdLink"]
        },
        {
            href: `${navigation["hrefAeLink"]}`,
            content: navigation["contentAeLink"]
        }
    ]

    const sectionProfile = {
        id: profile["idSection"],
        style: {
            overflow: profile["overflowStyleSection"],
            width: profile["widthStyleSection"],
            backgroundColor: profile["backgroundColorStyleSection"],
            color: profile["colorStyleSection"],
            textAlign: profile["textAlignStyleSection"],
            height: checkInnerWidth(
                areSizes,
                ["95vw", "90vw", "75vw", "60vw", "55vw", "60vw", "60vw",
                    "60vw", "60vw", "60vw", "60vw", "55vw", "50vw", "45vw"]
            )
        }
    }

    const divProfile = {
        id: profile["idDiv"],
        style: profile["styleDiv"],
        content: profile["contentDiv"]
    }

    const imageProfile = {
        src: profile["srcImage"],
        alt: profile["altImage"],
        style: profile["styleImage"],
        width: checkInnerWidth(
            areSizes,
            [130, 130, 130, 130, 130, 160, 180, 200, 220, 240, 260, 260, 260, 260]
        ),
        height: checkInnerWidth(
            areSizes,
            [175, 175, 175, 175, 175, 214, 241, 267, 294, 321, 348, 348, 348, 348]
        )
    }

    const headingsProfile = {
        section: {
            id: profile["idSectionHeadings"],
            style: profile["styleSectionHeadings"]
        },
        h1: {
            id: profile["idH1Headings"],
            content: profile["contentH1Headings"],
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
            id: profile["idH2Headings"],
            content: profile["contentH2Headings"],
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

    const sectionAbout = {
        id: about["idSection"],
        style: about["styleSection"]
    }

    const introAbout = {
        section: {
            id: about["idSectionIntro"],
            style: {
                overflow: about["overflowStyleSectionIntro"],
                width: about["widthStyleSectionIntro"],
                backgroundColor: about["backgroundColorStyleSectionIntro"],
                color: about["colorStyleSectionIntro"],
                textAlign: about["textAlignStyleSectionIntro"],
                borderRadius: about["borderRadiusStyleSectionIntro"],
                height: checkInnerWidth(
                    areSizes,
                    ["90vw", "85vw", "70vw", "50vw", "40vw", "50vw", "50vw",
                        "55vw", "55vw", "55vw", "55vw", "50vw", "45vw", "40vw"]
                )
            }
        },
        div: {
            id: about["idDivIntro"],
            style: about["styleDivIntro"],
            content: about["contentDivIntro"]
        },
        h1: {
            id: about["idH1Intro"],
            content: about["contentH1Intro"],
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
                id: about["idAaH2sIntro"],
                content: about["contentAaH2sIntro"],
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
                id: about["idAbH2sIntro"],
                content: about["contentAbH2sIntro"],
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

    const mainAbout = {
        section: {
            id: about["idSectionMain"],
            style: {
                overflow: about["overflowStyleSectionMain"],
                width: about["widthStyleSectionMain"],
                backgroundColor: about["backgroundColorStyleSectionMain"],
                color: about["colorStyleSectionMain"],
                textAlign: about["textAlignStyleSectionMain"],
                height: checkInnerWidth(
                    areSizes,
                    ["145vw", "135vw", "110vw", "90vw", "75vw", "90vw", "90vw",
                        "90vw", "90vw", "90vw", "90vw", "80vw", "75vw", "60vw"]
                )
            }
        },
        div: {
            id: about["idDivMain"],
            style: about["styleDivMain"],
            content: about["contentDivMain"]
        },
        servings: {
            section: {
                id: about["idSectionServingsMain"],
                style: about["styleSectionServingsMain"]
            },
            h1: {
                id: about["idH1ServingsMain"],
                content: about["contentH1ServingsMain"],
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
                style: about["styleUlServingsMain"]
            },
            h2: {
                id: about["idH2ServingsMain"],
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
                    key: about["keyAaLisServingsMain"],
                    style: about["styleAaLisServingsMain"],
                    content: about["contentAaLisServingsMain"]
                },
                {
                    key: about["keyAbLisServingsMain"],
                    style: about["styleAbLisServingsMain"],
                    content: about["contentAbLisServingsMain"]
                }
            ]
        },
        skills: {
            section: {
                id: about["idSectionSkillsMain"],
                style: about["styleSectionSkillsMain"]
            },
            h1: {
                id: about["idH1SkillsMain"],
                content: about["contentH1SkillsMain"],
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
                style: about["styleUlSkillsMain"]
            },
            h2: {
                id: about["idH2SkillsMain"],
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
                    key: about["keyAaLisSkillsMain"],
                    style: about["styleAaLisSkillsMain"],
                    content: about["contentAaLisSkillsMain"]
                },
                {
                    key: about["keyAbLisSkillsMain"],
                    style: about["styleAbLisSkillsMain"],
                    content: about["contentAbLisSkillsMain"]
                },
                {
                    key: about["keyAcLisSkillsMain"],
                    style: about["styleAcLisSkillsMain"],
                    content: about["contentAcLisSkillsMain"]
                },
                {
                    key: about["keyAdLisSkillsMain"],
                    style: about["styleAdLisSkillsMain"],
                    content: about["contentAdLisSkillsMain"]
                },
                {
                    key: about["keyAeLisSkillsMain"],
                    style: about["styleAeLisSkillsMain"],
                    content: about["contentAeLisSkillsMain"]
                },
                {
                    key: about["keyAfLisSkillsMain"],
                    style: about["styleAfLisSkillsMain"],
                    content: about["contentAfLisSkillsMain"]
                }
            ],
            links: [
                {
                    href: `${about["hrefAaLinksSkillsMain"]}`,
                    content: about["contentAaLinksSkillsMain"]
                },
                {
                    href: `${about["hrefAbLinksSkillsMain"]}`,
                    content: about["contentAbLinksSkillsMain"]
                },
                {
                    href: `${about["hrefAcLinksSkillsMain"]}`,
                    content: about["contentAcLinksSkillsMain"]
                },
                {
                    href: `${about["hrefAdLinksSkillsMain"]}`,
                    content: about["contentAdLinksSkillsMain"]
                },
                {
                    href: `${about["hrefAeLinksSkillsMain"]}`,
                    content: about["contentAeLinksSkillsMain"]
                },
                {
                    href: `${about["hrefAfLinksSkillsMain"]}`,
                    content: about["contentAfLinksSkillsMain"]
                }
            ]
        }
    }

    const outroAbout = {
        section: {
            id: about["idSectionOutro"],
            style: {
                overflow: about["overflowStyleSectionOutro"],
                width: about["widthStyleSectionOutro"],
                backgroundColor: about["backgroundColorStyleSectionOutro"],
                color: about["colorStyleSectionOutro"],
                textAlign: about["textAlignStyleSectionOutro"],
                borderRadius: about["borderRadiusStyleSectionOutro"],
                height: checkInnerWidth(
                    areSizes,
                    ["65vw", "55vw", "45vw", "35vw", "30vw", "35vw", "35vw",
                        "35vw", "35vw", "40vw", "40vw", "35vw", "30vw", "25vw"]
                )
            }
        },
        div: {
            id: about["idDivOutro"],
            style: about["styleDivOutro"],
            content: about["contentDivOutro"]
        },
        h1: {
            id: about["idH1Outro"],
            content: about["contentH1Outro"],
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
            id: about["idH2Outro"],
            content: about["contentH2Outro"],
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

    const navigationContext = {
        value: {
            nav: navNavigation,
            ul: ulNavigation,
            h3: h3Navigation,
            lis: lisNavigation,
            links: linksNavigation
        }
    }

    const profileContext = {
        value: {
            section: sectionProfile,
            div: divProfile,
            image: imageProfile,
            headings: headingsProfile
        }
    }

    const aboutContext = {
        value: {
            section: sectionAbout,
            intro: introAbout,
            main: mainAbout,
            outro: outroAbout
        }
    }

    return (
        <MainComponent>
            <NavigationContext.Provider
                value={navigationContext["value"]}>
                <NavNavigationComponent />
            </NavigationContext.Provider>
            <ProfileContext.Provider
                value={profileContext["value"]}>
                <SectionProfileComponent />
            </ProfileContext.Provider>
            <AboutContext.Provider
                value={aboutContext["value"]}>
                <SectionAboutComponent />
            </AboutContext.Provider>
        </MainComponent>
    );
}