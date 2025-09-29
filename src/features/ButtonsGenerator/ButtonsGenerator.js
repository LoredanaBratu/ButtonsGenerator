import React, { useState } from "react";
import { fetchButtonHtml } from "../../api/fetchButtonHtml";
import ButtonsGeneratorForm from "./components/ButtonsGeneratorForm";
import ButtonPreview from "./components/ButtonPreview";
import "./ButtonsGenerator.css";
import { sanitizeButtonHtml } from "./utils";

function ButtonsGenerator() {
  const [loading, setLoading] = useState(false);
  const [buttonHtml, setButtonHtml] = useState("");
  const [errorGenerating, setErrorGenerating] = useState(false);

  const handleFormSubmit = async (data) => {
    setErrorGenerating(false);
    setLoading(true);
    setButtonHtml("");
    try {
      const response = await fetchButtonHtml(data);
      const result = await response.json();
      if (result.buttonHtml) {
        setButtonHtml(sanitizeButtonHtml(result.buttonHtml));
      } else {
        setButtonHtml("");
        setErrorGenerating(true);
      }
    } catch (error) {
      setButtonHtml("");
      setErrorGenerating(true);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setButtonHtml("");
  };

  return (
    <div className="button-generator-container">
      <h1 className="button-generator-title">Buttons Generator</h1>
      <p className="button-generator-desc">
        Instantly create beautiful, custom-styled buttons for your app. Enter
        your preferred color, size, text, and style, and let us generate a
        ready-to-use button for you!
      </p>
      <ButtonsGeneratorForm
        loading={loading}
        onClear={handleClear}
        onSubmit={handleFormSubmit}
      />

      <ButtonPreview
        loading={loading}
        buttonHtml={buttonHtml}
        errorGenerating={errorGenerating}
      />
    </div>
  );
}

export default ButtonsGenerator;
