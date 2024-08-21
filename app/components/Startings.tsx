import { Anonymous_Pro } from "next/font/google";

const anonymousPro = Anonymous_Pro({
    weight: "400",
    subsets: ["latin"]
})

export default function Startings({ startings }) {
    return (
        <>
            <div>
                {
                    startings.map((starting) =>
                        <h2 className={anonymousPro.className}>{starting}</h2>
                    )
                }
            </div>
        </>
    )
}