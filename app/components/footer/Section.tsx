import { useContext } from "react";

import SectionComponent from "../Section";
import UlComponent from "../Ul";
import LiComponent from "../Li";
import AComponent from "../A";

import { NavigationContext } from "../../contexts/Navigation";
import DivComponent from "../Div";

export default function SectionFooterComponent(): React.ReactElement {
    const navigationContext: {} = useContext(NavigationContext);

    return (
        <SectionComponent
            id={navigationContext["nav"]["id"]}
            className="classSectionFooter">
            <UlComponent
                id={navigationContext["ul"]["id"]}
                className={navigationContext["ul"]["className"]}>
                {
                    navigationContext["lis"].map((li: { [x: string]: any; }) =>
                        <LiComponent
                            className="classNameHorizontalLiFooter"
                            key={li["key"]}>
                            <AComponent
                                href={navigationContext["as"][navigationContext["lis"].indexOf(li)]["href"]}
                                target="_self">
                                {navigationContext["as"][navigationContext["lis"].indexOf(li)]["content"]}
                            </AComponent>
                        </LiComponent>
                    )
                }
                <li
                    className="classNameHorizontalLiFooter"
                    key="5">
                    <AComponent
                        href="mailto:nikolai00reyes@outlook.ph"
                        target="_blank">
                        Contact Me
                    </AComponent>
                </li>
                <li
                    className="classNameHorizontalLiFooter"
                    key="6">
                    <AComponent
                        href="https://github.com/stereophonik/portfolio"
                        target="_blank">
                        <img src="/github.png" style={{
                            width: "30px",
                            height: "30px"
                        }}/>
                    </AComponent>
                </li>
                <li
                    className="classNameHorizontalLiFooter"
                    key="7">
                    <AComponent
                        href="https://www.linkedin.com/in/nikolai-reyes"
                        target="_blank">
                        <img src="/linkedin.png" style={{
                            width: "30px",
                            height: "30px"
                        }}/>
                    </AComponent>
                </li>
            </UlComponent>
            <DivComponent
                id="idDivFooter"
                className="classNameDivFooter">
                @2024 Nikolai Reyes - All Rights Reserved
            </DivComponent>
            <DivComponent
                id="idDivFooter"
                className="classNameDivFooter">
                <AComponent
                    href="#idNavNavigation"
                    target="_self">
                    Back to Top
                </AComponent>
            </DivComponent>
        </SectionComponent>
    );
}