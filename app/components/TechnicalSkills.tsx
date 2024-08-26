import ForClicking from "./ForClicking";

export default function TechnicalSkills({ isSmall, labelTechnicalSkills, technicalSkills, h1ClassName, h2ClassName }) {
    const h1FontSize = isSmall ? "1rem" : "3rem";
    const h2FontSize = isSmall ? "0.75rem" : "2rem";

    function createFromArray(array) {
        let string = "";
        array.map((element) => string += `${element}\n`);
        return string;
    }

    const genericTechnicalSkills = technicalSkills.map((technicalSkill) =>
        <li key={technicalSkills.indexOf(technicalSkill)}>
            {technicalSkill.generic} <ForClicking isSmall={isSmall} onClick={() => alert(createFromArray(technicalSkill.specifics))}>Click for specifics</ForClicking>
        </li>
    );

    return (
        <>
            <h1 className={h1ClassName} style={{
                    fontSize: h1FontSize
                }}>
                {labelTechnicalSkills}
            </h1>
                <ul style={{
                        listStyleType: "none"
                    }}>
                    <h2 className={h2ClassName} style={{
                            fontSize: h2FontSize
                        }}>
                        {genericTechnicalSkills}</h2>
                </ul>
        </>
    )
}