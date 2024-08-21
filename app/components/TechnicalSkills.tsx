import { Anonymous_Pro } from "next/font/google";

const anonymousPro = Anonymous_Pro({
    weight: "400",
    subsets: ["latin"]
})

export default function TechnicalSkills({ technicalSkills }) {
    const genericTechnicalSkills = technicalSkills.map((technicalSkill) =>
        <li className={anonymousPro.className} key={technicalSkills.indexOf(technicalSkill)}>
            {technicalSkill.generic}
        </li>
    );

    return (
        <>
            <h1 className={anonymousPro.className}>Technical Skills:</h1>
                <ul className={anonymousPro.className} style={{
                        listStyleType: "none"
                    }}>
                    <h2>{genericTechnicalSkills}</h2>
                </ul>
        </>
    )
}