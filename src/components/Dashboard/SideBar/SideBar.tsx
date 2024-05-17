import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Toolbar, Typography } from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { link } from "fs";

const SideBar = () => {
    const drawer = (
        <Box>         
          <List          >
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      );
    return (
        <Box>
           
            <Stack direction={'row'} component={Link} href={'/'} alignItems={'center'} gap={1} justifyContent={'center'}>
                <Image src={assets.svgs.logo} alt="logo"/>
                <Typography>Ph Health Care</Typography>
            </Stack>
            

           {drawer} 
        </Box>
    );
};

export default SideBar;