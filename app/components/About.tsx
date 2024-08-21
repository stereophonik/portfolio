import Endings from "./Endings";
import Startings from "./Startings";
import TableBringings from "./TableBringings";
import TechnicalSkills from "./TechnicalSkills";

const isSmall = window.innerWidth <= 480;
const heights = [
    isSmall ? "40vw" : "20vw",
    isSmall ? "70vw" : "30vw",
    isSmall ? "30vw" : "15vw"
]

export default function About({ startings, tableBringings, technicalSkills, endings }) {
    return (
        <>
            <div style={{
                    overflow: "hidden",
                    width: "100vw",
                    height: heights[0],
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
                    height: heights[1],
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
                    height: heights[2],
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