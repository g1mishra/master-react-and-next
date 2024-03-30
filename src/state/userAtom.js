// atom kaise bnaye

import { atom, selector } from "recoil";

const userAtom = atom({
  key: "userAtom",
  default: {
    user: null,
    isUserLoggedIn: false,
  },
});

// one or more than one atom ke value ko use krne ke liye selector bnana hota hai
// derived value return krte hain
export const userLoginSelector = selector({
  key: "userLoginSelector",
  get: ({ get }) => {
    const user = get(userAtom);
    return user.isUserLoggedIn;
  },
});

export default userAtom;
