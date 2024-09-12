import { useContext } from "react";

import SectionComponent from "../Section";
import UlComponent from "../Ul";
import LiComponent from "../Li";
import AComponent from "../A";
import ImgComponent from "../Img";
import DivComponent from "../Div";

import { FooterContext } from "../../contexts/Footer";

export default function SectionFooterComponent(): React.ReactElement {
    const footerContext: {} = useContext(FooterContext);

    return (
        <SectionComponent
            id={footerContext["section"]["id"]}
            className={footerContext["section"]["className"]}>
            <UlComponent
                id={footerContext["ul"]["id"]}
                className={footerContext["ul"]["className"]}>
                {
                    footerContext["lis"].map((li: { [x: string]: any; }) =>
                        <LiComponent
                            className="className03VerticalLi"
                            key={li["key"]}>
                            <AComponent
                                href={footerContext["as"][footerContext["lis"].indexOf(li)]["href"]}
                                target="_self">
                                {footerContext["as"][footerContext["lis"].indexOf(li)]["content"]}
                            </AComponent>
                        </LiComponent>
                    )
                }
                <LiComponent
                    className="className03VerticalLi"
                    key="5">
                    <AComponent
                        href="mailto:nikolai00reyes@outlook.ph"
                        target="_blank">
                        Contact Me
                    </AComponent>
                </LiComponent>
                <LiComponent
                    className="className03VerticalLi"
                    key="6">
                    <AComponent
                        href="https://github.com/stereophonik/portfolio"
                        target="_blank">
                        <ImgComponent
                            id="idAaImageFooter"
                            className="className02Image"
                            src="/github.png"
                            alt="Github PNG" />
                    </AComponent>
                </LiComponent>
                <LiComponent
                    className="className03VerticalLi"
                    key="7">
                    <AComponent
                        href="https://www.linkedin.com/in/nikolai-reyes"
                        target="_blank">
                        <ImgComponent
                            id="idAbImageFooter"
                            className="className02Image"
                            src="/linkedin.png"
                            alt="LinkedIn PNG" />
                    </AComponent>
                </LiComponent>
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