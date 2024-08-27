import { useContext } from "react";
import { SizeContext } from "../../contexts/Size";
import { ClassNameContext } from "../../contexts/ClassName";
import { NonSpecificContext } from "../../contexts/NonSpecific";

export default function EndingsAboutComponent() {
    const sizeContext = useContext(SizeContext);
    const classNameContext = useContext(ClassNameContext);
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