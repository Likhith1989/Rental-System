import React from "react";
import TextField from "@mui/material/TextField";

interface FormTextFieldProps {
  value: string;
  name: string;
  type: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  autoFocus?: boolean;
}

export const FormTextField: React.FC<FormTextFieldProps> = ({
  value,
  name,
  type,
  handleChange,
  label,
  autoFocus,
}) => {
  return (
    <TextField
      required
      name={name}
      type={type}
      value={value}
      color="secondary"
      label={label ? label : name}
      variant="outlined"
      onChange={handleChange}
      autoFocus={autoFocus}
    />
  );
};
