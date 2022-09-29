import { useState , useEffect} from 'react'
import axios from 'axios'
import dayjs from 'dayjs'


async function createVideoRows(videos: any) {
  const newVideoRows = [];
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
  return newVideoRows;

}


export default function useVideosBySearchQuery(searchQuery: string): {
  videos: any[],
  loading: boolean,
  error: boolean,
  } {
  const [videoCards, setVideoCards] = useState<any[]>([]);
  const [Error, setError] = useState(false);

  useEffect(() => {
    axios
        .get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=9&type=video&q=${searchQuery}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`,
        )
        .then((response) => {
          createVideoRows(response?.data?.items).then((res) => setVideoCards(res) )
          setError(false);
        })
        .catch((error) => {
          console.log(error);
          setError(error);
        });

  },[searchQuery])

  return {
    videos: videoCards,
    loading: !Error && !videoCards,
    error: Error,
  };
}
