import SectionComponent from "../Section";

import { SkillSetsContext } from "../../contexts/SkillSets";
import {useContext} from "react";
import H1Component from "../H1";
import H2Component from "../H2";
import UlComponent from "../Ul";
import LiComponent from "../Li";
import AComponent from "../A";

export default function SectionLibraryComponent(): React.ReactElement {
    const skillSetsContext: {} = useContext(SkillSetsContext);

    return (
        <SectionComponent
            id="idSectionLibrary"
            className="classNameClassBSection"
            style={skillSetsContext["section"]["style"]}>
            <H1Component
                id={skillSetsContext["h1"]["id"]}
                className={skillSetsContext["h1"]["className"]}
                style={skillSetsContext["h1"]["style"]}>
                Library
            </H1Component>
            <H2Component
                id={skillSetsContext["h2"]["id"]}
                className={skillSetsContext["h2"]["className"]}
                style={skillSetsContext["h2"]["style"]}>
                If you are familiar with Next.js, you probably know that it's built on top of the React library. This app has certain React implementations in it, including components and contexts.
            </H2Component>
            <UlComponent
                id={skillSetsContext["ul"]["id"]}
                className={skillSetsContext["ul"]["className"]}>
                <LiComponent
                    className="classNameVerticalLi"
                    key="1">
                    <AComponent
                        href="https://github.com/stereophonik/portfolio/tree/main/app/components"
                    >
                        My Portfolio Application Components
                    </AComponent>
                </LiComponent>
                <LiComponent
                    className="classNameVerticalLi"
                    key="2">
                    <AComponent
                        href="https://github.com/stereophonik/portfolio/tree/main/app/contexts"
                    >
                        My Portfolio Application Contexts
                    </AComponent>
                </LiComponent>
            </UlComponent>
        </SectionComponent>
    );
}