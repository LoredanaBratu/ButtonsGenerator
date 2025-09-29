import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { buttonSchema } from "../../../schema/buttonSchema";
import FormTextField from "../../../commons/FormTextField";
import "./ButtonsGeneratorForm.css";

function ButtonsGeneratorForm({ onSubmit, loading, onClear }) {
  const {
    reset,
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(buttonSchema),
    defaultValues: { color: "", size: "", text: "", style: "" },
  });

  const allInputsEmpty =
    !watch("color") && !watch("size") && !watch("text") && !watch("style");

  const handleClear = () => {
    reset();
    if (onClear) onClear();
  };

  return (
    <form className="button-generator-form" onSubmit={handleSubmit(onSubmit)}>
      <FormTextField
        id="color"
        label="Color"
        register={register}
        error={errors.color}
      />
      <FormTextField
        id="size"
        label="Size"
        register={register}
        error={errors.size}
      />
      <FormTextField
        id="text"
        label="Button Text"
        register={register}
        error={errors.text}
      />
      <FormTextField
        id="style"
        label="Style"
        register={register}
        error={errors.style}
        helperText="Enter a style descriptor (like modern, minimal, or cute) to automatically style your button instead of choosing color or size."
      />
      {errors.form && (
        <div className="button-generator-error">{errors.form.message}</div>
      )}
      <div className="button-generator-form-actions-container">
        <div className="button-generator-form-actions">
          <button
            type="button"
            onClick={handleClear}
            className="button-generator-clear"
            disabled={loading || allInputsEmpty}
          >
            Clear
          </button>
          <button
            type="submit"
            className="button-generator-submit"
            disabled={loading || allInputsEmpty}
          >
            {loading ? "Generating..." : "Generate Button"}
          </button>
        </div>
      </div>
    </form>
  );
}

export default ButtonsGeneratorForm;
