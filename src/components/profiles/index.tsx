import React from 'react';
import { Container, Title, List, Item, Picture, Name } from './styles/profiles';

// TYPESCRIPT INTERFACE

interface User {
  onClick: () => void;
}

interface ProfilesComposition {
  Title: React.FC;
  List: React.FC;
  User: React.FC<User>;
  Picture: React.FC<{ src: string | undefined | null }>;
  Name: React.FC;
}

//  COMPONENTS

// Default Profiles component
const Profiles: React.FC & ProfilesComposition = ({
  children,
  ...restProps
}) => {
  return <Container {...restProps}>{children}</Container>;
};

// Title
Profiles.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

// List
Profiles.List = ({ children, ...restProps }) => {
  return <List {...restProps}>{children}</List>;
};

// Item
Profiles.User = ({ children, ...restProps }) => {
  return <Item {...restProps}>{children}</Item>;
};

// Picture
Profiles.Picture = ({ src, children, ...restProps }) => {
  return (
    <Picture
      src={src ? `/images/users/${src}.png` : '/images/misc/loading.gif'}
      {...restProps}
    >
      {children}
    </Picture>
  );
};

// Name
Profiles.Name = ({ children, ...restProps }) => {
  return <Name {...restProps}>{children}</Name>;
};

// EXPORT COMPONENTS

export default Profiles;
