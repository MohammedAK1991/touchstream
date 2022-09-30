import { useCallback } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export default function SideBarRow({
  Icon,
  title,
}: {
  Icon: any;
  title?: string;
}): JSX.Element {
  const router = useRouter();
  const handleClickSideBarRow = useCallback(() => {
    if (title === 'Home') {
      router.push('/');
    } else {
      router.push(`/search/${title}`);
    }
  }, [router, title]);
  return (
    <Flex
      px="4"
      py="4"
      my={1}
      justify="flex-start"
      align="center"
      _hover={{ bgColor: 'gray.200', cursor: 'pointer' }}
      onClick={handleClickSideBarRow}
    >
      <Icon />
      {title ? (
        <Text fontSize="sm" ml={6} pr={16}>
          {title}
        </Text>
      ) : null}
    </Flex>
  );
}
