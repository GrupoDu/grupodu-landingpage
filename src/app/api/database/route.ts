import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

const supabaseUrl = process.env.SUPABASE_URL || "SUPABASE_URL";
const supabaseKey = process.env.SUPABASE_API_KEY || "SUPABASE_API_KEY";

const supabase = createClient(supabaseUrl, supabaseKey);

const normalizandoTexto = (text: string) => {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/-/g, " ");
};

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const produto = searchParams.get("produto");

  if (!produto) {
    const { data, error } = await supabase.from("produtos").select("*");
    if (error) return NextResponse.error();
    return NextResponse.json(data);
  }

  const { data, error } = await supabase
    .from("produtos")
    .select("*")
    .order("id");

  if (error) return NextResponse.error();

  const produtoNormalizado = normalizandoTexto(produto);
  const dataFiltrada = data.filter((item) =>
    normalizandoTexto(item.tipo_produto).includes(produtoNormalizado)
  );

  return NextResponse.json(dataFiltrada);
};
