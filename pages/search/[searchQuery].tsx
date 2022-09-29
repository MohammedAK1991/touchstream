import React from 'react';
import { useRouter } from 'next/router';
import { Box, Text } from '@chakra-ui/react';
import Layout from '../../components/Layout';
import VideoRow from '../../components/VideoRow';
import LoadingSpinner from '../../components/LoadingSpinner';
import useVideosBySearchQuery from '../../data/videosBySearchQuery';

export default function SearchResults() {
  const router = useRouter();
  const searchQuery = router.query.searchQuery;
  const { videos, loading, error } = useVideosBySearchQuery(
    searchQuery as string,
  );

  return (
    <Layout>
      <Box w="full" overflowY="scroll" overflowX="hidden" p="4">
        {loading ? <LoadingSpinner /> : null}
        {error ? <Text m={1}>No Results found!</Text> : null}

        {videos.map((item) => {
          return (
            <VideoRow
              id={item.videoId}
              key={item.id}
              title={item.title}
              image={item.image}
              views={item.views}
              timestamp={item.timestamp}
              channel={item.channel}
              description={item.description}
            />
          );
        })}
      </Box>
    </Layout>
  );
}
