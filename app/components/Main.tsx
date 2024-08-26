"use client"

import { useState, useEffect } from "react";
import { Anonymous_Pro } from "next/font/google";
import { Roboto_Mono } from "next/font/google";

import ProfileComponent from "./Profile";
import AboutComponent from "./About";

import { SizeContext } from "../contexts/Size";
import { ProfileContext } from "../contexts/Profile";

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
    const [aboutLabelTableBringings, setAboutLabelTableBringings] = useState("");
    const [aboutTableBringings, setAboutTableBringings] = useState([]);
    const [aboutLabelTechnicalSkills, setAboutLabelTechnicalSkills] = useState("");
    const [aboutTechnicalSkills, setAboutTechnicalSkills] = useState([]);
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
                setAboutLabelTableBringings(jsonAboutFile.labelTableBringings);
                setAboutTableBringings(jsonAboutFile.tableBringings);
                setAboutLabelTechnicalSkills(jsonAboutFile.labelTechnicalSkills);
                setAboutTechnicalSkills(jsonAboutFile.technicalSkills);
                setAboutEndings(jsonAboutFile.endings);
            });
    }, []);

    return (
        <>
            <main className="main">
                <SizeContext.Provider value={{isSmall: isSmall}}>
                    <ProfileContext.Provider value={{
                        src: profileSrc,
                        alt: profileAlt,
                        h1: profileH1,
                        h2: profileH2
                    }}>
                        <ProfileComponent
                            h1ClassName={robotoMono.className}
                            h2ClassName={anonymousPro.className}
                        />
                    </ProfileContext.Provider>
                    <AboutComponent
                        startings={aboutStartings}
                        labelTableBringings={aboutLabelTableBringings}
                        tableBringings={aboutTableBringings}
                        labelTechnicalSkills={aboutLabelTechnicalSkills}
                        technicalSkills={aboutTechnicalSkills}
                        endings={aboutEndings}
                        h1ClassName={robotoMono.className}
                        h2ClassName={anonymousPro.className}
                    />
                </SizeContext.Provider>
            </main>
        </>
    );
}