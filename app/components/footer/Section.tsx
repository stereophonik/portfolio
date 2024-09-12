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
                <LiComponent
                    className="className03VerticalLi"
                    key={footerContext["lis"][0]["key"]}>
                    <AComponent
                        href={footerContext["as"][footerContext["lis"].indexOf(footerContext["lis"][0])]["href"]}
                        target="_self">
                        {footerContext["as"][footerContext["lis"].indexOf(footerContext["lis"][0])]["content"]}
                    </AComponent>
                </LiComponent>
                <LiComponent
                    className="className03VerticalLi"
                    key={footerContext["lis"][1]["key"]}>
                    <AComponent
                        href={footerContext["as"][footerContext["lis"].indexOf(footerContext["lis"][1])]["href"]}
                        target="_self">
                        {footerContext["as"][footerContext["lis"].indexOf(footerContext["lis"][1])]["content"]}
                    </AComponent>
                </LiComponent>
                <LiComponent
                    className="className03VerticalLi"
                    key={footerContext["lis"][2]["key"]}>
                    <AComponent
                        href={footerContext["as"][footerContext["lis"].indexOf(footerContext["lis"][2])]["href"]}
                        target="_self">
                        {footerContext["as"][footerContext["lis"].indexOf(footerContext["lis"][2])]["content"]}
                    </AComponent>
                </LiComponent>
                <LiComponent
                    className="className03VerticalLi"
                    key={footerContext["lis"][3]["key"]}>
                    <AComponent
                        href={footerContext["as"][footerContext["lis"].indexOf(footerContext["lis"][3])]["href"]}
                        target="_self">
                        {footerContext["as"][footerContext["lis"].indexOf(footerContext["lis"][3])]["content"]}
                    </AComponent>
                </LiComponent>
                <LiComponent
                    className="className03VerticalLi"
                    key={footerContext["lis"][4]["key"]}>
                    <AComponent
                        href={footerContext["as"][footerContext["lis"].indexOf(footerContext["lis"][4])]["href"]}
                        target="_self">
                        {footerContext["as"][footerContext["lis"].indexOf(footerContext["lis"][4])]["content"]}
                    </AComponent>
                </LiComponent>
                <LiComponent
                    className="className03VerticalLi"
                    key="6">
                    <AComponent
                        href="mailto:nikolai00reyes@outlook.ph"
                        target="_blank">
                        Contact Me
                    </AComponent>
                </LiComponent>
                <LiComponent
                    className="className03VerticalLi"
                    key="7">
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
                    key="8">
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