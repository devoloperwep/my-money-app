// firebase
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

// custom hook
import { useGlobalContext } from "./useGlobalContext";

// toaster
import { toast } from "sonner";

export const useSignup = () => {
  const { dispatch } = useGlobalContext();
  const signup = (displayName, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        toast.success("Welcome");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };
  return { signup };
};
