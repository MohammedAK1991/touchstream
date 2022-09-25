import React, { useState } from 'react';
import {
  Flex,
  Heading,
  HStack,
  Spacer,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import Link from 'next/link';

export default function Header() {
  const [inputSearch, setInputSearch] = useState('');

  return (
    <Flex
      borderWidth="1px"
      color="black"
      align="center"
      direction="row"
      p={['1', '4']}
    >
      <Link href="/" passHref>
        <HStack cursor="pointer">
          <Heading as="a" display={['flex']} fontSize="md" fontFamily="verdana">
            Touchstream youtube player
          </Heading>
        </HStack>
      </Link>
      <InputGroup size="md" mx={4}>
        <Input placeholder="Search for vidoes on youtube here" />
        <InputRightElement>
          <Search2Icon />
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
}
