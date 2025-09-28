import { buildButtonPrompt } from "./utils/buildGenerateButtonPrompt";

const urlOpenAI = "https://api.openai.com/v1/chat/completions";

export async function generateButtonHtml({ text, color, size, style }) {
  const prompt = buildButtonPrompt({ text, color, size, style });

  const response = await fetch(urlOpenAI, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 200,
    }),
  });

  const data = await response.json();
  const buttonHtml = data.choices[0]?.message?.content?.trim();

  if (buttonHtml) {
    // Basic validation to ensure it's a button tag
    if (buttonHtml.startsWith("<button") && buttonHtml.endsWith("</button>")) {
      return { buttonHtml };
    } else {
      // Attempt to extract button from a code block
      const match = buttonHtml.match(/<button.*<\/button>/s);
      if (match) {
        return { buttonHtml: match[0] };
      }
      return {
        error: "Generated content is not a valid button.",
      };
    }
  } else {
    throw new Error("Failed to generate button");
  }
}
