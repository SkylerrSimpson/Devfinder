import { Color } from "../../constant/Color";
import { useState, useEffect } from "react";
import styled from "styled-components";
import SearchIcon from '../../images/icon-search.svg';

const SearchBar = (props) => {

    const {setProfile, searchProfiles, profile, initialValue} = props;

    const [searchValue, setSearchValue] = useState(initialValue ||'');
    const [windowWidth, setWindowWidth] = useState(window.innerWidth); 

    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);

        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => {
            document.head.removeChild(link);
        };
    }, []);

    const handleSearch = (e) => { 
        setSearchValue(e.target.value);
    }

    const handleSearchSubmit = async (e) => {
        e.preventDefault();

        const trimmedSearchValue = searchValue.trim();
        if (trimmedSearchValue === '') {
            return;
        }
        const data = await searchProfiles(trimmedSearchValue);
        // You may want to handle what happens with the fetched data here
        setProfile(data);
    }

    const placeholderText = windowWidth <= 501 ? "Search..." : "Search Github username...";

    return (
        <InputForm onSubmit={handleSearchSubmit} profile={profile}>
            <SearchIconStyled/>
            <Input 
                value={searchValue}
                style={{fontFamily: 'Space Mono'}}
                type="text"
                onChange={handleSearch}
                placeholder={placeholderText}
            />
            <Button type='submit' style={{fontFamily: 'Space Mono'}}>
                Search
            </Button>
        </InputForm>
    );
};

const InputForm = styled.form `
    width: calc(100% - 7.9rem);
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${Color.secondaryBackground};
    padding: 1rem 1rem 1rem 3rem;
    border-radius: 25px;
    margin: 3rem 1.5rem 0 3rem;
    box-shadow: 1px 2px 15px rgba(70, 70, 70, 0.3); 

    @media (max-width: 1051px) {
        margin: 1rem 1.5rem 0 1rem;
        width: calc(100% - 5rem);
        padding: 1rem 1rem 1rem 2rem;
    }
`;

const Input = styled.input `
    border: none;
    outline: none;
    background-color: inherit;
    width: 100%;
    font-size: 1.4rem;

    @media (max-width: 1051px) {
        font-size: 1rem;
    }
    @media (max-width: 501px) {
        font-size: 0.8rem;
    }
`;

const Button = styled.button `
    border: none;
    background-color: inherit;
    cursor: pointer;
    padding: 1.2rem 2rem;
    color: ${Color.secondaryBackground};
    font-size: 1.2rem;
    background-color: ${Color.primaryButton};
    border-radius: 8px;

    @media (max-width: 1051px) {
        padding: 1rem 1.5rem;
        font-size: 1rem;
    }
`;

const SearchIconStyled = styled.img.attrs({
    src: SearchIcon,
    alt: 'search icon'
})`
    width: 1.8rem;
    height: 1.8rem;
    padding-right: 2rem;

    @media (max-width: 1051px) {
        padding-right: 1rem;
    }
`;

export default SearchBar;
