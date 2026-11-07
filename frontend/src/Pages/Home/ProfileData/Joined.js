import styled from "styled-components";

const Joined = ({ joinedDate }) => {
  return (
    <JoinedContainer>
      <p style={{ color: "lightgray" }}>{joinedDate}</p>
    </JoinedContainer>
  );
};

const JoinedContainer = styled.div`
  font-size: 1.2rem;
`;

export default Joined;
