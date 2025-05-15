import ProfileCard from "./ProfileCard";
import useProfileContext from "../../hook/useProfileContext";

const ProfileList = () => {
  const { profiles } = useProfileContext();

  const displayProfiles = profiles;


  console.log(displayProfiles.length);
  return (
    <div style={{display: 'flex', flexDirection:'row', flexWrap: 'wrap'}}>
      {displayProfiles.length > 0 ? (
        displayProfiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))
      ) : (
        <p style={{padding: '2rem'}}>No profiles available</p>
      )} 
    </div>
  );
};

export default ProfileList;
