import { useContext } from "react";
import { SizeContext } from "../contexts/Size";
import { ClassNameContext } from "../contexts/ClassName";

export default function StartingsComponent({ startings }) {
    const sizeContext = useContext(SizeContext);
    const classNameContext = useContext(ClassNameContext);
    const h2FontSize = sizeContext["isSmall"] ? "0.75rem" : "2rem";

    return (
        <>
            <div>
                {
                    startings.map((starting) =>
                        <h2 className={classNameContext["h2ClassName"]} style={{
                                fontSize: h2FontSize
                            }}>
                            {starting}
                        </h2>
                    )
                }
            </div>
        </>
    )
}