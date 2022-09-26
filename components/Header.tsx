import React, { useState, useRef } from 'react';
import {
  Flex,
  Heading,
  Input,
  IconButton,
  InputGroup,
  InputRightAddon,
} from '@chakra-ui/react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
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
            icon={<MenuIcon onClick={toggleSidebar} />}
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
      <InputGroup size="md" ml={6}>
        <Input placeholder="Search for vidoes on youtube here" />
        <InputRightAddon>
          <SearchIcon />
        </InputRightAddon>
      </InputGroup>
    </Flex>
  );
}
