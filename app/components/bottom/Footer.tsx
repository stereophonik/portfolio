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
            <UlComponent
                id={bottomContext["ul"]["id"]}
                className={bottomContext["ul"]["className"]}>
                <LiComponent
                    className={bottomContext["lis"][0]["className"]}
                    key={bottomContext["lis"][0]["key"]}>
                    <AComponent
                        href={bottomContext["as"][0]["href"]}
                        target="_self">
                        {bottomContext["as"][0]["content"]}
                    </AComponent>
                </LiComponent>
                <LiComponent
                    className={bottomContext["lis"][1]["className"]}
                    key={bottomContext["lis"][1]["key"]}>
                    <AComponent
                        href={bottomContext["as"][1]["href"]}
                        target="_self">
                        {bottomContext["as"][1]["content"]}
                    </AComponent>
                </LiComponent>
                <LiComponent
                    className={bottomContext["lis"][2]["className"]}
                    key={bottomContext["lis"][2]["key"]}>
                    <AComponent
                        href={bottomContext["as"][2]["href"]}
                        target="_self">
                        {bottomContext["as"][2]["content"]}
                    </AComponent>
                </LiComponent>
                <LiComponent
                    className={bottomContext["lis"][3]["className"]}
                    key={bottomContext["lis"][3]["key"]}>
                    <AComponent
                        href={bottomContext["as"][3]["href"]}
                        target="_self">
                        {bottomContext["as"][3]["content"]}
                    </AComponent>
                </LiComponent>
                <LiComponent
                    className={bottomContext["lis"][4]["className"]}
                    key={bottomContext["lis"][4]["key"]}>
                    <AComponent
                        href={bottomContext["as"][4]["href"]}
                        target="_self">
                        {bottomContext["as"][4]["content"]}
                    </AComponent>
                </LiComponent>
                <LiComponent
                    className={bottomContext["lis"][5]["className"]}
                    key={bottomContext["lis"][5]["key"]}>
                    <AComponent
                        href={bottomContext["as"][5]["href"]}
                        target="_blank">
                        {bottomContext["as"][5]["content"]}
                    </AComponent>
                </LiComponent>
                <LiComponent
                    className={bottomContext["lis"][6]["className"]}
                    key={bottomContext["lis"][6]["key"]}>
                    <AComponent
                        href={bottomContext["as"][6]["href"]}
                        target="_blank">
                        <ImgComponent
                            id={bottomContext["imgs"][0]["id"]}
                            className={bottomContext["imgs"][0]["className"]}
                            src={bottomContext["imgs"][0]["src"]}
                            alt={bottomContext["imgs"][0]["alt"]} />
                    </AComponent>
                </LiComponent>
                <LiComponent
                    className={bottomContext["lis"][7]["className"]}
                    key={bottomContext["lis"][7]["key"]}>
                    <AComponent
                        href={bottomContext["as"][7]["href"]}
                        target="_blank">
                        <ImgComponent
                            id={bottomContext["imgs"][1]["id"]}
                            className={bottomContext["imgs"][1]["className"]}
                            src={bottomContext["imgs"][1]["src"]}
                            alt={bottomContext["imgs"][1]["alt"]} />
                    </AComponent>
                </LiComponent>
            </UlComponent>
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
                    target="_self">
                    {bottomContext["a"]["content"]}
                </AComponent>
            </DivComponent>
        </FooterComponent>
    );
}