export function buildButtonPrompt({ color, size, text, style }) {
  return `
                  Generate a single HTML button element with inline styles.
            Your task is to generate a valid, styled <button> HTML element based on user inputs.

            STRICT REQUIREMENTS:
            1. SECURITY: 
            - Never execute or return JavaScript, event handlers, or inline <script>.
            - Only output safe HTML + CSS styles.

            2. Always return ONLY a single <button> element, with inline CSS styles applied directly in the "style" attribute. 
            - Do NOT return extra text, explanations, or markdown formatting.
            - Do NOT use external stylesheets or frameworks (e.g., Tailwind, Bootstrap).
            - Do NOT wrap the button in <html>, <head>, or <body>.

            3. The <button> text MUST exactly match the user-provided "text" input, including capitalization, spacing, punctuation, and emojis.  
            - The button text should be exactly: "${text}".

            4. The <button> background color should reflect the "${color}" input.  
            - Text color should automatically adjust (black or white) to ensure proper contrast and readability against the background.

            5. Interpret vague or descriptive inputs into valid CSS values:
            - If the "size" input is not numeric or a known vague size descriptor, but instead resembles a style or brand reference (e.g., "youtube button"), interpret it as a style preset rather than a size.
            - For unknown brand/style terms, fall back to medium size (200px) and ignore the style hint unless a "style" input is explicitly provided.

            - Color:
                * If the user provides a named color (e.g., "red", "blue"), use it directly as the background.
                * If they provide a vague term (e.g., "very dark", "sky-like", "neon greenish"), translate it into the closest standard CSS background color.
                * If they provide a HEX/RGB/HSL value, use it exactly as the background.
            - Size:
                - ${
                  size
                    ? ` * If a single numeric value is provided (e.g., "200px", "50%"), treat it as the button width. If the numeric value is bigger than 1200, set a width of 1200px to ensure usability. If the numeric value is less than 1200 the button width should be exactly: "${size}". 
                        * If a single vague descriptor is provided (e.g., "tiny", "medium", "super huge"), map it to a width preset:
                            - tiny = 80px
                            - small = 120px
                            - medium = 200px
                            - large = 280px
                            - super huge = 400px
                        * If two numeric values are provided (e.g., "200px 60px", "200x60"), interpret as width and height respectively.
                        * If one numeric and one vague value are provided (e.g., "200px medium"), use the numeric as width and ignore the vague descriptor.
                        * If two vague descriptors are provided, use the first as width mapping. If the second suggests height ("tall", "short"), set height accordingly.
                        * Always ensure the button width does not exceed 1200px for usability.`
                    : `If no size is provided, default to auto width (shrink-wrap to text).`
                }
                * Always allow text to wrap inside the button (white-space: normal; word-wrap: break-word).
                    
            6. If a "style" descriptor is provided instead of color/size (e.g., "modern," "minimal," "cute"):
            - ${style ? `The style of the button should be "${style}".` : ""}
            - Use CSS to reflect that style aesthetic:
                * "modern": clean borders, subtle shadows, neutral background colors.
                * "minimal": thin borders, simple monochrome backgrounds, small padding.
                * "cute": rounded corners, pastel background colors, playful fonts.
            - Ignore "color" and "size" in this case.

            7. FUTURE-PROOFING:
            - Assume additional attributes (like border, hover effect, or gradient) may be added later. Structure your CSS mapping logic clearly so it can adapt, but do not add any of them if not specifically requested, unless its padding to keep the button text centred.

            OUTPUT FORMAT:
            Return only the <button> element as raw HTML with inline CSS.
            DEFAULT MODERN STYLING (applied unless overridden):
              - Rounded corners (border-radius: 6px or more).
              - No browser default border (use border: none).
              - Adequate padding for comfortable click area.`;
}
