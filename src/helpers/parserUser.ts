import { UserCredential } from "firebase/auth";

export function parseUser(userCred: UserCredential) {
  const { user } = userCred;
  const parsedUser = {
    name: user.displayName,
    avatar: user.photoURL,
    uid: user.uid,
  };
  return parsedUser;
}
