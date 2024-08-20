import { Anonymous_Pro } from "next/font/google";

const anonymousPro = Anonymous_Pro({
    weight: "400",
    subsets: ["latin"]
})

export default function Endings({ endings }) {
    return (
        <>
            <p className={anonymousPro.className}>{endings[0]}</p>
            <p className={anonymousPro.className}>{endings[1]}<br />{endings[2]}</p>
        </>
    )
}