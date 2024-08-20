export default function TableBringings({ tableBringings }) {
    return (
        <>
            <h2 className="aboutHeading">What I bring to the table:</h2>
            <ul className="aboutUl">
                {
                    tableBringings.map((tableBringing) =>
                        <li className="aboutLi">{tableBringing}</li>
                    )
                }
            </ul>
        </>
    )
}