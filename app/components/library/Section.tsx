import SectionComponent from "../Section";

import { SkillsContext } from "../../contexts/Skills";
import {useContext} from "react";
import DivComponent from "../Div";
import H1Component from "../H1";
import H2Component from "../H2";
import BrComponent from "../Br";
import LinkComponent from "../Link";

export default function SectionLibraryComponent(): React.ReactElement {
    const skillsContext: {} = useContext(SkillsContext);

    return (
        <SectionComponent
            id="sectionLibrary"
            className="classNameClassBSection"
            style={skillsContext["section"]["style"]}>
            <DivComponent
                id={skillsContext["div"]["id"]}
                className={skillsContext["div"]["className"]}>
                {skillsContext["div"]["content"]}
            </DivComponent>
            <H1Component
                id={skillsContext["h1"]["id"]}
                className={skillsContext["h1"]["className"]}
                style={skillsContext["h1"]["style"]}>
                Library:
            </H1Component>
            <H2Component
                id={skillsContext["h2"]["id"]}
                className={skillsContext["h2"]["className"]}
                style={skillsContext["h2"]["style"]}>
                If you are familiar with Next.js, you probably know that it's built on top of the React library. This app has certain React implementations in it, including components and contexts.
                <BrComponent />
                <BrComponent />
                <LinkComponent
                    href="https://github.com/stereophonik/portfolio/tree/main/app/components"
                >
                    My Portfolio Application Components
                </LinkComponent>
                <BrComponent />
                <LinkComponent
                    href="https://github.com/stereophonik/portfolio/tree/main/app/contexts"
                >
                    My Portfolio Application Contexts
                </LinkComponent>
            </H2Component>
        </SectionComponent>
    );
}