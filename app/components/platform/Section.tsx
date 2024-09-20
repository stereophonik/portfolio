import { useContext } from "react";

import SectionComponent from "../Section";
import H1Component from "../H1";
import H2Component from "../H2";
import SpanComponent from "../Span";
import AComponent from "../A";

import { WhatIOfferContext } from "../../contexts/WhatIOffer";
import { PlatformContext } from "../../contexts/Platform";
import { FrameworkContext } from "../../contexts/Framework";

export default function SectionPlatformComponent(): React.ReactElement {
    const whatIOfferContext = useContext(WhatIOfferContext);
    const platformContext: {} = useContext(PlatformContext);
    const frameworkContext: {} = useContext(FrameworkContext);

    return (
        <SectionComponent
            id={platformContext["section"]["id"]}
            className={platformContext["section"]["className"]}>
            <H1Component
                id={platformContext["h1"]["id"]}
                className={platformContext["h1"]["className"]}>
                <SpanComponent
                    id={whatIOfferContext["aaSpan"]["id"]}
                    className={whatIOfferContext["aaSpan"]["className"]}>
                    My&nbsp;
                </SpanComponent>
                <SpanComponent
                    id={whatIOfferContext["abSpan"]["id"]}
                    className={whatIOfferContext["abSpan"]["className"]}>
                    Portfolio
                </SpanComponent>
            </H1Component>
            <H2Component
                id={platformContext["h2"]["id"]}
                className={platformContext["h2"]["className"]}>
                {platformContext["h2"]["content"]}
            </H2Component>
            <SpanComponent
                id={platformContext["span"]["id"]}
                className={platformContext["span"]["className"]}>
                <AComponent
                    href={platformContext["a"]["href"]}
                    target={platformContext["a"]["target"]}>
                    {platformContext["a"]["content"]}
                </AComponent>
            </SpanComponent>
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
                    target={frameworkContext["a"]["target"]}>
                    {frameworkContext["a"]["content"]}
                </AComponent>
            </SpanComponent>
        </SectionComponent>
    );
}