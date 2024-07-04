import React, { useEffect, useState } from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate, useParams } from 'react-router-dom';
import { Avatar, Box, Button, Tab} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import TweetCard from '../HomeSection/TweetCard';
import ProfileModal from './ProfileModal';
import { useDispatch, useSelector } from 'react-redux';
import { findUserById, followUserAction } from '../../Store/Auth/Action';
import { findTweetsByLikeContainsUser, getUsersTweet } from '../../Store/Tweet/Action';

const Profile = () => {

    const [tabValue,setTabValue] = useState("1")
    const navigate = useNavigate();    
    const [openProfileModal, setOpenProfileModal] = useState(false);
    const handleOpenProfileModal = () => setOpenProfileModal(true);
    const handleClose = () => setOpenProfileModal(false);
    const {auth,tweet} = useSelector(store=>store)
    const dispatch = useDispatch()
    const {id} = useParams()
    const handleBack = () => navigate(-1);
    const handleFollowUser = () => {
        dispatch(followUserAction(id))
        console.log("follow user")
    }
    const handleTabChange = (event, newValue) => {
        setTabValue(newValue)
        if (newValue === 4) {
            dispatch(findTweetsByLikeContainsUser(id));
          } else if (newValue === 1) {
            dispatch(getUsersTweet(id));
          }
    }

    useEffect(()=>{
        dispatch(findUserById(id))
        dispatch(getUsersTweet(id))
    },[id])

    return (
        <div>
            <section className={`bg-white z-5 flex items-center sticky top-0 bg-opacity-95`}>
                <KeyboardBackspaceIcon className='cursor-pointer' onClick={handleBack} />
                <h1 className='py-5 text-xl font-bold opacity-90 ml-5'>{auth.findUser?.fullName}</h1>
            </section>
            <section>
                <img className='w-[100%] h-[15rem] object-cover' src="https://cdn.pixabay.com/photo/2020/04/22/12/06/adventure-5077760_640.jpg" alt="" />
            </section>
            <section className='pl-6'>
                <div className='flex justify-between items-start mt-5 h-[5rem]'>
                    <Avatar
                        className='transform -translate-y-24'
                        alt='' src={auth.findUser?.image}
                        sx={{ width: "10rem", height: "10rem", border: "4px solid white" }}
                    />

                    {auth.findUser?.req_user ? <Button onClick={handleOpenProfileModal}
                        className='rounded-full' variant='content' sx={{ borderRadius: "20px" }}>Edit Profile</Button> :
                        <Button onClick={handleFollowUser}
                            className='rounded-full' variant='content' sx={{ borderRadius: "20px" }}>{auth.findUser?.followed ? "Unfollow" : "Follow"}</Button>}
                </div>
                <div className='flex items-center'>
                    <h1 className='font-bold text-lg'>{auth.findUser?.fullName}</h1>
                    {true && <img className='ml-2 w-5 h-5' src="https://abs.twimg.com/responsive-web/client-web/verification-card-v2@3x.8ebee01a.png" alt="" />}
                </div>
                <div>
                    <h1 className='text-gray-500'>{'@'+auth.findUser?.fullName.split(" ").join("_").toLowerCase()}</h1>
                </div>
                <div className='mt-2 space-y-3'>
                    <p>{auth.findUser?.bio}</p>
                    <div className='flex items-center text-gray-500'>
                        <LocationOnIcon  />
                        <p className='ml-2'>{auth.findUser?.location}</p>
                    </div>
                    <div className='flex items-center text-gray-500'>
                        <CalendarMonthIcon  />
                        <p className='ml-2'>Joined June 2024</p>
                    </div>
                </div>
                <div className='flex items-center space-x-5'>
                    <div className='flex items-center space-x-1 font-semibold'>
                        <span>{auth.findUser?.followings.length}</span>
                        <span className='text-gray-500'>Following</span>
                    </div>
                    <div className='flex items-center space-x-1 font-semibold'>
                        <span>{auth.findUser?.followers.length}</span>
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
                <TabPanel value="1">{tweet.tweets.map((item)=><TweetCard item={item} />)}</TabPanel>
                <TabPanel value="2">users replies</TabPanel>
                <TabPanel value="3">Media</TabPanel>
                <TabPanel value="4">Likes</TabPanel>
                </TabContext>
            </section>
            <section>
                <ProfileModal handleClose={handleClose} open={openProfileModal} />
            </section>
        </div>
    )
}

export default Profile
