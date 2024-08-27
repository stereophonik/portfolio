import { useContext } from "react";
import { SizingContext } from "../contexts/Sizing";
import { ClassNamingContext } from "../contexts/ClassNaming";

export default function ButtonComponent({ onClick, children }) {
    const sizingContext = useContext(SizingContext);
    const classNamingContext = useContext(ClassNamingContext);

    return (
        <button className={classNamingContext["button"]} onClick={onClick}
            style={{
                backgroundColor: "white",
                color: "#0464ff",
                fontSize: sizingContext["buttonFont"]
            }}>
            {children}
        </button>
    );
}