import { useContext } from "react";

import NavComponent from "../Nav";
import H2Component from "../H2";

import { SizingContext } from "../../contexts/Sizing";
import { ClassNamingContext } from "../../contexts/ClassNaming";
import { StylingContext } from "../../contexts/Styling";

export default function PrimaryNavComponent() {
    const sizingContext = useContext(SizingContext);
    const classNamingContext = useContext(ClassNamingContext);
    const stylingContext = useContext(StylingContext);

    return (
        <NavComponent className="" style={stylingContext["nav"]}>
            <ul>
                <H2Component id="tbMiddlesH2" className={classNamingContext["h2"]} style={{
                    margin: 0,
                    fontSize: sizingContext["h2Font"]
                }}>
                    <li style={{
                        display: "inline-block"
                    }}>
                        <a href="#startings">Startings</a>
                    </li>
                    <li style={{
                        color: "white",
                        display: "inline-block"
                    }}>
                        -------
                    </li>
                    <li style={{
                        display: "inline-block"
                    }}>
                        <a href="#middles">Middles</a>
                    </li>
                    <li style={{
                        color: "white",
                        display: "inline-block"
                    }}>
                        -------
                    </li>
                    <li style={{
                        display: "inline-block"
                    }}>
                        <a href="#endings">Endings</a>
                    </li>
                </H2Component>
            </ul>
        </NavComponent>
    );
}