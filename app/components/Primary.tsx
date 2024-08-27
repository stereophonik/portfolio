"use client"

import { useState, useEffect } from "react";
import { Anonymous_Pro } from "next/font/google";
import { Roboto_Mono } from "next/font/google";

import PrimaryProfileComponent from "./profile/Primary";
import PrimaryAboutComponent from "./about/Primary";

import { SizeContext } from "../contexts/Size";
import { ClassNameContext } from "../contexts/ClassName";
import { StyleContext } from "../contexts/Style";
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

    const h1ClassName = robotoMono.className;
    const h2ClassName = anonymousPro.className;
    const buttonClassName = anonymousPro.className;

    const h1FontSize = isSmall ? "1rem" : "3rem";
    const h2FontSize = isSmall ? "0.75rem" : "2rem";
    const buttonFontSize = isSmall ? "0.75rem" : "2rem";
    const imageSize = {
        width: isSmall ? 87 : 261,
        height: isSmall ? 116 : 349
    }
    const aboutSizing = {
        heights: [
            isSmall ? "40vw" : "20vw",
            isSmall ? "90vw" : "50vw",
            isSmall ? "30vw" : "15vw"
        ]
    }

    return (
        <>
            <SizeContext.Provider value={{
                    h1FontSize: h1FontSize,
                    h2FontSize: h2FontSize,
                    buttonFontSize: buttonFontSize,
                    image: imageSize,
                    about: aboutSizing
                }}>
                <ClassNameContext.Provider value={{
                        h1ClassName: h1ClassName,
                        h2ClassName: h2ClassName,
                        buttonClassName: buttonClassName
                    }}>
                    <StyleContext.Provider value={{
                        profile: profileStyle
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
                    </StyleContext.Provider>
                </ClassNameContext.Provider>
            </SizeContext.Provider>
        </>
    );
}