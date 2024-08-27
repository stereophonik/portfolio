import { useContext } from "react";
import { SizingContext } from "../../contexts/Sizing";

import EndingsAboutComponent from "./Endings";
import StartingsAboutComponent from "./Startings";
import MiddlesAboutComponent from "./Middles";

export default function PrimaryAboutComponent() {
    const sizeContext = useContext(SizingContext);

    return (
        <>
            <div style={{
                    overflow: "hidden",
                    width: "100vw",
                    height: sizeContext["about"]["heights"][0],
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
                    height: sizeContext["about"]["heights"][1],
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
                    height: sizeContext["about"]["heights"][2],
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