export default function NavComponent({ className, style, children }) {
    return <nav className={className} style={style}>{children}</nav>;
}