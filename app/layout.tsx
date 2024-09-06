import "./global.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const style = {
        backgroundColor: "#2C2F37",
        color: "#DA6E2B"
    }

    return (
        <html lang="en" style={style}>
            <body>{children}</body>
        </html>
    );
}