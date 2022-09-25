import { Stack, Box, Divider } from '@chakra-ui/react';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import SideBarRow from './SideBarRow';

export default function SideBar({ isOpen }: { isOpen: boolean }) {
  return (
    <Stack width="fit-content" h="full" shadow="md" mt="-1">
      {isOpen ? (
        <Box>
          <SideBarRow Icon={HomeIcon} title="Home" />
          <SideBarRow Icon={WhatshotIcon} title="Trending" />
          <SideBarRow Icon={SubscriptionsIcon} title="Subscription" />
          <SideBarRow Icon={VideoLibraryIcon} title="Library" />
          <Divider />
          <SideBarRow Icon={HistoryIcon} title="History" />
          <SideBarRow Icon={HomeIcon} title="Your videos" />
          <SideBarRow Icon={OndemandVideoIcon} title="Home" />
          <SideBarRow Icon={WatchLaterIcon} title=" Watch later" />
        </Box>
      ) : (
        <Box>
          <SideBarRow Icon={HomeIcon} />
          <SideBarRow Icon={WhatshotIcon} />
          <SideBarRow Icon={SubscriptionsIcon} />
          <SideBarRow Icon={VideoLibraryIcon} />
          <SideBarRow Icon={HistoryIcon} />
          <SideBarRow Icon={HomeIcon} />
          <SideBarRow Icon={OndemandVideoIcon} />
          <SideBarRow Icon={WatchLaterIcon} />
        </Box>
      )}
    </Stack>
  );
}
