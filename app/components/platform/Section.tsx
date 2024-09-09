import SectionComponent from "../Section";

import { SkillSetsContext } from "../../contexts/SkillSets";
import {useContext} from "react";
import H1Component from "../H1";
import H2Component from "../H2";
import UlComponent from "../Ul";
import LiComponent from "../Li";
import AComponent from "../A";

export default function SectionPlatformComponent(): React.ReactElement {
    const skillSetsContext: {} = useContext(SkillSetsContext);

    return (
        <SectionComponent
            id="idSectionPlatform"
            className="classNameClassBSection"
            style={skillSetsContext["section"]["style"]}>
            <H1Component
                id={skillSetsContext["h1"]["id"]}
                className={skillSetsContext["h1"]["className"]}
                style={skillSetsContext["h1"]["style"]}>
                Platform
            </H1Component>
            <H2Component
                id={skillSetsContext["h2"]["id"]}
                className={skillSetsContext["h2"]["className"]}
                style={skillSetsContext["h2"]["style"]}>
                If you need someone to create a WordPress site for you, get me for the opportunity! I have an experience in WordPress page creating. Please refer to the page below.
            </H2Component>
            <UlComponent
                id={skillSetsContext["ul"]["id"]}
                className={skillSetsContext["ul"]["className"]}>
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