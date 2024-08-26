import { useContext } from "react";
import { SizeContext } from "../contexts/Size";

import EndingsComponent from "./Endings";
import StartingsComponent from "./Startings";
import TableBringingsComponent from "./TableBringings";
import TechnicalSkillsComponent from "./TechnicalSkills";

export default function AboutComponent({
    startings,
    labelTableBringings,
    tableBringings,
    labelTechnicalSkills,
    technicalSkills,
    endings,
    h1ClassName,
    h2ClassName
}) {
    const sizeContext = useContext(SizeContext);
    const heights = [
        sizeContext["isSmall"] ? "40vw" : "20vw",
        sizeContext["isSmall"] ? "90vw" : "50vw",
        sizeContext["isSmall"] ? "30vw" : "15vw"
    ]

    return (
        <>
            <div style={{
                    overflow: "hidden",
                    width: "100vw",
                    height: heights[0],
                    backgroundColor: "white",
                    color: "#0464ff",
                    textAlign: "center"
                }}>
                <div style={{
                        height: "10%"
                    }}></div>
                <StartingsComponent
                    isSmall={sizeContext["isSmall"]}
                    startings={startings}
                />
            </div>
            <div style={{
                    overflow: "hidden",
                    width: "100vw",
                    height: heights[1],
                    backgroundColor: "#0464ff",
                    color: "white",
                    textAlign: "center"
                }}>
                <div style={{
                        height: "10%"
                    }}></div>
                <TableBringingsComponent
                    isSmall={sizeContext["isSmall"]}
                    labelTableBringings={labelTableBringings}
                    tableBringings={tableBringings}
                    h1ClassName={h1ClassName}
                    h2ClassName={h2ClassName}
                />
                <TechnicalSkillsComponent
                    isSmall={sizeContext["isSmall"]}
                    labelTechnicalSkills={labelTechnicalSkills}
                    technicalSkills={technicalSkills}
                    h1ClassName={h1ClassName}
                    h2ClassName={h2ClassName}
                />
            </div>
            <div style={{
                    overflow: "hidden",
                    width: "100vw",
                    height: heights[2],
                    backgroundColor: "white",
                    color: "#0464ff",
                    textAlign: "center"
                }}>
                <div style={{
                        height: "10%"
                    }}></div>
                <EndingsComponent
                    isSmall={sizeContext["isSmall"]}
                    endings={endings}
                 />
            </div>
        </>
    );
}