import { createContext } from "react";

export const MyPortfolioContext: React.Context<{}> = createContext({
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
        },
        aaH2: {
            id: "defaultValue",
            className: "defaultValue",
            content: "defaultValue"
        },
        acSpan: {
            id: "defaultValue",
            className: "defaultValue",
            content: "defaultValue"
        },
        aaA: {
            href: "defaultValue",
            content: "defaultValue"
        },
        abH2: {
            id: "defaultValue",
            className: "defaultValue",
            content: "defaultValue"
        },
        adSpan: {
            id: "defaultValue",
            className: "defaultValue",
            content: "defaultValue"
        },
        abA: {
            href: "defaultValue",
            content: "defaultValue"
        }
    }
});