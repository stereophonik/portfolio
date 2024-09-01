import { useContext } from "react";

import DivComponent from "../Div";
import H1Component from "../H1";
import H2Component from "../H2";
import UlComponent from "../Ul";
import LiComponent from "../Li";
import LinkComponent from "../Link";

import { AboutContext } from "../../contexts/About";

export default function MainAboutComponent() {
    const aboutContext = useContext(AboutContext);

    return (
        <DivComponent
            id="main"
            style={aboutContext["styleMain"]}>
            <DivComponent
                id="divMain"
                style={{
                    height: "10%"
                }}> </DivComponent>
            <H1Component
                id="01H1Main"
                className={aboutContext["h1Main"]["className"]}
                style={aboutContext["h1Main"]["style"]}>
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
                id="02H1Main"
                className={aboutContext["h1Main"]["className"]}
                style={aboutContext["h1Main"]["style"]}>
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
        </DivComponent>
    );
}