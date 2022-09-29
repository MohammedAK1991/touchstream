import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import LoadingSpinner from './LoadingSpinner';
import VideoCard from './VideoCard';
import useMostPopularVideos from '../data/mostPopularVideos';

export default function MostPopular() {
  const { mostPopularVideos, loading, error } = useMostPopularVideos();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <Text px={4} pt={5}>
        No Results found!
      </Text>
    );
  }

  return (
    <Box overflowY="scroll" overflowX="hidden" p="2">
      <Box>
        {mostPopularVideos.map(
          (item: {
            videoId: React.Key | null | undefined;
            title: string;
            image: string;
            views: string;
            timestamp: string;
            channel: string;
            channelImage: string;
          }) => {
            return (
              <VideoCard
                id={item.videoId as string}
                key={item.videoId}
                title={item.title}
                image={item.image}
                views={item.views}
                timestamp={item.timestamp}
                channel={item.channel}
                channelImage={item.channelImage}
              />
            );
          },
        )}
      </Box>
    </Box>
  );
}
