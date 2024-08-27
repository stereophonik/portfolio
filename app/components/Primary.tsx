"use client"

import { useState, useEffect } from "react";
import { Anonymous_Pro } from "next/font/google";
import { Roboto_Mono } from "next/font/google";

import PrimaryProfileComponent from "./profile/Primary";
import AboutComponent from "./About";

import { SizeContext } from "../contexts/Size";
import { ClassNameContext } from "../contexts/ClassName";
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

    return (
        <>
            <SizeContext.Provider value={{
                    isSmall: isSmall
                }}>
                <ClassNameContext.Provider value={{
                        h1ClassName: robotoMono.className,
                        h2ClassName: anonymousPro.className
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
                        <AboutComponent />
                    </NonSpecificContext.Provider>
                </ClassNameContext.Provider>
            </SizeContext.Provider>
        </>
    );
}