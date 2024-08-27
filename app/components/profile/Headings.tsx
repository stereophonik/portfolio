import { useContext } from "react";

import DivComponent from "../Div";

import { SizingContext } from "../../contexts/Sizing";
import { ClassNamingContext } from "../../contexts/ClassNaming";
import { NonSpecificContext } from "../../contexts/NonSpecific";

export default function HeadingsProfileComponent() {
    const sizingContext = useContext(SizingContext);
    const nonSpecificContext = useContext(NonSpecificContext);
    const classNamingContext = useContext(ClassNamingContext);

    return (
        <DivComponent style={nonSpecificContext["headingsStyle"]}>
            <DivComponent style={{
                    height: "30%"
                }}> </DivComponent>
            <h1 id="profileH1" className={classNamingContext["h1"]} style={{
                    gridColumn: "3",
                    fontSize: sizingContext["h1Font"]
                }}>
                {nonSpecificContext["headingsH1"]}
            </h1>
            <h2 id="profileH2" className={classNamingContext["h2"]} style={{
                    gridColumn: "3",
                    fontSize: sizingContext["h2Font"]
                }}>
                {nonSpecificContext["headingsH2"]}
            </h2>
        </DivComponent>
    );
}