export default interface ValueServingsInterface {
    div: { id: any; className: any; content: any; };
    ul: { id: any; className: any; };
    lis: { className: any; key: any; content: any; }[];
    h1: { className: string; style: { fontSize: any; }; id: any; content: any; };
    section: {
        id: any;
        className: any;
        style: {
            height: any;
        };
    };
    h2: { className: string; style: { fontSize: any; }; id: any; }
}