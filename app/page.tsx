"use client"

import { useState, useEffect } from "react";

import Profile from "./components/Profile";
import About from "./components/About";

export default function Page() {
    const [profileSrc, setProfileSrc] = useState("");
    const [profileAlt, setProfileAlt] = useState("");
    const [profileH1, setProfileH1] = useState("");
    const [profileH2, setProfileH2] = useState("");
    const [aboutStartings, setAboutStartings] = useState([]);
    const [aboutTableBringings, setAboutTableBringings] = useState([]);
    const [aboutTechnicalSkills, setAboutTechnicalSkills] = useState([]);
    const [aboutEndings, setAboutEndings] = useState([]);

    useEffect(() => {
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
                setAboutTableBringings(jsonAboutFile.tableBringings);
                setAboutTechnicalSkills(jsonAboutFile.technicalSkills);
                setAboutEndings(jsonAboutFile.endings);
            });
    }, []);

    return (
        <>
            <Profile
                src={profileSrc}
                alt={profileAlt}
                h1={profileH1}
                h2={profileH2}
            />
            <About
                startings={aboutStartings}
                tableBringings={aboutTableBringings}
                technicalSkills={aboutTechnicalSkills}
                endings={aboutEndings}
            />
        </>
    );
}