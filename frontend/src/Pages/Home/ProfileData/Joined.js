import styled from "styled-components";
import { Color } from "../../../constant/Color";

const Joined = ( { joinedDate } ) => {
  return (
    <JoinedContainer>
      <p style={{color: 'lightgray'}}>{joinedDate}</p>
    </JoinedContainer>
  );
};

const JoinedContainer = styled.div`
  font-size: 1.2rem;
`;

export default Joined;
