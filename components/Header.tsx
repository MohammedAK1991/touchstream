import React, { useState, useRef } from 'react';
import {
  Flex,
  Heading,
  Input,
  IconButton,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { Search2Icon, HamburgerIcon } from '@chakra-ui/icons';
import Link from 'next/link';

export default function Header({
  toggleSidebar,
}: {
  toggleSidebar: () => void;
}) {
  return (
    <Flex
      borderWidth="1px"
      color="black"
      align="center"
      direction="row"
      p={['1', '2']}
      shadow="sm"
    >
      <Link href="/" passHref>
        <Flex cursor="pointer" justify="center" align="center" mr={8}>
          <IconButton
            background="none"
            aria-label="Toggle sidebar"
            mr={4}
            icon={
              <HamburgerIcon as="button" boxSize={6} onClick={toggleSidebar} />
            }
          />

          <Heading
            as="a"
            display={['flex']}
            fontSize="md"
            fontFamily="verdana"
            w="fit-content"
          >
            Youtube
          </Heading>
        </Flex>
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
