export default interface ValueProfileInterface {
    div: { id: any; className: any; content: any };
    image: { id: any; src: any; alt: any; style: any; width: any; height: any };
    headings: {
        section: { id: any; style: any };
        h1: { id: any; content: any; className: string; style: { fontSize: any } };
        h2: { id: any; content: any; className: string; style: { fontSize: any } }
    };
    section: {
        id: any;
        style: { overflow: any; width: any; backgroundColor: any; color: any; textAlign: any; height: any }
    }
}