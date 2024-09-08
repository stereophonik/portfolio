import SectionComponent from "../Section";

import { SkillsContext } from "../../contexts/Skills";
import {useContext} from "react";
import DivComponent from "../Div";
import H1Component from "../H1";
import H2Component from "../H2";
import BrComponent from "../Br";
import LinkComponent from "../Link";

export default function SectionPlatformComponent(): React.ReactElement {
    const skillsContext: {} = useContext(SkillsContext);

    return (
        <SectionComponent
            id="idSectionPlatform"
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
                Platform:
            </H1Component>
            <H2Component
                id={skillsContext["h2"]["id"]}
                className={skillsContext["h2"]["className"]}
                style={skillsContext["h2"]["style"]}>
                I have an experience in WordPress page creating. Please refer to the page below.
                <BrComponent />
                <BrComponent />
                <LinkComponent
                    href="https://classconstructions.com.au/class-constructions-blogs"
                >
                    Class Constructions Blogs Page
                </LinkComponent>
                <BrComponent />
                <BrComponent />
                If you need someone to create a WordPress site for you, get me for the opportunity!
            </H2Component>
        </SectionComponent>
    );
}