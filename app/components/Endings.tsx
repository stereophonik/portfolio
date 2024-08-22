import { Anonymous_Pro } from "next/font/google";

const anonymousPro = Anonymous_Pro({
    weight: "400",
    subsets: ["latin"]
})

export default function Endings({ isSmall, endings }) {
    const h2FontSize = isSmall ? "0.75rem" : "2rem";

    return (
        <>
            <h2 className={anonymousPro.className} style={{
                    fontSize: h2FontSize
                }}>
                {endings[0]}
            </h2>
            <h2 className={anonymousPro.className} style={{
                    fontSize: h2FontSize
                }}>
                {endings[1]}<br />{endings[2]}
            </h2>
        </>
    )
}