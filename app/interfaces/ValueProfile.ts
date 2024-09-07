export default interface ValueProfileInterface {
    section: {
        id: any;
        className: any;
        style: { height: any; }
    };
    div: { id: any; className: any; content: any; };
    image: { id: any; className: any; src: any; alt: any; width: any; height: any; };
    h1: { id: any; content: any; className: string; style: { fontSize: any; } };
    h2: { id: any; content: any; className: string; style: { fontSize: any; } };
}