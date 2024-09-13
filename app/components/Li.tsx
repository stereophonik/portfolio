export default function LiComponent({ key, className, children }): React.ReactElement {
    return <li className={ className } key={ key }>{ children }</li>
}