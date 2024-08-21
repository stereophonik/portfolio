import Endings from "./Endings";
import Startings from "./Startings";
import TableBringings from "./TableBringings";
import TechnicalSkills from "./TechnicalSkills";

export default function About({ startings, tableBringings, technicalSkills, endings }) {
    return (
        <>
            <div style={{
                    overflow: "hidden",
                    width: "100vw",
                    height: "20vw",
                    backgroundColor: "white",
                    color: "#0464ff",
                    textAlign: "center"
                }}>
                <div style={{
                        height: "10%"
                    }}></div>
                <Startings
                    startings={startings}
                />
            </div>
            <div style={{
                    overflow: "hidden",
                    width: "100vw",
                    height: "30vw",
                    backgroundColor: "#0464ff",
                    color: "white",
                    textAlign: "center"
                }}>
                <div style={{
                        height: "10%"
                    }}></div>
                <TableBringings
                    tableBringings={tableBringings}
                />
                <TechnicalSkills
                    technicalSkills={technicalSkills}
                />
            </div>
            <div style={{
                    overflow: "hidden",
                    width: "100vw",
                    height: "15vw",
                    backgroundColor: "white",
                    color: "#0464ff",
                    textAlign: "center"
                }}>
                <div style={{
                        height: "10%"
                    }}></div>
                <Endings
                    endings={endings}
                 />
            </div>
        </>
    );
}