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
    const [profile, setProfile] = useState({});
    const [aaContentH2sIntroAbout, setAaContentH2sIntroAbout] = useState("");
    const [abContentH2sIntroAbout, setAbContentH2sIntroAbout] = useState("");
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

        fetch("/api?fileName=profile", {
            method: "GET"
        })
            .then(fileProfile => fileProfile.json())
            .then(parsedFileProfile => {
                setProfile({
                    srcImage: parsedFileProfile.srcImage,
                    altImage: parsedFileProfile.altImage,
                    styleImage: parsedFileProfile.styleImage
                });
            });

        fetch("/api?fileName=about", {
            method: "GET"
        })
            .then(fileAbout => fileAbout.json())
            .then(parsedFileAbout => {
                setAaContentH2sIntroAbout(parsedFileAbout.aaContentH2sIntro);
                setAbContentH2sIntroAbout(parsedFileAbout.abContentH2sIntro);
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
        id: "navNavigation",
        className: "classNameNavNavigation",
        style: {
            overflow: "hidden",
            backgroundColor: "#E2DDD1",
            color: "#B0622C",
            textAlign: "center",
            borderRadius: "10%"
        }
    }

    const ulNavigation = {
        style: {paddingInlineStart: "0"}
    }

    const h2Navigation = {
        id: "h2Navigation",
        className: anonymousPro.className,
        style: {
            margin: 0,
            fontSize: checkInnerWidth(
                areSizes,
                ["1.25rem", "1.25rem", "1.25rem", "1.25rem", "1.25rem", "1.75rem", "2rem",
                    "2.25rem", "2.5rem", "2.75rem", "3rem", "3rem", "3rem", "3rem"]
            )
        }
    }

    const lisNavigation = [
        {
            key: 0,
            style: {
                display: "inline-block"
            },
            content: ""
        },
        {
            key: 1,
            style: {
                color: "#E2DDD1",
                display: "inline-block"
            },
            content: "---"
        },
        {
            key: 2,
            style: {
                display: "inline-block"
            },
            content: ""
        },
        {
            key: 3,
            style: {
                color: "#E2DDD1",
                display: "inline-block"
            },
            content: "---"
        },
        {
            key: 4,
            style: {
                display: "inline-block"
            },
            content: ""
        }
    ]

    const linksNavigation = [
        {
            href: "#sectionIntroAbout",
            content: "Intro"
        },
        {
            href: "",
            content: ""
        },
        {
            href: "#sectionMainAbout",
            content: "Main"
        },
        {
            href: "",
            content: ""
        },
        {
            href: "#outro",
            content: "Outro"
        }
    ]

    const sectionProfile = {
        style: {
            overflow: "hidden",
            width: "100vw",
            height: checkInnerWidth(
                areSizes,
                ["95vw", "90vw", "75vw", "60vw", "55vw", "60vw", "60vw",
                    "60vw", "60vw", "60vw", "60vw", "55vw", "50vw", "45vw"]
            ),
            textAlign: "center"
        }
    }

    const divProfile = {
        id: "divProfile",
        style: {
            height: "10%"
        },
        content: ""
    }

    const widthImageProfile = checkInnerWidth(
        areSizes,
        [130, 130, 130, 130, 130, 160, 180, 200, 220, 240, 260, 260, 260, 260]
    );

    const heightImageProfile = checkInnerWidth(
        areSizes,
        [175, 175, 175, 175, 175, 214, 241, 267, 294, 321, 348, 348, 348, 348]
    );

    const h1HeadingsProfile = {
        id: "h1HeadingsProfile",
        className: robotoMono.className,
        style: {
            margin: 0,
            fontSize: checkInnerWidth(
                areSizes,
                ["2.75rem", "2.75rem", "2.75rem", "2.75rem", "2.75rem", "3.25rem", "3.5rem",
                    "3.75rem", "4rem", "4.25rem", "4.5rem", "4.5rem", "4.5rem", "4.5rem"]
            )
        },
        content: "Nikolai Reyes"
    }

    const h2HeadingsProfile = {
        id: "h2HeadingsProfile",
        className: anonymousPro.className,
        style: {
            margin: 0,
            fontSize: checkInnerWidth(
                areSizes,
                ["1.25rem", "1.25rem", "1.25rem", "1.25rem", "1.25rem", "1.75rem", "2rem",
                    "2.25rem", "2.5rem", "2.75rem", "3rem", "3rem", "3rem", "3rem"]
            )
        },
        content: "Transitioning to Front-end Development"
    }

    const sectionIntroAbout = {
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
    }

    const divIntroAbout = {
        id: "divIntroAbout",
        style: {
            height: "10%"
        },
        content: ""
    }

    const h1IntroAbout = {
        id: "h1IntroAbout",
        className: robotoMono.className,
        style: {
            margin: 0,
            fontSize: checkInnerWidth(
                areSizes,
                ["2.75rem", "2.75rem", "2.75rem", "2.75rem", "2.75rem", "3.25rem", "3.5rem",
                    "3.75rem", "4rem", "4.25rem", "4.5rem", "4.5rem", "4.5rem", "4.5rem"]
            )
        },
        content: "Hello!"
    }

    const h2IntrosAbout = [
        {
            id: "01h2IntroAbout",
            className: anonymousPro.className,
            style: {
                margin: 0,
                fontSize: checkInnerWidth(
                    areSizes,
                    ["1.25rem", "1.25rem", "1.25rem", "1.25rem", "1.25rem", "1.75rem", "2rem",
                        "2.25rem", "2.5rem", "2.75rem", "3rem", "3rem", "3rem", "3rem"]
                )
            },
            content: aaContentH2sIntroAbout
        },
        {
            id: "02h2IntroAbout",
            className: anonymousPro.className,
            style: {
                margin: 0,
                fontSize: checkInnerWidth(
                    areSizes,
                    ["1.25rem", "1.25rem", "1.25rem", "1.25rem", "1.25rem", "1.75rem", "2rem",
                        "2.25rem", "2.5rem", "2.75rem", "3rem", "3rem", "3rem", "3rem"]
                )
            },
            content: abContentH2sIntroAbout
        }
    ]

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
            id: "01H1MainAbout",
            className: robotoMono.className,
            style: {
                margin: 0,
                fontSize: checkInnerWidth(
                    areSizes,
                    ["2.75rem", "2.75rem", "2.75rem", "2.75rem", "2.75rem", "3.25rem", "3.5rem",
                        "3.75rem", "4rem", "4.25rem", "4.5rem", "4.5rem", "4.5rem", "4.5rem"]
                )
            }
        },
        {
            id: "02H1MainAbout",
            className: robotoMono.className,
            style: {
                margin: 0,
                fontSize: checkInnerWidth(
                    areSizes,
                    ["2.75rem", "2.75rem", "2.75rem", "2.75rem", "2.75rem", "3.25rem", "3.5rem",
                        "3.75rem", "4rem", "4.25rem", "4.5rem", "4.5rem", "4.5rem", "4.5rem"]
                )
            }
        }
    ]

    const h2MainAbout = {
        className: anonymousPro.className,
        style: {
            margin: 0,
            fontSize: checkInnerWidth(
                areSizes,
                ["1.25rem", "1.25rem", "1.25rem", "1.25rem", "1.25rem", "1.75rem", "2rem",
                    "2.25rem", "2.5rem", "2.75rem", "3rem", "3rem", "3rem", "3rem"]
            )
        }
    }

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
            margin: 0,
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
            margin: 0,
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
        h2: h2Navigation,
        lis: lisNavigation,
        links: linksNavigation
    }

    const valueProfileContext = {
        section: sectionProfile,
        div: divProfile,
        srcImage: profile["srcImage"],
        altImage: profile["altImage"],
        styleImage: profile["styleImage"],
        widthImage: widthImageProfile,
        heightImage: heightImageProfile,
        h1Headings: h1HeadingsProfile,
        h2Headings: h2HeadingsProfile
    }

    const valueAboutContext = {
        sectionIntro: sectionIntroAbout,
        divIntro: divIntroAbout,
        h1Intro: h1IntroAbout,
        h2Intros: h2IntrosAbout,
        sectionMain: sectionMainAbout,
        divMain: divMainAbout,
        h1sMain: h1sMainAbout,
        h2Main: h2MainAbout,
        labelServingsMain: labelServingsMainAbout,
        servingsMain: servingsMainAbout,
        labelSkillsMain: labelSkillsMainAbout,
        skillsMain: skillsMainAbout,
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