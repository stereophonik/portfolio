import { useContext } from "react";
import { SizingContext } from "../contexts/Sizing";
import { ClassNamingContext } from "../contexts/ClassNaming";

export default function ForClickingComponent({ onClick, children }) {
    const sizeContext = useContext(SizingContext);
    const classNameContext = useContext(ClassNamingContext);

    return (
        <button className={classNameContext["buttonClassName"]} onClick={onClick}
            style={{
                backgroundColor: "white",
                color: "#0464ff",
                fontSize: sizeContext["buttonFontSize"]
            }}>
            {children}
        </button>
    );
}