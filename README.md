# Buttons Generator

A modern, interactive web application for generating custom HTML buttons using AI. Users can specify button text, color, size, or a style descriptor (like "modern", "minimal", or "cute") to instantly generate professionally styled buttons. The app features a responsive design, navigation layout, and comprehensive security measures to prevent prompt injection and filter harmful inputs.

---

## Features

- **AI-Powered Button Generation**: Create custom buttons using OpenAI's API
- **Flexible Input Options**: Specify exact colors/sizes OR use style descriptors
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern Navigation**: Clean layout with routing support for future expansion
- **Real-time Preview**: See your generated button instantly
- **Security First**: Comprehensive input validation and sanitization
- **Professional UI/UX**: Modern design with smooth interactions and feedback

---

## Running the Project

### Prerequisites

- **Node.js** (v16 or higher) and **npm**
- **OpenAI API key** with access to GPT models

### Setup

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/LoredanaBratu/ButtonsGenerator.git
    cd ButtonsGenerator
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Set up environment variables:**

    Create a `.env` file in the root directory:

    ```env
    OPENAI_API_KEY=your_openai_api_key_here
    ```

4.  **Start the backend server:**

    ```bash
    npm run server
    ```

    The Express server will run on `http://localhost:3001`

5.  **Start the frontend (in a new terminal):**

    ```bash
    npm start
    ```

    The React application will be available at `http://localhost:3000`

---

## How to Use

1.  **Open the application** in your browser at `http://localhost:3000`

2.  **Fill out the form** with your button preferences:

    ### Method 1: Specific Properties

    - **Button Text**: The text displayed on the button (required)
    - **Color**: Color name, hex code, or description (e.g., "red", "#FF5733", "ocean blue")
    - **Size**: Size description or value (e.g., "large", "12px", "medium")

    ### Method 2: Style Descriptor

    - **Button Text**: The text displayed on the button (required)
    - **Style**: Describe the overall style (e.g., "modern", "minimal", "vibrant", "professional")
    - _Note: When using style descriptor, color and size inputs are ignored_

3.  **Generate your button** by clicking the "Generate Button" button

4.  **Preview and use** your custom button that appears in the preview area

### Example Inputs:

- **Modern button**: Text: "Get Started", Style: "modern and sleek"
- **Colorful button**: Text: "Buy Now", Color: "bright red", Size: "large"
- **Minimalist button**: Text: "Learn More", Style: "minimal and clean"

---

## Security & Validation

### Input Security Measures:

- **Zod Schema Validation**: Strict type checking and input sanitization
- **Character Filtering**: Blocks dangerous characters (`<`, `>`) to prevent XSS
- **Length Restrictions**: Enforces reasonable input limits
- **Prompt Injection Protection**: Backend validates and sanitizes all AI requests

### Validation Rules:

- **Button Text**: 1-100 characters, required field
- **Color/Size**: Optional, max 30 characters each
- **Style**: Optional, max 30 characters
- **Logic**: Must provide either (Color + Size) OR Style, not both

### Error Handling:

- Clear, user-friendly error messages
- Real-time validation feedback
- Graceful degradation when AI service is unavailable

---

## Design & Architecture

### Technical Stack:

- **Frontend**: React 19, React Router, React Hook Form
- **Backend**: Express.js, OpenAI API
- **Styling**: Modern CSS with responsive design
- **Validation**: Zod schema validation
- **Security**: Input sanitization, XSS prevention

### Key Design Decisions:

#### **Component Architecture**:

- **Separation of Concerns**: Clear separation between pages, components, and utilities
- **Reusable Components**: Shared form fields and UI elements
- **Modern React Patterns**: Hooks, functional components, and context

#### **User Experience**:

- **Responsive Design**: Mobile-first approach with breakpoints
- **Loading States**: Visual feedback during AI generation
- **Error States**: Clear error messaging and recovery options
- **Navigation**: Clean layout with routing support for future features

#### **Security First**:

- **Input Validation**: Multi-layer validation on frontend and backend
- **AI Safety**: Restricted prompts to prevent malicious code generation
- **XSS Protection**: Content sanitization and safe HTML parsing

---

### Navigation & Layout System:

- **React Router Integration**: Full routing support for scalable navigation
- **Layout Component**: Consistent header with app branding and navigation
- **Responsive Navigation**: Mobile-friendly navigation that adapts to screen size

### Enhanced User Experience:

- **Loading States**: "Generating your button..." feedback during AI processing
- **Placeholder Text**: "Your generated button will appear here" when preview is empty
- **Improved Error Handling**: Better error messages and recovery states
- **Mobile Optimization**: Fully responsive design with touch-friendly interactions

### Code Architecture Improvements:

- **Modular Structure**: Separated pages, components, and utilities
- **Component Separation**: Dedicated components for form, preview, and layout
- **CSS Organization**: Component-specific styling with shared design tokens
- **Future-Ready**: Extensible structure for adding new features and pages

---

## Responsive Design

The application is fully responsive and optimized for:

- **Desktop**: Full-width layout with optimal spacing and typography
- **Tablet**: Adaptive layout that maintains usability on medium screens
- **Mobile**: Touch-friendly interface with stacked layout and larger touch targets

### Breakpoints:

- `768px` and below: Mobile-optimized layout
- `480px` and below: Extra small screens with compressed spacing

---

## Project Structure

```
ButtonsGenerator/
├── public/                     # Static files
├── server.js                   # Express backend server
├── src/
│   ├── App.js                  # Main app with routing
│   ├── api/                    # API utilities
│   │   ├── fetchButtonHtml.js  # Frontend API calls
│   │   ├── generateButtonHtml.js # Backend AI integration
│   │   └── utils/              # Shared utilities
│   ├── commons/                # Shared UI components
│   │   ├── FormTextField.js    # Reusable form input
│   │   └── FormTextField.css
│   ├── components/             # Feature-specific components
│   │   ├── Layout/             # App navigation layout
│   │   │   ├── Layout.js
│   │   │   └── Layout.css
│   │   ├── FormGenerator/      # Button form component
│   │   │   ├── ButtonsGeneratorForm.js
│   │   │   └── ButtonsGeneratorForm.css
│   │   ├── ButtonPreview/      # Preview component
│   │   │   ├── ButtonPreview.js
│   │   │   └── ButtonPreview.css
│   │   └── ButtonsGenerator/   # Legacy component structure
│   ├── pages/                  # Page-level components
│   │   ├── ButtonsGenerator.js # Main generator page
│   │   └── ButtonsGenerator.css
│   ├── schema/                 # Validation schemas
│   │   └── buttonSchema.js     # Zod validation schema
│   └── utils/                  # Utility functions
│       └── index.js           # HTML sanitization utilities
└── package.json
```

---
