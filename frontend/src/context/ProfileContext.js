import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

const profileContext = createContext({
  profiles: [],
  addProfile: () => {},
  removeProfile: () => {},
  getProfile: () => {},
});

const ProfileProvider = ({ children }) => {
  const [profiles, setProfiles] = useState([]);

  const fetchProfiles = async () => {
    try {
      const response = await axios.get('http://localhost:8000/profile');
      setProfiles(response.data);
    } catch (error) {
      console.error('Error fetching profiles: ', error);
    }
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  const addProfile = async (profile) => {
    try {
      await axios.post('http://localhost:8000/profile', {
        _id: profile.id,
        login: profile.login,
        avatar_url: profile.avatar_url,
      });
      await fetchProfiles();
    } catch (error) {
      console.error('Error adding profile: ', error);
    }
  };

  const removeProfile = async (profile) => {
    try {
      await axios.delete(`http://localhost:8000/profile/${profile}`);
      await fetchProfiles();
    } catch (error) {
      console.error('Error removing profile: ', error);
    }
  };

  return (
    <profileContext.Provider value={{ profiles, addProfile, removeProfile }}>
      {children}
    </profileContext.Provider>
  );
};

export { profileContext, ProfileProvider };
export default profileContext;
