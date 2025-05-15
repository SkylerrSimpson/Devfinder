import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Color } from "../constant/Color";

const navList = [
  { path: '/', name: 'Home' },
  { path: '/saved-profiles', name: 'Profiles' }, // Correct the path here
];

const Menu = () => {
  return (
    <Navigation>
      <ul>
        {navList.map((navItem) => (
          <li key={navItem.path}>
            <NavLink to={navItem.path}>
              {navItem.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </Navigation>
  );
};

const Navigation = styled.nav`
  padding-right: 1.5rem;
  display: flex;
  justify-content: center; /* Center the navigation items */
  
  ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0; /* Remove padding from ul */
    margin: 0; /* Remove margin from ul */
  }

  li {
    margin: 0 20px; /* Adjust margin for spacing between items */
    width: auto; /* Allow width to adjust */
  }

  a {
    color: ${Color.secondaryText};
    text-decoration: none;
  }

  a.active {
    color: ${Color.primaryText};
  }
`;

export default Menu;
