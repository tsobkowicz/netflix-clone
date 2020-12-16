/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from 'react';
import { SelectionMap, Profile } from '../types';
import SelectionProfileContainer from './profiles';
import { FirebaseContext } from '../context/firebase';

interface BrowseProp {
  slides: SelectionMap;
}

const BrowseContainer: React.FC<BrowseProp> = ({ slides }) => {
  const [profile, setProfile] = useState<Profile>({
    displayName: null,
    photoURL: null,
  });
  const [loading, setLoading] = useState(true);
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  return <SelectionProfileContainer user={user} setProfile={setProfile} />;
};

export default BrowseContainer;
