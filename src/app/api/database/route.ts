import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_API_KEY;

export const GET = async (request: NextRequest) => {
  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json({ error: "Supabase configuration is missing" }, { status: 500 });
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  const normalizandoTexto = (text: string) => {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/-/g, " ");
  };

  try {
    const searchParams = request.nextUrl.searchParams;
    const produtoEndpoint = searchParams.get("produto");

    if (!produtoEndpoint) {
      const { data, error } = await supabase.from("products").select("*");
      if (error) return NextResponse.json({ error: error.message }, { status: 500 });
      return NextResponse.json(data, {
        headers: {
          "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
        },
      });
    }

    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("uuid");

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });

    const produtoNormalizado = normalizandoTexto(produtoEndpoint);
    const dataFiltrada = data.filter((item) =>
      normalizandoTexto(item.tipo_produto).includes(produtoNormalizado)
    );

    return NextResponse.json(dataFiltrada, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (err) {
    const error = err as Error;
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

};
