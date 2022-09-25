import React, { useEffect, useState, useCallback } from 'react';
import Head from 'next/head';
import { Flex, Stack, Box } from '@chakra-ui/react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';

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
      <SideBar isOpen={toggleSideBar} />
    </Box>
  );
};

export default Home;
