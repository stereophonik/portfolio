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
                        href={footerContext["as"][0]["href"]}
                        target="_self">
                        {footerContext["as"][0]["content"]}
                    </AComponent>
                </LiComponent>
                <LiComponent
                    className={footerContext["lis"][1]["className"]}
                    key={footerContext["lis"][1]["key"]}>
                    <AComponent
                        href={footerContext["as"][1]["href"]}
                        target="_self">
                        {footerContext["as"][1]["content"]}
                    </AComponent>
                </LiComponent>
                <LiComponent
                    className={footerContext["lis"][2]["className"]}
                    key={footerContext["lis"][2]["key"]}>
                    <AComponent
                        href={footerContext["as"][2]["href"]}
                        target="_self">
                        {footerContext["as"][2]["content"]}
                    </AComponent>
                </LiComponent>
                <LiComponent
                    className={footerContext["lis"][3]["className"]}
                    key={footerContext["lis"][3]["key"]}>
                    <AComponent
                        href={footerContext["as"][3]["href"]}
                        target="_self">
                        {footerContext["as"][3]["content"]}
                    </AComponent>
                </LiComponent>
                <LiComponent
                    className={footerContext["lis"][4]["className"]}
                    key={footerContext["lis"][4]["key"]}>
                    <AComponent
                        href={footerContext["as"][4]["href"]}
                        target="_self">
                        {footerContext["as"][4]["content"]}
                    </AComponent>
                </LiComponent>
                <LiComponent
                    className={footerContext["lis"][5]["className"]}
                    key={footerContext["lis"][5]["key"]}>
                    <AComponent
                        href={footerContext["as"][5]["href"]}
                        target="_blank">
                        {footerContext["as"][5]["content"]}
                    </AComponent>
                </LiComponent>
                <LiComponent
                    className={footerContext["lis"][6]["className"]}
                    key={footerContext["lis"][6]["key"]}>
                    <AComponent
                        href={footerContext["as"][6]["href"]}
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
                        href={footerContext["as"][7]["href"]}
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
                id={footerContext["divs"][0]["id"]}
                className={footerContext["divs"][0]["className"]}>
                {footerContext["divs"][0]["content"]}
            </DivComponent>
            <DivComponent
                id={footerContext["divs"][1]["id"]}
                className={footerContext["divs"][1]["className"]}>
                <AComponent
                    href={footerContext["a"]["href"]}
                    target="_self">
                    {footerContext["a"]["content"]}
                </AComponent>
            </DivComponent>
        </SectionComponent>
    );
}