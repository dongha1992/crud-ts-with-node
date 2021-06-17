import React from 'react';
import styled from 'styled-components';
import { ItrackItem } from '@pages/postDetail';

export const TrackItem: React.FC<ItrackItem> = React.forwardRef(
  ({ track, onPlayHandler }, ref) => {
    return (
      <Container>
        <TitleWrapper>
          <Title>{track.title}</Title>
        </TitleWrapper>
        <AudioWrapper>
          <audio
            id="audio"
            crossOrigin="anonymous"
            controls
            src={track.track_url}
            ref={ref}
            onLoadedData={onPlayHandler}
          ></audio>
        </AudioWrapper>
      </Container>
    );
  }
);

const Container = styled.article`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const TitleWrapper = styled.div`
  font-weight: bold;
`;

const Title = styled.div``;

const AudioWrapper = styled.div`
  display: flex;
`;
