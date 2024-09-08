import SectionComponent from "../Section";

import { SkillsContext } from "../../contexts/Skills";
import {useContext} from "react";
import DivComponent from "../Div";
import H1Component from "../H1";
import H2Component from "../H2";
import BrComponent from "../Br";
import LinkComponent from "../Link";

export default function SectionFrameworkComponent(): React.ReactElement {
    const skillsContext: {} = useContext(SkillsContext);

    return (
        <SectionComponent
            id="sectionPlatform"
            className={skillsContext["section"]["className"]}
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
                Framework:
            </H1Component>
            <H2Component
                id={skillsContext["h2"]["id"]}
                className={skillsContext["h2"]["className"]}
                style={skillsContext["h2"]["style"]}>
                This app has been built via Next.js. This has been built even though I don't any Next.js work experience. Please refer to the repo below for code checking.
                <BrComponent />
                <BrComponent />
                <LinkComponent
                    href="https://github.com/stereophonik/portfolio"
                >
                    My Portfolio Repository
                </LinkComponent>
            </H2Component>
        </SectionComponent>
    );
}