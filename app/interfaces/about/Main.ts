export default interface MainAboutInterface {
    skills: {
        div: { style: any; id: any; content: any };
        ul: { style: any };
        lis: ({ style: any; key: any; content: any })[];
        h1: { className: string; style: { fontSize: any }; id: any; content: any };
        section: {
            style: {
                backgroundColor: any;
                overflow: any;
                color: any;
                borderRadius: any;
                textAlign: any;
                width: any;
                height: any
            };
            id: any
        };
        h2: { className: string; style: { fontSize: any }; id: any };
        links: ({ href: string; content: any })[]
    };
    servings: {
        div: { style: any; id: any; content: any };
        ul: { style: any };
        lis: ({ style: any; key: any; content: any })[];
        h1: { className: string; style: { fontSize: any }; id: any; content: any };
        section: {
            style: { backgroundColor: any; overflow: any; color: any; textAlign: any; width: any; height: any };
            id: any
        };
        h2: { className: string; style: { fontSize: any }; id: any }
    };
    section: { style: any; id: any }
}