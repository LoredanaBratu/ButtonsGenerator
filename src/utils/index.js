export function sanitizeButtonHtml(html) {
  const match = html.match(/<button[\s\S]*?<\/button>/i);
  return match ? match[0] : "";
}
