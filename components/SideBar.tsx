import { Stack, Box, Divider } from '@chakra-ui/react';
import HomeIcon from '@mui/icons-material/Home';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import TheatersIcon from '@mui/icons-material/Theaters';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';
import SideBarRow from './SideBarRow';

export default function SideBar({ isOpen }: { isOpen: boolean }) {
  return (
    <Stack shadow="md" height="100vh" bg="white" mt={-2}>
      {isOpen ? (
        <Box>
          <SideBarRow Icon={HomeIcon} title="Home" />
          <SideBarRow Icon={MusicVideoIcon} title="Music" />
          <SideBarRow Icon={NewspaperIcon} title="News" />
          <SideBarRow Icon={TheatersIcon} title="Movies" />
          <SideBarRow Icon={EmojiEventsIcon} title="Sports" />
        </Box>
      ) : (
        <Box>
          <SideBarRow Icon={HomeIcon} />
          <SideBarRow Icon={MusicVideoIcon} />
          <SideBarRow Icon={NewspaperIcon} />
          <SideBarRow Icon={TheatersIcon} />
          <SideBarRow Icon={EmojiEventsIcon} />
        </Box>
      )}
    </Stack>
  );
}
