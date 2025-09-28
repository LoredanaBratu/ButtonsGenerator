# Buttons Generator

A interactive web app for generating custom HTML buttons using AI.  
Users can specify button text, color, size, or a style descriptor (like "modern", "minimal", or "cute") to instantly generate a styled button.  
The app includes security measures to prevent prompt injection and filters out potentially harmful inputs.

---

## Running the Project

### Prerequisites

- Node.js and npm installed
- An OpenAI API key

### Setup

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd buttons-generator
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Set up environment variables:**

    Create a `.env` file in the root of the project and add your OpenAI API key:

    ```
    OPENAI_API_KEY=your_openai_api_key_here
    ```

4.  **Start the backend server:**

    ```bash
    npm run server
    ```

    The Express server will run on `http://localhost:3001`.

5.  **Start the frontend:**

    ```bash
    npm start
    ```

    The React application will be available at `http://localhost:3000`.

---

## How to Test Different Inputs

1.  Open the application in your browser.
2.  Enter values for the following fields:
    - **Color**: Any color name (e.g., "red", "very dark blue"), hex code (e.g., `#FF5733`), or vague descriptor (e.g., "neon green").
    - **Size**: Any size description (e.g., "small", "super huge"), pixel value (e.g., `120px`), or percentage.
    - **Text**: The text to be displayed on the button (supports emojis, punctuation, etc.).
    - **Style**: An optional descriptor for the button's appearance (e.g., "modern", "minimal", "cute").  
      _When this is filled, color and size are ignored._
3.  Click the "Generate Button" button.
4.  The generated button will appear in the preview area below.

---

## UI/UX Choices

- **Modern, pleasant look:**  
  The UI uses a clean card layout, soft colors, floating labels, and smooth interactions for a contemporary feel.
- **Interactive feedback:**
  - Floating labels and helper texts guide the user.
  - Error messages are clear and visually distinct.
  - Disabled states are visually obvious.

---

## Security Measures

- **Prompt Injection Protection:**
  - All user inputs are validated and sanitized using [Zod](https://zod.dev/).
  - Inputs are restricted to safe characters (no `<`, `>`, or script tags).
  - The backend prompt strictly instructs the AI to return only a `<button>` element with inline CSS, and never any JavaScript or extra HTML.
- **Input Filtering:**
  - The schema in [`buttonSchema.js`](src/schema/buttonSchema.js) enforces length and character restrictions.
  - If an input is potentially harmful, the user receives a clear error message and the request is not sent to the AI.

---

## Design Decisions

**What I picked and why:**

- **Zod for validation:**  
  Zod provides strong, composable validation and custom error handling, making it easy to enforce security and UX rules.
- **React Hook Form for form state:**  
  For robust, scalable form state management and easy integration with Zod.
- **A style descriptor input:**  
  Allowing users to enter a style like "modern" or "cute" makes the tool more flexible and creative, and demonstrates the power of AI-driven UI generation.
- **Modern UI/UX:**  
  Floating labels, helper text, and clear error states for a pleasant and interactive experience.
- **Prompt injection and input filtering:**  
  To ensure security and safe AI usage.

---

## File Structure Highlights

- `src/schema/buttonSchema.js` — Input validation and security logic.
- `src/features/ButtonsGenerator/` — Main UI and form components.
- `server.js` — Express backend and OpenAI integration.
- `shared/buildButtonPrompt.js` — Shared prompt builder for both backend and frontend (if needed).
