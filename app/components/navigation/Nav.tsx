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
                id={navigationContext["ul"]["id"]}
                className={navigationContext["ul"]["className"]}>
                <H3Component
                    id={navigationContext["h3"]["id"]}
                    className={navigationContext["h3"]["className"]}
                    style={navigationContext["h3"]["style"]}>
                    {
                        navigationContext["lis"].map((li: { [x: string]: any; }) =>
                            <LiComponent
                                key={li["key"]}
                                style={li["style"]}>
                                <LinkComponent
                                    href={navigationContext["links"][navigationContext["lis"].indexOf(li)]["href"]}>
                                    {navigationContext["links"][navigationContext["lis"].indexOf(li)]["content"]}
                                </LinkComponent>
                            </LiComponent>
                        )
                    }
                </H3Component>
            </UlComponent>
        </NavComponent>
    );
}