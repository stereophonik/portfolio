export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const style = {
        backgroundColor: "#0464ff",
        color: "white"
    }

    return (
        <html lang="en" style={style}>
            <body>{children}</body>
        </html>
    );
}