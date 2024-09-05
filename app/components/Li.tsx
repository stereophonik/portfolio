export default function LiComponent({ key, style, children }): React.ReactElement {
    return <li key={key} style={style}>{children}</li>
}