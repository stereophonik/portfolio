import { useContext } from "react";

import NavComponent from "../Nav";
import UlComponent from "../Ul";
import LiComponent from "../Li";
import AComponent from "../A";
import ImgComponent from "../Img";

import { TopContext } from "../../contexts/Top";

export default function NavTopComponent(): React.ReactElement {
    const topContext: {} = useContext(TopContext);

    return (
        <NavComponent
            id={topContext["nav"]["id"]}
            className={topContext["nav"]["className"]}>
            <UlComponent
                id={topContext["ul"]["id"]}
                className={topContext["ul"]["className"]}>
                <LiComponent
                    className={topContext["lis"][0]["className"]}
                    key={topContext["lis"][0]["key"]}>
                    <AComponent
                        href={topContext["as"][0]["href"]}
                        target="_self">
                        {topContext["as"][0]["content"]}
                    </AComponent>
                </LiComponent>
                <LiComponent
                    className={topContext["lis"][1]["className"]}
                    key={topContext["lis"][1]["key"]}>
                    <AComponent
                        href={topContext["as"][1]["href"]}
                        target="_self">
                        {topContext["as"][1]["content"]}
                    </AComponent>
                </LiComponent>
                <LiComponent
                    className={topContext["lis"][2]["className"]}
                    key={topContext["lis"][2]["key"]}>
                    <AComponent
                        href={topContext["as"][2]["href"]}
                        target="_self">
                        {topContext["as"][2]["content"]}
                    </AComponent>
                </LiComponent>
                <LiComponent
                    className={topContext["lis"][3]["className"]}
                    key={topContext["lis"][3]["key"]}>
                    <AComponent
                        href={topContext["as"][3]["href"]}
                        target="_self">
                        {topContext["as"][3]["content"]}
                    </AComponent>
                </LiComponent>
                <LiComponent
                    className={topContext["lis"][4]["className"]}
                    key={topContext["lis"][4]["key"]}>
                    <AComponent
                        href={topContext["as"][4]["href"]}
                        target="_self">
                        {topContext["as"][4]["content"]}
                    </AComponent>
                </LiComponent>
                <LiComponent
                    className={topContext["lis"][5]["className"]}
                    key={topContext["lis"][5]["key"]}>
                    <AComponent
                        href={topContext["as"][5]["href"]}
                        target="_blank">
                        {topContext["as"][5]["content"]}
                    </AComponent>
                </LiComponent>
                <LiComponent
                    className={topContext["lis"][6]["className"]}
                    key={topContext["lis"][6]["key"]}>
                    <AComponent
                        href={topContext["as"][6]["href"]}
                        target="_blank">
                        <ImgComponent
                            id={topContext["imgs"][0]["id"]}
                            className={topContext["imgs"][0]["className"]}
                            src={topContext["imgs"][0]["src"]}
                            alt={topContext["imgs"][0]["alt"]} />
                    </AComponent>
                </LiComponent>
                <LiComponent
                    className={topContext["lis"][7]["className"]}
                    key={topContext["lis"][7]["key"]}>
                    <AComponent
                        href={topContext["as"][7]["href"]}
                        target="_blank">
                        <ImgComponent
                            id={topContext["imgs"][1]["id"]}
                            className={topContext["imgs"][1]["className"]}
                            src={topContext["imgs"][1]["src"]}
                            alt={topContext["imgs"][1]["alt"]} />
                    </AComponent>
                </LiComponent>
            </UlComponent>
        </NavComponent>
    );
}