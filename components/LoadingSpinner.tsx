import { Spinner, Center } from '@chakra-ui/react';

export default function LoadingSpinner() {
  return (
    <Center h="full" ml="40vw">
      <Spinner
        thickness="2px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blueAccent.light"
        size="xl"
        m="auto"
      />
    </Center>
  );
}
