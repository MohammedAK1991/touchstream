import { useRouter } from 'next/router';
import { Box, CircularProgress, Text } from '@chakra-ui/react';
import Layout from '../../components/Layout';
import React, { useState, useEffect } from 'react';
import VideoRow from '../../components/VideoRow';
import axios from 'axios';
import dayjs from 'dayjs';

export default function SearchResults() {
  const router = useRouter();
  const searchQuery = router.query.searchQuery;
  const [videoRows, setVideoRows] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=9&type=video&q=${searchQuery}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`,
      )
      .then((response) => {
        createVideoRows(response.data['items']);
        setIsError(false);
      })
      .catch((error) => {
        console.log(error);
        setIsError(true);
        setIsLoading(false);
      });
  }, [searchQuery]);

  async function createVideoRows(videos: any) {
    let newVideoRows = [];
    for (const video of videos) {
      const videoId = video.id.videoId;
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?part=statistics%2C%20snippet&id=${videoId}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`,
      );
      const views = response.data.items[0].statistics.viewCount;
      const snippet = video.snippet;
      const title = snippet.title;
      const timestamp = dayjs(snippet.publishedAt).format('DD/MM/YYYY');
      const channel = snippet.channelTitle;
      const description = snippet.description;
      const image = snippet.thumbnails.medium.url;

      newVideoRows.push({
        videoId,
        title,
        image,
        views,
        timestamp,
        channel,
        description,
      });
    }
    setVideoRows(newVideoRows);
    setIsLoading(false);
  }
  if (isError) {
    return <Text>No Results found!</Text>;
  }

  return (
    <Layout>
      <Box w="full" overflowY="scroll" overflowX="hidden" p="4">
        {isLoading ? (
          <CircularProgress className="loading" color="secondary" />
        ) : null}

        {videoRows.map((item) => {
          return (
            <VideoRow
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
