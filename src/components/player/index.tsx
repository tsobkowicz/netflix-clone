/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState, useContext, createContext } from 'react';
import ReactDOM from 'react-dom';
import { Container, Button, Overlay, Inner, Close } from './styles/player';

// TYPESCRIPT INTERFACES

interface PlayerComposition {
  Video: React.FC<{ src: string }>;
  Button: React.FC;
}

interface PlayerContextInterface {
  showPlayer: boolean;
  setShowPlayer: React.Dispatch<React.SetStateAction<boolean>>;
}

// CONTEXT

export const PlayerContext = createContext<PlayerContextInterface>(undefined!);

// COMPONENTS

// Default Player Component
const Player: React.FC & PlayerComposition = ({ children, ...restProps }) => {
  const [showPlayer, setShowPlayer] = useState<boolean>(false);

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  );
};

// Video
const PlayerVideo: React.FC<{ src: string }> = ({ src }) => {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return showPlayer
    ? ReactDOM.createPortal(
      <Overlay onClick={() => setShowPlayer(false)} >
        <Inner>
          <video id="netflix-player" controls>
            <source src={src} type="video/mp4" />
          </video>
          <Close />
        </Inner>
      </Overlay>,
      document.body
    )
    : null;
};
Player.Video = PlayerVideo;

// Button
const PlayerButton: React.FC = ({ ...restProps }) => {
  const { setShowPlayer } = useContext(PlayerContext);

  return (
    <Button onClick={() => setShowPlayer((x) => !x)} {...restProps}>
      Play
    </Button>
  );
};
Player.Button = PlayerButton;

// EXPORT PLAYER COMPONENTS

export default Player;
