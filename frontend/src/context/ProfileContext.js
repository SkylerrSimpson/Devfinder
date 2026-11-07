import { privateSessionRead } from "../lib/private-session";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
const profileContext = createContext({ profiles: [] });
let initialRequest;
const load = () =>
  initialRequest ||
  (initialRequest = privateSessionRead(() => axios.get("/profile")).finally(
    () => {
      initialRequest = null;
    },
  ));
const ProfileProvider = ({ children }) => {
  const [profiles, setProfiles] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    let active = true;
    load()
      .then(({ data }) => {
        if (active) setProfiles(data);
      })
      .catch(() => {
        if (active) setError("Could not load saved profiles.");
      });
    return () => {
      active = false;
    };
  }, []);
  const addProfile = async (profile) => {
    try {
      const { data } = await axios.post("/profile", {
        _id: profile.id,
        login: profile.login,
        avatar_url: profile.avatar_url,
      });
      setProfiles((current) => [
        ...current.filter((p) => p._id !== data._id),
        data,
      ]);
      setError("");
    } catch (error) {
      setError("Could not save this profile. Please try again.");
      throw error;
    }
  };
  const removeProfile = async (id) => {
    try {
      await axios.delete(`/profile/${encodeURIComponent(id)}`);
      setProfiles((current) => current.filter((p) => p._id !== String(id)));
      setError("");
    } catch (error) {
      setError("Could not remove this profile. Please try again.");
      throw error;
    }
  };
  return (
    <profileContext.Provider value={{ profiles, addProfile, removeProfile }}>
      {error && <p role="alert">{error}</p>}
      {children}
    </profileContext.Provider>
  );
};
export { profileContext, ProfileProvider };
export default profileContext;
