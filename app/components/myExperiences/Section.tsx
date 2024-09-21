import { useContext } from "react";

import SectionComponent from "../Section";
import H1Component from "../H1";
import H2Component from "../H2";
import DivComponent from "../Div";

import { WhatIOfferContext } from "../../contexts/WhatIOffer";
import { MyExperiencesContext } from "../../contexts/MyExperiences";
import SpanComponent from "../Span";

export default function SectionMyExperiencesComponent(): React.ReactElement {
    const whatIOfferContext: {} = useContext(WhatIOfferContext);
    const myExperiencesContext: {} = useContext(MyExperiencesContext);

    return (
        <SectionComponent
            id={myExperiencesContext["section"]["id"]}
            className={myExperiencesContext["section"]["className"]}>
            <H1Component
                id={myExperiencesContext["h1"]["id"]}
                className={myExperiencesContext["h1"]["className"]}>
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
                id={myExperiencesContext["h2"]["id"]}
                className={myExperiencesContext["h2"]["className"]}>
                Please check the ones below:
            </H2Component>
            <DivComponent
                id={myExperiencesContext["span"]["id"]}
                className={myExperiencesContext["span"]["className"]}>
                Since 2013 - Functional UI, API, and desktop testing experiences
            </DivComponent>
            <DivComponent
                id={myExperiencesContext["span"]["id"]}
                className={myExperiencesContext["span"]["className"]}>
                Since June 2024 - editing and maintaining the website of Class Constructions
            </DivComponent>
        </SectionComponent>
    );
}