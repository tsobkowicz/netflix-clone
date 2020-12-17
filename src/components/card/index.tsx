import React, { useState, useContext, createContext } from 'react';
import {
  Container,
  Group,
  Title,
  SubTitle,
  Text,
  Feature,
  FeatureTitle,
  FeatureText,
  FeatureClose,
  Maturity,
  Content,
  Meta,
  Entities,
  Item,
  Image,
} from './styles/card';
import { Film, Series } from '../../types';

// TYPESCRIPT INTERFACES
interface ItemProps {
  item: Film | Series;
}

interface FeatureProps {
  category: 'series' | 'films';
}

interface CardComposition {
  Group: React.FC;
  Title: React.FC;
  SubTitle: React.FC;
  Text: React.FC;
  Meta: React.FC;
  Entities: React.FC;
  Image: React.FC<{ src: string }>;
  Item: React.FC<ItemProps>;
  Feature: React.FC<FeatureProps>;
}

interface FeatureContextInterface {
  showFeature: boolean;
  setShowFeature: React.Dispatch<React.SetStateAction<boolean>>;
  itemFeature: Film | Series;
  setItemFeature: React.Dispatch<React.SetStateAction<Film | Series>>;
}

// CONTEXT
export const FeatureContext = createContext<FeatureContextInterface>(
  undefined!
);

// COMPONENTS

// Default Card component
const Card: React.FC & CardComposition = ({ children, ...restProps }) => {
  const [showFeature, setShowFeature] = useState<boolean>(false);
  const [itemFeature, setItemFeature] = useState<Film | Series>(undefined!);

  return (
    <FeatureContext.Provider
      value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}
    >
      <Container {...restProps}>{children}</Container>
    </FeatureContext.Provider>
  );
};

// Group
Card.Group = ({ children, ...restProps }) => {
  return <Group {...restProps}>{children}</Group>;
};

// Title
Card.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

// SubTitle
Card.SubTitle = ({ children, ...restProps }) => {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

// Text
Card.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

// Meta
Card.Meta = ({ children, ...restProps }) => {
  return <Meta {...restProps}>{children}</Meta>;
};

// Entities
Card.Entities = ({ children, ...restProps }) => {
  return <Entities {...restProps}>{children}</Entities>;
};

// Image
Card.Image = ({ ...restProps }) => {
  return <Image {...restProps} />;
};

// Feature
const CardFeature: React.FC<FeatureProps> = ({
  category,
  children,
  ...restProps
}) => {
  const { showFeature, itemFeature, setShowFeature } = useContext(
    FeatureContext
  );

  return showFeature ? (
    <Feature
      src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}
      {...restProps}
    >
      <Content>
        <FeatureTitle>{itemFeature.title}</FeatureTitle>
        <FeatureText>{itemFeature.description}</FeatureText>
        <FeatureClose onClick={() => setShowFeature(false)}>
          <img src="/images/icons/close.png" alt="Close" />
        </FeatureClose>

        <Group margin="30px 0" flexDirection="row" alignItems="center">
          <Maturity rating={itemFeature.maturity}>
            {itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}
          </Maturity>
          <FeatureText fontWeight="bold">
            {itemFeature.genre.charAt(0).toUpperCase() +
              itemFeature.genre.slice(1)}
          </FeatureText>
        </Group>
        {children}
      </Content>
    </Feature>
  ) : null;
};
Card.Feature = CardFeature;

// Item
const CardItem: React.FC<ItemProps> = ({ item, children, ...restProps }) => {
  const { setShowFeature, setItemFeature } = useContext(FeatureContext);

  return (
    <Item
      onClick={() => {
        setItemFeature(item);
        setShowFeature(true);
      }}
      {...restProps}
    >
      {children}
    </Item>
  );
};
Card.Item = CardItem;

// EXPORT CARD COMPONENTS

export default Card;
