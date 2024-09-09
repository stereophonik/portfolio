import SectionComponent from "../Section";

import { SkillSetsContext } from "../../contexts/SkillSets";
import {useContext} from "react";
import H1Component from "../H1";
import H2Component from "../H2";
import UlComponent from "../Ul";
import LiComponent from "../Li";
import AComponent from "../A";

export default function SectionFrameworkComponent(): React.ReactElement {
    const skillSetsContext: {} = useContext(SkillSetsContext);

    return (
        <SectionComponent
            id="idSectionFramework"
            className={skillSetsContext["section"]["className"]}
            style={skillSetsContext["section"]["style"]}>
            <H1Component
                id={skillSetsContext["h1"]["id"]}
                className={skillSetsContext["h1"]["className"]}
                style={skillSetsContext["h1"]["style"]}>
                Framework
            </H1Component>
            <H2Component
                id={skillSetsContext["h2"]["id"]}
                className={skillSetsContext["h2"]["className"]}
                style={skillSetsContext["h2"]["style"]}>
                This app has been built via Next.js. This has been built even though I don't any Next.js work experience. You may refer to my portfolio application below.
            </H2Component>
            <UlComponent
                id={skillSetsContext["ul"]["id"]}
                className={skillSetsContext["ul"]["className"]}>
                <LiComponent
                    className="classNameVerticalLi"
                    key="1">
                    <AComponent
                        href="https://github.com/stereophonik/portfolio/tree/main/app"
                    >
                        My Portfolio Application
                    </AComponent>
                </LiComponent>
            </UlComponent>
        </SectionComponent>
    );
}