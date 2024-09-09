import { useContext } from "react";

import SectionComponent from "../Section";
import H1Component from "../H1";
import UlComponent from "../Ul";
import H2Component from "../H2";
import LiComponent from "../Li";
import AComponent from "../A";

import { SkillSetsContext } from "../../contexts/SkillSets";

export default function SectionSkillSetsComponent(): React.ReactElement {
    const skillSetsContext: {} = useContext(SkillSetsContext);

    return (
        <SectionComponent
            id={skillSetsContext["section"]["id"]}
            className={skillSetsContext["section"]["className"]}
            style={skillSetsContext["section"]["style"]}>
            <H1Component
                id={skillSetsContext["h1"]["id"]}
                className={skillSetsContext["h1"]["className"]}
                style={skillSetsContext["h1"]["style"]}>
                {skillSetsContext["h1"]["content"]}
            </H1Component>
            <H2Component
                id={skillSetsContext["h2"]["id"]}
                className={skillSetsContext["h2"]["className"]}
                style={skillSetsContext["h2"]["style"]}>
                {skillSetsContext["h2"]["content"]}
            </H2Component>
            <UlComponent
                id={skillSetsContext["ul"]["id"]}
                className={skillSetsContext["ul"]["className"]}>
                {
                    skillSetsContext["lis"].map((li: { [x: string]: any; }) =>
                        <LiComponent
                            className={li["className"]}
                            key={li["key"]}>
                            <AComponent
                                href={skillSetsContext["as"][skillSetsContext["lis"].indexOf(li)]["href"]}>
                                {skillSetsContext["as"][skillSetsContext["lis"].indexOf(li)]["content"]}
                            </AComponent>
                        </LiComponent>
                    )
                }
            </UlComponent>
        </SectionComponent>
    );
}