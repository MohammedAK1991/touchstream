import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';
import ReactPlayer from 'react-player';

export default function VideoPlayerModal({
  videoId,
  onClose,
  isOpen,
}: {
  videoId: string;
  onClose: () => void;
  isOpen: boolean;
}) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="2xl"
      isCentered
      blockScrollOnMount={false}
    >
      <ModalOverlay />
      <ModalContent bg="black">
        <ModalCloseButton />
        <ModalBody p="4" display="flex" flexDir="column" position="relative">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoId}`}
            playing
            controls
          />
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
