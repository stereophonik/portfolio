import { useContext } from "react";

import SectionComponent from "../Section";
import H1Component from "../H1";
import SpanComponent from "../Span";
import UlComponent from "../Ul";
import H2Component from "../H2";
import LiComponent from "../Li";

import { WhatIOfferContext } from "../../contexts/WhatIOffer";

export default function SectionWhatIOfferComponent(): React.ReactElement {
    const whatIOfferContext: {} = useContext(WhatIOfferContext);

    return (
        <SectionComponent
            id={whatIOfferContext["section"]["id"]}
            className={whatIOfferContext["section"]["className"]}>
            <H1Component
                id={whatIOfferContext["h1"]["id"]}
                className={whatIOfferContext["h1"]["className"]}>
                <SpanComponent
                    id={whatIOfferContext["aaSpan"]["id"]}
                    className={whatIOfferContext["aaSpan"]["className"]}>
                    {whatIOfferContext["aaSpan"]["content"]}
                </SpanComponent>
                <SpanComponent
                    id={whatIOfferContext["abSpan"]["id"]}
                    className={whatIOfferContext["abSpan"]["className"]}>
                    {whatIOfferContext["abSpan"]["content"]}
                </SpanComponent>
            </H1Component>
            <H2Component
                id={whatIOfferContext["h2"]["id"]}
                className={whatIOfferContext["h2"]["className"]}>
                {whatIOfferContext["h2"]["content"]}
            </H2Component>
            <UlComponent
                id={whatIOfferContext["ul"]["id"]}
                className={whatIOfferContext["ul"]["className"]}>
                <LiComponent
                    className={whatIOfferContext["lis"][0]["className"]}
                    keyValue={whatIOfferContext["lis"][0]["key"]}>
                    {whatIOfferContext["lis"][0]["content"]}
                </LiComponent>
                <LiComponent
                    className={whatIOfferContext["lis"][1]["className"]}
                    keyValue={whatIOfferContext["lis"][1]["key"]}>
                    {whatIOfferContext["lis"][1]["content"]}
                </LiComponent>
                <LiComponent
                    className={whatIOfferContext["lis"][2]["className"]}
                    keyValue={whatIOfferContext["lis"][2]["key"]}>
                    {whatIOfferContext["lis"][2]["content"]}
                </LiComponent>
            </UlComponent>
        </SectionComponent>
    );
}