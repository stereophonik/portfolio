import { useContext } from "react";
import { SizingContext } from "../../contexts/Sizing";
import { ClassNamingContext } from "../../contexts/ClassNaming";
import { NonSpecificContext } from "../../contexts/NonSpecific";
import ForClickingComponent from "../ForClicking";

export default function MiddlesAboutComponent() {
    const sizingContext = useContext(SizingContext);
    const classNamingContext = useContext(ClassNamingContext);
    const nonSpecificContext = useContext(NonSpecificContext);

    function createFromArray(array) {
        let string = "";
        array.map((element) => string += `${element}\n`);
        return string;
    }

    const genericTechnicalSkills = nonSpecificContext["technicalSkillsContent"].map((technicalSkill) =>
        <li key={nonSpecificContext["technicalSkillsContent"].indexOf(technicalSkill)}>
            {technicalSkill.generic} <ForClickingComponent onClick={() => alert(createFromArray(technicalSkill.specifics))}>Click for specifics</ForClickingComponent>
        </li>
    );

    return (
        <>
            <div style={{
                    overflow: "hidden",
                    width: "100vw",
                    height: sizingContext["about"]["heights"][1],
                    backgroundColor: "#0464ff",
                    color: "white",
                    textAlign: "center"
                }}>
                <div style={{
                    height: "10%"
                }}></div>
                <h1 className={classNamingContext["h1"]} style={{
                        fontSize: sizingContext["h1Font"]
                    }}>
                    {nonSpecificContext["tableBringingsLabel"]}
                </h1>
                <ul style={{
                        listStyleType: "none"
                    }}>
                    <h2 className={classNamingContext["h2"]} style={{
                            fontSize: sizingContext["h2Font"]
                        }}>
                        {
                            nonSpecificContext["tableBringingsContent"].map((tableBringing) =>
                                <li>{tableBringing}</li>
                            )
                        }
                    </h2>
                </ul>
                <h1 className={classNamingContext["h1"]} style={{
                        fontSize: sizingContext["h1Font"]
                    }}>
                    {nonSpecificContext["technicalSkillsLabel"]}
                </h1>
                <ul style={{
                        listStyleType: "none"
                    }}>
                    <h2 className={classNamingContext["h2"]} style={{
                            fontSize: sizingContext["h2Font"]
                        }}>
                        {genericTechnicalSkills}</h2>
                </ul>
            </div>
        </>
    )
}