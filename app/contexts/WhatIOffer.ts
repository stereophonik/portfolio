import { createContext } from "react";

export const WhatIOfferContext: React.Context<{}> = createContext({
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
        ul: {
            id: "defaultValue",
            className: "defaultValue"
        },
        h2: {
            id: "defaultValue",
            className: "defaultValue",
            content: "defaultValue"
        },
        lis: [
            {
                className: "defaultValue",
                key: "defaultValue",
                content: "defaultValue"
            },
            {
                className: "defaultValue",
                key: "defaultValue",
                content: "defaultValue"
            },
            {
                className: "defaultValue",
                key: "defaultValue",
                content: "defaultValue"
            }
        ]
    }
});