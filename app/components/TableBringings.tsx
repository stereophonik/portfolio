export default function TableBringingsComponent({ isSmall, labelTableBringings, tableBringings, h1ClassName, h2ClassName }) {
    const h1FontSize = isSmall ? "1rem" : "3rem";
    const h2FontSize = isSmall ? "0.75rem" : "2rem";

    return (
        <>
            <h1 className={h1ClassName} style={{
                    fontSize: h1FontSize
                }}>
                {labelTableBringings}
            </h1>
            <ul style={{
                    listStyleType: "none"
                }}>
                <h2 className={h2ClassName} style={{
                        fontSize: h2FontSize
                    }}>
                    {
                        tableBringings.map((tableBringing) =>
                            <li>{tableBringing}</li>
                        )
                    }
                </h2>
            </ul>
        </>
    )
}