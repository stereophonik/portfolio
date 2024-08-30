import { useContext } from "react";

import DivComponent from "../Div";
import H1Component from "../H1";
import H2Component from "../H2";
import UlComponent from "../Ul";
import LiComponent from "../Li";

import { SizingContext } from "../../contexts/Sizing";
import { ClassNamingContext } from "../../contexts/ClassNaming";
import { StylingContext } from "../../contexts/Styling";
import { NonSpecificContext } from "../../contexts/NonSpecific";
import LinkComponent from "../Link";

export default function MainAboutComponent() {
    const sizingContext = useContext(SizingContext);
    const classNamingContext = useContext(ClassNamingContext);
    const stylingContext = useContext(StylingContext);
    const nonSpecificContext = useContext(NonSpecificContext);

    const genericTechnicalSkills = nonSpecificContext["technicalSkillsContent"].map((technicalSkill) =>
        <LiComponent key={
                nonSpecificContext["technicalSkillsContent"].indexOf(technicalSkill)
            } style={{}}>
            <LinkComponent href={technicalSkill.location}>
                {technicalSkill.generic}
            </LinkComponent>
        </LiComponent>
    );

    return (
        <DivComponent id="main" style={stylingContext["mainAbout"]}>
            <DivComponent id="subMain" style={{
                height: "10%"
            }}> </DivComponent>
            <H1Component id="tbMainH1" className={classNamingContext["h1"]} style={{
                    margin: 0,
                    fontSize: sizingContext["h1Font"]
                }}>
                {nonSpecificContext["tableBringingsLabel"]}
            </H1Component>
            <UlComponent style={{
                    paddingInlineStart: "0",
                    listStyleType: "none"
                }}>
                <H2Component id="tbMainH2" className={classNamingContext["h2"]} style={{
                        margin: 0,
                        fontSize: sizingContext["h2Font"]
                    }}>
                    {
                        nonSpecificContext["tableBringingsContent"].map((tableBringing) =>
                            <LiComponent key={
                                    nonSpecificContext["tableBringingsContent"].indexOf(tableBringing)
                                } style={{}}>
                                {tableBringing}
                            </LiComponent>
                        )
                    }
                </H2Component>
            </UlComponent>
            <H1Component id="tsMainH1" className={classNamingContext["h1"]} style={{
                    margin: 0,
                    fontSize: sizingContext["h1Font"]
                }}>
                {nonSpecificContext["technicalSkillsLabel"]}
            </H1Component>
            <UlComponent style={{
                    paddingInlineStart: "0",
                    listStyleType: "none"
                }}>
                <H2Component id="tsMainH2" className={classNamingContext["h2"]} style={{
                        margin: 0,
                        fontSize: sizingContext["h2Font"]
                    }}>
                    {genericTechnicalSkills}
                </H2Component>
            </UlComponent>
        </DivComponent>
    )
}