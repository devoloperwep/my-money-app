import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { toast } from "sonner";

export const userSignOut = () => {
  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        toast.success("See you soon!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return { signOutUser };
};
