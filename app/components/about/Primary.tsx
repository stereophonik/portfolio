import { useContext } from "react";
import { SizeContext } from "../../contexts/Size";

import EndingsAboutComponent from "./Endings";
import StartingsAboutComponent from "./Startings";
import MiddlesAboutComponent from "./Middles";

export default function PrimaryAboutComponent() {
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
                <StartingsAboutComponent />
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
                <MiddlesAboutComponent />
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
                <EndingsAboutComponent />
            </div>
        </>
    );
}