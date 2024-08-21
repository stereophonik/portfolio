import { Anonymous_Pro } from "next/font/google";

const anonymousPro = Anonymous_Pro({
    weight: "400",
    subsets: ["latin"]
})

const isSmall = window.innerWidth <= 480;
const h2FontSize = isSmall ? "0.75rem" : "2rem"

export default function Startings({ startings }) {
    return (
        <>
            <div>
                {
                    startings.map((starting) =>
                        <h2 className={anonymousPro.className} style={{
                                fontSize: h2FontSize
                            }}>
                            {starting}
                        </h2>
                    )
                }
            </div>
        </>
    )
}