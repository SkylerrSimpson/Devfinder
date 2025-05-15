import useProfileContext from "../../hook/useProfileContext";
import styled from "styled-components";
import { Color } from "../../constant/Color";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { PiXCircleLight } from "react-icons/pi";
import { Link } from "react-router-dom";

const ProfileCard = ({ profile }) => {

  
  const { removeProfile } = useProfileContext();

  const handleDelete = async () => {
    try {
      await removeProfile(profile._id);
    } catch (error) {
      console.error("Error deleting profile: ", error);
    }
  };

  return (
    <Card>
      <ProfileInfo>
        <div style={{height: '50%', padding: '1rem 1rem 1rem 1.8rem'}}>
        <img src={profile.avatar_url} alt="profile" style={{borderRadius: '50%', height: '100%'}} />
        </div>
          <Handle style={{color: Color.tertiaryText}}>@{profile.login}</Handle>
          <ViewOrDelete>
            <Link to={`/?profile=${profile.login}`} style={{textDecoration: 'none', color: Color.secondaryText}}>
              <MdOutlineRemoveRedEye size={30} />
            </Link>
            <PiXCircleLight size={30} onClick={handleDelete} style={{cursor:'pointer', color: Color.secondaryText}}/>
          </ViewOrDelete>
      </ProfileInfo>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  border-radius: 10px;
  background-color: ${Color.secondaryBackground};
  width: 100%;
  max-width: 15rem;
  height: 20rem;
  margin: 2rem;
  box-shadow: 1px 2px 15px rgba(70, 70, 70, 0.3);
`;

const ViewOrDelete = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  flex-direction: flex-end;
  padding: 1rem 2.5rem 1rem 3rem;
`;

const Handle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.2rem;
`;

const ProfileInfo = styled.div`
  padding: 1rem;
`;

export default ProfileCard;
