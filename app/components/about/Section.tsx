import { useContext } from "react";

import SectionComponent from "../Section";
import SectionIntroAboutComponent from "./intro/Section";
import SectionServingsAboutComponent from "./servings/Section";
import SectionSkillsAboutComponent from "./skills/Section";
import SectionOutroAboutComponent from "./outro/Section";

import { AboutContext } from "../../contexts/About";

export default function SectionAboutComponent(): React.ReactElement {
    const aboutContext: {} = useContext(AboutContext);

    return (
        <SectionComponent
            id={aboutContext["section"]["id"]}
            style={aboutContext["section"]["style"]}>
            <SectionIntroAboutComponent />
            <SectionServingsAboutComponent />
            <SectionSkillsAboutComponent />
            <SectionOutroAboutComponent />
        </SectionComponent>
    );
}