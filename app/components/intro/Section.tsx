import { useContext } from "react";

import SectionComponent from "../Section";
import DivComponent from "../Div";
import H1Component from "../H1";
import H2Component from "../H2";

import { IntroContext } from "../../contexts/Intro";

export default function SectionIntroComponent(): React.ReactElement {
    const introContext: {} = useContext(IntroContext);

    return (
        <SectionComponent
            id={introContext["section"]["id"]}
            style={introContext["section"]["style"]}>
            <DivComponent
                id={introContext["div"]["id"]}
                className={introContext["div"]["className"]}>
                {introContext["div"]["content"]}
            </DivComponent>
            <H1Component
                id={introContext["h1"]["id"]}
                className={introContext["h1"]["className"]}
                style={introContext["h1"]["style"]}>
                {introContext["h1"]["content"]}
            </H1Component>
            {
                introContext["h2s"].map((h2: { [x: string]: any; }) =>
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