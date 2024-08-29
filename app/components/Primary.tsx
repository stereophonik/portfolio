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
})

const robotoMono = Roboto_Mono({
    weight: "700",
    subsets: ["latin"]
})

export default function PrimaryComponent() {
    const [isSize00, setIsSize00] = useState(false);
    const [isSize01, setIsSize01] = useState(false);
    const [isSize02, setIsSize02] = useState(false);
    const [isSize03, setIsSize03] = useState(false);
    const [isSize04, setIsSize04] = useState(false);
    const [isSize05, setIsSize05] = useState(false);
    const [isSize06, setIsSize06] = useState(false);
    const [isSize07, setIsSize07] = useState(false);
    const [isSize08, setIsSize08] = useState(false);
    const [isSize09, setIsSize09] = useState(false);
    const [isSize10, setIsSize10] = useState(false);
    const [isSize11, setIsSize11] = useState(false);
    const [isSize12, setIsSize12] = useState(false);
    const [profile, setProfile] = useState({});
    const [aboutStartings, setAboutStartings] = useState([]);
    const [aboutTableBringingsLabel, setAboutTableBringingsLabel] = useState("");
    const [aboutTableBringingsContent, setAboutTableBringingsContent] = useState([]);
    const [aboutTechnicalSkillsLabel, setAboutTechnicalSkillsLabel] = useState("");
    const [aboutTechnicalSkillsContent, setAboutTechnicalSkillsContent] = useState([]);
    const [aboutEndings, setAboutEndings] = useState([]);

    useEffect(() => {
        function setIsSize0x() {
            setIsSize00(window.innerWidth <= 360);
            setIsSize01(window.innerWidth > 360 && window.innerWidth <= 440);
            setIsSize02(window.innerWidth > 440 && window.innerWidth <= 520);
            setIsSize03(window.innerWidth > 520 && window.innerWidth <= 600);
            setIsSize04(window.innerWidth > 600 && window.innerWidth <= 680);
            setIsSize05(window.innerWidth > 680 && window.innerWidth <= 760);
            setIsSize06(window.innerWidth > 760 && window.innerWidth <= 840);
            setIsSize07(window.innerWidth > 840 && window.innerWidth <= 920);
            setIsSize08(window.innerWidth > 920 && window.innerWidth <= 1000);
            setIsSize09(window.innerWidth > 1000 && window.innerWidth <= 1080);
            setIsSize10(window.innerWidth > 1080 && window.innerWidth <= 1160);
            setIsSize11(window.innerWidth > 1160 && window.innerWidth <= 1240);
            setIsSize12(window.innerWidth > 1240 && window.innerWidth <= 1320);
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
        isSize00,
        isSize01,
        isSize02,
        isSize03,
        isSize04,
        isSize05,
        isSize06,
        isSize07,
        isSize08,
        isSize09,
        isSize10,
        isSize11,
        isSize12,
        ifSize00,
        ifSize01,
        ifSize02,
        ifSize03,
        ifSize04,
        ifSize05,
        ifSize06,
        ifSize07,
        ifSize08,
        ifSize09,
        ifSize10,
        ifSize11,
        ifSize12,
        ifSize13
    ) {
        return isSize00 ? ifSize00
            : isSize01 ? ifSize01
            : isSize02 ? ifSize02
            : isSize03 ? ifSize03
            : isSize04? ifSize04
            : isSize05? ifSize05
            : isSize06? ifSize06
            : isSize07? ifSize07
            : isSize08? ifSize08
            : isSize09? ifSize09
            : isSize10? ifSize10
            : isSize11? ifSize11
            : isSize12? ifSize12
            : ifSize13;
    }

    const profileStyle = {
        overflow: "hidden",
        width: "100vw",
        height: checkInnerWidth(
            isSize00, isSize01, isSize02, isSize03, isSize04, isSize05, isSize06,
            isSize07, isSize08, isSize09, isSize10, isSize11, isSize12,
            "95vw", "90vw", "75vw", "60vw", "55vw", "60vw", "60vw",
            "60vw", "60vw", "60vw", "60vw", "55vw", "50vw", "45vw"
        ),
        textAlign: "center"
    }

    const startingsAboutStyle = {
        overflow: "hidden",
        width: "100vw",
        height: checkInnerWidth(
            isSize00, isSize01, isSize02, isSize03, isSize04, isSize05, isSize06,
            isSize07, isSize08, isSize09, isSize10, isSize11, isSize12,
            "90vw", "85vw", "70vw", "50vw", "40vw", "50vw", "50vw",
            "55vw", "55vw", "55vw", "55vw", "50vw", "45vw", "40vw"
        ),
        backgroundColor: "white",
        color: "#006400",
        textAlign: "center"
    }

    const middlesAboutStyle = {
        overflow: "hidden",
        width: "100vw",
        height: checkInnerWidth(
            isSize00, isSize01, isSize02, isSize03, isSize04, isSize05, isSize06,
            isSize07, isSize08, isSize09, isSize10, isSize11, isSize12,
            "145vw", "135vw", "110vw", "90vw", "75vw", "90vw", "90vw",
            "90vw", "90vw", "90vw", "90vw", "80vw", "75vw", "60vw"
        ),
        backgroundColor: "#006400",
        color: "white",
        textAlign: "center"
    }

    const endingsAboutStyle = {
        overflow: "hidden",
        width: "100vw",
        height: checkInnerWidth(
            isSize00, isSize01, isSize02, isSize03, isSize04, isSize05, isSize06,
            isSize07, isSize08, isSize09, isSize10, isSize11, isSize12,
            "65vw", "55vw", "45vw", "35vw", "30vw", "35vw", "35vw",
            "35vw", "35vw", "40vw", "40vw", "35vw", "30vw", "25vw"
        ),
        backgroundColor: "white",
        color: "#006400",
        textAlign: "center"
    }

    const h1ClassName = robotoMono.className;
    const h2ClassName = anonymousPro.className;
    const buttonClassName = anonymousPro.className;

    const h1FontSize = checkInnerWidth(
        isSize00, isSize01, isSize02, isSize03, isSize04, isSize05, isSize06,
        isSize07, isSize08, isSize09, isSize10, isSize11, isSize12,
        "2.75rem", "2.75rem", "2.75rem", "2.75rem", "2.75rem", "3.25rem", "3.5rem",
        "3.75rem", "4rem", "4.25rem", "4.5rem", "4.5rem", "4.5rem", "4.5rem"
    );
    const h2FontSize = checkInnerWidth(
        isSize00, isSize01, isSize02, isSize03, isSize04, isSize05, isSize06,
        isSize07, isSize08, isSize09, isSize10, isSize11, isSize12,
        "1.25rem", "1.25rem", "1.25rem", "1.25rem", "1.25rem", "1.75rem", "2rem",
        "2.25rem", "2.5rem", "2.75rem", "3rem", "3rem", "3rem", "3rem"
    );
    const buttonFontSize = checkInnerWidth(
        isSize00, isSize01, isSize02, isSize03, isSize04, isSize05, isSize06,
        isSize07, isSize08, isSize09, isSize10, isSize11, isSize12,
        "1.25rem", "1.25rem", "1.25rem", "1.25rem", "1.25rem", "1.75rem", "2rem",
        "2.25rem", "2.5rem", "2.75rem", "3rem", "3rem", "3rem", "3rem"
    );
    const imageSizing = {
        width: checkInnerWidth(
            isSize00, isSize01, isSize02, isSize03, isSize04, isSize05, isSize06,
            isSize07, isSize08, isSize09, isSize10, isSize11, isSize12,
            130, 130, 130, 130, 130, 160, 180,
            200, 220, 240, 260, 260, 260, 260
        ),
        height: checkInnerWidth(
            isSize00, isSize01, isSize02, isSize03, isSize04, isSize05, isSize06,
            isSize07, isSize08, isSize09, isSize10, isSize11, isSize12,
            175, 175, 175, 175, 175, 214, 241,
            267, 294, 321, 348, 348, 348, 348
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