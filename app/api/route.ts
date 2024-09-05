import path from "path";
import { promises } from "fs";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest): Promise<NextResponse<any>> {
    try {
        const fileName = request.nextUrl.searchParams.get("fileName");
        const read = await promises.readFile(path.join(process.cwd() + `/files/${fileName}.json`), "utf8");
        const parsedRead = JSON.parse(read);
        return NextResponse.json(parsedRead, { status: 200 });
    } catch (e) {
        return NextResponse.json({ eMessage: e.message }, { status: 400 });
    }
}