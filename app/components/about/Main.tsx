import { useContext } from "react";

import DivComponent from "../Div";
import H1Component from "../H1";
import H2Component from "../H2";
import UlComponent from "../Ul";
import LiComponent from "../Li";
import LinkComponent from "../Link";

import { NonSpecificContext } from "../../contexts/NonSpecific";
import { AboutContext } from "../../contexts/About";

export default function MainAboutComponent() {
    const aboutContext = useContext(AboutContext);
    const nonSpecificContext = useContext(NonSpecificContext);

    const genericSkills = nonSpecificContext["skills"].map((skill) =>
        <LiComponent key={
                nonSpecificContext["skills"].indexOf(skill)
            } style={{}}>
            <LinkComponent href={skill.location}>
                {skill.generic}
            </LinkComponent>
        </LiComponent>
    );

    return (
        <DivComponent id="main" style={aboutContext["styleMain"]}>
            <DivComponent id="subMain" style={{
                height: "10%"
            }}> </DivComponent>
            <H1Component id="tbMainH1" className={aboutContext["h1Main"]["className"]} style={{
                    margin: 0,
                    fontSize: aboutContext["h1Main"]["fontSize"]
                }}>
                {nonSpecificContext["labelServings"]}
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
                        nonSpecificContext["servings"].map((serving) =>
                            <LiComponent key={
                                    nonSpecificContext["servings"].indexOf(serving)
                                } style={{}}>
                                {serving}
                            </LiComponent>
                        )
                    }
                </H2Component>
            </UlComponent>
            <H1Component id="tsMainH1" className={aboutContext["h1Main"]["className"]} style={{
                    margin: 0,
                    fontSize: aboutContext["h1Main"]["fontSize"]
                }}>
                {nonSpecificContext["labelSkills"]}
            </H1Component>
            <UlComponent style={{
                    paddingInlineStart: "0",
                    listStyleType: "none"
                }}>
                <H2Component id="tsMainH2" className={aboutContext["h2Main"]["className"]} style={{
                        margin: 0,
                        fontSize: aboutContext["h2Main"]["fontSize"]
                    }}>
                    {genericSkills}
                </H2Component>
            </UlComponent>
        </DivComponent>
    );
}