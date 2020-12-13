/* eslint-disable prettier/prettier */
import React, { useState, useContext, createContext } from 'react';
import {
  Container,
  Inner,
  Title,
  Item,
  Frame,
  Header,
  Body,
} from './styles/accoridon';

// TYPESCRIPT INTERFACES
interface AccordionComposition {
  Title: React.FC;
  Item: React.FC;
  Frame: React.FC;
  Header: React.FC;
  Body: React.FC;
}

interface ToggleContextInterface {
  toggleShow: boolean;
  setToggleShow: React.Dispatch<React.SetStateAction<boolean>>;
}

// INIT REACT CONTEXT

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const ToggleContext = createContext<ToggleContextInterface>(undefined!);

// COMPONENTS

// Default Accordion
const Accordion: React.FC & AccordionComposition = ({
  children,
  ...restProps
}) => {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
};

// Title
Accordion.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

// Frame
Accordion.Frame = ({ children, ...restProps }) => {
  return <Frame {...restProps}>{children}</Frame>;
};

// Item
const AccordionItem: React.FC = ({ children, ...restProps }) => {
  const [toggleShow, setToggleShow] = useState<boolean>(false);

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};
Accordion.Item = AccordionItem;

// Header
const AccordionHeader: React.FC = ({ children, ...restProps }) => {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);
  return (
    <Header onClick={() => setToggleShow((x) => !x)} {...restProps}>
      {children}
      {toggleShow ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
          <img src="/images/icons/add.png" alt="Open" />
        )}
    </Header>
  );
};
Accordion.Header = AccordionHeader;

// Body
const AccordionBody: React.FC = ({ children, ...restProps }) => {
  const { toggleShow } = useContext(ToggleContext);
  return (
    <Body className={toggleShow ? 'open' : 'closed'} {...restProps}>
      <span>{children}</span>
    </Body>
  );
};
Accordion.Body = AccordionBody;

// EXPORT COMPONENTS

export default Accordion;
