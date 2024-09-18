export default function LiComponent({ keyValue, className, children }): React.ReactElement {
    return <li className={ className } key={ keyValue }>{ children }</li>
}