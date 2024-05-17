import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Link from "next/link";
import React from "react";
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { DrawerItem } from "@/types";

interface ISidebarItemProps {
    item :DrawerItem,
    index:number,
}

const SidebarItem = ({ item, }:ISidebarItemProps) => {
    const LinkPath= `/dashboard/${item.path}`
  return (
    <Link href={LinkPath}>
      <ListItem disablePadding>
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
