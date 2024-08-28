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
    const [isSmall, setIsSmall] = useState(false);
    const [isMedium, setIsMedium] = useState(false);
    const [isLarge, setIsLarge] = useState(false);
    const [isXLarge, setIsXLarge] = useState(false);
    const [profile, setProfile] = useState({});
    const [aboutStartings, setAboutStartings] = useState([]);
    const [aboutTableBringingsLabel, setAboutTableBringingsLabel] = useState("");
    const [aboutTableBringingsContent, setAboutTableBringingsContent] = useState([]);
    const [aboutTechnicalSkillsLabel, setAboutTechnicalSkillsLabel] = useState("");
    const [aboutTechnicalSkillsContent, setAboutTechnicalSkillsContent] = useState([]);
    const [aboutEndings, setAboutEndings] = useState([]);

    useEffect(() => {
        setIsSmall(window.innerWidth <= 600);
        setIsMedium(window.innerWidth > 600 && window.innerWidth <= 1000);
        setIsLarge(window.innerWidth > 1000 && window.innerWidth <= 1100);
        setIsXLarge(window.innerWidth > 1100 && window.innerWidth <= 1300);

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
        isSmall,
        isMedium,
        isLarge,
        isXLarge,
        ifSmall,
        ifMedium,
        ifLarge,
        ifXLarge,
        ifXXLarge) {
        return isSmall ? ifSmall
            : isMedium ? ifMedium
            : isLarge ? ifLarge
            : isXLarge? ifXLarge
            : ifXXLarge;
    }

    const profileStyle = {
        overflow: "hidden",
        display: "grid",
        rowGap: "0",
        columnGap: "1%",
        gridTemplateColumns: "5% 25% 70%",
        width: "100vw",
        height: checkInnerWidth(isSmall, isMedium, isLarge, isXLarge, "50vw", "35vw", "35vw", "30vw", "25vw"),
        textAlign: "center"
    }

    const startingsAboutStyle = {
        overflow: "hidden",
        width: "100vw",
        height: checkInnerWidth(isSmall, isMedium, isLarge, isXLarge, "40vw", "25vw", "25vw", "25vw", "20vw"),
        backgroundColor: "white",
        color: "#0464ff",
        textAlign: "center"
    }

    const middlesAboutStyle = {
        overflow: "hidden",
        width: "100vw",
        height: checkInnerWidth(isSmall, isMedium, isLarge, isXLarge, "90vw", "60vw", "60vw", "55vw", "50vw"),
        backgroundColor: "#0464ff",
        color: "white",
        textAlign: "center"
    }

    const endingsAboutStyle = {
        overflow: "hidden",
        width: "100vw",
        height: checkInnerWidth(isSmall, isMedium, isLarge, isXLarge, "30vw", "20vw", "20vw", "20vw", "15vw"),
        backgroundColor: "white",
        color: "#0464ff",
        textAlign: "center"
    }

    const h1ClassName = robotoMono.className;
    const h2ClassName = anonymousPro.className;
    const buttonClassName = anonymousPro.className;

    const h1FontSize = checkInnerWidth(isSmall, isMedium, isLarge, isXLarge, "1rem", "2rem", "2.5rem", "3rem", "3rem");
    const h2FontSize = checkInnerWidth(isSmall, isMedium, isLarge, isXLarge, "0.75rem", "1rem", "1.5rem", "2rem", "2rem");
    const buttonFontSize = checkInnerWidth(isSmall, isMedium, isLarge, isXLarge, "0.75rem", "1rem", "1.5rem", "2rem", "2rem");
    const imageSizing = {
        width: checkInnerWidth(isSmall, isMedium, isLarge, isXLarge, 87, 174, 218, 240, 261),
        height: checkInnerWidth(isSmall, isMedium, isLarge, isXLarge, 116, 233, 291, 320, 349)
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