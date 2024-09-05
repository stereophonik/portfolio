export default function DivComponent({ id, style, children }): React.ReactElement {
    return <div id={id} style={style}>{children}</div>;
}