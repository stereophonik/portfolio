import SectionComponent from "../Section";

import { LibraryContext } from "../../contexts/Library";
import {useContext} from "react";
import H1Component from "../H1";
import H2Component from "../H2";
import UlComponent from "../Ul";
import LiComponent from "../Li";
import AComponent from "../A";

export default function SectionLibraryComponent(): React.ReactElement {
    const libraryContext: {} = useContext(LibraryContext);

    return (
        <SectionComponent
            id={libraryContext["section"]["id"]}
            className={libraryContext["section"]["className"]}>
            <H1Component
                id={libraryContext["h1"]["id"]}
                className={libraryContext["h1"]["className"]}>
                {libraryContext["h1"]["content"]}
            </H1Component>
            <H2Component
                id={libraryContext["h2"]["id"]}
                className={libraryContext["h2"]["className"]}>
                {libraryContext["h2"]["content"]}
            </H2Component>
            <UlComponent
                id={libraryContext["ul"]["id"]}
                className={libraryContext["ul"]["className"]}>
                {
                    libraryContext["lis"].map((li: { [x: string]: any; }) =>
                        <LiComponent
                            className={li["className"]}
                            key={li["key"]}>
                            <AComponent
                                href={libraryContext["as"][libraryContext["lis"].indexOf(li)]["href"]}
                                target="_blank">
                                {libraryContext["as"][libraryContext["lis"].indexOf(li)]["content"]}
                            </AComponent>
                        </LiComponent>
                    )
                }
            </UlComponent>
        </SectionComponent>
    );
}