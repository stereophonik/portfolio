import NavComponent from "../Nav";

export default function PrimaryNavComponent() {
    return (
        <NavComponent className="" style={{}}>
            <ul>
                <li style={{
                    display: "inline-block"
                }}>
                    <a href="#startings">Startings</a>
                </li>
                <li style={{
                    color: "#006400",
                    display: "inline-block"
                }}>
                    -------
                </li>
                <li style={{
                    display: "inline-block"
                }}>
                    <a href="#middles">Middles</a>
                </li>
                <li style={{
                    color: "#006400",
                    display: "inline-block"
                }}>
                    -------
                </li>
                <li style={{
                    display: "inline-block"
                }}>
                    <a href="#endings">Endings</a>
                </li>
            </ul>
        </NavComponent>
    );
}