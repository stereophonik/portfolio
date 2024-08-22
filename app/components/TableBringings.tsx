import { Anonymous_Pro } from "next/font/google";
import { Roboto_Mono } from "next/font/google";

const anonymousPro = Anonymous_Pro({
    weight: "400",
    subsets: ["latin"]
})

const robotoMono = Roboto_Mono({
    weight: "700",
    subsets: ["latin"]
})

export default function TableBringings({ isSmall, labelTableBringings, tableBringings }) {
    const h1FontSize = isSmall ? "1rem" : "3rem";
    const h2FontSize = isSmall ? "0.75rem" : "2rem";

    return (
        <>
            <h1 className={robotoMono.className} style={{
                    fontSize: h1FontSize
                }}>
                {labelTableBringings}
            </h1>
            <ul className={anonymousPro.className} style={{
                    listStyleType: "none"
                }}>
                <h2 style={{
                        fontSize: h2FontSize
                    }}>
                    {
                        tableBringings.map((tableBringing) =>
                            <li className={anonymousPro.className}>{tableBringing}</li>
                        )
                    }
                </h2>
            </ul>
        </>
    )
}