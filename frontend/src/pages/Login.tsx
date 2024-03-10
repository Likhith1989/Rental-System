import { Logo } from "../components/Logo";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import loginImg from "../assets/loginImg.svg";
import { useParams, Link } from "react-router-dom";
import { Button, CircularProgress } from "@mui/material";
import { FormTextField } from "../components/FormTextField";
import { FormPasswordField } from "../components/FormPasswordField";
import { useCallback, useState } from "react";
import useAuthStore from "../store/authStore";

export const Login = () => {
  var isLoading: boolean = false;
  const navigate = useNavigate();
  const param = useParams();
  const [values, setValues] = useState({ email: "", password: "" });
  const user: string | null = useAuthStore((state) => state.user);
  const userType: string | null = useAuthStore((state) => state.userType);
  const accountStatus: string | null = useAuthStore(
    (state) => state.accountStatus
  );
  const setAccountStatus = useAuthStore((state) => state.setAccountStatus);
  const setUsertype = useAuthStore((state) => state.setUserType);

  useEffect(() => {
    if (user) {
      navigate(`/${userType}`);
    }
  }, [user, userType, navigate]);

  useEffect(() => {
    if (accountStatus) {
      navigate(`/${userType}`);
    }
  }, [accountStatus, navigate, userType]);

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
      setAccountStatus("active");
      setUsertype(param.role as string);
    };
  };

  return (
    <div>
      <header className="flex m-1 shadow-sm">
        <Logo />
        <div className="flex flex-col justify-center ml-2">
          <h5 className="font-display">Rent Manager</h5>
          <p className="hidden text-xs md:block md:text-sm">
            Find and Manage your rentals in one place
          </p>
        </div>
      </header>
      <main className="px-6 h-full mt-12">
        <div className="flex lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div className="grow-0 shrink-1 md:shrink-0 basis-auto lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
            <img src={loginImg} className="w-full" alt="login banner" />
          </div>
          <div className="lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
            <form onSubmit={handlesubmit()} id="form">
              <div className="flex justify-center mb-6">
                <h2 className="text-center">Login to your account</h2>
              </div>
              <div className="flex flex-col gap-6 mb-2">
                <FormTextField
                  value={values.email}
                  name={"email"}
                  type={"email"}
                  label={"Email"}
                  handleChange={handleChange()}
                  autoFocus={true}
                />
                <FormPasswordField
                  value={values.password}
                  handleChange={handleChange()}
                />
                <div className="self-end">
                  <Link
                    to={`/forgot-password/${param.role}`}
                    className="text-sm text-tertiary font-robotoNormal hover:text-tertiaryDark transition duration-200 ease-in-out"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <div className="mx-auto w-3/4 md:w-1/3">
                  <Button
                    variant="contained"
                    type="submit"
                    size="medium"
                    color="primary"
                    disabled={isLoading}
                    sx={{
                      color: "white",
                      width: "100%",
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
                      "Login"
                    )}
                  </Button>
                </div>
                <p className="text-sm font-medium mt-4 pt-1 mb-0 md:text-base">
                  Don't have an account?{" "}
                  <Link
                    to={`/register/${param.role}`}
                    className="text-yellow-400 hover:text-yellow-600 transition duration-200 ease-in-out"
                  >
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};
