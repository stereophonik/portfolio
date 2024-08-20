import { Anonymous_Pro } from "next/font/google";

const anonymousPro = Anonymous_Pro({
    weight: "400",
    subsets: ["latin"]
})

export default function Profile({ src, alt, h1, h2 }) {
    return (
        <>
            <img className="profileImg" src={src} alt={alt} />
            <h1 className={anonymousPro.className}>{h1}</h1>
            <h2 className={anonymousPro.className}>{h2}</h2>
        </>
    );
}