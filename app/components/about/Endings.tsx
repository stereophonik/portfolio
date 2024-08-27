import { useContext } from "react";
import { SizingContext } from "../../contexts/Sizing";
import { ClassNamingContext } from "../../contexts/ClassNaming";
import { NonSpecificContext } from "../../contexts/NonSpecific";

export default function EndingsAboutComponent() {
    const sizingContext = useContext(SizingContext);
    const classNamingContext = useContext(ClassNamingContext);
    const nonSpecificContext = useContext(NonSpecificContext);

    return (
        <>
            <div style={{
                    overflow: "hidden",
                    width: "100vw",
                    height: sizingContext["about"]["heights"][2],
                    backgroundColor: "white",
                    color: "#0464ff",
                    textAlign: "center"
                }}>
                <div style={{
                    height: "10%"
                }}></div>
                <h2 className={classNamingContext["h2"]} style={{
                        fontSize: sizingContext["h2Font"]
                    }}>
                    {nonSpecificContext["endings"][0]}
                </h2>
                <h2 className={classNamingContext["h2"]} style={{
                        fontSize: sizingContext["h2Font"]
                    }}>
                    {nonSpecificContext["endings"][1]}<br />{nonSpecificContext["endings"][2]}
                </h2>
            </div>
        </>
    )
}