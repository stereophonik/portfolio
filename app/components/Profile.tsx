import { Anonymous_Pro } from "next/font/google";
import { Roboto_Mono } from "next/font/google";

const anonymousPro = Anonymous_Pro({
    weight: "700",
    subsets: ["latin"]
})

const robotoMono = Roboto_Mono({
    weight: "700",
    subsets: ["latin"]
})

export default function Profile({ src, alt, h1, h2 }) {
    return (
        <>
            <div style={{
                    overflow: "hidden",
                    display: "grid",
                    rowGap: "0",
                    columnGap: "1%",
                    gridTemplateColumns: "5% 25% 70%",
                    width: "100vw",
                    height: "25vw"
                }}>
                <div style={{
                    height: "100%"
                }}></div>
                <img className="profileImg" src={src} alt={alt} style={{
                    gridColumn: "2",
                    width: "auto",
                    height: "auto",
                    maxWidth: "100%",
                    maxHeight: "100%"
                }}/>
                <div>
                <div style={{
                    height: "30%"
                }}></div>
                    <h1 className={robotoMono.className} style={{
                        gridColumn: "3"
                    }}>{h1}</h1>
                    <h2 className={anonymousPro.className} style={{
                        gridColumn: "3"
                    }}>{h2}</h2>
                </div>
            </div>
        </>
    );
}