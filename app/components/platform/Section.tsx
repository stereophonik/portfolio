import SectionComponent from "../Section";

import { PlatformContext } from "../../contexts/Platform";
import {useContext} from "react";
import H1Component from "../H1";
import H2Component from "../H2";
import SpanComponent from "../Span";
import AComponent from "../A";

export default function SectionPlatformComponent(): React.ReactElement {
    const platformContext: {} = useContext(PlatformContext);

    return (
        <SectionComponent
            id={platformContext["section"]["id"]}
            className={platformContext["section"]["className"]}>
            <H1Component
                id={platformContext["h1"]["id"]}
                className={platformContext["h1"]["className"]}>
                {platformContext["h1"]["content"]}
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
                >
                    {platformContext["a"]["content"]}
                </AComponent>
            </SpanComponent>
        </SectionComponent>
    );
}