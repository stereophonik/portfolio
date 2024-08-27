import { useContext } from "react";
import { SizeContext } from "../contexts/Size";
import { ClassNameContext } from "../contexts/ClassName";

export default function EndingsComponent({ endings }) {
    const sizeContext = useContext(SizeContext);
    const classNameContext = useContext(ClassNameContext);
    const h2FontSize = sizeContext["isSmall"] ? "0.75rem" : "2rem";

    return (
        <>
            <h2 className={classNameContext["h2ClassName"]} style={{
                    fontSize: h2FontSize
                }}>
                {endings[0]}
            </h2>
            <h2 className={classNameContext["h2ClassName"]} style={{
                    fontSize: h2FontSize
                }}>
                {endings[1]}<br />{endings[2]}
            </h2>
        </>
    )
}