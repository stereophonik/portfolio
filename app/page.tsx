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

import NavNavigationInterface from "./interfaces/navigation/Nav";
import UlNavigationInterface from "./interfaces/navigation/Ul";
import H3NavigationInterface from "./interfaces/navigation/H3";
import LisNavigationInterface from "./interfaces/navigation/Lis";
import LinksNavigationInterface from "./interfaces/navigation/Links";
import SectionProfileInterface from "./interfaces/profile/Section";
import DivProfileInterface from "./interfaces/profile/Div";
import ImageProfileInterface from "./interfaces/profile/Image";
import HeadingsProfileInterface from "./interfaces/profile/Headings";
import SectionAboutInterface from "./interfaces/about/Section";
import IntroAboutInterface from "./interfaces/about/Intro";
import MainAboutInterface from "./interfaces/about/Main";
import OutroAboutInterface from "./interfaces/about/Outro";

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

    const navNavigation: NavNavigationInterface = {
        id: fromParsedFileNavigation["idNav"],
        className: fromParsedFileNavigation["classNameNav"],
        style: fromParsedFileNavigation["styleNav"]
    }

    const ulNavigation: UlNavigationInterface = {
        style: fromParsedFileNavigation["styleUl"]
    }

    const h3Navigation: H3NavigationInterface = {
        id: fromParsedFileNavigation["idH3"],
        className: anonymousPro.className,
        style: {
            fontSize: checkInnerWidth(
                areSizes,
                ["0.75rem", "0.75rem", "0.75rem", "0.75rem", "0.75rem", "1.25rem", "1.5rem",
                    "1.75rem", "2rem", "2.25rem", "2.5rem", "2.5rem", "2.5rem", "2.5rem"]
            )
        }
    }

    const lisNavigation: LisNavigationInterface[] = [
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
    ]

    const linksNavigation: LinksNavigationInterface[] = [
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

    const sectionProfile: SectionProfileInterface = {
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
    }

    const divProfile: DivProfileInterface = {
        id: fromParsedFileProfile["idDiv"],
        style: fromParsedFileProfile["styleDiv"],
        content: fromParsedFileProfile["contentDiv"]
    }

    const imageProfile: ImageProfileInterface = {
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
    }

    const headingsProfile: HeadingsProfileInterface = {
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

    const sectionAbout: SectionAboutInterface = {
        id: fromParsedFileAbout["idSection"],
        style: fromParsedFileAbout["styleSection"]
    }

    const introAbout: IntroAboutInterface = {
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
    }

    const mainAbout: MainAboutInterface = {
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
    }

    const outroAbout: OutroAboutInterface = {
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

    const navigationContext: {
        value: {
            nav: { id: any; className: any; style: any };
            ul: { style: any };
            lis: { key: any; style: any; content: any }[];
            links: { href: any; content: any }[];
            h3: { id: any; className: string; style: { fontSize: any } }
        }
    } = {
        value: {
            nav: navNavigation,
            ul: ulNavigation,
            h3: h3Navigation,
            lis: lisNavigation,
            links: linksNavigation
        }
    }

    const profileContext: {
        value: {
            div: { id: any; style: any; content: any };
            image: { src: any; alt: any; style: any; width: any; height: any };
            headings: {
                section: { id: any; style: any };
                h1: { id: any; content: any; className: string; style: { fontSize: any } };
                h2: { id: any; content: any; className: string; style: { fontSize: any } }
            };
            section: {
                id: any;
                style: { overflow: any; width: any; backgroundColor: any; color: any; textAlign: any; height: any }
            }
        }
    } = {
        value: {
            section: sectionProfile,
            div: divProfile,
            image: imageProfile,
            headings: headingsProfile
        }
    }

    const aboutContext: {
        value: {
            intro: {
                div: { style: any; id: any; content: any };
                h2s: { className: string; style: { fontSize: any }; id: any; content: any }[];
                h1: { className: string; style: { fontSize: any }; id: any; content: any };
                section: {
                    style: {
                        backgroundColor: any;
                        overflow: any;
                        color: any;
                        borderRadius: any;
                        textAlign: any;
                        width: any;
                        height: any
                    };
                    id: any
                }
            };
            outro: {
                div: { style: any; id: any; content: any };
                h1: { className: string; style: { fontSize: any }; id: any; content: any };
                section: {
                    style: { backgroundColor: any; overflow: any; color: any; textAlign: any; width: any; height: any };
                    id: any
                };
                h2: { className: string; style: { fontSize: any }; id: any; content: any }
            };
            section: { id: any; style: any };
            main: {
                skills: {
                    div: { style: any; id: any; content: any };
                    ul: { style: any };
                    lis: { style: any; key: any; content: any }[];
                    h1: { className: string; style: { fontSize: any }; id: any; content: any };
                    section: {
                        style: {
                            backgroundColor: any;
                            overflow: any;
                            color: any;
                            borderRadius: any;
                            textAlign: any;
                            width: any;
                            height: any
                        };
                        id: any
                    };
                    h2: { className: string; style: { fontSize: any }; id: any };
                    links: { href: string; content: any }[]
                };
                servings: {
                    div: { style: any; id: any; content: any };
                    ul: { style: any };
                    lis: { style: any; key: any; content: any }[];
                    h1: { className: string; style: { fontSize: any }; id: any; content: any };
                    section: {
                        style: {
                            backgroundColor: any;
                            overflow: any;
                            color: any;
                            textAlign: any;
                            width: any;
                            height: any
                        };
                        id: any
                    };
                    h2: { className: string; style: { fontSize: any }; id: any }
                };
                section: { style: any; id: any }
            }
        }
    } = {
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