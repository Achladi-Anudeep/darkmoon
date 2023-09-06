import { GlobalContext } from "./GlobalContext";
import { useState } from "react";

export const GlobalContextAPI = ({ children }) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const [contactUsInput, setContactUsInput] = useState({
    name: "",
    email: "",
    message: "",
    file: "",
  });
  return (
    <GlobalContext.Provider
      value={{ mobileMenu, setMobileMenu, setContactUsInput, contactUsInput }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
