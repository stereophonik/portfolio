import { useContext } from "react";

import SectionComponent from "../Section";
import H1Component from "../H1";
import H2Component from "../H2";
import SpanComponent from "../Span";
import IframeComponent from "../Iframe";
import AComponent from "../A";

import { MyPortfolioContext } from "../../contexts/MyPortfolio";

export default function SectionMyPortfolioComponent(): React.ReactElement {
    const myPortfolioContext: {} = useContext(MyPortfolioContext);

    return (
        <SectionComponent
            id={myPortfolioContext["section"]["id"]}
            className={myPortfolioContext["section"]["className"]}>
            <H1Component
                id={myPortfolioContext["h1"]["id"]}
                className={myPortfolioContext["h1"]["className"]}>
                <SpanComponent
                    id={myPortfolioContext["aaSpan"]["id"]}
                    className={myPortfolioContext["aaSpan"]["className"]}>
                    {myPortfolioContext["aaSpan"]["content"]}
                </SpanComponent>
                <SpanComponent
                    id={myPortfolioContext["abSpan"]["id"]}
                    className={myPortfolioContext["abSpan"]["className"]}>
                    {myPortfolioContext["abSpan"]["content"]}
                </SpanComponent>
            </H1Component>
            <H2Component
                id={myPortfolioContext["aaH2"]["id"]}
                className={myPortfolioContext["aaH2"]["className"]}>
                {myPortfolioContext["aaH2"]["content"]}
            </H2Component>
            <SpanComponent
                id={myPortfolioContext["acSpan"]["id"]}
                className={myPortfolioContext["acSpan"]["className"]}>
                <IframeComponent
                    id="idIframeMyPortfolio"
                    className="classNameIframe"
                    src={myPortfolioContext["aaA"]["href"]}>
                </IframeComponent>
            </SpanComponent>
            <H2Component
                id={myPortfolioContext["abH2"]["id"]}
                className={myPortfolioContext["abH2"]["className"]}>
                {myPortfolioContext["abH2"]["content"]}
            </H2Component>
            <SpanComponent
                id={myPortfolioContext["adSpan"]["id"]}
                className={myPortfolioContext["adSpan"]["className"]}>
                <AComponent
                    href={myPortfolioContext["abA"]["href"]}
                    target={myPortfolioContext["abA"]["target"]}>
                    {myPortfolioContext["abA"]["content"]}
                </AComponent>
            </SpanComponent>
        </SectionComponent>
    );
}