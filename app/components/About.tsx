import { useContext } from "react";
import { SizeContext } from "../contexts/Size";
import { ClassNameContext } from "../contexts/ClassName";
import { AboutContext } from "../contexts/About";

import EndingsComponent from "./Endings";
import StartingsComponent from "./Startings";
import MiddlesComponent from "./Middles";

export default function AboutComponent() {
    const sizeContext = useContext(SizeContext);
    const classNameContext = useContext(ClassNameContext);
    const aboutContext = useContext(AboutContext);
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
                    startings={aboutContext["startings"]}
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
                    tableBringingsLabel={aboutContext["tableBringingsLabel"]}
                    tableBringingsContent={aboutContext["tableBringingsContent"]}
                    technicalSkillsLabel={aboutContext["technicalSkillsLabel"]}
                    technicalSkillsContent={aboutContext["technicalSkillsContent"]}
                    h1ClassName={classNameContext["h1ClassName"]}
                    h2ClassName={classNameContext["h2ClassName"]}
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
                    endings={aboutContext["endings"]}
                 />
            </div>
        </>
    );
}