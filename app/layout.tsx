export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const style = {
        backgroundColor: "#2BC1AF",
        color: "#2677D9"
    }

    return (
        <html lang="en" style={style}>
            <body>{children}</body>
        </html>
    );
}