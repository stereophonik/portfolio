import { useContext } from "react";

import SectionComponent from "../../Section";
import DivComponent from "../../Div";
import H1Component from "../../H1";
import H2Component from "../../H2";

import { AboutContext } from "../../../contexts/About";

export default function SectionIntroAboutComponent() {
    const aboutContext = useContext(AboutContext);

    return (
        <SectionComponent
            id={aboutContext["sectionIntro"]["id"]}
            style={aboutContext["sectionIntro"]["style"]}>
            <DivComponent
                id={aboutContext["divIntro"]["id"]}
                style={aboutContext["divIntro"]["style"]}>
                {aboutContext["divIntro"]["content"]}
            </DivComponent>
            <H1Component
                id={aboutContext["h1Intro"]["id"]}
                className={aboutContext["h1Intro"]["className"]}
                style={aboutContext["h1Intro"]["style"]}>
                {aboutContext["h1Intro"]["content"]}
            </H1Component>
            {
                aboutContext["h2sIntro"].map((h2Intro) =>
                    <H2Component
                        id={aboutContext["h2sIntro"][aboutContext["h2sIntro"].indexOf(h2Intro)]["id"]}
                        className={aboutContext["h2sIntro"][aboutContext["h2sIntro"].indexOf(h2Intro)]["className"]}
                        style={aboutContext["h2sIntro"][aboutContext["h2sIntro"].indexOf(h2Intro)]["style"]}>
                        {h2Intro["content"]}
                    </H2Component>
                )
            }
        </SectionComponent>
    );
}