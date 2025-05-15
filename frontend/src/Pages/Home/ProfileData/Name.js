import { Color } from "../../../constant/Color";
import styled from "styled-components";
import UsersHandle from "./UsersHandle";


const Name = ( { profile } ) => {

    const name = profile?.name || "Unknown User";

    return (
        <NameContainer>
            <NameHeader>{name}</NameHeader>
            <UsersHandle profile={profile}/>
        </NameContainer>
    );
};

const NameContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const NameHeader = styled.h1`
    margin-top: 0;
    margin-bottom: 0;

    @media (max-width: 1051px) {
        font-size: 1.5rem;
    }
`;

export default Name;
