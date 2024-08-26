import { useContext } from "react";
import { IsSmall } from "../contexts/IsSmall";

import Endings from "./Endings";
import Startings from "./Startings";
import TableBringings from "./TableBringings";
import TechnicalSkills from "./TechnicalSkills";

export default function About({
    startings,
    labelTableBringings,
    tableBringings,
    labelTechnicalSkills,
    technicalSkills,
    endings,
    h1ClassName,
    h2ClassName
}) {
    const isSmall = useContext(IsSmall);
    const heights = [
        isSmall ? "40vw" : "20vw",
        isSmall ? "90vw" : "50vw",
        isSmall ? "30vw" : "15vw"
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
                <Startings
                    isSmall={isSmall}
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
                <TableBringings
                    isSmall={isSmall}
                    labelTableBringings={labelTableBringings}
                    tableBringings={tableBringings}
                    h1ClassName={h1ClassName}
                    h2ClassName={h2ClassName}
                />
                <TechnicalSkills
                    isSmall={isSmall}
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
                <Endings
                    isSmall={isSmall}
                    endings={endings}
                 />
            </div>
        </>
    );
}