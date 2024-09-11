export default function AComponent({ href, target, children }): React.ReactElement {
    return <a href={href} target={target}>{children}</a>
}