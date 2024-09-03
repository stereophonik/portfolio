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
                id={aboutContext["h1SkillsMain"]["id"]}
                className={aboutContext["h1SkillsMain"]["className"]}
                style={aboutContext["h1SkillsMain"]["style"]}>
                {aboutContext["h1SkillsMain"]["content"]}
            </H1Component>
            <UlComponent
                style={{
                    paddingInlineStart: "0",
                    listStyleType: "none"
                }}>
                <H2Component
                    id={aboutContext["h2SkillsMain"]["id"]}
                    className={aboutContext["h2SkillsMain"]["className"]}
                    style={aboutContext["h2SkillsMain"]["style"]}>
                    {
                        aboutContext["lisSkillsMain"].map((liSkillsMain) =>
                            <LiComponent
                                key={liSkillsMain["key"]}
                                style={liSkillsMain["style"]}>
                                <LinkComponent
                                    href={aboutContext["linksSkillsMain"][aboutContext["lisSkillsMain"].indexOf(liSkillsMain)]["href"]}>
                                    {aboutContext["linksSkillsMain"][aboutContext["lisSkillsMain"].indexOf(liSkillsMain)]["content"]}
                                </LinkComponent>
                            </LiComponent>
                        )
                    }
                </H2Component>
            </UlComponent>
        </SectionComponent>
    );
}