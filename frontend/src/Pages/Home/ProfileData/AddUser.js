import styled from "styled-components";
import { IoIosAddCircleOutline, IoIosCheckmarkCircleOutline  } from "react-icons/io";
import useProfileContext from "../../../hook/useProfileContext";
import { useState } from "react";

const AddUser = ({ profile }) => {
  const [loading, setLoading] = useState(false);
  const { addProfile, removeProfile, profiles } = useProfileContext();

  const handleAddProfile = async () => {
    try {
      setLoading(true);
      await addProfile(profile);
      setLoading(false);
    } catch (error) {
      console.error('Error adding profile: ', error);
    }
  }

  console.log(profile);
  const handleDeleteProfile = async () => {
    try {
      setLoading(true);
      await removeProfile(profile.id);
      setLoading(false);
    } catch (error) {
      console.error('Error deleting profile: ', error);
  }
}

  return (
    <ImageWrapper>
      {profile ? (
        profiles.some((element) => element.login === profile.login) ? 
          <IoIosCheckmarkCircleOutline 
            size={59} 
            style={{color: 'green', cursor: 'pointer'}} 
            onClick={handleDeleteProfile} 
            disabled={loading} 
          />
        : 
          <IoIosAddCircleOutline 
            size={59} 
            style={{color: 'gray', cursor: 'pointer'}} 
            onClick={handleAddProfile} 
            disabled={loading} 
          />
      ) : (
        <IoIosAddCircleOutline 
          size={59} 
          style={{color: 'gray', cursor: 'pointer'}} 
          onClick={handleAddProfile} 
          disabled={loading} 
        />
      )}
    </ImageWrapper>
  );
};

const ImageWrapper = styled.div`

`;


export default AddUser;