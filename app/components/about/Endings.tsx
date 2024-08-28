import { useContext } from "react";

import DivComponent from "../Div";
import H2Component from "../H2";

import { SizingContext } from "../../contexts/Sizing";
import { ClassNamingContext } from "../../contexts/ClassNaming";
import { StylingContext } from "../../contexts/Styling";
import { NonSpecificContext } from "../../contexts/NonSpecific";

export default function EndingsAboutComponent() {
    const sizingContext = useContext(SizingContext);
    const classNamingContext = useContext(ClassNamingContext);
    const stylingContext = useContext(StylingContext);
    const nonSpecificContext = useContext(NonSpecificContext);

    return (
        <DivComponent style={stylingContext["endingsAbout"]}>
            <DivComponent style={{
                height: "10%"
            }}> </DivComponent>
            <H2Component id="endingsH201" className={classNamingContext["h2"]} style={{
                    fontSize: sizingContext["h2Font"]
                }}>
                {nonSpecificContext["endings"][0]}
            </H2Component>
            <H2Component id="endingsH202" className={classNamingContext["h2"]} style={{
                    fontSize: sizingContext["h2Font"]
                }}>
                {nonSpecificContext["endings"][1]}<br />{nonSpecificContext["endings"][2]}
            </H2Component>
        </DivComponent>
    )
}