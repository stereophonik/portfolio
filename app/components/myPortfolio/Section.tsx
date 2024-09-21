import { useContext } from "react";

import SectionComponent from "../Section";
import H1Component from "../H1";
import H2Component from "../H2";
import SpanComponent from "../Span";
import IframeComponent from "../Iframe";
import AComponent from "../A";

import { WhatIOfferContext } from "../../contexts/WhatIOffer";
import { MyPortfolioContext } from "../../contexts/MyPortfolio";
import { FrameworkContext } from "../../contexts/Framework";

export default function SectionMyPortfolioComponent(): React.ReactElement {
    const whatIOfferContext = useContext(WhatIOfferContext);
    const myPortfolioContext: {} = useContext(MyPortfolioContext);
    const frameworkContext: {} = useContext(FrameworkContext);

    return (
        <SectionComponent
            id={myPortfolioContext["section"]["id"]}
            className={myPortfolioContext["section"]["className"]}>
            <H1Component
                id={myPortfolioContext["h1"]["id"]}
                className={myPortfolioContext["h1"]["className"]}>
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
                id={myPortfolioContext["h2"]["id"]}
                className={myPortfolioContext["h2"]["className"]}>
                {myPortfolioContext["h2"]["content"]}
            </H2Component>
            <SpanComponent
                id={myPortfolioContext["span"]["id"]}
                className={myPortfolioContext["span"]["className"]}>
                <IframeComponent
                    id="idIframeMyPortfolio"
                    className="classNameIframe"
                    src={myPortfolioContext["a"]["href"]}>
                </IframeComponent>
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