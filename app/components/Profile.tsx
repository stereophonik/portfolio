import { Anonymous_Pro } from "next/font/google";
import { Roboto_Mono } from "next/font/google";
import Image from "next/image";

const anonymousPro = Anonymous_Pro({
    weight: "400",
    subsets: ["latin"]
})

const robotoMono = Roboto_Mono({
    weight: "700",
    subsets: ["latin"]
})

export default function Profile({ isSmall, src, alt, h1, h2 }) {
    const height = isSmall ? "50vw" : "25vw";
    const h1FontSize = isSmall ? "1rem" : "3rem";
    const h2FontSize = isSmall ? "0.75rem" : "2rem";
    const imageWidth = isSmall ? 87 : 261
    const imageHeight = isSmall ? 116 : 349

    return (
        <>
            <div style={{
                    overflow: "hidden",
                    display: "grid",
                    rowGap: "0",
                    columnGap: "1%",
                    gridTemplateColumns: "5% 25% 70%",
                    width: "100vw",
                    height: height,
                    textAlign: "center"
                }}>
                <div style={{
                        gridColumn: "1",
                        height: "100%"
                    }}></div>
                <Image className="profileImg"
                    src={src}
                    alt={alt}
                    width={imageWidth}
                    height={imageHeight}
                    style={{
                        gridColumn: "2",
                        maxWidth: "100%",
                        maxHeight: "100%"
                    }}/>
                <div>
                <div style={{
                        height: "30%"
                    }}></div>
                    <h1 className={robotoMono.className} style={{
                            gridColumn: "3",
                            fontSize: h1FontSize
                        }}>
                        {h1}
                    </h1>
                    <h2 className={anonymousPro.className} style={{
                            gridColumn: "3",
                            fontSize: h2FontSize
                        }}>
                        {h2}
                    </h2>
                </div>
            </div>
        </>
    );
}