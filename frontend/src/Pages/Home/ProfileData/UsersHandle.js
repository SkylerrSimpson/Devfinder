import styled from "styled-components";
import { Color } from "../../../constant/Color";

const UsersHandle = ( { profile } ) => {

  const login = profile?.login || "Unknown User";

  return (
    <UsersHandleContainer>
      @{login}
    </UsersHandleContainer>
  );
};

const UsersHandleContainer = styled.div`
  display: flex;
  height: 4rem;
  font-size: 1.2rem;
  color: ${Color.tertiaryText};

  @media (max-width: 1051px) {
    height: 1.5rem;
  }
`;

export default UsersHandle;
