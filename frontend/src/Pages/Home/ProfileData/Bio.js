import styled from "styled-components";
import { Color } from "../../../constant/Color";

const Bio = ({ profile }) => {
  const bio = profile?.bio || "This profile has no Bio";

  return (
    <BioContainer>
      <p style={{ color: bio === "This profile has no Bio" ? 'lightgray' : Color.primaryText }}>
        {bio}
      </p>
    </BioContainer>
  );
};

const BioContainer = styled.div`
  font-size: 1.2rem;

  @media (max-width: 1051px) {
  }
`;

export default Bio;
