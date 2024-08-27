import { useContext } from "react";
import { SizeContext } from "../contexts/Size";
import { NonSpecificContext } from "../contexts/NonSpecific";

import EndingsComponent from "./Endings";
import StartingsComponent from "./Startings";
import MiddlesComponent from "./Middles";

export default function AboutComponent() {
    const sizeContext = useContext(SizeContext);
    const nonSpecificContext = useContext(NonSpecificContext);
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
                    startings={nonSpecificContext["startings"]}
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
                <MiddlesComponent
                    isSmall={sizeContext["isSmall"]}
                    tableBringingsLabel={nonSpecificContext["tableBringingsLabel"]}
                    tableBringingsContent={nonSpecificContext["tableBringingsContent"]}
                    technicalSkillsLabel={nonSpecificContext["technicalSkillsLabel"]}
                    technicalSkillsContent={nonSpecificContext["technicalSkillsContent"]}
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
                    endings={nonSpecificContext["endings"]}
                 />
            </div>
        </>
    );
}