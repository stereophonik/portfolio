"use client"

import { useState, useEffect } from "react";

import Header from "./components/Header";
import Profile from "./components/Profile";
import About from "./components/About";

export default function Page() {
    const [profileSrc, setProfileSrc] = useState("");
    const [profileAlt, setProfileAlt] = useState("");
    const [profileH2, setProfileH2] = useState("");
    const [aboutTableBringings, setAboutTableBringings] = useState("");
    const [aboutTechnicalSkills, setAboutTechnicalSkills] = useState("");

    useEffect(() => {
        fetch("/api?fileName=profile", {
            method: "GET"
        })
            .then(profileFile => profileFile.json())
            .then(jsonProfileFile => {
                setProfileSrc(jsonProfileFile.src);
                setProfileAlt(jsonProfileFile.alt);
                setProfileH2(jsonProfileFile.h2);
            });

        fetch("/api?fileName=about", {
            method: "GET"
        })
            .then(aboutFile => aboutFile.json())
            .then(jsonAboutFile => {
                setAboutTableBringings(jsonAboutFile.tableBringings);
                setAboutTechnicalSkills(jsonAboutFile.technicalSkills);
            });
    }, []);

    return (
        <>
            <Header />
            <Profile
                src={profileSrc}
                alt={profileAlt}
                h2={profileH2}
            />
            <About
                tableBringings={aboutTableBringings}
                technicalSkills={aboutTechnicalSkills}
            />
        </>
    );
}