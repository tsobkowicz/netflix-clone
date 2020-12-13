import React from 'react';
import { Container, Input, Button, Text, Break } from './styles/opt-form';

// TYPESCRIPT INTERFACES
interface OptFormComposition {
  Input: React.FC<{ placeholder: string }>;
  Button: React.FC;
  Text: React.FC;
  Break: React.FC;
}

// COMPONENTS

// Default OptForm
const OptForm: React.FC & OptFormComposition = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

// Input
OptForm.Input = ({ ...restProps }) => {
  return <Input {...restProps} />;
};

// Button
OptForm.Button = ({ children, ...restProps }) => {
  return (
    <Button {...restProps}>
      {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  );
};

// Text
OptForm.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

// Break
OptForm.Break = ({ ...restProps }) => {
  return <Break {...restProps} />;
};

// EXPORT COMPONENTS

export default OptForm;
