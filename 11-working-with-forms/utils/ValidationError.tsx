import { FieldError } from "react-hook-form";

type ValidationErrorProps = {
  fieldError: FieldError | undefined;
};

export function ValidationError({ fieldError }: ValidationErrorProps) {
  if (!fieldError) {
    return null;
  }
  return <p className="text-red-500 text-xs mt-1">{fieldError.message}</p>;
}
