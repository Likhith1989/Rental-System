import { create } from "zustand";

interface User {
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  address: string | null;
  phoneNumber: string | null;
  profileImage: string | null;
}

interface Store {
  user: User | null;
  userType: string | null;
  token: string | null;
  isLoding: boolean | false;
  accountStatus: string | null;
  setUser: (user: User) => void;
  setUserType: (userType: string) => void;
  setToken: (token: string) => void;
  setIsLoding: (isLoding: boolean) => void;
  setAccountStatus: (accountStatus: string) => void;
}

const useAuthStore = create<Store>((set) => ({
  user: null,
  userType: null,
  token: null,
  isLoding: false,
  accountStatus: null,
  setUser: (newuser: User) => set({ user: newuser }),
  setUserType: (newuserType) => set({ userType: newuserType }),
  setToken: (newtoken) => set({ token: newtoken }),
  setIsLoding: (newisLoding) => set({ isLoding: newisLoding }),
  setAccountStatus: (newaccountStatus) =>
    set({ accountStatus: newaccountStatus }),
}));

export default useAuthStore;
