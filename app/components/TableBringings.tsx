import { Anonymous_Pro } from "next/font/google";

const anonymousPro = Anonymous_Pro({
    weight: "400",
    subsets: ["latin"]
})

export default function TableBringings({ tableBringings }) {
    return (
        <>
            <h2 className={anonymousPro.className}>What I bring to the table:</h2>
            <ul className={anonymousPro.className}>
                {
                    tableBringings.map((tableBringing) =>
                        <li className={anonymousPro.className}>{tableBringing}</li>
                    )
                }
            </ul>
        </>
    )
}