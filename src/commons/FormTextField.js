import clsx from "clsx";
import "./FormTextField.css";

const FormTextField = ({
  id,
  label,
  error,
  register,
  helperText,
  type = "text",
  placeholder = " ",
  inputClassName = "",
  labelClassName = "",
  isDisabled = false,
  ...rest
}) => {
  return (
    <div className="form-text-field">
      <input
        id={id}
        type={type}
        disabled={isDisabled}
        placeholder={placeholder}
        {...register(id)}
        className={clsx("form-input", {
          "form-input-error": error,
          "form-input-disabled": isDisabled,
          [inputClassName]: inputClassName,
        })}
        autoComplete="off"
        {...rest}
      />
      <label
        className={clsx("form-input-label", {
          "form-input-label-error": error,
          [labelClassName]: labelClassName,
        })}
        htmlFor={id}
      >
        {label}
      </label>
      {helperText && <div className="form-input-helper-text">{helperText}</div>}
      {error && <div className="form-error">{error.message}</div>}
    </div>
  );
};

export default FormTextField;
