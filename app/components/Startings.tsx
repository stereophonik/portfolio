import { Anonymous_Pro } from "next/font/google";

const anonymousPro = Anonymous_Pro({
    weight: "400",
    subsets: ["latin"]
})

export default function Startings({ startings }) {
    return (
        <>
            {
                startings.map((starting) =>
                    <p className={anonymousPro.className}>{starting}</p>
                )
            }
        </>
    )
}