import { useContext } from "react";
import { SizingContext } from "../../contexts/Sizing";
import { ClassNamingContext } from "../../contexts/ClassNaming";
import { NonSpecificContext } from "../../contexts/NonSpecific";

export default function StartingsAboutComponent() {
    const sizeContext = useContext(SizingContext);
    const classNameContext = useContext(ClassNamingContext);
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