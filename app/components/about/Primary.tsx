import { useContext } from "react";
import { SizingContext } from "../../contexts/Sizing";

import EndingsAboutComponent from "./Endings";
import StartingsAboutComponent from "./Startings";
import MiddlesAboutComponent from "./Middles";

export default function PrimaryAboutComponent() {
    const sizingContext = useContext(SizingContext);

    return (
        <>
            <div style={{
                    overflow: "hidden",
                    width: "100vw",
                    height: sizingContext["about"]["heights"][0],
                    backgroundColor: "white",
                    color: "#0464ff",
                    textAlign: "center"
                }}>
                <StartingsAboutComponent />
            </div>
            <div style={{
                    overflow: "hidden",
                    width: "100vw",
                    height: sizingContext["about"]["heights"][1],
                    backgroundColor: "#0464ff",
                    color: "white",
                    textAlign: "center"
                }}>
                <MiddlesAboutComponent />
            </div>
            <div style={{
                    overflow: "hidden",
                    width: "100vw",
                    height: sizingContext["about"]["heights"][2],
                    backgroundColor: "white",
                    color: "#0464ff",
                    textAlign: "center"
                }}>
                <EndingsAboutComponent />
            </div>
        </>
    );
}