import { useContext } from "react";

import SectionComponent from "../Section";
import H1Component from "../H1";
import UlComponent from "../Ul";
import H2Component from "../H2";
import LiComponent from "../Li";
import AComponent from "../A";

import { SkillsContext } from "../../contexts/Skills";

export default function SectionSkillsComponent(): React.ReactElement {
    const skillsContext: {} = useContext(SkillsContext);

    return (
        <SectionComponent
            id={skillsContext["section"]["id"]}
            className={skillsContext["section"]["className"]}
            style={skillsContext["section"]["style"]}>
            <H1Component
                id={skillsContext["h1"]["id"]}
                className={skillsContext["h1"]["className"]}
                style={skillsContext["h1"]["style"]}>
                {skillsContext["h1"]["content"]}
            </H1Component>
            <H2Component
                id={skillsContext["h2"]["id"]}
                className={skillsContext["h2"]["className"]}
                style={skillsContext["h2"]["style"]}>
                {skillsContext["h2"]["content"]}
            </H2Component>
            <UlComponent
                id={skillsContext["ul"]["id"]}
                className={skillsContext["ul"]["className"]}>
                {
                    skillsContext["lis"].map((li: { [x: string]: any; }) =>
                        <LiComponent
                            className={li["className"]}
                            key={li["key"]}>
                            <AComponent
                                href={skillsContext["as"][skillsContext["lis"].indexOf(li)]["href"]}>
                                {skillsContext["as"][skillsContext["lis"].indexOf(li)]["content"]}
                            </AComponent>
                        </LiComponent>
                    )
                }
            </UlComponent>
        </SectionComponent>
    );
}