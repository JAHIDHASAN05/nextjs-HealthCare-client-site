import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Toolbar, Typography } from "@mui/material";

import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { link } from "fs";
import DrawerItems from "@/utils/DrawerItems";
import { UserRole } from "@/types";
import SidebarItem from "./SidebarItem";

const SideBar = () => {
  
    return (
        <Box>
           
            <Stack direction={'row'} component={Link} href={'/'} alignItems={'center'} gap={1} justifyContent={'center'}>
                <Image src={assets.svgs.logo} alt="logo"/>
                <Typography>Ph Health Care</Typography>
            </Stack>
            
            <List          >
            {DrawerItems('admin' as UserRole).map((item, index) => (
             <SidebarItem item={item} key={index} />    
             
             ))}
          </List>
        </Box>
    );
};

export default SideBar;