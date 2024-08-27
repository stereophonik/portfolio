import { useContext } from "react";
import { SizingContext } from "../../contexts/Sizing";
import { ClassNamingContext } from "../../contexts/ClassNaming";
import { NonSpecificContext } from "../../contexts/NonSpecific";

export default function StartingsAboutComponent() {
    const sizingContext = useContext(SizingContext);
    const classNamingContext = useContext(ClassNamingContext);
    const nonSpecificContext = useContext(NonSpecificContext);

    return (
        <>
            <div style={{
                    height: "10%"
                }}></div>
            <div>
                {
                    nonSpecificContext["startings"].map((starting) =>
                        <h2 className={classNamingContext["h2"]} style={{
                                fontSize: sizingContext["h2Font"]
                            }}>
                            {starting}
                        </h2>
                    )
                }
            </div>
        </>
    )
}