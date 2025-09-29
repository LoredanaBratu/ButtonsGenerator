import parse from "html-react-parser";
import "./ButtonPreview.css";

function ButtonPreview({ loading, buttonHtml, errorGenerating }) {
  return (
    <div className="button-preview">
      {buttonHtml && parse(buttonHtml)}
      {!buttonHtml && !loading && !errorGenerating && (
        <div className="button-preview-placeholder">
          Your generated button will appear here
        </div>
      )}
      {loading && (
        <div className="button-preview-loading">Generating your button...</div>
      )}
      {errorGenerating && (
        <div className="button-preview-error">
          Error generating button. Please try again.
        </div>
      )}
    </div>
  );
}

export default ButtonPreview;
