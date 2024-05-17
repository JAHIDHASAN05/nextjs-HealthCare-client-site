import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Link from "next/link";
import React from "react";
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { DrawerItem } from "@/types";
import { usePathname } from "next/navigation";

interface ISidebarItemProps {
    item :DrawerItem,
   
}

const SidebarItem = ({ item }:ISidebarItemProps) => {
    const LinkPath= `/dashboard/${item.path}`
    const pathName= usePathname()
  
  return (
    <Link href={LinkPath}>
      <ListItem disablePadding sx={{
        ...(pathName===LinkPath ? {borderRight :'3px solid #1586fd', '& svg': {color: '#1586fd'}} :{})
      }}>
        <ListItemButton>
          <ListItemIcon>
            {item.icon && <item.icon/>}
          </ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default SidebarItem;
