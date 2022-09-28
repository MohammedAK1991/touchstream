import { useCallback } from 'react';
import {
  Image,
  Heading,
  Text,
  Flex,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import VideoPlayerModal from './VideoPlayerModal';

export default function VideoRow({
  id,
  views,
  description,
  timestamp,
  channel,
  title,
  image,
}: {
  id: string;
  views: number;
  description: string;
  timestamp: Date;
  channel: string;
  title: string;
  image: string;
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
    <Flex w="100vw" mb="1" p="4" cursor="pointer" onClick={handleClickOnVideo}>
      <Image src={image} alt="" mr="4" flexShrink={0} />
      <Stack mt={2} spacing={2}>
        <Heading noOfLines={2} fontSize="md">
          {title}
        </Heading>
        <Text>{channel}</Text>
        <Text>
          {views} views • {timestamp}
        </Text>
        <Text>{description}</Text>
      </Stack>
      <VideoPlayerModal
        videoId={id}
        onClose={onCloseVideoPlayer}
        isOpen={isOpenVideoPlayer}
      />
    </Flex>
  );
}
