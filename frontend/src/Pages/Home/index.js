import SearchBar from "./Searchbar";
import ProfileArea from "./ProfileArea";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
// import useProfileContext from "../../hook/useProfileContext";

const Home = () => {
  const [profile, setProfile] = useState(null);
  const [searchParams] = useSearchParams();

  // const { profiles, addProfile } = useProfileContext();

  // console.log(profiles);
  // console.log(addProfile);

  const profileWord = searchParams.get('profile') || 'octocat';

  const searchProfiles = async (searchValue) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${searchValue}`);
      const data = response.data;
      setProfile(data);
      return data; // Return the data for potential further use
    } catch (error) {
      console.error('Error fetching profiles: ', error);
      return null; // Handle error case
    }
  };

  useEffect(() => {
    const renderInitialProfile = async () => {
      const data = await searchProfiles(profileWord);
      setProfile(data); // Set profile state
    };
    renderInitialProfile();
  }, [profileWord]); // Depend on profileWord to re-fetch if it changes

  return (
    <StyledDiv>
      <SearchBar 
        searchProfiles={searchProfiles}
        setProfile={setProfile}
        initialValue={profileWord}
      />
      <ProfileArea profile={profile} />
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  width: 100%;
  margin-right: 4rem;
  margin-left: 4rem;
  min-height: 100vh;  /* Ensures it covers the full viewport height */
  flex-grow: 1; /* Makes sure it stretches to fill available space */
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (max-width: 1051px) {
    margin-right: 0.2rem;
    margin-left: 0.2rem;
    
  }
`;

export default Home;
