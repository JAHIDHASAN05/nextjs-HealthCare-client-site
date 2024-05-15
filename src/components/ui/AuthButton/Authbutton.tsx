import { getUserInfo, removerUser } from '@/service/actions/auth.services';
import { Button } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const Authbutton = () => {

    const userInfo= getUserInfo()
    
    const router= useRouter()
    const handleLogOut=()=>{
       removerUser()
       router.refresh()
    }
    return (
        <>
            { !userInfo?.userId?  <Button component={Link} href="/login">Login</Button>:
        <Button onClick={handleLogOut} >Logout</Button>}
        </>
    );
};

export default Authbutton;