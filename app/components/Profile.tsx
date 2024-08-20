import { Anonymous_Pro } from "next/font/google";

const anonymousPro = Anonymous_Pro({
    weight: "400",
    subsets: ["latin"]
})

export default function Profile({ src, alt, h1, h2 }) {
    return (
        <>
            <div style={{
                    display: "grid",
                    rowGap: "0",
                    gridTemplateColumns: "repeat(5, 1fr)"
                }}>
                <img className="profileImg" src={src} alt={alt} style={{
                    gridColumn: "1"
                }}/>
                <div>
                    <h1 className={anonymousPro.className} style={{
                        gridColumn: "2"
                    }}>{h1}</h1>
                    <br />
                    <h2 className={anonymousPro.className} style={{
                        gridColumn: "2"
                    }}>{h2}</h2>
                </div>
            </div>
        </>
    );
}