import { useCallback, useState } from "react";
import regImg from "../assets/registerImg.svg";
import { Logo } from "../components/Logo";
import { useParams, Link } from "react-router-dom";

import { Button, CircularProgress } from "@mui/material";
import { FormTextField } from "../components/FormTextField";
import { FormPasswordField } from "../components/FormPasswordField";

export const Register = () => {
  var isLoading: boolean = false;

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phoneNumber: "",
    password: "",
  });
  const param = useParams();
  const handleChange = () =>
    useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      },
      [values]
    );
  const handlesubmit = () => {
    return (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
    };
  };

  return (
    <>
      <div>
        <header className="flex m-1 shadow-sm">
          <Logo />
          <div className="flex flex-col justify-center m-2">
            <h5 className="font-display">Rent Manager</h5>
            <p className="hidden text-xs md:block md:text-sm">
              Find and Manage your rentals in one place
            </p>
          </div>
        </header>
        <main className="flex flex-row">
          <div className="hidden md:w-6/12 mb-12 md:mb-0 md:block mt-8">
            <img src={regImg} className="w-full" alt="login banner" />
          </div>
          <div className="lg:w-5/12 md:w-8/12">
            <form onSubmit={handlesubmit()} id="form">
              <div className="flex justify-center mt-3 mb-4">
                <h1 className="text-center">Register for your new account</h1>
              </div>
              <div className="flex flex-wrap gap-4 justify-center md:ml-16">
                <FormTextField
                  value={values.firstName}
                  name="firstName"
                  type="text"
                  handleChange={handleChange()}
                  label="First Name"
                  autoFocus={true}
                />
                <FormTextField
                  label="Last Name"
                  name="lastName"
                  type={"text"}
                  value={values.lastName}
                  handleChange={handleChange()}
                  autoFocus={true}
                />
                <FormTextField
                  label="Email"
                  name="email"
                  type={"email"}
                  value={values.email}
                  handleChange={handleChange()}
                />
                <FormTextField
                  label="Phone Number"
                  name="phoneNumber"
                  type={"number"}
                  value={values.phoneNumber}
                  handleChange={handleChange()}
                />
              </div>
              <div className="w-1/2 mx-auto mt-2">
                <FormPasswordField
                  value={values.password}
                  handleChange={handleChange()}
                />
              </div>
              <div className="text-center mt-6">
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  color="primary"
                  disabled={isLoading}
                  sx={{
                    color: "white",
                    "&:hover": {
                      backgroundColor: "primary.dark",
                      opacity: [0.9, 0.8, 0.7],
                    },
                  }}
                >
                  {isLoading ? (
                    <CircularProgress
                      size={26}
                      sx={{
                        color: "#fff",
                      }}
                    />
                  ) : (
                    "Register"
                  )}
                </Button>
                <p className="text-sm font-medium mt-2 pt-1 mb-0 md:text-base">
                  Already have an account?{" "}
                  <Link
                    to={`/login/${param.role}`}
                    className="text-yellow-400 hover:text-yellow-600 transition duration-200 ease-in-out"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  );
};
