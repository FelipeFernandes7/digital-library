import { Translate } from "@google-cloud/translate/build/src/v2";
import { ReactNode } from "react";
const translate = new Translate({
  projectId: import.meta.env.VITE_PROJECT_ID,
});

interface Translation {
  text: string;
  locale: string;
}
export async function translateText({
  text,
  locale,
}: Translation): Promise<ReactNode> {
  try {
    const [translation] = await translate.translate(text, locale);
    return translation;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Erro na tradução:", error.message);
    throw error;
  }
}
