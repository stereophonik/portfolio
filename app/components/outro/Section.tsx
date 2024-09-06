import { useContext } from "react";

import SectionComponent from "../Section";
import DivComponent from "../Div";
import H1Component from "../H1";
import H2Component from "../H2";

import { AboutContext } from "../../contexts/About";

export default function SectionOutroComponent(): React.ReactElement {
    const aboutContext: {} = useContext(AboutContext);

    return (
        <SectionComponent
            id={aboutContext["outro"]["section"]["id"]}
            style={aboutContext["outro"]["section"]["style"]}>
            <DivComponent
                id={aboutContext["outro"]["div"]["id"]}
                className={aboutContext["outro"]["div"]["className"]}>
                {aboutContext["outro"]["div"]["content"]}
            </DivComponent>
            <H1Component
                id={aboutContext["outro"]["h1"]["id"]}
                className={aboutContext["outro"]["h1"]["className"]}
                style={aboutContext["outro"]["h1"]["style"]}>
                {aboutContext["outro"]["h1"]["content"]}
            </H1Component>
            <H2Component
                id={aboutContext["outro"]["h2"]["id"]}
                className={aboutContext["outro"]["h2"]["className"]}
                style={aboutContext["outro"]["h2"]["style"]}>
                {aboutContext["outro"]["h2"]["content"]}
            </H2Component>
        </SectionComponent>
    );
}