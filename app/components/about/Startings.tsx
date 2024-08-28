import { useContext } from "react";

import DivComponent from "../Div";
import H2Component from "../H2";

import { SizingContext } from "../../contexts/Sizing";
import { ClassNamingContext } from "../../contexts/ClassNaming";
import { StylingContext } from "../../contexts/Styling";
import { NonSpecificContext } from "../../contexts/NonSpecific";

export default function StartingsAboutComponent() {
    const sizingContext = useContext(SizingContext);
    const classNamingContext = useContext(ClassNamingContext);
    const stylingContext = useContext(StylingContext);
    const nonSpecificContext = useContext(NonSpecificContext);

    return (
        <DivComponent style={stylingContext["startingsAbout"]}>
            <DivComponent style={{
                height: "10%"
            }}> </DivComponent>
            <DivComponent style={{}}>
                {
                    nonSpecificContext["startings"].map((starting) =>
                        <H2Component id="startingsH2" className={classNamingContext["h2"]} style={{
                                fontSize: sizingContext["h2Font"]
                            }}>
                            {starting}
                        </H2Component>
                    )
                }
            </DivComponent>
        </DivComponent>
    )
}