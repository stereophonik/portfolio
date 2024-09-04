import { useContext } from "react";

import SectionComponent from "../../../Section";
import H1Component from "../../../H1";
import UlComponent from "../../../Ul";
import H2Component from "../../../H2";
import LiComponent from "../../../Li";

import { AboutContext } from "../../../../contexts/About";
import LinkComponent from "../../../Link";

export default function SectionSkillsMainAboutComponent() {
    const aboutContext = useContext(AboutContext);

    return (
        <SectionComponent
            id=""
            style={{}}>
            <H1Component
                id={aboutContext["main"]["skills"]["h1"]["id"]}
                className={aboutContext["main"]["skills"]["h1"]["className"]}
                style={aboutContext["main"]["skills"]["h1"]["style"]}>
                {aboutContext["main"]["skills"]["h1"]["content"]}
            </H1Component>
            <UlComponent
                style={{
                    paddingInlineStart: "0",
                    listStyleType: "none"
                }}>
                <H2Component
                    id={aboutContext["main"]["skills"]["h2"]["id"]}
                    className={aboutContext["main"]["skills"]["h2"]["className"]}
                    style={aboutContext["main"]["skills"]["h2"]["style"]}>
                    {
                        aboutContext["main"]["skills"]["lis"].map((li) =>
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