import styled from "styled-components";
import { Color } from "../../constant/Color";
import {useEffect, useState} from "react";
import placeHolder from '../../images/image-user-placeholder.png';
import Name from "./ProfileData/Name";
import AddUser from "./ProfileData/AddUser";
import Bio from "./ProfileData/Bio";
import Joined from "./ProfileData/Joined";
import Followers from "./ProfileData/Followers";
import Socials from "./ProfileData/Socials";
import notFound from '../../images/illustration-empty.svg';

const ProfileArea = ({ profile }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1051);

  // created a useEffect to handle the window resize event
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1051);
    };

    window.addEventListener('resize', handleResize);

    return () => { window.removeEventListener('resize', handleResize); };
  }, []);

  // Set defaults in case profile is null
  if (!profile) {
    return (
      <NotFoundWrapper>
        <img src={notFound} alt="No Profile Found" style={{width: '10rem', height: '10rem'}}/>
        <p style={{color: Color.secondaryText, fontSize: '1.5rem', marginTop:'0rem'}}>No profile found</p>
      </NotFoundWrapper>
    )
  }

  const avatarUrl = profile?.avatar_url || placeHolder;
  const options = { year: 'numeric', month: 'short', day: 'numeric' }; // Date format options
  let joinedDate =  profile?.created_at ? new Date(profile.created_at).toLocaleDateString('en-US', options) : "Unknown Date";

  if (joinedDate) {
    joinedDate = 'Joined ' + joinedDate;
  }

  const ProfileImage = styled.div`
    width: 10rem;
    height: 10rem;
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    background-image: url(${avatarUrl});
    
    @media (max-width: 1051px) {
      width: 17vw;
      height: 15vw;
      min-width: 5rem;
      min-height: 5rem;
    }
  `;

  return (
    <ProfileWrapper>
      <TopHalfWrapper>
        <ProfileImage />
        <ContentWrapper>
          <NameWrapper>
            <Name profile={profile} />
            <AddUser profile={profile}/>
          </NameWrapper>
          {!isMobile && (  // Show Bio and Joined for desktop screens
            <BioWrapper>
              <Bio profile={profile} />
              <Joined joinedDate={joinedDate} />
            </BioWrapper>
          )}
        </ContentWrapper>
      </TopHalfWrapper>
      <BottomHalfWrapper>
      {isMobile && (  // Show Bio and Joined for mobile screens
          <BioWrapper>
            <Bio profile={profile} />
            <Joined joinedDate={joinedDate} />
          </BioWrapper>
        )}
        <Followers profile={profile} />
        <Socials profile={profile} />
      </BottomHalfWrapper>
    </ProfileWrapper>
  );
};

const BioWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;


`;

const NameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 1051px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

const ContentWrapper = styled.div`
  width: 90%;
`;

const BottomHalfWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 94%;
  padding: 0 2rem 0 0;

  @media (max-width: 1051px) {
    padding: 2rem 1rem 1rem 1rem;
  }
`;

const ProfileWrapper = styled.div`
  width: calc(100% - 6.5rem);
  border-radius: 25px;
  overflow: hidden;
  margin: 3rem 1rem 1.5rem 3rem;
  box-shadow: 1px 2px 15px rgba(70, 70, 70, 0.3);
  background-color: ${Color.secondaryBackground};
  padding: 2rem 1rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  
  @media (max-width: 1051px) {
    margin: 1rem 1rem 1.5rem 1rem;
    width: calc(100% - 5rem);
  }

  @media (max-width: 465px) {
    margin: 0.5rem;
    width: calc(100% - 4rem);
  }
`;

const TopHalfWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width:94%;
  padding: 2rem;
  gap: 3.5rem;
  
  @media (max-width: 1051px) {
    gap: 1rem;
    padding: 1rem;
  }
`;

const NotFoundWrapper = styled.div`
  width: calc(100% - 6.5rem);
  height: 25%;
  border-radius: 25px;
  overflow: hidden;
  margin: 3rem 1rem 1.5rem 3rem;
  box-shadow: 1px 2px 15px rgba(70, 70, 70, 0.3);
  background-color: ${Color.secondaryBackground};
  padding: 2rem 1rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1051px) {
    margin: 1rem 1rem 1.5rem 1rem;
    width: calc(100% - 5rem);
  }
`;

export default ProfileArea;
