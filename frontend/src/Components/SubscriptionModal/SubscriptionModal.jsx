import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import Modal from '@mui/material/Modal';
import VerifiedIcon from '@mui/icons-material/Verified';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: 'none',
    borderRadius: 4,
    boxShadow: 24,
    p: 4,
    outline: "none"
};

const features = [
    "Prioritized rankings in conversations and search",
    "See approximately twice as many Tweets between ads in your For You and Following timelines.",
    "Add bold and italic text in your Tweets.",
    "Post longer videos and 1080p video uploads.",
    "All the existing Blue features, including Edit Tweet, Bookmark Folders and early access to new features."
]

export default function SubscriptionModal({handleClose, open}) {
    const [plan, setPlan] = React.useState("annually")

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='flex items-center space-x-3'>
                        <IconButton onClick={handleClose} aria-label="delete">
                            <CloseIcon />
                            <p className=''></p>
                        </IconButton>
                    </div>
                    <div className='flex justify-center py-10'>
                        <div className='w-[80%] space-y-10 '>
                            <div className='p-5 rounded-md flex items-center justify-between shadow-lg bg-slate-400'>
                                <h1 className='text-xl pr-5'>Verified Subscribers will get blue tickmark once approved</h1>
                                <VerifiedIcon className='w-24 h-24' />
                            </div>
                            <div className='flex justify-between border rounded-full px-5 py-3 border-gray-500'>
                                <div>
                                    <span onClick={() => setPlan("annually")} className={`${plan === "annually" ? "text-black" : "text-gray-400"} cursor-pointer`}>Annually</span>
                                    <span className='text-green-500 text-sm ml-5'>SAVE 12%</span>
                                </div>
                                <p onClick={() => setPlan("montly")} className={`${plan === "monthly" ? "text-black" : "text-gray-400"} cursor-pointer`}>Monthly</p>
                            </div>
                            <div className='space-y-3'>
                                {features.map((item) => <div className='flex items-center space-x-5'>
                                    <FiberManualRecordIcon sx={{ width: "7px", height: "7px" }} />
                                    <p className='text-xs'>{item}</p>
                                </div>)}
                            </div>
                            <div className='cursor-pointer flex justify-center bg-gray-900 text-white rounded-full px-5 py-3' >
                                <span className='line-through italic'>$99.99 per year</span>
                                <span className='px-5'>$79.99 per year</span>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}