import { useContext } from "react";

import DivComponent from "../Div";
import H1Component from "../H1";
import H2Component from "../H2";

import { SizingContext } from "../../contexts/Sizing";
import { ClassNamingContext } from "../../contexts/ClassNaming";
import { StylingContext } from "../../contexts/Styling";
import { NonSpecificContext } from "../../contexts/NonSpecific";

export default function IntroAboutComponent() {
    const sizingContext = useContext(SizingContext);
    const classNamingContext = useContext(ClassNamingContext);
    const stylingContext = useContext(StylingContext);
    const nonSpecificContext = useContext(NonSpecificContext);

    return (
        <DivComponent id="intro" style={stylingContext["introAbout"]}>
            <DivComponent id="subIntro01" style={{
                height: "10%"
            }}> </DivComponent>
            <DivComponent id="subIntro02" style={{}}>
                <H1Component id="headingsH1" className={classNamingContext["h1"]} style={{
                        margin: 0,
                        fontSize: sizingContext["h1Font"]
                    }}>
                    Hello!
                </H1Component>
                {
                    nonSpecificContext["intro"].map((starting) =>
                        <H2Component id="introH2" className={classNamingContext["h2"]} style={{
                                margin: 0,
                                fontSize: sizingContext["h2Font"]
                            }}>
                            {starting}
                        </H2Component>
                    )
                }
            </DivComponent>
        </DivComponent>
    );
}