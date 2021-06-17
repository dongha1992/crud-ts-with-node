import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { Loading } from '@components/Loading';
import { api } from '@api/index';
import { IPostItem } from '@components/PostList';
import { TrackItem } from '@components/TrackItem';

interface Itrack {
  album_id: number;
  id: number;
  release_date: string;
  track_url: string;
  title: string;
}

declare global {
  interface Window {
    webkitAudioContext: string;
  }
}

export interface ItrackItem {
  track: Itrack;
  onPlayHandler: () => void;
  ref?: React.Ref<HTMLAudioElement> | null;
}

export const PostDetail = React.memo(({ match }: any) => {
  const [post, setPost] = useState<IPostItem | any>({});
  const audioElem = useRef<HTMLAudioElement>(null);
  // for legacy browsers
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  const audioContext = new AudioContext();

  useEffect(() => {
    getDetail();
  }, []);

  const getDetail = async () => {
    const { id } = match.params;
    const res = await api.getAlbumDetail(id);
    setPost(res);
  };

  const onPlayHandler = () => {
    const track = audioContext.createMediaElementSource(
      audioElem?.current as HTMLMediaElement
    );
    const gainNode = audioContext.createGain();
    gainNode.gain.value = 0.5;
    track.connect(gainNode);
    gainNode.connect(audioContext.destination);
  };

  if (!Object.keys(post).length) return <Loading />;

  return (
    <Container>
      <Background>
        <Image src={post.cover_url} alt="img" />
        <div>앨범: {post.album}</div>
      </Background>
      <Content>
        {post.track_list.map((track: any) => {
          return (
            <TrackItem
              track={track}
              key={track.id}
              onPlayHandler={onPlayHandler}
              ref={audioElem}
            />
          );
        })}
      </Content>
    </Container>
  );
});

export default PostDetail;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Background = styled.div`
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  object-fit: contain;
`;
const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 20px;
`;
