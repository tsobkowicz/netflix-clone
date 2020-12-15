import React, { FormEvent } from 'react';
import {
  Container,
  Base,
  Error,
  Title,
  Text,
  TextSmall,
  Link,
  Input,
  Submit,
} from './styles/form';

// TYPESCRIPT INTERFACES

interface InputEventProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  autoComplete?: string;
}

interface SubmitFormEventProps {
  onSubmit: (e: FormEvent) => void;
  method: string;
}

interface FormComposition {
  Error: React.FC;
  Base: React.FC<SubmitFormEventProps>;
  Title: React.FC;
  Text: React.FC;
  TextSmall: React.FC;
  Link: React.FC<{ to: string }>;
  Input: React.FC<InputEventProps>;
  // eslint-disable-next-line prettier/prettier
  Submit: React.FC<{ disabled: boolean, type: "button" | "submit" }>;
}

// COMPONENTS

// Default Form component
const Form: React.FC & FormComposition = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

// Base
Form.Base = ({ children, ...restProps }) => {
  return <Base {...restProps}>{children}</Base>;
};

// Error
Form.Error = ({ children, ...restProps }) => {
  return <Error {...restProps}>{children}</Error>;
};

// Title
Form.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

// Text
Form.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

// Text
Form.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

// TextSmall
Form.TextSmall = ({ children, ...restProps }) => {
  return <TextSmall {...restProps}>{children}</TextSmall>;
};

// Link
Form.Link = ({ children, ...restProps }) => {
  return <Link {...restProps}>{children}</Link>;
};

// Input
Form.Input = ({ children, ...restProps }) => {
  return <Input {...restProps}>{children}</Input>;
};

// Submit
Form.Submit = ({ children, ...restProps }) => {
  return <Submit {...restProps}>{children}</Submit>;
};

// EXPORT FORM COMPONENTS

export default Form;
