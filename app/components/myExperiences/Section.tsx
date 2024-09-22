import { useContext } from "react";

import SectionComponent from "../Section";
import H1Component from "../H1";
import H2Component from "../H2";
import DivComponent from "../Div";
import SpanComponent from "../Span";

import { MyExperiencesContext } from "../../contexts/MyExperiences";

export default function SectionMyExperiencesComponent(): React.ReactElement {
    const myExperiencesContext: {} = useContext(MyExperiencesContext);

    return (
        <SectionComponent
            id={myExperiencesContext["section"]["id"]}
            className={myExperiencesContext["section"]["className"]}>
            <H1Component
                id={myExperiencesContext["h1"]["id"]}
                className={myExperiencesContext["h1"]["className"]}>
                <SpanComponent
                    id={myExperiencesContext["aaSpan"]["id"]}
                    className={myExperiencesContext["aaSpan"]["className"]}>
                    {myExperiencesContext["aaSpan"]["content"]}
                </SpanComponent>
                <SpanComponent
                    id={myExperiencesContext["abSpan"]["id"]}
                    className={myExperiencesContext["abSpan"]["className"]}>
                    {myExperiencesContext["abSpan"]["content"]}
                </SpanComponent>
            </H1Component>
            <H2Component
                id={myExperiencesContext["h2"]["id"]}
                className={myExperiencesContext["h2"]["className"]}>
                {myExperiencesContext["h2"]["content"]}
            </H2Component>
            <DivComponent
                id={myExperiencesContext["span"]["id"]}
                className="className01Span">
                Since 2013 - Functional UI, API, and desktop testing experiences
            </DivComponent>
            <DivComponent
                id={myExperiencesContext["span"]["id"]}
                className="className01Span">
                Since June 2024 - editing and maintaining the website of Class Constructions
            </DivComponent>
        </SectionComponent>
    );
}