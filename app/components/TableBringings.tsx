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

export default function TableBringings({ tableBringings }) {
    return (
        <>
            <h1 className={robotoMono.className}>What I bring to the table:</h1>
            <ul className={anonymousPro.className} style={{
                    listStyleType: "none"
                }}>
                <h2>
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