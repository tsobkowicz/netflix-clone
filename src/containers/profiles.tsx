/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Firebase from 'firebase';
import { Header, Profiles } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
import { Profile } from '../types';

interface SelectionProfileContainerProps {
  user: Firebase.User | null;
  setProfile: React.Dispatch<React.SetStateAction<Profile>>;
}

const SelectionProfileContainer: React.FC<SelectionProfileContainerProps> = ({
  user,
  setProfile,
}) => {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo} />
        </Header.Frame>
      </Header>

      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User
            onClick={() =>
              setProfile({
                displayName: user?.displayName,
                photoURL: user?.photoURL,
              })
            }
          >
            <Profiles.Picture src={user?.photoURL} />
            <Profiles.Name>{user?.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>
  );
};

export default SelectionProfileContainer;
