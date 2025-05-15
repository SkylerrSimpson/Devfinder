import { useContext } from "react";
import { profileContext } from "../context/ProfileContext";

const useProfileContext = () => {
  const context = useContext(profileContext);

  if (!context) {
    throw new Error("useProfileContext must be used within a ProfileProvider");
  }

  return context;
};

export default useProfileContext;