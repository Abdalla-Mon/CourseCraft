import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import { useState } from "react";
import Image from "next/image";

export default function ImageField({
  control,
  input,
  register,
  errors,
  variant,
}) {
  const { name, id, label } = input.data;
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  return (
    <div className={"flex gap-5"}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label={label}
            type="file"
            InputLabelProps={{
              shrink: true,
            }}
            {...register(id, input.pattern)}
            error={Boolean(errors[id])}
            helperText={errors[id]?.message}
            variant={variant}
            fullWidth
            accept={input.data.accept}
            onChange={(e) => {
              field.onChange(e); // default handler
              handleFileChange(e); // our handler
            }}
          />
        )}
      />
      {preview && (
        <Image src={preview} alt="Preview" width={100} height={100} />
      )}
    </div>
  );
}
