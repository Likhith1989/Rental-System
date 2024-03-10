import useAuthStore from "../store/authStore";

const loginOwner = () => {
  const setAccountStatus = useAuthStore((state) => state.setAccountStatus);
  const setUserType = useAuthStore((state) => state.setUserType);
  setUserType("owner");
  setAccountStatus("active");
};

const loginTenent = () => {
  const setAccountStatus = useAuthStore((state) => state.setAccountStatus);
  const setUserType = useAuthStore((state) => state.setUserType);
  setUserType("tenent");
  setAccountStatus("active");
};

export { loginOwner, loginTenent };
