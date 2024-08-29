import { useContext } from "react";

import DivComponent from "../Div";
import H1Component from "../H1";
import H2Component from "../H2";

import { SizingContext } from "../../contexts/Sizing";
import { ClassNamingContext } from "../../contexts/ClassNaming";
import { NonSpecificContext } from "../../contexts/NonSpecific";

export default function HeadingsProfileComponent() {
    const sizingContext = useContext(SizingContext);
    const nonSpecificContext = useContext(NonSpecificContext);
    const classNamingContext = useContext(ClassNamingContext);

    return (
        <DivComponent id="headings" style={nonSpecificContext["headingsStyle"]}>
            <H1Component id="headingsH1" className={classNamingContext["h1"]} style={{
                    margin: 0,
                    fontSize: sizingContext["h1Font"]
                }}>
                {nonSpecificContext["headingsH1"]}
            </H1Component>
            <H2Component id="headingsH2" className={classNamingContext["h2"]} style={{
                    margin: 0,
                    fontSize: sizingContext["h2Font"]
                }}>
                {nonSpecificContext["headingsH2"]}
            </H2Component>
        </DivComponent>
    );
}