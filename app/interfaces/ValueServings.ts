export default interface ValueServingsInterface {
    div: { id: any; className: any; content: any };
    ul: { id: any; className: any };
    lis: { style: any; key: any; content: any }[];
    h1: { className: string; style: { fontSize: any }; id: any; content: any };
    section: {
        style: {
            backgroundColor: any;
            overflow: any;
            color: any;
            textAlign: any;
            width: any;
            height: any
        };
        id: any
    };
    h2: { className: string; style: { fontSize: any }; id: any }
}