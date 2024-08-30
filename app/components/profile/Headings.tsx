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
        <DivComponent id="headings" style={nonSpecificContext["styleHeadings"]}>
            <H1Component id="h1Headings" className={classNamingContext["h1"]} style={{
                    margin: 0,
                    fontSize: sizingContext["h1Font"]
                }}>
                {nonSpecificContext["h1Headings"]}
            </H1Component>
            <H2Component id="h2Headings" className={classNamingContext["h2"]} style={{
                    margin: 0,
                    fontSize: sizingContext["h2Font"]
                }}>
                {nonSpecificContext["h2Headings"]}
            </H2Component>
        </DivComponent>
    );
}