import React, { useState } from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import { Avatar, Box, Button, Tab} from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import TweetCard from '../HomeSection/TweetCard';

const Profile = () => {

    const [tabValue,setTabValue] = useState("1")
    const navigate = useNavigate();
    const handleBack = () => navigate(-1);
    const handleOpenProfileModel = () => {
        console.log("open profile model")
    }
    const handleFollowUser = () => {
        console.log("follow user")
    }
    const handleTabChange = (event, newValue) => {
        setTabValue(newValue)
        if(newValue === 4){
            console.log("likes tweet")
        }
        else if(newValue === 1){
            console.log("users tweets")
        }
    }

    return (
        <div>
            <section className={`z-5 flex items-center sticky top-0 bg-opacity-95`}>
                <KeyboardBackspaceIcon className='cursor-pointer' onClick={handleBack} />
                <h1 className='py-5 text-xl font-bold opacity-90 ml-5'>Rounak Kumar</h1>
            </section>
            <section>
                <img className='w-[100%] h-[15rem] object-cover' src="https://cdn.pixabay.com/photo/2020/04/22/12/06/adventure-5077760_640.jpg" alt="" />
            </section>
            <section className='pl-6'>
                <div className='flex justify-between items-start mt-5 h-[5rem]'>
                    <Avatar
                        className='transform -translate-y-24'
                        alt='Rounak' src='https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png'
                        sx={{ width: "10rem", height: "10rem", border: "4px solid white" }}
                    />

                    {true ? <Button onClick={handleOpenProfileModel}
                        className='rounded-full' variant='content' sx={{ borderRadius: "20px" }}>Edit Profile</Button> :
                        <Button onClick={handleFollowUser}
                            className='rounded-full' variant='content' sx={{ borderRadius: "20px" }}>{true ? "Follow" : "UnFollow"}</Button>}
                </div>
                <div className='flex items-center'>
                    <h1 className='font-bold text-lg'>Rounak Kumar</h1>
                    {true && <img className='ml-2 w-5 h-5' src="https://abs.twimg.com/responsive-web/client-web/verification-card-v2@3x.8ebee01a.png" alt="" />}
                </div>
                <div>
                    <h1 className='text-gray-500'>@Rounak</h1>
                </div>
                <div className='mt-2 space-y-3'>
                    <p>Associate Software Engineer @A.P. Moller Maersk</p>
                    <div className='flex items-center text-gray-500'>
                        <LocationOnIcon  />
                        <p className='ml-2'>India</p>
                    </div>
                    <div className='flex items-center text-gray-500'>
                        <CalendarMonthIcon  />
                        <p className='ml-2'>Joined June 2024</p>
                    </div>
                </div>
                <div className='flex items-center space-x-5'>
                    <div className='flex items-center space-x-1 font-semibold'>
                        <span>590</span>
                        <span className='text-gray-500'>Followers</span>
                    </div>
                    <div className='flex items-center space-x-1 font-semibold'>
                        <span>590</span>
                        <span className='text-gray-500'>Followers</span>
                    </div>
                </div>
            </section>
            <section className='py-5'>
                <TabContext value={tabValue}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleTabChange} aria-label="lab API tabs example">
                    <Tab label="Tweets" value="1" />
                    <Tab label="Replies" value="2" />
                    <Tab label="Media" value="3" />
                    <Tab label="Likes" value="4" />
                    </TabList>
                </Box>
                <TabPanel value="1">{[1,1,1,1,1].map((item)=><TweetCard/>)}</TabPanel>
                <TabPanel value="2">users replies</TabPanel>
                <TabPanel value="3">Media</TabPanel>
                <TabPanel value="4">Likes</TabPanel>
                </TabContext>
            </section>
        </div>
    )
}

export default Profile
