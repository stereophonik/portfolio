import { useContext } from "react";

import SectionComponent from "../../Section";
import H1Component from "../../H1";
import UlComponent from "../../Ul";
import H2Component from "../../H2";
import LiComponent from "../../Li";
import LinkComponent from "../../Link";

import { AboutContext } from "../../../contexts/About";
import DivComponent from "../../Div";

export default function SectionSkillsAboutComponent(): React.ReactElement {
    const aboutContext: {} = useContext(AboutContext);

    return (
        <SectionComponent
            id={aboutContext["skills"]["section"]["id"]}
            style={aboutContext["skills"]["section"]["style"]}>
            <DivComponent
                id={aboutContext["skills"]["div"]["id"]}
                className={aboutContext["skills"]["div"]["className"]}>
                {aboutContext["skills"]["div"]["content"]}
            </DivComponent>
            <H1Component
                id={aboutContext["skills"]["h1"]["id"]}
                className={aboutContext["skills"]["h1"]["className"]}
                style={aboutContext["skills"]["h1"]["style"]}>
                {aboutContext["skills"]["h1"]["content"]}
            </H1Component>
            <UlComponent
                id={aboutContext["skills"]["ul"]["id"]}
                className={aboutContext["skills"]["ul"]["className"]}>
                <H2Component
                    id={aboutContext["skills"]["h2"]["id"]}
                    className={aboutContext["skills"]["h2"]["className"]}
                    style={aboutContext["skills"]["h2"]["style"]}>
                    {
                        aboutContext["skills"]["lis"].map((li: { [x: string]: any; }) =>
                            <LiComponent
                                key={li["key"]}
                                style={li["style"]}>
                                <LinkComponent
                                    href={aboutContext["skills"]["links"][aboutContext["skills"]["lis"].indexOf(li)]["href"]}>
                                    {aboutContext["skills"]["links"][aboutContext["skills"]["lis"].indexOf(li)]["content"]}
                                </LinkComponent>
                            </LiComponent>
                        )
                    }
                </H2Component>
            </UlComponent>
        </SectionComponent>
    );
}