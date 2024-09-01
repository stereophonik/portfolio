import { useContext } from "react";

import NavComponent from "../Nav";
import UlComponent from "../Ul";
import H2Component from "../H2";
import LiComponent from "../Li";
import LinkComponent from "../Link";

import { NavContext } from "../../contexts/Nav";

export default function PrimaryNavComponent() {
    const navContext = useContext(NavContext);

    return (
        <NavComponent
            className=""
            style={navContext["styleNav"]}>
            <UlComponent
                style={{paddingInlineStart: "0"}}>
                <H2Component
                    id="h2Nav"
                    className={navContext["h2"]["className"]}
                    style={{
                        margin: 0,
                        fontSize: navContext["h2"]["fontSize"]
                    }}>
                    <LiComponent
                        key="0"
                        style={{
                            display: "inline-block"
                        }}>
                        <LinkComponent
                            href="#intro">Intro</LinkComponent>
                    </LiComponent>
                    <LiComponent
                        key="1"
                        style={{
                            color: "#2677D9",
                            display: "inline-block"
                        }}>
                        ---
                    </LiComponent>
                    <LiComponent
                        key="2"
                        style={{
                            display: "inline-block"
                        }}>
                        <LinkComponent
                            href="#main">Main</LinkComponent>
                    </LiComponent>
                    <LiComponent
                        key="3"
                        style={{
                            color: "#2677D9",
                            display: "inline-block"
                        }}>
                        ---
                    </LiComponent>
                    <LiComponent
                        key="4"
                        style={{
                            display: "inline-block"
                        }}>
                        <LinkComponent
                            href="#outro">Outro</LinkComponent>
                    </LiComponent>
                </H2Component>
            </UlComponent>
        </NavComponent>
    );
}