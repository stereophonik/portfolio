import { useContext } from "react";

import SectionComponent from "../Section";
import H1Component from "../H1";
import H2Component from "../H2";
import DivComponent from "../Div";
import AComponent from "../A";

import { OutroContext } from "../../contexts/Outro";

export default function SectionOutroComponent(): React.ReactElement {
    const outroContext: {} = useContext(OutroContext);

    return (
        <SectionComponent
            id={outroContext["section"]["id"]}
            className={outroContext["section"]["className"]}>
            <H1Component
                id={outroContext["h1"]["id"]}
                className={outroContext["h1"]["className"]}>
                {outroContext["h1"]["content"]}
            </H1Component>
            <H2Component
                id={outroContext["h2"]["id"]}
                className={outroContext["h2"]["className"]}>
                <a href="mailto:nikolai00reyes@outlook.ph"
                   target="_blank">Contact me</a> to discuss your specific needs. Together, we can work on achieving your dream website. Looking forward to chatting soon!
            </H2Component>
        </SectionComponent>
    );
}