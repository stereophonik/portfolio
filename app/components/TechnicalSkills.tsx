export default function TechnicalSkills({ technicalSkills }) {
    const genericTechnicalSkills = technicalSkills.map((technicalSkill) =>
        <li className="aboutLi" key={technicalSkills.indexOf(technicalSkill)}>{technicalSkill.generic}</li>
    );

    return (
        <>
            <h2 className="aboutHeading">Technical Skills:</h2>
                <ul className="aboutUl">
                    {genericTechnicalSkills}
                </ul>
        </>
    )
}