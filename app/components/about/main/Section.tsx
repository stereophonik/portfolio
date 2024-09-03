import { useContext } from "react";

import SectionComponent from "../../Section";
import DivComponent from "../../Div";
import SectionServingsMainAboutComponent from "./servings/Section";
import SectionSkillsMainAboutComponent from "./skills/Section";

import { AboutContext } from "../../../contexts/About";

export default function SectionMainAboutComponent() {
    const aboutContext = useContext(AboutContext);

    return (
        <SectionComponent
            id={aboutContext["sectionMain"]["id"]}
            style={aboutContext["sectionMain"]["style"]}>
            <DivComponent
                id={aboutContext["divMain"]["id"]}
                style={aboutContext["divMain"]["style"]}>
                {aboutContext["divMain"]["content"]}
            </DivComponent>
            <SectionServingsMainAboutComponent />
            <SectionSkillsMainAboutComponent />
        </SectionComponent>
    );
}