import { useContext } from "react";

import SectionComponent from "../Section";
import H1Component from "../H1";
import SpanComponent from "../Span";
import H2Component from "../H2";
import AComponent from "../A";
import ButtonComponent from "../Button";

import { LetsConnectContext } from "../../contexts/LetsConnect";

export default function SectionLetsConnectComponent(): React.ReactElement {
    const letsConnectContext: {} = useContext(LetsConnectContext);

    return (
        <SectionComponent
            id={letsConnectContext["section"]["id"]}
            className={letsConnectContext["section"]["className"]}>
            <H1Component
                id={letsConnectContext["h1"]["id"]}
                className={letsConnectContext["h1"]["className"]}>
                <SpanComponent
                    id={letsConnectContext["aaSpan"]["id"]}
                    className={letsConnectContext["aaSpan"]["className"]}>
                    {letsConnectContext["aaSpan"]["content"]}
                </SpanComponent>
                <SpanComponent
                    id={letsConnectContext["abSpan"]["id"]}
                    className={letsConnectContext["abSpan"]["className"]}>
                    {letsConnectContext["abSpan"]["content"]}
                </SpanComponent>
            </H1Component>
            <H2Component
                id={letsConnectContext["h2"]["id"]}
                className={letsConnectContext["h2"]["className"]}>
                <AComponent href={letsConnectContext["a"]["href"]}
                   target={letsConnectContext["a"]["target"]}>
                    {letsConnectContext["a"]["content"]}
                </AComponent>{letsConnectContext["h2"]["content"]}
            </H2Component>
            <ButtonComponent
                id={letsConnectContext["button"]["id"]}
                className={letsConnectContext["button"]["className"]}
                onClick={() => window.open(
                    letsConnectContext["openWindow"]["url"],
                    letsConnectContext["openWindow"]["target"])}>
                {letsConnectContext["button"]["content"]}
            </ButtonComponent>
        </SectionComponent>
    );
}