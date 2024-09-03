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
    const [contentAaH2sIntroAbout, setAaContentH2sIntroAbout] = useState("");
    const [contentAbH2sIntroAbout, setAbContentH2sIntroAbout] = useState("");
    const [labelServingsMainAbout, setLabelServingsMainAbout] = useState("");
    const [servingsMainAbout, setServingsMainAbout] = useState([]);
    const [labelSkillsMainAbout, setLabelSkillsMainAbout] = useState("");
    const [skillsMainAbout, setSkillsMainAbout] = useState([]);
    const [outroAbout, setOutroAbout] = useState([]);

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
                setAaContentH2sIntroAbout(parsedFileAbout.contentAaH2sIntro);
                setAbContentH2sIntroAbout(parsedFileAbout.contentAbH2sIntro);
                setLabelServingsMainAbout(parsedFileAbout.labelServingsMain);
                setServingsMainAbout(parsedFileAbout.servingsMain);
                setLabelSkillsMainAbout(parsedFileAbout.labelSkillsMain);
                setSkillsMainAbout(parsedFileAbout.skillsMain);
                setOutroAbout(parsedFileAbout.outro);
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
        style: {
            overflow: profile["overflowStyleSection"],
            width: profile["widthStyleSection"],
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

    const introAbout = {
        section: {
            id: "sectionIntroAbout",
            style: {
                overflow: "hidden",
                width: "100vw",
                height: checkInnerWidth(
                    areSizes,
                    ["90vw", "85vw", "70vw", "50vw", "40vw", "50vw", "50vw",
                        "55vw", "55vw", "55vw", "55vw", "50vw", "45vw", "40vw"]
                ),
                backgroundColor: "#E2DDD1",
                color: "#B0622C",
                textAlign: "center",
                borderRadius: "10%"
            }
        },
        div: {
            id: "divIntroAbout",
            style: {
                height: "10%"
            },
            content: ""
        },
        h1: {
            id: "h1IntroAbout",
            className: robotoMono.className,
            style: {
                fontSize: checkInnerWidth(
                    areSizes,
                    ["2.75rem", "2.75rem", "2.75rem", "2.75rem", "2.75rem", "3.25rem", "3.5rem",
                        "3.75rem", "4rem", "4.25rem", "4.5rem", "4.5rem", "4.5rem", "4.5rem"]
                )
            },
            content: "Hello!"
        },
        h2s: [
            {
                id: "01h2IntroAbout",
                className: anonymousPro.className,
                style: {
                    fontSize: checkInnerWidth(
                        areSizes,
                        ["1.25rem", "1.25rem", "1.25rem", "1.25rem", "1.25rem", "1.75rem", "2rem",
                            "2.25rem", "2.5rem", "2.75rem", "3rem", "3rem", "3rem", "3rem"]
                    )
                },
                content: contentAaH2sIntroAbout
            },
            {
                id: "02h2IntroAbout",
                className: anonymousPro.className,
                style: {
                    fontSize: checkInnerWidth(
                        areSizes,
                        ["1.25rem", "1.25rem", "1.25rem", "1.25rem", "1.25rem", "1.75rem", "2rem",
                            "2.25rem", "2.5rem", "2.75rem", "3rem", "3rem", "3rem", "3rem"]
                    )
                },
                content: contentAbH2sIntroAbout
            }
        ]
    }

    const sectionMainAbout = {
        id: "sectionMainAbout",
        style: {
            overflow: "hidden",
            width: "100vw",
            height: checkInnerWidth(
                areSizes,
                ["145vw", "135vw", "110vw", "90vw", "75vw", "90vw", "90vw",
                    "90vw", "90vw", "90vw", "90vw", "80vw", "75vw", "60vw"]
            ),
            backgroundColor: "#B0622C",
            color: "#E2DDD1",
            textAlign: "center"
        }
    }

    const divMainAbout = {
        id: "divMainAbout",
        style: {
            height: "10%"
        },
        content: ""
    }

    const h1sMainAbout = [
        {
            id: "aaH1sMainAbout",
            content: about["contentAaH1sMain"],
            className: robotoMono.className,
            style: {
                fontSize: checkInnerWidth(
                    areSizes,
                    ["2.75rem", "2.75rem", "2.75rem", "2.75rem", "2.75rem", "3.25rem", "3.5rem",
                        "3.75rem", "4rem", "4.25rem", "4.5rem", "4.5rem", "4.5rem", "4.5rem"]
                )
            }
        },
        {
            id: "abH1sMainAbout",
            className: robotoMono.className,
            content: about["contentAbH1sMain"],
            style: {
                fontSize: checkInnerWidth(
                    areSizes,
                    ["2.75rem", "2.75rem", "2.75rem", "2.75rem", "2.75rem", "3.25rem", "3.5rem",
                        "3.75rem", "4rem", "4.25rem", "4.5rem", "4.5rem", "4.5rem", "4.5rem"]
                )
            }
        }
    ]

    const h2sMainAbout = [
        {
            id: "aaH2sMainAbout",
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
            id: "abH2sMainAbout",
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

    const lisMainAbout = [
        {
            key: 1,
            style: {},
            content: about["contentAaLisMain"]
        },
        {
            key: 2,
            style: {},
            content: about["contentAbLisMain"]
        },
        {
            key: 3,
            style: {},
            content: about["contentAcLisMain"]
        },
        {
            key: 4,
            style: {},
            content: about["contentAdLisMain"]
        },
        {
            key: 5,
            style: {},
            content: about["contentAeLisMain"]
        },
        {
            key: 6,
            style: {},
            content: about["contentAfLisMain"]
        },
        {
            key: 7,
            style: {},
            content: about["contentAgLisMain"]
        },
        {
            key: 8,
            style: {},
            content: about["contentAhLisMain"]
        }
    ]

    const linksMainAbout = [
        {
            href: `${about["hrefAaLinksMain"]}`,
            content: about["contentAaLinksMain"]
        },
        {
            href: `${about["hrefAbLinksMain"]}`,
            content: about["contentAbLinksMain"]
        },
        {
            href: `${about["hrefAcLinksMain"]}`,
            content: about["contentAcLinksMain"]
        },
        {
            href: `${about["hrefAdLinksMain"]}`,
            content: about["contentAdLinksMain"]
        },
        {
            href: `${about["hrefAeLinksMain"]}`,
            content: about["contentAeLinksMain"]
        },
        {
            href: `${about["hrefAfLinksMain"]}`,
            content: about["contentAfLinksMain"]
        },
        {
            href: `${about["hrefAgLinksMain"]}`,
            content: about["contentAgLinksMain"]
        },
        {
            href: `${about["hrefAhLinksMain"]}`,
            content: about["contentAhLinksMain"]
        }
    ]

    const styleOutroAbout = {
        overflow: "hidden",
        width: "100vw",
        height: checkInnerWidth(
            areSizes,
            ["65vw", "55vw", "45vw", "35vw", "30vw", "35vw", "35vw",
                "35vw", "35vw", "40vw", "40vw", "35vw", "30vw", "25vw"]
        ),
        backgroundColor: "#E2DDD1",
        color: "#B0622C",
        textAlign: "center",
        borderRadius: "10%"
    }

    const h1OutroAbout = {
        className: robotoMono.className,
        style: {
            fontSize: checkInnerWidth(
                areSizes,
                ["2.75rem", "2.75rem", "2.75rem", "2.75rem", "2.75rem", "3.25rem", "3.5rem",
                    "3.75rem", "4rem", "4.25rem", "4.5rem", "4.5rem", "4.5rem", "4.5rem"]
            )
        }
    }

    const h2OutroAbout = {
        className: anonymousPro.className,
        style: {
            fontSize: checkInnerWidth(
                areSizes,
                ["1.25rem", "1.25rem", "1.25rem", "1.25rem", "1.25rem", "1.75rem", "2rem",
                    "2.25rem", "2.5rem", "2.75rem", "3rem", "3rem", "3rem", "3rem"]
            )
        }
    }

    const valueNavigationContext = {
        nav: navNavigation,
        ul: ulNavigation,
        h3: h3Navigation,
        lis: lisNavigation,
        links: linksNavigation
    }

    const valueProfileContext = {
        section: sectionProfile,
        div: divProfile,
        image: imageProfile,
        headings: headingsProfile
    }

    const valueAboutContext = {
        intro: introAbout,
        sectionMain: sectionMainAbout,
        divMain: divMainAbout,
        h1sMain: h1sMainAbout,
        h2sMain: h2sMainAbout,
        lisMain: lisMainAbout,
        linksMain: linksMainAbout,
        styleOutro: styleOutroAbout,
        h1Outro: h1OutroAbout,
        h2Outro: h2OutroAbout,
        outro: outroAbout
    }

    return (
        <MainComponent>
            <NavigationContext.Provider
                value={valueNavigationContext}>
                <NavNavigationComponent />
            </NavigationContext.Provider>
            <ProfileContext.Provider
                value={valueProfileContext}>
                <SectionProfileComponent />
            </ProfileContext.Provider>
            <AboutContext.Provider
                value={valueAboutContext}>
                <SectionAboutComponent />
            </AboutContext.Provider>
        </MainComponent>
    );
}