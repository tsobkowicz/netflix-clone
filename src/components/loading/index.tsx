import React from 'react';
import { LockBody, ReleaseBody, Spinner, Picture } from './styles/loading';

// TYPESCRIPTS INTERFACES

interface LoadingComposition {
  ReleaseBody: React.FC;
}

interface LoadingProps {
  src: string | undefined | null;
}

// COMPONENTS

// Default Loading component
const Loading: React.FC<LoadingProps> & LoadingComposition = ({
  src,
  ...restProps
}) => {
  return (
    <Spinner {...restProps}>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} data-testid="loading-picture" />
    </Spinner>
  );
};

// Release body
Loading.ReleaseBody = () => {
  return <ReleaseBody />;
};

// EXPORT COMPONENTS

export default Loading;
