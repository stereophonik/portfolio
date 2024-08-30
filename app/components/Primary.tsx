"use client"

import { useState, useEffect } from "react";
import { Anonymous_Pro } from "next/font/google";
import { Roboto_Mono } from "next/font/google";

import PrimaryNavComponent from "./nav/Primary";
import PrimaryProfileComponent from "./profile/Primary";
import PrimaryAboutComponent from "./about/Primary";

import { SizingContext } from "../contexts/Sizing";
import { ClassNamingContext } from "../contexts/ClassNaming";
import { StylingContext } from "../contexts/Styling";
import { NonSpecificContext } from "../contexts/NonSpecific";

const anonymousPro = Anonymous_Pro({
    weight: "400",
    subsets: ["latin"]
});

const robotoMono = Roboto_Mono({
    weight: "700",
    subsets: ["latin"]
});

export default function PrimaryComponent() {
    const [areSizes, setAreSizes] = useState([]);
    const [profile, setProfile] = useState({});
    const [introAbout, setIntroAbout] = useState([]);
    const [servingsLabelAbout, setServingsLabelAbout] = useState("");
    const [servingsContentAbout, setServingsContentAbout] = useState([]);
    const [skillsLabelAbout, setSkillsLabelAbout] = useState("");
    const [skillsContentAbout, setSkillsContentAbout] = useState([]);
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
            .then(profileFile => profileFile.json())
            .then(jsonProfileFile => {
                setProfile({
                    divStyle: jsonProfileFile.divStyle,
                    imageSrc: jsonProfileFile.imageSrc,
                    imageAlt: jsonProfileFile.imageAlt,
                    imageStyle: jsonProfileFile.imageStyle,
                    headingsH1: jsonProfileFile.headingsH1,
                    headingsH2: jsonProfileFile.headingsH2
                });
            });

        fetch("/api?fileName=about", {
            method: "GET"
        })
            .then(aboutFile => aboutFile.json())
            .then(jsonAboutFile => {
                setIntroAbout(jsonAboutFile.intro);
                setServingsLabelAbout(jsonAboutFile.servingsLabel);
                setServingsContentAbout(jsonAboutFile.servingsContent);
                setSkillsLabelAbout(jsonAboutFile.skillsLabel);
                setSkillsContentAbout(jsonAboutFile.skillsContent);
                setOutroAbout(jsonAboutFile.outro);
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

    const navStyle = {
        overflow: "hidden",
        backgroundColor: "#2677D9",
        color: "#2BC1AF",
        textAlign: "center"
    }

    const profileStyle = {
        overflow: "hidden",
        width: "100vw",
        height: checkInnerWidth(
            areSizes,
            ["95vw", "90vw", "75vw", "60vw", "55vw", "60vw", "60vw",
            "60vw", "60vw", "60vw", "60vw", "55vw", "50vw", "45vw"]
        ),
        textAlign: "center"
    }

    const introAboutStyle = {
        overflow: "hidden",
        width: "100vw",
        height: checkInnerWidth(
            areSizes,
            ["90vw", "85vw", "70vw", "50vw", "40vw", "50vw", "50vw",
            "55vw", "55vw", "55vw", "55vw", "50vw", "45vw", "40vw"]
        ),
        backgroundColor: "#2677D9",
        color: "#2BC1AF",
        textAlign: "center"
    }

    const mainAboutStyle = {
        overflow: "hidden",
        width: "100vw",
        height: checkInnerWidth(
            areSizes,
            ["145vw", "135vw", "110vw", "90vw", "75vw", "90vw", "90vw",
            "90vw", "90vw", "90vw", "90vw", "80vw", "75vw", "60vw"]
        ),
        backgroundColor: "#2BC1AF",
        color: "#2677D9",
        textAlign: "center"
    }

    const outroAboutStyle = {
        overflow: "hidden",
        width: "100vw",
        height: checkInnerWidth(
            areSizes,
            ["65vw", "55vw", "45vw", "35vw", "30vw", "35vw", "35vw",
            "35vw", "35vw", "40vw", "40vw", "35vw", "30vw", "25vw"]
        ),
        backgroundColor: "#2677D9",
        color: "#2BC1AF",
        textAlign: "center"
    }

    const h1ClassName = robotoMono.className;
    const h2ClassName = anonymousPro.className;
    const buttonClassName = anonymousPro.className;

    const h1FontSize = checkInnerWidth(
        areSizes,
        ["2.75rem", "2.75rem", "2.75rem", "2.75rem", "2.75rem", "3.25rem", "3.5rem",
        "3.75rem", "4rem", "4.25rem", "4.5rem", "4.5rem", "4.5rem", "4.5rem"]
    );
    const h2FontSize = checkInnerWidth(
        areSizes,
        ["1.25rem", "1.25rem", "1.25rem", "1.25rem", "1.25rem", "1.75rem", "2rem",
        "2.25rem", "2.5rem", "2.75rem", "3rem", "3rem", "3rem", "3rem"]
    );
    const buttonFontSize = checkInnerWidth(
        areSizes,
        ["1.25rem", "1.25rem", "1.25rem", "1.25rem", "1.25rem", "1.75rem", "2rem",
        "2.25rem", "2.5rem", "2.75rem", "3rem", "3rem", "3rem", "3rem"]
    );
    const imageSizing = {
        width: checkInnerWidth(
            areSizes,
            [130, 130, 130, 130, 130, 160, 180,
            200, 220, 240, 260, 260, 260, 260]
        ),
        height: checkInnerWidth(
            areSizes,
            [175, 175, 175, 175, 175, 214, 241,
            267, 294, 321, 348, 348, 348, 348]
        )
    }

    return (
        <>
            <SizingContext.Provider value={{
                    h1Font: h1FontSize,
                    h2Font: h2FontSize,
                    buttonFont: buttonFontSize,
                    image: imageSizing
                }}>
                <ClassNamingContext.Provider value={{
                        h1: h1ClassName,
                        h2: h2ClassName,
                        button: buttonClassName
                    }}>
                    <StylingContext.Provider value={{
                        nav: navStyle,
                        profile: profileStyle,
                        introAbout: introAboutStyle,
                        mainAbout: mainAboutStyle,
                        outroAbout: outroAboutStyle
                        }}>
                        <NonSpecificContext.Provider value={{
                                divStyle: profile["divStyle"],
                                imageSrc: profile["imageSrc"],
                                imageAlt: profile["imageAlt"],
                                imageStyle: profile["imageStyle"],
                                headingsH1: profile["headingsH1"],
                                headingsH2: profile["headingsH2"],
                                intro: introAbout,
                                servingsLabel: servingsLabelAbout,
                                servingsContent: servingsContentAbout,
                                skillsLabel: skillsLabelAbout,
                                skillsContent: skillsContentAbout,
                                outro: outroAbout
                            }}>
                            <PrimaryNavComponent />
                            <PrimaryProfileComponent />
                            <PrimaryAboutComponent />
                        </NonSpecificContext.Provider>
                    </StylingContext.Provider>
                </ClassNamingContext.Provider>
            </SizingContext.Provider>
        </>
    );
}