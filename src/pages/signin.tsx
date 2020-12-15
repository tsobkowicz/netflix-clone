/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unescaped-entities */
import React, { FormEvent, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import { Form } from '../components';
import { FirebaseContext } from '../context/firebase';
import * as ROUTES from '../constants/routes';

const Signin: React.FC = () => {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [emailAddress, setEmailAddress] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const isInvalid = password === '' || emailAddress === '';

  const handleSignin = (e: FormEvent) => {
    e.preventDefault();

    // firebase auth
    firebase.auth().signInWithEmailAndPassword(emailAddress, password).then(() => {
      // push to the browse page
      history.push(ROUTES.BROWSE);
    }).catch((err) => {
      setEmailAddress('');
      setPassword('');
      setError(err.message);
    })
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignin} method="POST">
            <Form.Input
              placeholder="Email address"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
            />
            <Form.Input
              type="password"
              placeholder="Password"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Form.Submit disabled={isInvalid} type="submit">
              Sign In
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
};

export default Signin;
