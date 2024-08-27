import { useContext } from "react";

import { SizeContext } from "../../contexts/Size";
import { ClassNameContext } from "../../contexts/ClassName";
import { NonSpecificContext } from "../../contexts/NonSpecific";

export default function HeadingsProfileComponent() {
    const sizeContext = useContext(SizeContext);
    const nonSpecificContext = useContext(NonSpecificContext);
    const classNameContext = useContext(ClassNameContext);
    const h1FontSize = sizeContext["isSmall"] ? "1rem" : "3rem";
    const h2FontSize = sizeContext["isSmall"] ? "0.75rem" : "2rem";

    return (
        <div style={nonSpecificContext["headingsStyle"]}>
            <div style={{
                    height: "30%"
                }}></div>
            <h1 id="profileH1" className={classNameContext["h1ClassName"]} style={{
                    gridColumn: "3",
                    fontSize: h1FontSize
                }}>
                {nonSpecificContext["headingsH1"]}
            </h1>
            <h2 id="profileH2" className={classNameContext["h2ClassName"]} style={{
                    gridColumn: "3",
                    fontSize: h2FontSize
                }}>
                {nonSpecificContext["headingsH2"]}
            </h2>
        </div>
    );
}