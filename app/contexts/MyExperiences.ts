import { createContext } from "react";

export const MyExperiencesContext: React.Context<{}> = createContext({
    value: {
        section: {
            id: "defaultValue",
            className: "defaultValue"
        },
        h1: {
            id: "defaultValue",
            className: "defaultValue",
            content: "defaultValue"
        },
        aaSpan: {
            id: "defaultValue",
            className: "defaultValue",
            content: "defaultValue"
        },
        abSpan: {
            id: "defaultValue",
            className: "defaultValue",
            content: "defaultValue"
        }
    }
});