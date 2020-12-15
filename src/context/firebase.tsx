/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createContext } from 'react';
import Firebase from 'firebase';

interface FirebaseContextProp {
  firebase: Firebase.app.App;
}

export const FirebaseContext = createContext<FirebaseContextProp>(undefined!);
