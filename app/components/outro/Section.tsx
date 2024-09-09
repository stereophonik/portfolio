import { useContext } from "react";

import SectionComponent from "../Section";
import H1Component from "../H1";
import H2Component from "../H2";

import { OutroContext } from "../../contexts/Outro";

export default function SectionOutroComponent(): React.ReactElement {
    const outroContext: {} = useContext(OutroContext);

    return (
        <SectionComponent
            id={outroContext["section"]["id"]}
            className={outroContext["section"]["className"]}
            style={outroContext["section"]["style"]}>
            <H1Component
                id={outroContext["h1"]["id"]}
                className={outroContext["h1"]["className"]}
                style={outroContext["h1"]["style"]}>
                {outroContext["h1"]["content"]}
            </H1Component>
            <H2Component
                id={outroContext["h2"]["id"]}
                className={outroContext["h2"]["className"]}
                style={outroContext["h2"]["style"]}>
                {outroContext["h2"]["content"]}
            </H2Component>
        </SectionComponent>
    );
}