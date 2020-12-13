/* eslint-disable prettier/prettier */
import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

import { Background, Container, Logo, ButtonLink } from './styles/header';

// TYPESCRIPT INTERFACES
interface HeaderComposition {
  Frame: React.FC;
  ButtonLink: React.FC<{ to: string }>;
  Logo: React.FC<{ to: string, alt: string, src: string }>;
}

interface HeaderProps {
  bg?: boolean;
}

// COMPONENTS

// Default Header
const Header: React.FC<HeaderProps> & HeaderComposition = ({
  bg = true,
  children,
  ...restProps
}) => {
  return bg ? (
    <Background {...restProps}>{children}</Background>
  ) : (
      <>{children}</>
    );
};

// Frame
Header.Frame = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

// ButtonLink
Header.ButtonLink = ({ children, ...restProps }) => {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

// Logo
Header.Logo = ({ to, ...restProps }) => {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};

// EXPORT HEADER COMPONENTS

export default Header;
