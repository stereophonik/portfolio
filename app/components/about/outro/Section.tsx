import { useContext } from "react";

import SectionComponent from "../../Section";
import DivComponent from "../../Div";
import H1Component from "../../H1";
import H2Component from "../../H2";

import { AboutContext } from "../../../contexts/About";

export default function SectionOutroAboutComponent() {
    const aboutContext = useContext(AboutContext);

    return (
        <SectionComponent
            id="sectionOutroAbout"
            style={aboutContext["outro"]["style"]}>
            <DivComponent
                id="divOutro"
                style={{
                    height: "10%"
                }}> </DivComponent>
            <H1Component
                id="h1Outro"
                className={aboutContext["outro"]["h1"]["className"]}
                style={aboutContext["outro"]["h1"]["style"]}>
                {aboutContext["outro"]["h1"]["content"]}
            </H1Component>
            <H2Component
                id="h2Outro"
                className={aboutContext["outro"]["h2"]["className"]}
                style={aboutContext["outro"]["h2"]["style"]}>
                {aboutContext["outro"]["h2"]["content"]}
            </H2Component>
        </SectionComponent>
    );
}