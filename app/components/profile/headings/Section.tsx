import { useContext } from "react";

import SectionComponent from "../../Section";
import H1Component from "../../H1";
import H2Component from "../../H2";

import { ProfileContext } from "../../../contexts/Profile";

export default function SectionHeadingsProfileComponent() {
    const profileContext = useContext(ProfileContext);

    return (
        <SectionComponent
            id="sectionHeadingsProfile"
            style={{}}>
            <H1Component
                id={profileContext["h1Headings"]["id"]}
                className={profileContext["h1Headings"]["className"]}
                style={profileContext["h1Headings"]["style"]}>
                {profileContext["h1Headings"]["content"]}
            </H1Component>
            <H2Component
                id={profileContext["h2Headings"]["id"]}
                className={profileContext["h2Headings"]["className"]}
                style={profileContext["h2Headings"]["style"]}>
                {profileContext["h2Headings"]["content"]}
            </H2Component>
        </SectionComponent>
    );
}