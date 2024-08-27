"use client"

import { useState, useEffect } from "react";
import { Anonymous_Pro } from "next/font/google";
import { Roboto_Mono } from "next/font/google";

import ProfileComponent from "./Profile";
import AboutComponent from "./About";

import { SizeContext } from "../contexts/Size";
import { ClassNameContext } from "../contexts/ClassName";
import { ProfileContext } from "../contexts/Profile";
import { AboutContext } from "../contexts/About";

const anonymousPro = Anonymous_Pro({
    weight: "400",
    subsets: ["latin"]
})

const robotoMono = Roboto_Mono({
    weight: "700",
    subsets: ["latin"]
})

export default function MainComponent() {
    const [isSmall, setIsSmall] = useState(false);
    const [profileSrc, setProfileSrc] = useState("");
    const [profileAlt, setProfileAlt] = useState("");
    const [profileH1, setProfileH1] = useState("");
    const [profileH2, setProfileH2] = useState("");
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
                setProfileSrc(jsonProfileFile.src);
                setProfileAlt(jsonProfileFile.alt);
                setProfileH1(jsonProfileFile.h1);
                setProfileH2(jsonProfileFile.h2);
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
            <main className="main">
                <SizeContext.Provider value={{
                        isSmall: isSmall
                    }}>
                    <ClassNameContext.Provider value={{
                            h1ClassName: robotoMono.className,
                            h2ClassName: anonymousPro.className
                        }}>
                        <ProfileContext.Provider value={{
                                src: profileSrc,
                                alt: profileAlt,
                                h1: profileH1,
                                h2: profileH2
                            }}>
                            <ProfileComponent />
                        </ProfileContext.Provider>
                        <AboutContext.Provider value={{
                                startings: aboutStartings,
                                tableBringingsLabel: aboutTableBringingsLabel,
                                tableBringingsContent: aboutTableBringingsContent,
                                technicalSkillsLabel: aboutTechnicalSkillsLabel,
                                technicalSkillsContent: aboutTechnicalSkillsContent,
                                endings: aboutEndings
                            }}>
                            <AboutComponent />
                        </AboutContext.Provider>
                    </ClassNameContext.Provider>
                </SizeContext.Provider>
            </main>
        </>
    );
}