"use client"

import { useState, useEffect } from "react";

import Profile from "./components/Profile";
import About from "./components/About";
import Main from "./components/Main";

export default function Page() {
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
            <Main isSmall={isSmall}>
                <Profile
                    src={profileSrc}
                    alt={profileAlt}
                    h1={profileH1}
                    h2={profileH2}
                />
                <About
                    isSmall={isSmall}
                    startings={aboutStartings}
                    labelTableBringings={aboutLabelTableBringings}
                    tableBringings={aboutTableBringings}
                    labelTechnicalSkills={aboutLabelTechnicalSkills}
                    technicalSkills={aboutTechnicalSkills}
                    endings={aboutEndings}
                />
            </Main>
        </>
    );
}