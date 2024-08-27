import { useContext } from "react";
import { SizeContext } from "../contexts/Size";
import { ClassNameContext } from "../contexts/ClassName";

export default function ForClickingComponent({ onClick, children }) {
    const sizeContext = useContext(SizeContext);
    const classNameContext = useContext(ClassNameContext);

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