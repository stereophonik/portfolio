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
import {ProfileContext} from "../contexts/Profile";

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
    const [labelServingsAbout, setLabelServingsAbout] = useState("");
    const [servingsAbout, setServingsAbout] = useState([]);
    const [labelSkillsAbout, setLabelSkillsAbout] = useState("");
    const [skillsAbout, setSkillsAbout] = useState([]);
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
                    styleImage: parsedFileProfile.styleImage,
                    h1Headings: parsedFileProfile.h1Headings,
                    h2Headings: parsedFileProfile.h2Headings
                });
            });

        fetch("/api?fileName=about", {
            method: "GET"
        })
            .then(fileAbout => fileAbout.json())
            .then(parsedFileAbout => {
                setIntroAbout(parsedFileAbout.intro);
                setLabelServingsAbout(parsedFileAbout.labelServings);
                setServingsAbout(parsedFileAbout.servings);
                setLabelSkillsAbout(parsedFileAbout.labelSkills);
                setSkillsAbout(parsedFileAbout.skills);
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

    const styleNav = {
        overflow: "hidden",
        backgroundColor: "#2677D9",
        color: "#2BC1AF",
        textAlign: "center"
    }

    const styleProfileProfile = {
        overflow: "hidden",
        width: "100vw",
        height: checkInnerWidth(
            areSizes,
            ["95vw", "90vw", "75vw", "60vw", "55vw", "60vw", "60vw",
            "60vw", "60vw", "60vw", "60vw", "55vw", "50vw", "45vw"]
        ),
        textAlign: "center"
    }

    const divProfile = {
        id: "divProfile",
        style: {
            height: "10%"
        }
    }

    const widthImageProfile = checkInnerWidth(
        areSizes,
        [130, 130, 130, 130, 130, 160, 180, 200, 220, 240, 260, 260, 260, 260]
    );

    const heightImageProfile = checkInnerWidth(
        areSizes,
        [175, 175, 175, 175, 175, 214, 241, 267, 294, 321, 348, 348, 348, 348]
    );

    const fontSizeH1HeadingsProfile = checkInnerWidth(
        areSizes,
        ["2.75rem", "2.75rem", "2.75rem", "2.75rem", "2.75rem", "3.25rem", "3.5rem",
            "3.75rem", "4rem", "4.25rem", "4.5rem", "4.5rem", "4.5rem", "4.5rem"]
    );

    const fontSizeH2HeadingsProfile = checkInnerWidth(
        areSizes,
        ["1.25rem", "1.25rem", "1.25rem", "1.25rem", "1.25rem", "1.75rem", "2rem",
            "2.25rem", "2.5rem", "2.75rem", "3rem", "3rem", "3rem", "3rem"]
    );

    const classNameH1HeadingsProfile = robotoMono.className;
    const classNameH2HeadingsProfile = anonymousPro.className;

    const styleIntroAbout = {
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

    const styleMainAbout = {
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

    const styleOutroAbout = {
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

    return (
        <>
            <SizingContext.Provider value={{
                }}>
                <ClassNamingContext.Provider value={{
                    }}>
                    <StylingContext.Provider value={{
                        nav: styleNav,
                        introAbout: styleIntroAbout,
                        mainAbout: styleMainAbout,
                        outroAbout: styleOutroAbout
                        }}>
                        <NonSpecificContext.Provider value={{
                                h1Headings: profile["h1Headings"],
                                h2Headings: profile["h2Headings"],
                                intro: introAbout,
                                labelServings: labelServingsAbout,
                                servings: servingsAbout,
                                labelSkills: labelSkillsAbout,
                                skills: skillsAbout,
                                outro: outroAbout
                            }}>
                            <PrimaryNavComponent />
                            <ProfileContext.Provider value={{
                                    styleProfile: styleProfileProfile,
                                    div: divProfile,
                                    srcImage: profile["srcImage"],
                                    altImage: profile["altImage"],
                                    styleImage: profile["styleImage"],
                                    widthImage: widthImageProfile,
                                    heightImage: heightImageProfile,
                                    fontSizeH1Headings: fontSizeH1HeadingsProfile,
                                    fontSizeH2Headings: fontSizeH2HeadingsProfile,
                                    classNameH1Headings: classNameH1HeadingsProfile,
                                    classNameH2Headings: classNameH2HeadingsProfile
                                }}>
                                <PrimaryProfileComponent />
                            </ProfileContext.Provider>
                            <PrimaryAboutComponent />
                        </NonSpecificContext.Provider>
                    </StylingContext.Provider>
                </ClassNamingContext.Provider>
            </SizingContext.Provider>
        </>
    );
}