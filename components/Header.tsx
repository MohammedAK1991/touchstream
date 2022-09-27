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
import { useRouter } from 'next/router';

export default function Header({
  toggleSidebar,
}: {
  toggleSidebar: () => void;
}) {
  const router = useRouter();
  const [inputSearch, setInputSearch] = useState('');

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
        <Input
          placeholder="Search for vidoes on youtube here"
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
        />
        <InputRightAddon>
          <SearchIcon onClick={() => router.push(`/search/${inputSearch}`)} />
        </InputRightAddon>
      </InputGroup>
    </Flex>
  );
}
