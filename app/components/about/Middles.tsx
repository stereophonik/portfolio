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
import ButtonComponent from "../Button";

export default function MiddlesAboutComponent() {
    const sizingContext = useContext(SizingContext);
    const classNamingContext = useContext(ClassNamingContext);
    const stylingContext = useContext(StylingContext);
    const nonSpecificContext = useContext(NonSpecificContext);

    function createFromArray(array) {
        let string = "";
        array.map((element) => string += `${element}\n`);
        return string;
    }

    const genericTechnicalSkills = nonSpecificContext["technicalSkillsContent"].map((technicalSkill) =>
        <LiComponent key={
                nonSpecificContext["technicalSkillsContent"].indexOf(technicalSkill)
            } style={{}}>
            <ButtonComponent className={classNamingContext["button"]} onClick={
                    () => alert(createFromArray(technicalSkill.specifics))
                } style={{
                    margin: 0,
                    backgroundColor: "#2677D9",
                    color: "#2BC1AF",
                    fontSize: sizingContext["buttonFont"]
                }}>
                {technicalSkill.generic}
            </ButtonComponent>
        </LiComponent>
    );

    return (
        <DivComponent id="middles" style={stylingContext["middlesAbout"]}>
            <DivComponent id="subMiddles" style={{
                height: "10%"
            }}> </DivComponent>
            <H1Component id="tbMiddlesH1" className={classNamingContext["h1"]} style={{
                    margin: 0,
                    fontSize: sizingContext["h1Font"]
                }}>
                {nonSpecificContext["tableBringingsLabel"]}
            </H1Component>
            <UlComponent style={{
                    paddingInlineStart: "0",
                    listStyleType: "none"
                }}>
                <H2Component id="tbMiddlesH2" className={classNamingContext["h2"]} style={{
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
            <H1Component id="tsMiddlesH1" className={classNamingContext["h1"]} style={{
                    margin: 0,
                    fontSize: sizingContext["h1Font"]
                }}>
                {nonSpecificContext["technicalSkillsLabel"]}
            </H1Component>
            <UlComponent style={{
                    paddingInlineStart: "0",
                    listStyleType: "none"
                }}>
                <H2Component id="tsMiddlesH2" className={classNamingContext["h2"]} style={{
                        margin: 0,
                        fontSize: sizingContext["h2Font"]
                    }}>
                    {genericTechnicalSkills}
                </H2Component>
            </UlComponent>
        </DivComponent>
    )
}