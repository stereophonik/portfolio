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
                id={aboutContext["skillsMain"]["h1"]["id"]}
                className={aboutContext["skillsMain"]["h1"]["className"]}
                style={aboutContext["skillsMain"]["h1"]["style"]}>
                {aboutContext["skillsMain"]["h1"]["content"]}
            </H1Component>
            <UlComponent
                style={{
                    paddingInlineStart: "0",
                    listStyleType: "none"
                }}>
                <H2Component
                    id={aboutContext["skillsMain"]["h2"]["id"]}
                    className={aboutContext["skillsMain"]["h2"]["className"]}
                    style={aboutContext["skillsMain"]["h2"]["style"]}>
                    {
                        aboutContext["skillsMain"]["lis"].map((li) =>
                            <LiComponent
                                key={li["key"]}
                                style={li["style"]}>
                                <LinkComponent
                                    href={aboutContext["skillsMain"]["links"][aboutContext["skillsMain"]["lis"].indexOf(li)]["href"]}>
                                    {aboutContext["skillsMain"]["links"][aboutContext["skillsMain"]["lis"].indexOf(li)]["content"]}
                                </LinkComponent>
                            </LiComponent>
                        )
                    }
                </H2Component>
            </UlComponent>
        </SectionComponent>
    );
}