import { useState , useEffect} from 'react'
import axios from 'axios'
import dayjs from 'dayjs'


async function createVideoCards(videoItems: any[]) {
  const newVideoCards = [];
  for (const video of videoItems) {
    const videoId = video.id;
    const { snippet } = video;
    const { channelId } = snippet;
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`,
    );
    const channelImage = response.data.items[0].snippet.thumbnails.medium.url;

    const { title } = snippet;
    const image = snippet.thumbnails.medium.url;
    const views = video.statistics.viewCount;
    const timestamp = dayjs(snippet.publishedAt).format('DD/MM/YYYY');
    const channel = snippet.channelTitle;
    const { description } = snippet;

    newVideoCards.push({
      videoId,
      image,
      title,
      channel,
      views,
      timestamp,
      channelImage,
      description,
    });
  }
  return newVideoCards;

}


export default function useMostPopularVideos(): {
  mostPopularVideos: any,
  loading: boolean,
  error: boolean,
  } {
  const [videoCards, setVideoCards] = useState<any[]>([]);
  const [Error, setError] = useState(false);

  useEffect(() => {
    axios
        .get(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=ES&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`,
        )
        .then((response) => {
          console.log({response})
          createVideoCards(response?.data?.items).then((res) => setVideoCards(res) )
          setError(false);
        })
        .catch((error) => {
          console.log(error);
          setError(error);
        });

  },[])

  return {
    mostPopularVideos: videoCards,
    loading: !Error && !videoCards,
    error: Error,
  };
}
