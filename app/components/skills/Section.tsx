import { useContext } from "react";

import SectionComponent from "../Section";
import DivComponent from "../Div";
import H1Component from "../H1";
import UlComponent from "../Ul";
import H2Component from "../H2";
import LiComponent from "../Li";
import LinkComponent from "../Link";

import { SkillsContext } from "../../contexts/Skills";

export default function SectionSkillsComponent(): React.ReactElement {
    const skillsContext: {} = useContext(SkillsContext);

    return (
        <SectionComponent
            id={skillsContext["section"]["id"]}
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
                {skillsContext["h1"]["content"]}
            </H1Component>
            <UlComponent
                id={skillsContext["ul"]["id"]}
                className={skillsContext["ul"]["className"]}>
                <H2Component
                    id={skillsContext["h2"]["id"]}
                    className={skillsContext["h2"]["className"]}
                    style={skillsContext["h2"]["style"]}>
                    {
                        skillsContext["lis"].map((li: { [x: string]: any; }) =>
                            <LiComponent
                                key={li["key"]}
                                style={li["style"]}>
                                <LinkComponent
                                    href={skillsContext["links"][skillsContext["lis"].indexOf(li)]["href"]}>
                                    {skillsContext["links"][skillsContext["lis"].indexOf(li)]["content"]}
                                </LinkComponent>
                            </LiComponent>
                        )
                    }
                </H2Component>
            </UlComponent>
        </SectionComponent>
    );
}