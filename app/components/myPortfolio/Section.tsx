import { useContext } from "react";

import SectionComponent from "../Section";
import H1Component from "../H1";
import H2Component from "../H2";
import SpanComponent from "../Span";
import IframeComponent from "../Iframe";
import AComponent from "../A";

import { WhatIOfferContext } from "../../contexts/WhatIOffer";
import { MyPortfolioContext } from "../../contexts/MyPortfolio";
import { MyExperiencesContext } from "../../contexts/MyExperiences";

export default function SectionMyPortfolioComponent(): React.ReactElement {
    const whatIOfferContext = useContext(WhatIOfferContext);
    const myPortfolioContext: {} = useContext(MyPortfolioContext);
    const myExperiencesContext: {} = useContext(MyExperiencesContext);

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
                id={myExperiencesContext["h2"]["id"]}
                className={myExperiencesContext["h2"]["className"]}>
                {myExperiencesContext["h2"]["content"]}
            </H2Component>
            <SpanComponent
                id={myExperiencesContext["span"]["id"]}
                className={myExperiencesContext["span"]["className"]}>
                <AComponent
                    href={myExperiencesContext["a"]["href"]}
                    target={myExperiencesContext["a"]["target"]}>
                    {myExperiencesContext["a"]["content"]}
                </AComponent>
            </SpanComponent>
        </SectionComponent>
    );
}