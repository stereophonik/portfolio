import "./global.css"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const style = {
        backgroundColor: "#B0622C",
        color: "#E2DDD1"
    }

    return (
        <html lang="en" style={style}>
            <body>{children}</body>
        </html>
    );
}