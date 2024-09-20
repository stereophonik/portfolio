import { useContext } from "react";

import SectionComponent from "../Section";
import H1Component from "../H1";
import H2Component from "../H2";
import DivComponent from "../Div";

import { WhatIOfferContext } from "../../contexts/WhatIOffer";
import { FrameworkContext } from "../../contexts/Framework";
import SpanComponent from "../Span";

export default function SectionFrameworkComponent(): React.ReactElement {
    const whatIOfferContext: {} = useContext(WhatIOfferContext);
    const frameworkContext: {} = useContext(FrameworkContext);

    return (
        <SectionComponent
            id={frameworkContext["section"]["id"]}
            className={frameworkContext["section"]["className"]}>
            <H1Component
                id={frameworkContext["h1"]["id"]}
                className={frameworkContext["h1"]["className"]}>
                <SpanComponent
                    id={whatIOfferContext["aaSpan"]["id"]}
                    className={whatIOfferContext["aaSpan"]["className"]}>
                    My&nbsp;
                </SpanComponent>
                <SpanComponent
                    id={whatIOfferContext["abSpan"]["id"]}
                    className={whatIOfferContext["abSpan"]["className"]}>
                    Experiences
                </SpanComponent>
            </H1Component>
            <H2Component
                id={frameworkContext["h2"]["id"]}
                className={frameworkContext["h2"]["className"]}>
                Please check the ones below:
            </H2Component>
            <DivComponent
                id={frameworkContext["span"]["id"]}
                className={frameworkContext["span"]["className"]}>
                Since 2013 - Functional UI, API, and desktop testing experiences
            </DivComponent>
            <DivComponent
                id={frameworkContext["span"]["id"]}
                className={frameworkContext["span"]["className"]}>
                Since June 2024 - editing and maintaining the website of Class Constructions
            </DivComponent>
        </SectionComponent>
    );
}