import { useContext } from "react";

import SectionComponent from "../../Section";
import H1Component from "../../H1";
import H2Component from "../../H2";

import { ProfileContext } from "../../../contexts/Profile";

export default function SectionHeadingsProfileComponent() {
    const profileContext = useContext(ProfileContext);

    return (
        <SectionComponent
            style={profileContext["styleHeadings"]}>
            <H1Component
                id="h1Headings"
                className={profileContext["classNameH1Headings"]}
                style={profileContext["styleH1Headings"]}>
                {profileContext["h1Headings"]}
            </H1Component>
            <H2Component
                id="h2Headings"
                className={profileContext["classNameH2Headings"]}
                style={profileContext["styleH2Headings"]}>
                {profileContext["h2Headings"]}
            </H2Component>
        </SectionComponent>
    );
}