import { useContext } from "react";

import NavComponent from "../Nav";
import UlComponent from "../Ul";
import H3Component from "../H3";
import LiComponent from "../Li";
import LinkComponent from "../Link";

import { NavigationContext } from "../../contexts/Navigation";

export default function NavNavigationComponent(): React.ReactElement {
    const navigationContext: {} = useContext(NavigationContext);

    return (
        <NavComponent
            id={navigationContext["nav"]["id"]}
            className={navigationContext["nav"]["className"]}>
            <UlComponent
                style={navigationContext["ul"]["style"]}>
                <H3Component
                    id={navigationContext["h3"]["id"]}
                    className={navigationContext["h3"]["className"]}
                    style={navigationContext["h3"]["style"]}>
                    <LiComponent
                        key={navigationContext["lis"][0]["key"]}
                        style={navigationContext["lis"][0]["style"]}>
                        <LinkComponent
                            href={navigationContext["links"][0]["href"]}>
                            {navigationContext["links"][0]["content"]}
                        </LinkComponent>
                    </LiComponent>
                    <LiComponent
                        key={navigationContext["lis"][1]["key"]}
                        style={navigationContext["lis"][1]["style"]}>
                        {navigationContext["lis"][1]["content"]}
                    </LiComponent>
                    <LiComponent
                        key={navigationContext["lis"][2]["key"]}
                        style={navigationContext["lis"][2]["style"]}>
                        <LinkComponent
                            href={navigationContext["links"][2]["href"]}>
                            {navigationContext["links"][2]["content"]}
                        </LinkComponent>
                    </LiComponent>
                    <LiComponent
                        key={navigationContext["lis"][3]["key"]}
                        style={navigationContext["lis"][3]["style"]}>
                        {navigationContext["lis"][3]["content"]}
                    </LiComponent>
                    <LiComponent
                        key={navigationContext["lis"][4]["key"]}
                        style={navigationContext["lis"][4]["style"]}>
                        <LinkComponent
                            href={navigationContext["links"][4]["href"]}>
                            {navigationContext["links"][4]["content"]}
                        </LinkComponent>
                    </LiComponent>
                </H3Component>
            </UlComponent>
        </NavComponent>
    );
}