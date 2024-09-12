import { useContext } from "react";

import SectionComponent from "../Section";
import H1Component from "../H1";
import H2Component from "../H2";
import AComponent from "../A";

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
                {letsConnectContext["h1"]["content"]}
            </H1Component>
            <H2Component
                id={letsConnectContext["h2"]["id"]}
                className={letsConnectContext["h2"]["className"]}>
                <AComponent href={letsConnectContext["a"]["href"]}
                   target="_blank">
                    {letsConnectContext["a"]["content"]}
                </AComponent>{letsConnectContext["h2"]["content"]}
            </H2Component>
        </SectionComponent>
    );
}