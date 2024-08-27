import { useContext } from "react";
import { SizeContext } from "../../contexts/Size";
import { ClassNameContext } from "../../contexts/ClassName";
import { NonSpecificContext } from "../../contexts/NonSpecific";

export default function StartingsAboutComponent() {
    const sizeContext = useContext(SizeContext);
    const classNameContext = useContext(ClassNameContext);
    const nonSpecificContext = useContext(NonSpecificContext);

    return (
        <>
            <div>
                {
                    nonSpecificContext["startings"].map((starting) =>
                        <h2 className={classNameContext["h2ClassName"]} style={{
                                fontSize: sizeContext["h2FontSize"]
                            }}>
                            {starting}
                        </h2>
                    )
                }
            </div>
        </>
    )
}