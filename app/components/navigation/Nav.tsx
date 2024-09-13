import { useContext } from "react";

import NavComponent from "../Nav";
import UlComponent from "../Ul";
import LiComponent from "../Li";
import AComponent from "../A";
import ImgComponent from "../Img";

import { NavigationContext } from "../../contexts/Navigation";

export default function NavNavigationComponent(): React.ReactElement {
    const navigationContext: {} = useContext(NavigationContext);

    return (
        <NavComponent
            id={navigationContext["nav"]["id"]}
            className={navigationContext["nav"]["className"]}>
            <UlComponent
                id={navigationContext["ul"]["id"]}
                className={navigationContext["ul"]["className"]}>
                <LiComponent
                    className={navigationContext["lis"][0]["className"]}
                    key={navigationContext["lis"][0]["key"]}>
                    <AComponent
                        href={navigationContext["as"][0]["href"]}
                        target="_self">
                        {navigationContext["as"][0]["content"]}
                    </AComponent>
                </LiComponent>
                <LiComponent
                    className={navigationContext["lis"][1]["className"]}
                    key={navigationContext["lis"][1]["key"]}>
                    <AComponent
                        href={navigationContext["as"][1]["href"]}
                        target="_self">
                        {navigationContext["as"][1]["content"]}
                    </AComponent>
                </LiComponent>
                <LiComponent
                    className={navigationContext["lis"][2]["className"]}
                    key={navigationContext["lis"][2]["key"]}>
                    <AComponent
                        href={navigationContext["as"][2]["href"]}
                        target="_self">
                        {navigationContext["as"][2]["content"]}
                    </AComponent>
                </LiComponent>
                <LiComponent
                    className={navigationContext["lis"][3]["className"]}
                    key={navigationContext["lis"][3]["key"]}>
                    <AComponent
                        href={navigationContext["as"][3]["href"]}
                        target="_self">
                        {navigationContext["as"][3]["content"]}
                    </AComponent>
                </LiComponent>
                <LiComponent
                    className={navigationContext["lis"][4]["className"]}
                    key={navigationContext["lis"][4]["key"]}>
                    <AComponent
                        href={navigationContext["as"][4]["href"]}
                        target="_self">
                        {navigationContext["as"][4]["content"]}
                    </AComponent>
                </LiComponent>
                <LiComponent
                    className={navigationContext["lis"][5]["className"]}
                    key={navigationContext["lis"][5]["key"]}>
                    <AComponent
                        href={navigationContext["as"][5]["href"]}
                        target="_blank">
                        {navigationContext["as"][5]["content"]}
                    </AComponent>
                </LiComponent>
                <LiComponent
                    className={navigationContext["lis"][6]["className"]}
                    key={navigationContext["lis"][6]["key"]}>
                    <AComponent
                        href={navigationContext["as"][6]["href"]}
                        target="_blank">
                        <ImgComponent
                            id={navigationContext["imgs"][0]["id"]}
                            className={navigationContext["imgs"][0]["className"]}
                            src={navigationContext["imgs"][0]["src"]}
                            alt={navigationContext["imgs"][0]["alt"]} />
                    </AComponent>
                </LiComponent>
                <LiComponent
                    className={navigationContext["lis"][7]["className"]}
                    key={navigationContext["lis"][7]["key"]}>
                    <AComponent
                        href={navigationContext["as"][7]["href"]}
                        target="_blank">
                        <ImgComponent
                            id={navigationContext["imgs"][1]["id"]}
                            className={navigationContext["imgs"][1]["className"]}
                            src={navigationContext["imgs"][1]["src"]}
                            alt={navigationContext["imgs"][1]["alt"]} />
                    </AComponent>
                </LiComponent>
            </UlComponent>
        </NavComponent>
    );
}