/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useContext } from 'react';
import Firebase from 'firebase';
import { FirebaseContext } from '../context/firebase';

interface User {
  user: Firebase.User | null;
}

const localStorageItem = (ls: string | null) => {
  if (typeof ls === 'string') {
    return JSON.parse(ls);
  }
  return null;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function useAuthListener(): User {
  const [user, setUser] = useState<Firebase.User | null>(
    localStorageItem(localStorage.getItem('authUser'))
  );
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem('authUser', JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem('authUser');
        setUser(null);
      }
    });

    return () => listener();
  }, []);

  return { user };
}
