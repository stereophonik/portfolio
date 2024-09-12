import { useContext } from "react";

import SectionComponent from "../Section";
import UlComponent from "../Ul";
import LiComponent from "../Li";
import AComponent from "../A";
import ImgComponent from "../Img";

import { NavigationContext } from "../../contexts/Navigation";
import DivComponent from "../Div";

export default function SectionFooterComponent(): React.ReactElement {
    const navigationContext: {} = useContext(NavigationContext);

    return (
        <SectionComponent
            id={navigationContext["nav"]["id"]}
            className="classNameClassCSection">
            <UlComponent
                id={navigationContext["ul"]["id"]}
                className={navigationContext["ul"]["className"]}>
                {
                    navigationContext["lis"].map((li: { [x: string]: any; }) =>
                        <LiComponent
                            className="className03VerticalLi"
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
                    className="className03VerticalLi"
                    key="5">
                    <AComponent
                        href="mailto:nikolai00reyes@outlook.ph"
                        target="_blank">
                        Contact Me
                    </AComponent>
                </li>
                <li
                    className="className03VerticalLi"
                    key="6">
                    <AComponent
                        href="https://github.com/stereophonik/portfolio"
                        target="_blank">
                        <ImgComponent
                            id="id0102ImageFooter"
                            className="className02Image"
                            src="/github.png"
                            alt="Github PNG" />
                    </AComponent>
                </li>
                <li
                    className="className03VerticalLi"
                    key="7">
                    <AComponent
                        href="https://www.linkedin.com/in/nikolai-reyes"
                        target="_blank">
                        <ImgComponent
                            id="id0202ImageFooter"
                            className="className02Image"
                            src="/linkedin.png"
                            alt="LinkedIn PNG" />
                    </AComponent>
                </li>
            </UlComponent>
            <DivComponent
                id="id02DivFooter"
                className="className02Div">
                @2024 Nikolai Reyes - All Rights Reserved
            </DivComponent>
            <DivComponent
                id="id02DivFooter"
                className="className02Div">
                <AComponent
                    href="#idNavNavigation"
                    target="_self">
                    Back to Top
                </AComponent>
            </DivComponent>
        </SectionComponent>
    );
}