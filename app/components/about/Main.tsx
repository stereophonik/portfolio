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
        <DivComponent id="main" style={aboutContext["styleMain"]}>
            <DivComponent id="subMain" style={{
                height: "10%"
            }}> </DivComponent>
            <H1Component id="tbMainH1" className={aboutContext["h1Main"]["className"]} style={{
                    margin: 0,
                    fontSize: aboutContext["h1Main"]["fontSize"]
                }}>
                {aboutContext["labelServingsMain"]}
            </H1Component>
            <UlComponent style={{
                    paddingInlineStart: "0",
                    listStyleType: "none"
                }}>
                <H2Component id="tbMainH2" className={aboutContext["h2Main"]["className"]} style={{
                        margin: 0,
                        fontSize: aboutContext["h2Main"]["fontSize"]
                    }}>
                    {
                        aboutContext["servingsMain"].map((servingMain) =>
                            <LiComponent key={
                                    aboutContext["servingsMain"].indexOf(servingMain)
                                } style={{}}>
                                {servingMain}
                            </LiComponent>
                        )
                    }
                </H2Component>
            </UlComponent>
            <H1Component id="tsMainH1" className={aboutContext["h1Main"]["className"]} style={{
                    margin: 0,
                    fontSize: aboutContext["h1Main"]["fontSize"]
                }}>
                {aboutContext["labelSkillsMain"]}
            </H1Component>
            <UlComponent style={{
                    paddingInlineStart: "0",
                    listStyleType: "none"
                }}>
                <H2Component id="tsMainH2" className={aboutContext["h2Main"]["className"]} style={{
                        margin: 0,
                        fontSize: aboutContext["h2Main"]["fontSize"]
                    }}>
                    {
                        aboutContext["skillsMain"].map((skillMain) =>
                            <LiComponent key={
                                aboutContext["skillsMain"].indexOf(skillMain)
                            } style={{}}>
                                <LinkComponent href={skillMain.location}>
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