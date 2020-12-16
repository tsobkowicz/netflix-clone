/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';
import { Film, Series } from '../types';

interface Content {
  [x: string]: Film[] | Series[];
}

export default function useContent(target: string): Content {
  const [content, setContent] = useState<Film[] | Series[]>([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    firebase
      .firestore()
      .collection(target)
      .get()
      .then((snapshot) => {
        const allContent: any = snapshot.docs.map((contentObj) => ({
          ...contentObj.data(),
          docId: contentObj.id,
        }));

        setContent(allContent);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return { [target]: content };
}
