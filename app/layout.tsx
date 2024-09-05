import "./global.css"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const style = {
        backgroundColor: "#061933",
        color: "#5A6064"
    }

    return (
        <html lang="en" style={style}>
            <body>{children}</body>
        </html>
    );
}