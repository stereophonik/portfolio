import { Anonymous_Pro } from "next/font/google";

const anonymousPro = Anonymous_Pro({
    weight: "400",
    subsets: ["latin"]
})

export default function ForClickingComponent({ isSmall, onClick, children }) {
    const buttonFontSize = isSmall ? "0.75rem" : "2rem";

    return (
        <button className={anonymousPro.className} onClick={onClick}
            style={{
                backgroundColor: "white",
                color: "#0464ff",
                fontSize: buttonFontSize
            }}>
            {children}
        </button>
    );
}