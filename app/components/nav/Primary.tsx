import { useContext } from "react";

import NavComponent from "../Nav";
import UlComponent from "../Ul";
import H2Component from "../H2";
import LiComponent from "../Li";
import LinkComponent from "../Link";

import { SizingContext } from "../../contexts/Sizing";
import { ClassNamingContext } from "../../contexts/ClassNaming";
import { StylingContext } from "../../contexts/Styling";

export default function PrimaryNavComponent() {
    const sizingContext = useContext(SizingContext);
    const classNamingContext = useContext(ClassNamingContext);
    const stylingContext = useContext(StylingContext);

    return (
        <NavComponent className="" style={stylingContext["nav"]}>
            <UlComponent style={{paddingInlineStart: "0"}}>
                <H2Component id="tbMainH2" className={classNamingContext["h2"]} style={{
                    margin: 0,
                    fontSize: sizingContext["fontSizeH2"]
                }}>
                    <LiComponent key="0" style={{
                        display: "inline-block"
                    }}>
                        <LinkComponent href="#intro">Intro</LinkComponent>
                    </LiComponent>
                    <LiComponent key="1" style={{
                        color: "#2677D9",
                        display: "inline-block"
                    }}>
                        ---
                    </LiComponent>
                    <LiComponent key="2" style={{
                        display: "inline-block"
                    }}>
                        <LinkComponent href="#main">Main</LinkComponent>
                    </LiComponent>
                    <LiComponent key="3" style={{
                        color: "#2677D9",
                        display: "inline-block"
                    }}>
                        ---
                    </LiComponent>
                    <LiComponent key="4" style={{
                        display: "inline-block"
                    }}>
                        <LinkComponent href="#outro">Outro</LinkComponent>
                    </LiComponent>
                </H2Component>
            </UlComponent>
        </NavComponent>
    );
}