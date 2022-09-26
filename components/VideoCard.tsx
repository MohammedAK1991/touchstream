import {
  Box,
  Image,
  Avatar,
  Heading,
  Text,
  Flex,
  Stack,
} from '@chakra-ui/react';

export default function VideoCard({
  image,
  title,
  channel,
  views,
  timestamp,
  channelImage,
}: {
  image: string;
  title: string;
  channel: string;
  views: string;
  timestamp: string;
  channelImage: string;
}) {
  return (
    <Flex w="100vw" mb="1" p="4">
      <Image src={image} alt="" mr="4" flexShrink={0} />
      <Box p="2">
        <Stack mt={2} spacing={2}>
          <Flex>
            <Heading fontSize="lg">{title}</Heading>
          </Flex>
          <Flex justify="flex-start" align="center">
            <Avatar name={channel} src={channelImage} boxSize={8} mr={2} />
            <Text>{channel}</Text>
          </Flex>
          <Text>
            {views} views • {timestamp}
          </Text>
          <Text></Text>
        </Stack>
      </Box>
    </Flex>
  );
}
