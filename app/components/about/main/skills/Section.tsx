import { useContext } from "react";

import SectionComponent from "../../../Section";
import H1Component from "../../../H1";
import UlComponent from "../../../Ul";
import H2Component from "../../../H2";
import LiComponent from "../../../Li";
import LinkComponent from "../../../Link";

import { AboutContext } from "../../../../contexts/About";
import DivComponent from "../../../Div";

export default function SectionSkillsMainAboutComponent(): React.ReactElement {
    const aboutContext: {} = useContext(AboutContext);

    return (
        <SectionComponent
            id={aboutContext["main"]["skills"]["section"]["id"]}
            style={aboutContext["main"]["skills"]["section"]["style"]}>
            <DivComponent
                id={aboutContext["main"]["skills"]["div"]["id"]}
                className={aboutContext["main"]["skills"]["div"]["className"]}>
                {aboutContext["main"]["skills"]["div"]["content"]}
            </DivComponent>
            <H1Component
                id={aboutContext["main"]["skills"]["h1"]["id"]}
                className={aboutContext["main"]["skills"]["h1"]["className"]}
                style={aboutContext["main"]["skills"]["h1"]["style"]}>
                {aboutContext["main"]["skills"]["h1"]["content"]}
            </H1Component>
            <UlComponent
                id={aboutContext["main"]["skills"]["ul"]["id"]}
                className={aboutContext["main"]["skills"]["ul"]["className"]}>
                <H2Component
                    id={aboutContext["main"]["skills"]["h2"]["id"]}
                    className={aboutContext["main"]["skills"]["h2"]["className"]}
                    style={aboutContext["main"]["skills"]["h2"]["style"]}>
                    {
                        aboutContext["main"]["skills"]["lis"].map((li: { [x: string]: any; }) =>
                            <LiComponent
                                key={li["key"]}
                                style={li["style"]}>
                                <LinkComponent
                                    href={aboutContext["main"]["skills"]["links"][aboutContext["main"]["skills"]["lis"].indexOf(li)]["href"]}>
                                    {aboutContext["main"]["skills"]["links"][aboutContext["main"]["skills"]["lis"].indexOf(li)]["content"]}
                                </LinkComponent>
                            </LiComponent>
                        )
                    }
                </H2Component>
            </UlComponent>
        </SectionComponent>
    );
}