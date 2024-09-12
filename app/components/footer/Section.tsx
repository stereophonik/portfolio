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
                    className={footerContext["lis"][0]["className"]}
                    key={footerContext["lis"][0]["key"]}>
                    <AComponent
                        href={footerContext["as"][footerContext["lis"].indexOf(footerContext["lis"][0])]["href"]}
                        target="_self">
                        {footerContext["as"][footerContext["lis"].indexOf(footerContext["lis"][0])]["content"]}
                    </AComponent>
                </LiComponent>
                <LiComponent
                    className={footerContext["lis"][1]["className"]}
                    key={footerContext["lis"][1]["key"]}>
                    <AComponent
                        href={footerContext["as"][footerContext["lis"].indexOf(footerContext["lis"][1])]["href"]}
                        target="_self">
                        {footerContext["as"][footerContext["lis"].indexOf(footerContext["lis"][1])]["content"]}
                    </AComponent>
                </LiComponent>
                <LiComponent
                    className={footerContext["lis"][2]["className"]}
                    key={footerContext["lis"][2]["key"]}>
                    <AComponent
                        href={footerContext["as"][footerContext["lis"].indexOf(footerContext["lis"][2])]["href"]}
                        target="_self">
                        {footerContext["as"][footerContext["lis"].indexOf(footerContext["lis"][2])]["content"]}
                    </AComponent>
                </LiComponent>
                <LiComponent
                    className={footerContext["lis"][3]["className"]}
                    key={footerContext["lis"][3]["key"]}>
                    <AComponent
                        href={footerContext["as"][footerContext["lis"].indexOf(footerContext["lis"][3])]["href"]}
                        target="_self">
                        {footerContext["as"][footerContext["lis"].indexOf(footerContext["lis"][3])]["content"]}
                    </AComponent>
                </LiComponent>
                <LiComponent
                    className={footerContext["lis"][4]["className"]}
                    key={footerContext["lis"][4]["key"]}>
                    <AComponent
                        href={footerContext["as"][footerContext["lis"].indexOf(footerContext["lis"][4])]["href"]}
                        target="_self">
                        {footerContext["as"][footerContext["lis"].indexOf(footerContext["lis"][4])]["content"]}
                    </AComponent>
                </LiComponent>
                <LiComponent
                    className={footerContext["lis"][5]["className"]}
                    key={footerContext["lis"][5]["key"]}>
                    <AComponent
                        href={footerContext["as"][footerContext["lis"].indexOf(footerContext["lis"][5])]["href"]}
                        target="_blank">
                        {footerContext["as"][footerContext["lis"].indexOf(footerContext["lis"][5])]["content"]}
                    </AComponent>
                </LiComponent>
                <LiComponent
                    className={footerContext["lis"][6]["className"]}
                    key={footerContext["lis"][6]["key"]}>
                    <AComponent
                        href={footerContext["as"][footerContext["lis"].indexOf(footerContext["lis"][6])]["href"]}
                        target="_blank">
                        <ImgComponent
                            id="idAaImgFooter"
                            className="className02Img"
                            src="/github.png"
                            alt="Github PNG" />
                    </AComponent>
                </LiComponent>
                <LiComponent
                    className={footerContext["lis"][7]["className"]}
                    key={footerContext["lis"][7]["key"]}>
                    <AComponent
                        href={footerContext["as"][footerContext["lis"].indexOf(footerContext["lis"][7])]["href"]}
                        target="_blank">
                        <ImgComponent
                            id="idAbImgFooter"
                            className="className02Img"
                            src="/linkedin.png"
                            alt="LinkedIn PNG" />
                    </AComponent>
                </LiComponent>
            </UlComponent>
            <DivComponent
                id="idAaDivsFooter"
                className="className02Div">
                @2024 Nikolai Reyes - All Rights Reserved
            </DivComponent>
            <DivComponent
                id="idAbDivsFooter"
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