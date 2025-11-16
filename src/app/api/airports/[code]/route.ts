// app/api/airports/[code]/route.ts
import { NextResponse } from "next/server";
import { api } from "@/config/api";
import { Airport } from "@/interfaces";

interface AviationStackResponse {
  data: Airport[];
}

export async function GET(
  _req: Request,
  { params }: { params: { code: string } },
) {
  const routeParams = await params;
  const { code } = routeParams;
  console.log(code, "code");

  const url = `${api.airports.list}&iata_code=${encodeURIComponent(code)}`;

  try {
    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Error fetching airport from Aviationstack" },
        { status: 500 },
      );
    }

    const json = (await res.json()) as AviationStackResponse;

    const airport = json.data?.[0] ?? null;

    if (!airport) {
      return NextResponse.json(null, { status: 200 });
    }

    return NextResponse.json(airport, { status: 200 });
  } catch (err: unknown) {
    return NextResponse.json(
      { error: "Unexpected error fetching airport" },
      { status: 500 },
    );
  }
}
