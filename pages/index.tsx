import React, { useState } from 'react';
import Head from 'next/head';
import { Flex, Box } from '@chakra-ui/react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import MostPopular from '../components/MostPopular';

const Home = () => {
  const [toggleSideBar, setToggleSidebar] = useState(true);

  return (
    <Box h="100vh" w="100vw" bg="white" display="flex" flexDirection="column">
      <Head>
        <title>Touch stream video player</title>
        <meta name="description" content="Calllypso coding assignemt" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header toggleSidebar={() => setToggleSidebar(!toggleSideBar)} />
      <Flex h="full">
        <SideBar isOpen={toggleSideBar} />
        <MostPopular />
      </Flex>
    </Box>
  );
};

export default Home;
