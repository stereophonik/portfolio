import { useContext } from "react";

import SectionComponent from "../Section";
import SectionIntroAboutComponent from "./intro/Section";
import SectionMainAboutComponent from "./main/Section";
import SectionOutroAboutComponent from "./outro/Section";

import { AboutContext } from "../../contexts/About";

export default function SectionAboutComponent(): React.ReactElement {
    const aboutContext = useContext(AboutContext);

    return (
        <SectionComponent
            id={aboutContext["section"]["id"]}
            style={aboutContext["section"]["style"]}>
            <SectionIntroAboutComponent />
            <SectionMainAboutComponent />
            <SectionOutroAboutComponent />
        </SectionComponent>
    );
}