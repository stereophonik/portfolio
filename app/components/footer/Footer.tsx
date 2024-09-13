import { useContext } from "react";

import FooterComponent from "../Footer";
import UlComponent from "../Ul";
import LiComponent from "../Li";
import AComponent from "../A";
import ImgComponent from "../Img";
import DivComponent from "../Div";

import { FooterContext } from "../../contexts/Footer";

export default function FooterFooterComponent(): React.ReactElement {
    const footerContext: {} = useContext(FooterContext);

    return (
        <FooterComponent
            id={footerContext["footer"]["id"]}
            className={footerContext["footer"]["className"]}>
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
                            id={footerContext["imgs"][0]["id"]}
                            className={footerContext["imgs"][0]["className"]}
                            src={footerContext["imgs"][0]["src"]}
                            alt={footerContext["imgs"][0]["alt"]} />
                    </AComponent>
                </LiComponent>
                <LiComponent
                    className={footerContext["lis"][7]["className"]}
                    key={footerContext["lis"][7]["key"]}>
                    <AComponent
                        href={footerContext["as"][7]["href"]}
                        target="_blank">
                        <ImgComponent
                            id={footerContext["imgs"][1]["id"]}
                            className={footerContext["imgs"][1]["className"]}
                            src={footerContext["imgs"][1]["src"]}
                            alt={footerContext["imgs"][1]["alt"]} />
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
        </FooterComponent>
    );
}