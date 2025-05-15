import styled from "styled-components";
import { Color } from "../../../constant/Color";
import LocationIcon from '../../../images/icon-location.png';
import TwitterIcon from '../../../images/icon-twitter.png';
import WebsiteIcon from '../../../images/icon-website.png';
import CompanyIcon from '../../../images/icon-company.png';

const Socials = ( { profile } ) => {

  const location = profile?.location || "Not Available";
  const twitter = profile?.twitter_username || "Not Available";
  const website = profile?.blog || "Not Available";
  const company = profile?.company || "Not Available";

  return (
    <SocialsContainer>
      <HandleContainer>
        <Location>
          <StyledImage src={LocationIcon} alt="Location Icon"/>
          {location === "Not Available" ? <NotAvailable>{location}</NotAvailable> : <Available>{location}</Available>}
        </Location>
        <Website>
          <StyledImage src={WebsiteIcon} alt="Website Icon"/>
          {website === "Not Available" ? <NotAvailable>{website}</NotAvailable> : <AvailableLink href={website} target="_blank">{website}</AvailableLink>}

        </Website>
     
      </HandleContainer>
      <HandleContainer>
        <Twitter>
          <StyledImage src={TwitterIcon} alt="Twitter Icon"/>
          {twitter === "Not Available" ? <NotAvailable>{twitter}</NotAvailable> : <Available>{twitter}</Available>}

        </Twitter>
        <Company>
          <StyledImage src={CompanyIcon} alt="Company Icon"/>
          {company === "Not Available" ? <NotAvailable style={{paddingBottom: '4rem'}}>{company}</NotAvailable>: <Available  style={{paddingBottom: '4rem'}}>{company}</Available>}

        </Company>
      </HandleContainer>
    </SocialsContainer>
  );
}

const SocialsContainer = styled.div`
  display: flex;
  width: 83.5%;
  align-self: flex-end;
  height: 8rem;
  padding-top: 2rem;
  flex-direction: row;
  gap: 1rem;

  @media (max-width: 1051px) {
    width: 100%;
    padding-top: 1rem;
    flex-direction: column;
    gap: 0;
    
  }
`;

const NotAvailable = styled.span`
  color: lightgray;

`;

const Available = styled.span`
  color: ${Color.secondaryText};
`;

const AvailableLink = styled.a`
  color: ${Color.secondaryText};
`;

const StyledImage = styled.img`
  padding-right: 1rem;

  @media (max-width: 1051px) {
    padding-top: 1rem;
  }
`;

const HandleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 43%;
  justify-content: space-between;
  height: 65%;

  @media (max-width: 1051px) {
    width: 100%;
    gap: 1rem;
    padding-bottom: 2rem;
  }

`;

const Location = styled.div`
`;

const Twitter = styled.div`

`;

const Website = styled.div`

`;

const Company = styled.div`
`;

export default Socials;