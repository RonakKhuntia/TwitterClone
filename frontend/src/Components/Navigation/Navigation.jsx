import React from 'react'
import XIcon from '@mui/icons-material/X';
import { navigationMenu } from './NavigationMenu';
import { useNavigate } from 'react-router-dom';
import { Avatar, Button } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Store/Auth/Action'

const Navigation = () => {
    const { auth } = useSelector(store => store)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const dispatch = useDispatch()
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const navigate = useNavigate();
    const handleLogout=()=>{
        console.log("logout");
        handleClose();
        dispatch(logout())
    }
  return (
    <div className='h-screen sticky top-0'>
        <div>
            <div className='py-5 w-10'>
                    <XIcon/>
            </div>
            <div className='space-y-6'>
                {
                    navigationMenu.map((item) => 
                        <div className='cursor-pointer flex space-x-3 items-center' onClick={()=>item.title==="Profile"?navigate(`/profile/${auth.user?.id}`):navigate(item.path)}>
                            {item.icon}
                            <p className='text-xl'>{item.title}</p>
                        </div>
                )}
            </div>
            <div className='py-10'>
                <Button 
                sx={{width:"100%", borderRadius:"29px",py:"15px",bgcolor:"blue"}}
                variant='contained'
                >
                    Tweet
                </Button>
            </div>
        </div>
        <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-3'>
                    <Avatar
                        alt="username"
                        src='https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png'
                    />
                </div>
                <div>
                    <span>{auth.user?.fullName}</span>
                    <span className='opacity-70'>@{auth.user?.fullName.split(" ").join("_").toLowerCase()}</span>
                </div>
                
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                <MoreHorizIcon/>
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
        </div>
    </div>
  )
}

export default Navigation
