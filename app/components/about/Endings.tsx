import { useContext } from "react";
import { SizingContext } from "../../contexts/Sizing";
import { ClassNamingContext } from "../../contexts/ClassNaming";
import { NonSpecificContext } from "../../contexts/NonSpecific";

export default function EndingsAboutComponent() {
    const sizeContext = useContext(SizingContext);
    const classNameContext = useContext(ClassNamingContext);
    const nonSpecificContext = useContext(NonSpecificContext);

    return (
        <>
            <h2 className={classNameContext["h2ClassName"]} style={{
                    fontSize: sizeContext["h2FontSize"]
                }}>
                {nonSpecificContext["endings"][0]}
            </h2>
            <h2 className={classNameContext["h2ClassName"]} style={{
                    fontSize: sizeContext["h2FontSize"]
                }}>
                {nonSpecificContext["endings"][1]}<br />{nonSpecificContext["endings"][2]}
            </h2>
        </>
    )
}