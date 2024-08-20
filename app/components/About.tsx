import Endings from "./Endings";
import Startings from "./Startings";
import TableBringings from "./TableBringings";
import TechnicalSkills from "./TechnicalSkills";

export default function About({ startings, tableBringings, technicalSkills, endings }) {
    return (
        <>
            <div style={{
                    backgroundColor: "white",
                    color: "#0464ff",
                    textAlign: "right"
                }}>
                <Startings
                    startings={startings}
                />
            </div>
            <div style={{
                    backgroundColor: "#0464ff",
                    color: "white"
                }}>
                <TableBringings
                    tableBringings={tableBringings}
                />
                <TechnicalSkills
                    technicalSkills={technicalSkills}
                />
            </div>
            <div style={{
                    backgroundColor: "white",
                    color: "#0464ff",
                    textAlign: "right"
                }}>
                <Endings
                    endings={endings}
                 />
            </div>
        </>
    );
}