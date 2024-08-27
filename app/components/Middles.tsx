import ForClickingComponent from "./ForClicking";

export default function MiddlesComponent({
    isSmall,
    tableBringingsLabel,
    tableBringingsContent,
    technicalSkillsLabel,
    technicalSkillsContent,
    h1ClassName,
    h2ClassName
}) {
    const h1FontSize = isSmall ? "1rem" : "3rem";
    const h2FontSize = isSmall ? "0.75rem" : "2rem";

    function createFromArray(array) {
        let string = "";
        array.map((element) => string += `${element}\n`);
        return string;
    }

    const genericTechnicalSkills = technicalSkillsContent.map((technicalSkill) =>
        <li key={technicalSkillsContent.indexOf(technicalSkill)}>
            {technicalSkill.generic} <ForClickingComponent isSmall={isSmall} onClick={() => alert(createFromArray(technicalSkill.specifics))}>Click for specifics</ForClickingComponent>
        </li>
    );

    return (
        <>
            <h1 className={h1ClassName} style={{
                    fontSize: h1FontSize
                }}>
                {tableBringingsLabel}
            </h1>
            <ul style={{
                    listStyleType: "none"
                }}>
                <h2 className={h2ClassName} style={{
                        fontSize: h2FontSize
                    }}>
                    {
                        tableBringingsContent.map((tableBringing) =>
                            <li>{tableBringing}</li>
                        )
                    }
                </h2>
            </ul>
            <h1 className={h1ClassName} style={{
                    fontSize: h1FontSize
                }}>
                {technicalSkillsLabel}
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