import { createContext, useState } from "react";

export const UserContext = createContext();

// createCOntext ->

// create a provider -> values

// useContext value -> useContext(UserContext)

const UserProvider = ({ children }) => {
  const [userState, setUserSatate] = useState({
    user: {},
    isUserLoggedIn: false,
  });

  const login = (user) => {
    setUserSatate({
      user,
      isUserLoggedIn: true,
    });
  };

  const logout = () => {
    setUserSatate({
      user: {},
      isUserLoggedIn: false,
    });
  };

  return (
    <UserContext.Provider value={{ userSession: userState, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

// <UserProvider> {all components which can acces the data of con} </UserProvider>
