/* eslint-disable react/no-unescaped-entities */
import React, { FormEvent, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import { Form } from '../components';
import { FirebaseContext } from '../context/firebase';
import * as ROUTES from '../constants/routes';

const Signup: React.FC = () => {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [firstName, setFirstName] = useState<string>('');
  const [emailAddress, setEmailAddress] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const isInvalid = firstName === '' || password === '' || emailAddress === '';

  const handleSignup = (e: FormEvent) => {
    e.preventDefault();

    return firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) =>
        result.user
          ?.updateProfile({
            displayName: firstName,
            photoURL: (Math.floor(Math.random() * 5) + 1).toString(),
          })
          .then(() => {
            history.push(ROUTES.BROWSE);
          })
      )
      .catch((err) => {
        setFirstName('');
        setEmailAddress('');
        setPassword('');
        setError(err.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignup} method="POST">
            <Form.Input
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Form.Input
              placeholder="Email address"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
            />
            <Form.Input
              type="password"
              value={password}
              autoComplete="off"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign Up
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            Already a user? <Form.Link to="/signin">Sign in now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
};

export default Signup;
