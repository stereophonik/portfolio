import SectionComponent from "../Section";

import { SkillsContext } from "../../contexts/Skills";
import {useContext} from "react";
import H1Component from "../H1";
import H2Component from "../H2";
import BrComponent from "../Br";
import UlComponent from "../Ul";
import LiComponent from "../Li";
import AComponent from "../A";

export default function SectionPlatformComponent(): React.ReactElement {
    const skillsContext: {} = useContext(SkillsContext);

    return (
        <SectionComponent
            id="idSectionPlatform"
            className="classNameClassBSection"
            style={skillsContext["section"]["style"]}>
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
                If you need someone to create a WordPress site for you, get me for the opportunity! I have an experience in WordPress page creating. Please refer to the page below.
            </H2Component>
            <BrComponent />
            <BrComponent />
            <UlComponent
                id={skillsContext["ul"]["id"]}
                className={skillsContext["ul"]["className"]}>
                <LiComponent
                    className="classNameVerticalLi"
                    key="1">
                    <AComponent
                        href="https://classconstructions.com.au/class-constructions-blogs"
                    >
                        Class Constructions Blogs Page
                    </AComponent>
                </LiComponent>
            </UlComponent>
        </SectionComponent>
    );
}