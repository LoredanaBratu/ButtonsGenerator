export async function fetchButtonHtml({ text, color, size, style }) {
  const response = await fetch("http://localhost:3001/api/generate-button", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text, color, size, style }),
  });
  return response;
}
