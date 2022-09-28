import React, { useState } from 'react';
import Head from 'next/head';
import { Flex, Box } from '@chakra-ui/react';
import Header from './Header';
import SideBar from './SideBar';

/**
 * General Page Layout.
 */
function Layout({ children }: { children: React.ReactNode }) {
  const [toggleSideBar, setToggleSidebar] = useState(true);
  return (
    <Flex h="100vh" flexDirection="column">
      <Head>
        <title>Touch stream video player</title>
        <meta name="description" content="Calllypso coding assignemt" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header toggleSidebar={() => setToggleSidebar(!toggleSideBar)} />
      <Flex h="full">
        <SideBar isOpen={toggleSideBar} />
        <Flex overflowX="hidden" mt={12}>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Layout;
