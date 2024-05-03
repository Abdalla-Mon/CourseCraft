"use client";
import InputField from "../../Inputs/InputField";
import { useForm } from "react-hook-form";
import SelectField from "../../Inputs/SelectField";
import { Button, Typography } from "@mui/material";
import SwitchInput from "@/UiComponents/FormComponents/Inputs/SwitchField";
import TextAreaField from "@/UiComponents/FormComponents/Inputs/TextAreaFiels";
import ImageField from "@/UiComponents/FormComponents/Inputs/FileField";

export default function MainForm({
  inputs,
  onSubmit,
  differentButton,
  btnText,
  formTitle,
  subTitle,
  formStyle,
  variant,
  children,
  _className,
}) {
  const { formState, register, handleSubmit, watch, trigger, control } =
    useForm();
  const { errors } = formState;
  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className={
        "flex flex-col items-center justify-center w-full  p-5 py-6 bg-gray-100 rounded shadow-md   " +
        _className
      }
      style={{
        ...formStyle,
      }}
    >
      <Typography
        variant="h4"
        className="mb-4 font-bold text-[--color_primary]"
      >
        {formTitle}
      </Typography>
      {subTitle && (
        <Typography
          variant="subtitle1"
          className="mb-4 font-bold text-[--color_secondary]"
        >
          {subTitle}
        </Typography>
      )}
      <div className={"w-full"}>
        {inputs.map((input) => {
          if (input.data.type === "select") {
            return (
              <SelectField
                key={input.data.id}
                select={input}
                register={register}
                errors={errors}
                variant={variant}
              />
            );
          } else if (input.data.type === "switch") {
            return (
              <SwitchInput
                key={input.data.id}
                control={control}
                name={input.data.name}
                label={input.data.label}
              />
            );
          } else if (input.data.type === "textarea") {
            return (
              <TextAreaField
                key={input.data.id}
                control={control}
                variant={variant}
                input={input}
                register={register}
                errors={errors}
              />
            );
          } else if (input.data.type === "file") {
            return (
              <ImageField
                key={input.data.id}
                control={control}
                input={input}
                register={register}
                errors={errors}
                variant={variant}
              />
            );
          } else {
            return (
              <InputField
                key={input.data.id}
                input={input}
                register={register}
                errors={errors}
                variant={variant}
                watch={watch}
                trigger={trigger}
              />
            );
          }
        })}
        {children}
      </div>
      {differentButton ? (
        differentButton
      ) : (
        <Button
          type="submit"
          variant="contained"
          size="large"
          color="primary"
          className={"mt-5 w-full  p-3 capitalize text-white font-bold"}
        >
          {btnText}
        </Button>
      )}
    </form>
  );
}
