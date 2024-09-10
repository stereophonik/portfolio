import SectionComponent from "../Section";

import { SkillSetsContext } from "../../contexts/SkillSets";
import {useContext} from "react";
import H1Component from "../H1";
import H2Component from "../H2";
import AComponent from "../A";

export default function SectionFrameworkComponent(): React.ReactElement {
    const skillSetsContext: {} = useContext(SkillSetsContext);

    return (
        <SectionComponent
            id="idSectionFramework"
            className={skillSetsContext["section"]["className"]}>
            <H1Component
                id={skillSetsContext["h1"]["id"]}
                className={skillSetsContext["h1"]["className"]}>
                Framework
            </H1Component>
            <H2Component
                id={skillSetsContext["h2"]["id"]}
                className={skillSetsContext["h2"]["className"]}>
                This app has been built via Next.js. This has been built even though I don't any Next.js work experience. You may refer to my portfolio application below.
            </H2Component>
            <span
                className="classNameSpan">
                <AComponent
                    href="https://github.com/stereophonik/portfolio/tree/main/app"
                >
                    My Portfolio Application
                </AComponent>
            </span>
        </SectionComponent>
    );
}