import { useContext } from "react";

import DivComponent from "../Div";
import H1Component from "../H1";
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
        <DivComponent id="endings" style={stylingContext["endingsAbout"]}>
            <DivComponent id="subEndings" style={{
                height: "10%"
            }}> </DivComponent>
            <H1Component id="endingsH1" className={classNamingContext["h1"]} style={{
                    margin: 0,
                    fontSize: sizingContext["h1Font"]
                }}>
                Btw...
            </H1Component>
            <H2Component id="endingsH2" className={classNamingContext["h2"]} style={{
                    margin: 0,
                    fontSize: sizingContext["h2Font"]
                }}>
                {nonSpecificContext["endings"][0]}
            </H2Component>
        </DivComponent>
    )
}