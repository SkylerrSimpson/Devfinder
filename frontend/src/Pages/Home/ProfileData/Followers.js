import styled from "styled-components";
import { Color } from "../../../constant/Color";

const Followers = ( { profile } ) => {

  const public_repos = profile?.public_repos || "Unknown Repos";
  const followers = profile?.followers || "Unknown Followers";
  const following = profile?.following || "Unknown Following";

  return (
    <FollowersContainer>
      <TextBox>
              <Repos>
                <StaticTextDiv>
                  Repos
                </StaticTextDiv>
                <div >
                <FollowersHeader>
                  {public_repos}
                </FollowersHeader>
                </div>
            </Repos>
              <FollowerAmount>
                <StaticTextDiv>
                  Followers
                </StaticTextDiv>
                <div >
                <FollowersHeader>
                  {followers}
                </FollowersHeader>
                </div>
              </FollowerAmount>
              <FollowingAmount>
                <StaticTextDiv>
                  Following
                </StaticTextDiv>
                <div >
                <FollowersHeader>
                  {following}
                </FollowersHeader>
                </div>
              </FollowingAmount>
      </TextBox>
    </FollowersContainer>
  );
};

const FollowersContainer = styled.div`
  display: flex;
  height: 8rem;
  width: 83.5%;
  align-self: flex-end;
  border-radius: 10px;
  background-color: ${Color.primaryBackground};
  padding-top: 1rem;
  padding-left: 1rem;
  
  @media (max-width: 1051px) {
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;

const FollowersHeader = styled.h1`
  margin-top: 0.5rem;

  @media (max-width: 1051px) {
    font-size: 1.5rem;
    text-align: center;
  }

  @media (max-width: 501px) {
    font-size: 1rem;
  }
`;

const StaticTextDiv = styled.div`
  height: 25%;

  @media (max-width: 501px) {
    font-size: 0.8rem;
  }
`;

const TextBox = styled.div`
  width: 55%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 501px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

const Repos = styled.div`
  padding-left: 1rem;
  color: ${Color.secondaryText};

  @media (max-width: 501px) {
    padding-left: 0;
  }
`;

const FollowerAmount = styled.div`
  color: ${Color.secondaryText};

`;

const FollowingAmount = styled.div`
  color: ${Color.secondaryText};
`;


export default Followers;