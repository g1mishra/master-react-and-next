import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useRecoilValue } from "recoil";
import userAtom, { userLoginSelector } from "../state/userAtom";

const Profile = ({ x, y }) => {
  //   const { userSession } = useContext(UserContext);
  const userSession = useRecoilValue(userAtom);
  const isLoggedIn = useRecoilValue(userLoginSelector);
  const user = userSession.user;
  if (!isLoggedIn) return <p>Please login to view the page</p>;
  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.age}</p>
      <p>
        Mouse Position: {x}, {y}
      </p>
    </div>
  );
};

export default Profile;
