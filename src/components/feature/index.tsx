import React from 'react';
import { Container, Title, SubTitle } from './styles/feature';

// TYPESCRIPT INTERFACES
interface FeatureComposition {
  Title: React.FC;
  SubTitle: React.FC;
}

// COMPONENTS

// Deafoult Feature components
const Feature: React.FC & FeatureComposition = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

// Title
Feature.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

// SubTitle
Feature.SubTitle = ({ children, ...restProps }) => {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

// EXPORT FEATURE COMPONENTS

export default Feature;
