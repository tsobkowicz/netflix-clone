import Firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
// uncoment if you want to seed firestore database
// import { seedDatabase } from '../seed';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const firebase = Firebase.initializeApp(config);

// uncoment if you want to seed firestore database
// seedDatabase(firebase);

export { firebase };
