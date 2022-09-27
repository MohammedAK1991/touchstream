import { Box, Image, Heading, Text, Flex, Stack } from '@chakra-ui/react';

export default function VideoRow({
  views,
  description,
  timestamp,
  channel,
  title,
  image,
}: {
  views: number;
  description: string;
  timestamp: Date;
  channel: string;
  title: string;
  image: string;
}) {
  return (
    <Flex w="100vw" mb="1" p="4">
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
    </Flex>
  );
}
