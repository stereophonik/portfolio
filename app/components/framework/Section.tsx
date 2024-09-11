import SectionComponent from "../Section";

import { FrameworkContext } from "../../contexts/Framework";
import {useContext} from "react";
import H1Component from "../H1";
import H2Component from "../H2";
import SpanComponent from "../Span";
import AComponent from "../A";

export default function SectionFrameworkComponent(): React.ReactElement {
    const frameworkContext: {} = useContext(FrameworkContext);

    return (
        <SectionComponent
            id={frameworkContext["section"]["id"]}
            className={frameworkContext["section"]["className"]}>
            <H1Component
                id={frameworkContext["h1"]["id"]}
                className={frameworkContext["h1"]["className"]}>
                {frameworkContext["h1"]["content"]}
            </H1Component>
            <H2Component
                id={frameworkContext["h2"]["id"]}
                className={frameworkContext["h2"]["className"]}>
                {frameworkContext["h2"]["content"]}
            </H2Component>
            <SpanComponent
                id={frameworkContext["span"]["id"]}
                className={frameworkContext["span"]["className"]}>
                <AComponent
                    href={frameworkContext["a"]["href"]}
                    target="_blank">
                    {frameworkContext["a"]["content"]}
                </AComponent>
            </SpanComponent>
        </SectionComponent>
    );
}