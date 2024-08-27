import { useContext } from "react";
import { SizingContext } from "../../contexts/Sizing";
import { ClassNamingContext } from "../../contexts/ClassNaming";
import { NonSpecificContext } from "../../contexts/NonSpecific";
import ForClickingComponent from "../ForClicking";

export default function MiddlesAboutComponent() {
    const sizeContext = useContext(SizingContext);
    const classNameContext = useContext(ClassNamingContext);
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
            <h1 className={classNameContext["h1ClassName"]} style={{
                    fontSize: sizeContext["h1FontSize"]
                }}>
                {nonSpecificContext["tableBringingsLabel"]}
            </h1>
            <ul style={{
                    listStyleType: "none"
                }}>
                <h2 className={classNameContext["h2ClassName"]} style={{
                        fontSize: sizeContext["h2FontSize"]
                    }}>
                    {
                        nonSpecificContext["tableBringingsContent"].map((tableBringing) =>
                            <li>{tableBringing}</li>
                        )
                    }
                </h2>
            </ul>
            <h1 className={classNameContext["h1ClassName"]} style={{
                    fontSize: sizeContext["h1FontSize"]
                }}>
                {nonSpecificContext["technicalSkillsLabel"]}
            </h1>
            <ul style={{
                    listStyleType: "none"
                }}>
                <h2 className={classNameContext["h2ClassName"]} style={{
                        fontSize: sizeContext["h2FontSize"]
                    }}>
                    {genericTechnicalSkills}</h2>
            </ul>
        </>
    )
}