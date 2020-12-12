import React from 'react';
import {
  Inner,
  Container,
  Pane,
  Item,
  Title,
  SubTitle,
  Image,
} from './styles/jumbotron';

interface JumbotronComposition {
  Container: React.FC;
  Pane: React.FC;
  Title: React.FC;
  SubTitle: React.FC;
  Image: React.FC<{ src: string; alt: string }>;
}

const Jumbotron: React.FC<{ direction?: string }> & JumbotronComposition = ({
  direction = 'row',
  children,
  ...restProps
}) => {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
};

Jumbotron.Container = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Pane = ({ children, ...restProps }) => {
  return <Pane {...restProps}>{children}</Pane>;
};

Jumbotron.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = ({ children, ...restProps }) => {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbotron.Image = ({ ...restProps }) => {
  return <Image {...restProps} />;
};

export default Jumbotron;
