import SectionComponent from "../Section";

import { SkillsContext } from "../../contexts/Skills";
import {useContext} from "react";
import H1Component from "../H1";
import H2Component from "../H2";
import UlComponent from "../Ul";
import LiComponent from "../Li";
import AComponent from "../A";

export default function SectionLibraryComponent(): React.ReactElement {
    const skillsContext: {} = useContext(SkillsContext);

    return (
        <SectionComponent
            id="idSectionLibrary"
            className="classNameClassBSection"
            style={skillsContext["section"]["style"]}>
            <H1Component
                id={skillsContext["h1"]["id"]}
                className={skillsContext["h1"]["className"]}
                style={skillsContext["h1"]["style"]}>
                Library
            </H1Component>
            <H2Component
                id={skillsContext["h2"]["id"]}
                className={skillsContext["h2"]["className"]}
                style={skillsContext["h2"]["style"]}>
                If you are familiar with Next.js, you probably know that it's built on top of the React library. This app has certain React implementations in it, including components and contexts.
            </H2Component>
            <UlComponent
                id={skillsContext["ul"]["id"]}
                className={skillsContext["ul"]["className"]}>
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