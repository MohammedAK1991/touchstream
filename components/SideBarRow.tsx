import { Flex, Text } from '@chakra-ui/react';
export default function SideBarRow({
  Icon,
  title,
}: {
  Icon: any;
  title?: string;
}): JSX.Element {
  return (
    <Flex
      pl="4"
      pr="12"
      py="2"
      my={1}
      justify="flex-start"
      align="center"
      _hover={{ bgColor: 'gray.200', cursor: 'pointer' }}
    >
      <Icon />
      {title ? (
        <Text fontSize="sm" ml={6}>
          {title}
        </Text>
      ) : null}
    </Flex>
  );
}
