import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

export default function TextAreaField({
  control,
  input,
  register,
  variant,
  errors,
}) {
  const inputData = input.data;
  const { name, label, id, helperText } = inputData;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          multiline
          rows={4}
          fullWidth
          variant={variant}
          {...register(id, input.pattern)}
          error={Boolean(errors[id])}
          helperText={errors[id]?.message || helperText}
          className={"mb-3"}
        />
      )}
    />
  );
}
