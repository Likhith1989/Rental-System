import React, { useState, ChangeEvent } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";

interface FormPasswordFieldProps {
  value: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  label?: string;
}

export const FormPasswordField: React.FC<FormPasswordFieldProps> = ({
  value,
  handleChange,
  name,
  label,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <FormControl color="secondary" sx={{ width: "100%" }} variant="outlined">
      <InputLabel htmlFor="password">{label || "Password"}</InputLabel>
      <OutlinedInput
        onChange={handleChange}
        id="password"
        value={value}
        name={name || "password"}
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
    </FormControl>
  );
};
