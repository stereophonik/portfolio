export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const style = {
        backgroundColor: "#006400",
        color: "white"
    }

    return (
        <html lang="en" style={style}>
            <body>{children}</body>
        </html>
    );
}