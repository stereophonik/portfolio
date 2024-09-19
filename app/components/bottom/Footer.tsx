import { useContext } from "react";

import FooterComponent from "../Footer";
import UlComponent from "../Ul";
import LiComponent from "../Li";
import AComponent from "../A";
import ImgComponent from "../Img";
import DivComponent from "../Div";

import { BottomContext } from "../../contexts/Bottom";

export default function FooterBottomComponent(): React.ReactElement {
    const bottomContext: {} = useContext(BottomContext);

    return (
        <FooterComponent
            id={bottomContext["footer"]["id"]}
            className={bottomContext["footer"]["className"]}>
            <DivComponent
                id={bottomContext["divs"][0]["id"]}
                className={bottomContext["divs"][0]["className"]}>
                {bottomContext["divs"][0]["content"]}
            </DivComponent>
            <DivComponent
                id={bottomContext["divs"][1]["id"]}
                className={bottomContext["divs"][1]["className"]}>
                <AComponent
                    href={bottomContext["a"]["href"]}
                    target={bottomContext["a"]["target"]}>
                    {bottomContext["a"]["content"]}
                </AComponent>
            </DivComponent>
            <UlComponent
                id={bottomContext["ul"]["id"]}
                className={bottomContext["ul"]["className"]}>
                <LiComponent
                    className={bottomContext["lis"][0]["className"]}
                    keyValue={bottomContext["lis"][0]["key"]}>
                    <AComponent
                        href={bottomContext["as"][0]["href"]}
                        target={bottomContext["as"][0]["target"]}>
                        <ImgComponent
                            id={bottomContext["imgs"][0]["id"]}
                            className={bottomContext["imgs"][0]["className"]}
                            src={bottomContext["imgs"][0]["src"]}
                            alt={bottomContext["imgs"][0]["alt"]} />
                    </AComponent>
                </LiComponent>
                <LiComponent
                    className={bottomContext["lis"][1]["className"]}
                    keyValue={bottomContext["lis"][1]["key"]}>
                    <AComponent
                        href={bottomContext["as"][1]["href"]}
                        target={bottomContext["as"][1]["target"]}>
                        <ImgComponent
                            id={bottomContext["imgs"][1]["id"]}
                            className={bottomContext["imgs"][1]["className"]}
                            src={bottomContext["imgs"][1]["src"]}
                            alt={bottomContext["imgs"][1]["alt"]} />
                    </AComponent>
                </LiComponent>
            </UlComponent>
        </FooterComponent>
    );
}