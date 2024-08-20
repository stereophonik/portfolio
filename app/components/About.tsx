import TableBringings from "./TableBringings";
import TechnicalSkills from "./TechnicalSkills";

export default function About({ startings, tableBringings, technicalSkills, endings }) {
    return (
        <>
            <p className="aboutP">{startings[0]}</p>
            <p className="aboutP">{startings[1]}</p>
            <div style={{
                    backgroundColor: "white",
                    color: "#0464ff"
                }}>
                <TableBringings
                    tableBringings={tableBringings}
                />
                <TechnicalSkills
                    technicalSkills={technicalSkills}
                />
            </div>
            <p className="aboutP">{endings[0]}</p>
            <p className="aboutP">{endings[1]}<br />{endings[2]}</p>
        </>
    );
}