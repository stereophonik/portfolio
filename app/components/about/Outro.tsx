import { useContext } from "react";

import DivComponent from "../Div";
import H1Component from "../H1";
import H2Component from "../H2";

import { NonSpecificContext } from "../../contexts/NonSpecific";
import { AboutContext } from "../../contexts/About";

export default function OutroAboutComponent() {
    const nonSpecificContext = useContext(NonSpecificContext);
    const aboutContext = useContext(AboutContext);

    return (
        <DivComponent id="outro" style={aboutContext["styleOutro"]}>
            <DivComponent id="subOutro" style={{
                height: "10%"
            }}> </DivComponent>
            <H1Component id="outroH1" className={aboutContext["h1Outro"]["className"]} style={{
                    margin: 0,
                    fontSize: aboutContext["h1Outro"]["fontSize"]
                }}>
                Btw...
            </H1Component>
            <H2Component id="outroH2" className={aboutContext["h2Outro"]["className"]} style={{
                    margin: 0,
                    fontSize: aboutContext["h2Outro"]["fontSize"]
                }}>
                {nonSpecificContext["outro"]}
            </H2Component>
        </DivComponent>
    );
}