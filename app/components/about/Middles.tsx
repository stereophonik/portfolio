import { useContext } from "react";
import { ClassNameContext } from "../../contexts/ClassName";
import { NonSpecificContext } from "../../contexts/NonSpecific";
import ForClickingComponent from "../ForClicking";

export default function MiddlesAboutComponent({ isSmall }) {
    const classNameContext = useContext(ClassNameContext);
    const nonSpecificContext = useContext(NonSpecificContext);
    const h1FontSize = isSmall ? "1rem" : "3rem";
    const h2FontSize = isSmall ? "0.75rem" : "2rem";

    function createFromArray(array) {
        let string = "";
        array.map((element) => string += `${element}\n`);
        return string;
    }

    const genericTechnicalSkills = nonSpecificContext["technicalSkillsContent"].map((technicalSkill) =>
        <li key={nonSpecificContext["technicalSkillsContent"].indexOf(technicalSkill)}>
            {technicalSkill.generic} <ForClickingComponent isSmall={isSmall} onClick={() => alert(createFromArray(technicalSkill.specifics))}>Click for specifics</ForClickingComponent>
        </li>
    );

    return (
        <>
            <h1 className={classNameContext["h1ClassName"]} style={{
                    fontSize: h1FontSize
                }}>
                {nonSpecificContext["tableBringingsLabel"]}
            </h1>
            <ul style={{
                    listStyleType: "none"
                }}>
                <h2 className={classNameContext["h2ClassName"]} style={{
                        fontSize: h2FontSize
                    }}>
                    {
                        nonSpecificContext["tableBringingsContent"].map((tableBringing) =>
                            <li>{tableBringing}</li>
                        )
                    }
                </h2>
            </ul>
            <h1 className={classNameContext["h1ClassName"]} style={{
                    fontSize: h1FontSize
                }}>
                {nonSpecificContext["technicalSkillsLabel"]}
            </h1>
            <ul style={{
                    listStyleType: "none"
                }}>
                <h2 className={classNameContext["h2ClassName"]} style={{
                        fontSize: h2FontSize
                    }}>
                    {genericTechnicalSkills}</h2>
            </ul>
        </>
    )
}