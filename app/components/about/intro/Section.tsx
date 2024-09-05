import { useContext } from "react";

import SectionComponent from "../../Section";
import DivComponent from "../../Div";
import H1Component from "../../H1";
import H2Component from "../../H2";

import { AboutContext } from "../../../contexts/About";

export default function SectionIntroAboutComponent(): React.ReactElement {
    const aboutContext = useContext(AboutContext);

    return (
        <SectionComponent
            id={aboutContext["intro"]["section"]["id"]}
            style={aboutContext["intro"]["section"]["style"]}>
            <DivComponent
                id={aboutContext["intro"]["div"]["id"]}
                style={aboutContext["intro"]["div"]["style"]}>
                {aboutContext["intro"]["div"]["content"]}
            </DivComponent>
            <H1Component
                id={aboutContext["intro"]["h1"]["id"]}
                className={aboutContext["intro"]["h1"]["className"]}
                style={aboutContext["intro"]["h1"]["style"]}>
                {aboutContext["intro"]["h1"]["content"]}
            </H1Component>
            {
                aboutContext["intro"]["h2s"].map((h2) =>
                    <H2Component
                        id={h2["id"]}
                        className={h2["className"]}
                        style={h2["style"]}>
                        {h2["content"]}
                    </H2Component>
                )
            }
        </SectionComponent>
    );
}