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
    const [profile, setProfile] = useState({});
    const [aboutStartings, setAboutStartings] = useState([]);
    const [aboutTableBringingsLabel, setAboutTableBringingsLabel] = useState("");
    const [aboutTableBringingsContent, setAboutTableBringingsContent] = useState([]);
    const [aboutTechnicalSkillsLabel, setAboutTechnicalSkillsLabel] = useState("");
    const [aboutTechnicalSkillsContent, setAboutTechnicalSkillsContent] = useState([]);
    const [aboutEndings, setAboutEndings] = useState([]);

    useEffect(() => {
        setIsSmall(window.innerWidth <= 600);

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

    const profileStyle = {
        overflow: "hidden",
        display: "grid",
        rowGap: "0",
        columnGap: "1%",
        gridTemplateColumns: "5% 25% 70%",
        width: "100vw",
        height: isSmall ? "50vw" : "25vw",
        textAlign: "center"
    }

    const startingsAboutStyle = {
        overflow: "hidden",
        width: "100vw",
        height: isSmall ? "40vw" : "20vw",
        backgroundColor: "white",
        color: "#0464ff",
        textAlign: "center"
    }

    const middlesAboutStyle = {
        overflow: "hidden",
        width: "100vw",
        height: isSmall ? "90vw" : "50vw",
        backgroundColor: "#0464ff",
        color: "white",
        textAlign: "center"
    }

    const endingsAboutStyle = {
        overflow: "hidden",
        width: "100vw",
        height: isSmall ? "30vw" : "15vw",
        backgroundColor: "white",
        color: "#0464ff",
        textAlign: "center"
    }

    const h1ClassName = robotoMono.className;
    const h2ClassName = anonymousPro.className;
    const buttonClassName = anonymousPro.className;

    const h1FontSize = isSmall ? "1rem" : "3rem";
    const h2FontSize = isSmall ? "0.75rem" : "2rem";
    const buttonFontSize = isSmall ? "0.75rem" : "2rem";
    const imageSizing = {
        width: isSmall ? 87 : 261,
        height: isSmall ? 116 : 349
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