import { useContext } from "react";

import SectionComponent from "../../Section";
import H1Component from "../../H1";
import H2Component from "../../H2";

import { ProfileContext } from "../../../contexts/Profile";

export default function SectionHeadingsProfileComponent(): React.ReactElement {
    const profileContext: {} = useContext(ProfileContext);

    return (
        <SectionComponent
            id={profileContext["headings"]["section"]["id"]}
            style={profileContext["headings"]["section"]["style"]}>
            <H1Component
                id={profileContext["headings"]["h1"]["id"]}
                className={profileContext["headings"]["h1"]["className"]}
                style={profileContext["headings"]["h1"]["style"]}>
                {profileContext["headings"]["h1"]["content"]}
            </H1Component>
            <H2Component
                id={profileContext["headings"]["h2"]["id"]}
                className={profileContext["headings"]["h2"]["className"]}
                style={profileContext["headings"]["h2"]["style"]}>
                {profileContext["headings"]["h2"]["content"]}
            </H2Component>
        </SectionComponent>
    );
}