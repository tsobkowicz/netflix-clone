/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

import {
  Container,
  Group,
  Background,
  Dropdown,
  Picture,
  Link,
  Search,
  Profile,
  FeatureCallOut,
  SearchIcon,
  SearchInput,
  ButtonLink,
  PlayButton,
  Text,
  Feature,
  Logo,
} from './styles/header';

// TYPESCRIPT INTERFACES

interface HeaderProps {
  bg?: boolean;
  src?: string;
  dontShowOnSmallViewPort?: boolean;
}

interface SearchProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

interface HeaderComposition {
  Frame: React.FC;
  ButtonLink: React.FC<{ to: string }>;
  Logo: React.FC<{ to: string; alt: string; src: string }>;
  Feature: React.FC;
  FeatureCallOut: React.FC;
  Text: React.FC;
  TextLink: React.FC<{
    active?: boolean;
    onClick?: () => Promise<void> | void;
  }>;
  Group: React.FC;
  Picture: React.FC<{ src: string | undefined | null }>;
  Profile: React.FC;
  Search: React.FC<SearchProps>;
  Dropdown: React.FC;
  PlayButton: React.FC;
}

// COMPONENTS

// Default Header
const Header: React.FC<HeaderProps> & HeaderComposition = ({
  bg = true,
  children,
  ...restProps
}) => {
  return bg ? (
    <Background data-testid="header-bg" {...restProps}>
      {children}
    </Background>
  ) : (
      <>{children}</>
    );
};

// Feature
Header.Feature = ({ children, ...restProps }) => {
  return <Feature {...restProps}>{children}</Feature>;
};

// FeatureCallOut
Header.FeatureCallOut = ({ children, ...restProps }) => {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};

// Text
Header.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

// TextLink
Header.TextLink = ({ children, ...restProps }) => {
  return <Link {...restProps}>{children}</Link>;
};

// Frame
Header.Frame = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

// Group
Header.Group = ({ children, ...restProps }) => {
  return <Group {...restProps}>{children}</Group>;
};

// Profile
Header.Profile = ({ children, ...restProps }) => {
  return <Profile {...restProps}>{children}</Profile>;
};

// Picture
Header.Picture = ({ src, ...restProps }) => {
  return <Picture {...restProps} src={`/images/users/${src}.png`} />;
};

// ButtonLink
Header.ButtonLink = ({ children, ...restProps }) => {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

// Dropdown
Header.Dropdown = ({ children, ...restProps }) => {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

// PlayButton
Header.PlayButton = ({ children, ...restProps }) => {
  return <PlayButton {...restProps}>{children}</PlayButton>;
};

// Logo
Header.Logo = ({ to, ...restProps }) => {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};

// Search
const HeaderSearch: React.FC<SearchProps> = ({
  searchTerm,
  setSearchTerm,
  ...restProps
}) => {
  const [searchActive, setSearchActive] = useState<boolean>(false);

  return (
    <Search {...restProps}>
      <SearchIcon onClick={() => setSearchActive((x) => !x)}>
        <img src="/images/icons/search.png" alt="Search" data-testid="search-click" />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search films and series"
        active={searchActive}
        data-testid="search-input"
      />
    </Search>
  );
};
Header.Search = HeaderSearch;

// EXPORT HEADER COMPONENTS

export default Header;
