import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Toolbar, Typography } from "@mui/material";

import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { link } from "fs";
import DrawerItems from "@/utils/DrawerItems";
import { UserRole } from "@/types";
import SidebarItem from "./SidebarItem";
import { getUserInfo } from "@/service/actions/auth.services";
import { useEffect, useState } from "react";

const SideBar = () => {

  const [userRole, setUserRole]= useState('')

  useEffect(()=>{
  const {role}= getUserInfo();  
  setUserRole(role)
  
},[])

  
    return (
        <Box>
           
            <Stack direction={'row'} component={Link} href={'/'} alignItems={'center'} gap={1} justifyContent={'center'}>
                <Image src={assets.svgs.logo} alt="logo"/>
                <Typography>Ph Health Care</Typography>
            </Stack>
            
            <List          >
            {DrawerItems(userRole as UserRole).map((item, index) => (

             <SidebarItem item={item} key={index} />    
             
             ))}
          </List>
        </Box>
    );
};

export default SideBar;