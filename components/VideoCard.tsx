import { useCallback } from 'react';
import {
  Box,
  Image,
  Avatar,
  Text,
  Flex,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import VideoPlayerModal from './VideoPlayerModal';

export default function VideoCard({
  id,
  image,
  title,
  channel,
  views,
  timestamp,
  channelImage,
}: {
  id: string;
  image: string;
  title: string;
  channel: string;
  views: string;
  timestamp: string;
  channelImage: string;
}) {
  const {
    isOpen: isOpenVideoPlayer,
    onOpen: onOpenVideoPlayerModal,
    onClose: onCloseVideoPlayer,
  } = useDisclosure();

  const handleClickOnVideo = useCallback(() => {
    onOpenVideoPlayerModal();
  }, [onOpenVideoPlayerModal]);

  return (
    <Flex
      className="most-popular"
      w="100vw"
      mb="1"
      p="4"
      cursor="pointer"
      onClick={handleClickOnVideo}
    >
      <Image src={image} alt="" mr="4" flexShrink={0} />
      <Box p="2">
        <Stack mt={2} spacing={2}>
          <Text fontSize="lg" noOfLines={1} fontFamily="verdana">
            {title}
          </Text>
          <Flex justify="flex-start" align="center">
            <Avatar name={channel} src={channelImage} boxSize={8} mr={2} />
            <Text>{channel}</Text>
          </Flex>
          <Text>
            {views} views • {timestamp}
          </Text>
        </Stack>
      </Box>
      <VideoPlayerModal
        videoId={id}
        onClose={onCloseVideoPlayer}
        isOpen={isOpenVideoPlayer}
      />
    </Flex>
  );
}
