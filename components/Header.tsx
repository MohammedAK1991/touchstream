import React, { useState, useCallback } from 'react';
import {
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightAddon,
  chakra,
  IconButton,
} from '@chakra-ui/react';
import MenuIcon from '@mui/icons-material/Menu';
import { SearchIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header({
  toggleSidebar,
}: {
  toggleSidebar: () => void;
}) {
  const router = useRouter();
  const [inputSearch, setInputSearch] = useState('');

  const handleSearchSumit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      router.push(`/search/${inputSearch}`);
    },
    [inputSearch, router],
  );

  return (
    <Flex
      zIndex={10}
      position="fixed"
      w="100%"
      borderWidth="1px"
      color="black"
      bg="white"
      align="center"
      direction="row"
      p={['1', '2']}
      shadow="sm"
      pb={12}
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
      <chakra.form onSubmit={handleSearchSumit} w="full">
        <InputGroup size="md" ml={4} pr={8}>
          <Input
            placeholder="Search for vidoes on youtube here"
            onChange={(e) => setInputSearch(e.target.value)}
            value={inputSearch}
          />
          <InputRightAddon cursor="pointer">
            <IconButton
              aria-label="Search database"
              type="submit"
              icon={<SearchIcon />}
            />
          </InputRightAddon>
        </InputGroup>
      </chakra.form>
    </Flex>
  );
}
