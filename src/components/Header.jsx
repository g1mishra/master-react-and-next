import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useRecoilState, useRecoilValue } from "recoil";
import userAtom from "../state/userAtom";

const Header = () => {
  //   const { userSession, login, logout } = useContext(UserContext);
  const [userSession, setUserSession] = useRecoilState(userAtom);

  const logout = () => {
    setUserSession({
      user: null,
      isUserLoggedIn: false,
    });
  };

  const login = (user) => {
    setUserSession({
      user,
      isUserLoggedIn: true,
    });
  };

  return (
    <header>
      <ABC />
      {userSession.isUserLoggedIn ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button
          onClick={() =>
            login({
              name: "Jeevan",
              email: "g1@gmail.com",
              age: 23,
            })
          }
        >
          Login
        </button>
      )}
    </header>
  );
};

export default Header;

const ABC = () => {
//   const { userSession } = useContext(UserContext);
const userSession = useRecoilValue(userAtom);
  return <p>{userSession?.user?.name || "Guest user"}</p>;
};
