import styles from "./authForm.module.css";
import MainForm from "@/app/UiComponents/FormComponents/Forms/MainForm/MainForm";

export default function AuthForm({
  inputs,
  onSubmit,
  differentButton,
  btnText,
  formTitle,
  subTitle,
  formStyle,
  variant,
  children,
}) {
  return (
    <MainForm
      inputs={inputs}
      onSubmit={onSubmit}
      differentButton={differentButton}
      btnText={btnText}
      formTitle={formTitle}
      subTitle={subTitle}
      formStyle={formStyle}
      variant={variant}
      _className={styles.auth_form}
    >
      {children}
    </MainForm>
  );
}
