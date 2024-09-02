import { useContext } from "react";

import SectionComponent from "../../Section";
import DivComponent from "../../Div";
import H1Component from "../../H1";
import H2Component from "../../H2";
import UlComponent from "../../Ul";
import LiComponent from "../../Li";
import LinkComponent from "../../Link";

import { AboutContext } from "../../../contexts/About";

export default function SectionMainAboutComponent() {
    const aboutContext = useContext(AboutContext);

    return (
        <SectionComponent
            id={aboutContext["sectionMain"]["id"]}
            style={aboutContext["sectionMain"]["style"]}>
            <DivComponent
                id={aboutContext["divMain"]["id"]}
                style={aboutContext["divMain"]["style"]}>
                {aboutContext["divMain"]["content"]}
            </DivComponent>
            <H1Component
                id={aboutContext["h1sMain"][0]["id"]}
                className={aboutContext["h1sMain"][0]["className"]}
                style={aboutContext["h1sMain"][0]["style"]}>
                {aboutContext["labelServingsMain"]}
            </H1Component>
            <UlComponent
                style={{
                    paddingInlineStart: "0",
                    listStyleType: "none"
                }}>
                <H2Component
                    id="01H2Main"
                    className={aboutContext["h2Main"]["className"]}
                    style={aboutContext["h2Main"]["style"]}>
                    {
                        aboutContext["servingsMain"].map((servingMain) =>
                            <LiComponent
                                key={
                                    aboutContext["servingsMain"].indexOf(servingMain)
                                }
                                style={{}}>
                                {servingMain}
                            </LiComponent>
                        )
                    }
                </H2Component>
            </UlComponent>
            <H1Component
                id={aboutContext["h1sMain"][1]["id"]}
                className={aboutContext["h1sMain"][1]["className"]}
                style={aboutContext["h1sMain"][1]["style"]}>
                {aboutContext["labelSkillsMain"]}
            </H1Component>
            <UlComponent
                style={{
                    paddingInlineStart: "0",
                    listStyleType: "none"
                }}>
                <H2Component
                    id="02H2Main"
                    className={aboutContext["h2Main"]["className"]}
                    style={aboutContext["h2Main"]["style"]}>
                    {
                        aboutContext["skillsMain"].map((skillMain) =>
                            <LiComponent
                                key={
                                    aboutContext["skillsMain"].indexOf(skillMain)
                                }
                                style={{}}>
                                <LinkComponent
                                    href={skillMain.location}>
                                    {skillMain.generic}
                                </LinkComponent>
                            </LiComponent>
                        )
                    }
                </H2Component>
            </UlComponent>
        </SectionComponent>
    );
}