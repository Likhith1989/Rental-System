import { Logo } from "../components/Logo";
import propertlogo from "../assets/property_owner_logo-Photoroom.png-Photoroom.png";
import rentlogo from "../assets/rent_guy-Photoroom.png-Photoroom.png";
import landingTitle from "../assets/landingTitle.svg";
import { Button } from "@mui/material";
import { useCallback, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";

export const Landing = () => {
  const user: string | null = useAuthStore((state) => state.user);
  const userType: string | null = useAuthStore((state) => state.userType);
  const ref = useRef<HTMLElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(`/${userType}`);
    }
  }, [user, userType, navigate]);
  return (
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
      <main>
        <div className=" flex flex-col items-center my-4">
          <div className="md:w-2/3">
            <h1 className="text-2xl md:text-4xl font-heading text-center font-extrabold">
              Find and Manage{" "}
              <span className="text-primaryDark"> rental properties </span>in
              one place
            </h1>
            <p className="mt-8 text-center text-gray-700 w-4/5 mx-auto">
              A simple and easy to use platform for property owners and tenants
              to manage their rental properties. Post your property and find
              your next tenant if you are a property owner. Find your next
              rental property if you are a tenant.
            </p>
          </div>
          <div className="flex mt-8 gap-8 flex-wrap w-2/3 justify-center">
            <Button
              onClick={() => {
                if (ref.current) {
                  ref.current.scrollIntoView({ behavior: "smooth" });
                }
              }}
              variant="contained"
              sx={{
                color: "white",
                "&:hover": {
                  backgroundColor: "primary.dark",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            >
              Get Started
            </Button>
          </div>
        </div>
        <div className="flex justify-center items-center h-screen">
          <img
            src={landingTitle}
            alt="landing title"
            className="w-full max-w-screen-md max-h-3/4"
          />
        </div>
        <section
          ref={ref}
          className="flex flex-col justify-center p-2 m-2 md:flex-row"
        >
          <div className="p-2 m-2 pr-16 ">
            <div className="w-80">
              <img src={propertlogo} alt="owner"></img>
            </div>
            <div className="m-2 pt-4 flex flex-col self-center p-4 ">
              <h1>Are you a Property Owner? </h1>
              <p className="my-2">
                Post your property online for future tenants to view
              </p>

              <div className="items-center">
                <Button
                  variant="contained"
                  color="secondary"
                  size="medium"
                  onClick={useCallback(
                    () => navigate("/login/owner"),
                    [navigate]
                  )}
                  sx={{
                    color: "white",
                    "&:hover": {
                      backgroundColor: "secondary.dark",
                      opacity: [0.9, 0.8, 0.7],
                    },
                  }}
                >
                  Login
                </Button>
                <span className="mx-3 sm:text-2xl">|</span>
                <Button
                  variant="contained"
                  onClick={useCallback(() => {
                    navigate("/register/owner");
                  }, [navigate])}
                  color="primary"
                  size="medium"
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
          <div className="w-0.5  mt-10 mb-10 bg-slate-600"></div>
          <div className="p-2 m-2 mt-16 pl-20 justify-center">
            <div className="w-80">
              <img src={rentlogo} className="m-8" alt="renter"></img>
            </div>
            <div className="m-2 pt-4 flex flex-col self-center p-4 ">
              <h1 className="">Are you a tenant?</h1>
              <p className="py-2">
                Browse through all kinds of properties for rent
              </p>
              <div>
                <Button
                  onClick={useCallback(
                    () => navigate("/login/tenent"),
                    [navigate]
                  )}
                  variant="contained"
                  color="secondary"
                  size="medium"
                  sx={{
                    color: "white",
                    "&:hover": {
                      backgroundColor: "secondary.dark",
                      opacity: [0.9, 0.8, 0.7],
                    },
                  }}
                >
                  Login
                </Button>
                <span className="mx-3 sm:text-2xl">|</span>
                <Button
                  onClick={useCallback(
                    () => navigate("/register/tenent"),
                    [navigate]
                  )}
                  variant="contained"
                  color="primary"
                  size="medium"
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="p-4 mt-11 shadow-sm md:px-6 md:py-8 bg-slate-300">
        <p className="text-xs text-center text-slate-500">
          &copy; 2024 Rent Manager
        </p>
      </footer>
    </div>
  );
};
