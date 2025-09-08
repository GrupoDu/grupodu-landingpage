import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

const supabaseUrl = process.env.SUPABASE_URL || "SUPABASE_URL";
const supabaseKey = process.env.SUPABASE_API_KEY || "SUPABASE_API_KEY";

const supabase = createClient(supabaseUrl, supabaseKey);

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const produto = searchParams.get("produto");

  if (!produto) {
    return NextResponse.json(
      { error: 'Parâmetro "produto" é obrigatório' },
      { status: 400 }
    );
  }

  const { data, error } = await supabase
    .from("produtos")
    .select("*")
    .eq("tipo_produto", produto);

  if (error) return NextResponse.error();

  return NextResponse.json(data);
};
