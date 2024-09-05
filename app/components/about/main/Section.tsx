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
            id={aboutContext["main"]["section"]["id"]}
            style={aboutContext["main"]["section"]["style"]}>
            <SectionServingsMainAboutComponent />
            <SectionSkillsMainAboutComponent />
        </SectionComponent>
    );
}