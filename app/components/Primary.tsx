"use client"

import { useState, useEffect } from "react";
import { Anonymous_Pro } from "next/font/google";
import { Roboto_Mono } from "next/font/google";

import PrimaryProfileComponent from "./profile/Primary";
import PrimaryAboutComponent from "./about/Primary";

import { SizingContext } from "../contexts/Sizing";
import { ClassNamingContext } from "../contexts/ClassNaming";
import { StylingContext } from "../contexts/Styling";
import { NonSpecificContext } from "../contexts/NonSpecific";

const anonymousPro = Anonymous_Pro({
    weight: "400",
    subsets: ["latin"]
})

const robotoMono = Roboto_Mono({
    weight: "700",
    subsets: ["latin"]
})

export default function PrimaryComponent() {
    const [isSize01, setIsSize01] = useState(false);
    const [isSize02, setIsSize02] = useState(false);
    const [isSize03, setIsSize03] = useState(false);
    const [isSize04, setIsSize04] = useState(false);
    const [isSize05, setIsSize05] = useState(false);
    const [profile, setProfile] = useState({});
    const [aboutStartings, setAboutStartings] = useState([]);
    const [aboutTableBringingsLabel, setAboutTableBringingsLabel] = useState("");
    const [aboutTableBringingsContent, setAboutTableBringingsContent] = useState([]);
    const [aboutTechnicalSkillsLabel, setAboutTechnicalSkillsLabel] = useState("");
    const [aboutTechnicalSkillsContent, setAboutTechnicalSkillsContent] = useState([]);
    const [aboutEndings, setAboutEndings] = useState([]);

    useEffect(() => {
        function setIsSize0x() {
            setIsSize01(window.innerWidth <= 440);
            setIsSize02(window.innerWidth > 440 && window.innerWidth <= 520);
            setIsSize03(window.innerWidth > 520 && window.innerWidth <= 600);
            setIsSize04(window.innerWidth > 600 && window.innerWidth <= 680);
            setIsSize05(window.innerWidth > 680 && window.innerWidth <= 760);
        }

        setIsSize0x();
        window.onresize = setIsSize0x;

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
                setAboutStartings(jsonAboutFile.startings);
                setAboutTableBringingsLabel(jsonAboutFile.tableBringingsLabel);
                setAboutTableBringingsContent(jsonAboutFile.tableBringingsContent);
                setAboutTechnicalSkillsLabel(jsonAboutFile.technicalSkillsLabel);
                setAboutTechnicalSkillsContent(jsonAboutFile.technicalSkillsContent);
                setAboutEndings(jsonAboutFile.endings);
            });
    }, []);

    function checkInnerWidth(
        isSize01,
        isSize02,
        isSize03,
        isSize04,
        isSize05,
        ifSize01,
        ifSize02,
        ifSize03,
        ifSize04,
        ifSize05,
        ifSize06
    ) {
        return isSize01 ? ifSize01
            : isSize02 ? ifSize02
            : isSize03 ? ifSize03
            : isSize04? ifSize04
            : isSize05? ifSize05
            : ifSize06;
    }

    const profileStyle = {
        overflow: "hidden",
        width: "100vw",
        height: checkInnerWidth(isSize01, isSize02, isSize03, isSize04, isSize05, "90vw", "75vw", "60vw", "55vw", "60vw", "60vw"),
        textAlign: "center"
    }

    const startingsAboutStyle = {
        overflow: "hidden",
        width: "100vw",
        height: checkInnerWidth(isSize01, isSize02, isSize03, isSize04, isSize05, "85vw", "70vw", "50vw", "40vw", "50vw", "50vw"),
        backgroundColor: "white",
        color: "#006400",
        textAlign: "center"
    }

    const middlesAboutStyle = {
        overflow: "hidden",
        width: "100vw",
        height: checkInnerWidth(isSize01, isSize02, isSize03, isSize04, isSize05, "135vw", "110vw", "90vw", "75vw", "90vw", "90vw"),
        backgroundColor: "#006400",
        color: "white",
        textAlign: "center"
    }

    const endingsAboutStyle = {
        overflow: "hidden",
        width: "100vw",
        height: checkInnerWidth(isSize01, isSize02, isSize03, isSize04, isSize05, "55vw", "45vw", "35vw", "30vw", "35vw", "35vw"),
        backgroundColor: "white",
        color: "#006400",
        textAlign: "center"
    }

    const h1ClassName = robotoMono.className;
    const h2ClassName = anonymousPro.className;
    const buttonClassName = anonymousPro.className;

    const h1FontSize = checkInnerWidth(isSize01, isSize02, isSize03, isSize04, isSize05, "2.75rem", "2.75rem", "2.75rem", "2.75rem", "3.25rem", "3.5rem");
    const h2FontSize = checkInnerWidth(isSize01, isSize02, isSize03, isSize04, isSize05, "1.25rem", "1.25rem", "1.25rem", "1.25rem", "1.75rem", "2rem");
    const buttonFontSize = checkInnerWidth(isSize01, isSize02, isSize03, isSize04, isSize05, "1.25rem", "1.25rem", "1.25rem", "1.25rem", "1.75rem", "2rem");
    const imageSizing = {
        width: checkInnerWidth(isSize01, isSize02, isSize03, isSize04, isSize05, 130, 130, 130, 130, 160, 180),
        height: checkInnerWidth(isSize01, isSize02, isSize03, isSize04, isSize05, 175, 175, 175, 175, 214, 241)
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
                        profile: profileStyle,
                        startingsAbout: startingsAboutStyle,
                        middlesAbout: middlesAboutStyle,
                        endingsAbout: endingsAboutStyle
                        }}>
                        <NonSpecificContext.Provider value={{
                                divStyle: profile["divStyle"],
                                imageSrc: profile["imageSrc"],
                                imageAlt: profile["imageAlt"],
                                imageStyle: profile["imageStyle"],
                                headingsH1: profile["headingsH1"],
                                headingsH2: profile["headingsH2"],
                                startings: aboutStartings,
                                tableBringingsLabel: aboutTableBringingsLabel,
                                tableBringingsContent: aboutTableBringingsContent,
                                technicalSkillsLabel: aboutTechnicalSkillsLabel,
                                technicalSkillsContent: aboutTechnicalSkillsContent,
                                endings: aboutEndings
                            }}>
                            <PrimaryProfileComponent />
                            <PrimaryAboutComponent />
                        </NonSpecificContext.Provider>
                    </StylingContext.Provider>
                </ClassNamingContext.Provider>
            </SizingContext.Provider>
        </>
    );
}