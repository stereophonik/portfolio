import { Anonymous_Pro } from "next/font/google";

const anonymousPro = Anonymous_Pro({
    weight: "400",
    subsets: ["latin"]
})

export default function Startings({ startings }) {
    return (
        <>
            <div style={{
                    width: "100vw",
                    height: "30vw"
                }}>
                {
                    startings.map((starting) =>
                        <p className={anonymousPro.className}>{starting}</p>
                    )
                }
            </div>
        </>
    )
}