import { NextResponse } from "next/server";

export async function GET() {
  const data = [
    { school_name: "SJSU", gender: "male" },
    { school_name: "UVA", gender: "male" },
    { school_name: "KCC", gender: "male" },
    { school_name: "KCC", gender: "female" },
    { school_name: "SJSU", gender: "female" },
  ];

  return NextResponse.json(data);
}
