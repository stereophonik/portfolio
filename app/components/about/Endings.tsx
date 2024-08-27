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
            <h2 className={classNamingContext["h2ClassName"]} style={{
                    fontSize: sizingContext["h2FontSize"]
                }}>
                {nonSpecificContext["endings"][0]}
            </h2>
            <h2 className={classNamingContext["h2ClassName"]} style={{
                    fontSize: sizingContext["h2FontSize"]
                }}>
                {nonSpecificContext["endings"][1]}<br />{nonSpecificContext["endings"][2]}
            </h2>
        </>
    )
}