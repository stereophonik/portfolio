import { useContext } from "react";

import DivComponent from "../Div";
import H1Component from "../H1";
import H2Component from "../H2";

import { SizingContext } from "../../contexts/Sizing";
import { ClassNamingContext } from "../../contexts/ClassNaming";
import { StylingContext } from "../../contexts/Styling";
import { NonSpecificContext } from "../../contexts/NonSpecific";

export default function OutroAboutComponent() {
    const sizingContext = useContext(SizingContext);
    const classNamingContext = useContext(ClassNamingContext);
    const stylingContext = useContext(StylingContext);
    const nonSpecificContext = useContext(NonSpecificContext);

    return (
        <DivComponent id="outro" style={stylingContext["outroAbout"]}>
            <DivComponent id="subOutro" style={{
                height: "10%"
            }}> </DivComponent>
            <H1Component id="outroH1" className={classNamingContext["classNameH1"]} style={{
                    margin: 0,
                    fontSize: sizingContext["fontSizeH1"]
                }}>
                Btw...
            </H1Component>
            <H2Component id="outroH2" className={classNamingContext["classNameH2"]} style={{
                    margin: 0,
                    fontSize: sizingContext["fontSizeH2"]
                }}>
                {nonSpecificContext["outro"]}
            </H2Component>
        </DivComponent>
    );
}