import { Anonymous_Pro } from "next/font/google";
import { Roboto_Mono } from "next/font/google";
import ForClicking from "./ForClicking";

const anonymousPro = Anonymous_Pro({
    weight: "400",
    subsets: ["latin"]
})

const robotoMono = Roboto_Mono({
    weight: "700",
    subsets: ["latin"]
})

export default function TechnicalSkills({ isSmall, labelTechnicalSkills, technicalSkills }) {
    const h1FontSize = isSmall ? "1rem" : "3rem";
    const h2FontSize = isSmall ? "0.75rem" : "2rem";

    function createFromArray(array) {
        let string = "";
        array.map((element) => string += `${element}\n`);
        return string;
    }

    const genericTechnicalSkills = technicalSkills.map((technicalSkill) =>
        <li className={anonymousPro.className} key={technicalSkills.indexOf(technicalSkill)}>
            {technicalSkill.generic} <ForClicking isSmall={isSmall} onClick={() => alert(createFromArray(technicalSkill.specifics))}>Click for specifics</ForClicking>
        </li>
    );

    return (
        <>
            <h1 className={robotoMono.className} style={{
                    fontSize: h1FontSize
                }}>
                {labelTechnicalSkills}
            </h1>
                <ul className={anonymousPro.className} style={{
                        listStyleType: "none"
                    }}>
                    <h2 style={{
                            fontSize: h2FontSize
                        }}>
                        {genericTechnicalSkills}</h2>
                </ul>
        </>
    )
}