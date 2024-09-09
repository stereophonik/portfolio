export default function AComponent({ href, children }): React.ReactElement {
    return <a href={href}>{children}</a>
}