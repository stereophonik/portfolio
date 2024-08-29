export default function LiComponent({ key, style, children }) {
    return <li key={key} style={style}>{children}</li>
}