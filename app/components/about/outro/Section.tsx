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
            id="outro"
            style={aboutContext["styleOutro"]}>
            <DivComponent
                id="divOutro"
                style={{
                    height: "10%"
                }}> </DivComponent>
            <H1Component
                id="h1Outro"
                className={aboutContext["h1Outro"]["className"]}
                style={aboutContext["h1Outro"]["style"]}>
                Btw...
            </H1Component>
            <H2Component
                id="h2Outro"
                className={aboutContext["h2Outro"]["className"]}
                style={aboutContext["h2Outro"]["style"]}>
                {aboutContext["outro"]}
            </H2Component>
        </SectionComponent>
    );
}