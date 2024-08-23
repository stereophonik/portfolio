import { Anonymous_Pro } from "next/font/google";

const anonymousPro = Anonymous_Pro({
    weight: "400",
    subsets: ["latin"]
})

export default function ForClicking({ onClick, children }) {
    return (
        <button className={anonymousPro.className} onClick={onClick}
            style={{
                backgroundColor: "white",
                color: "#0464ff"
            }}>
            {children}
        </button>
    );
}