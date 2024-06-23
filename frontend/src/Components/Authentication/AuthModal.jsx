import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import { useLocation, useNavigate } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: 'none',
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
    outline: "none"
};

export default function AuthModal({ open, handleClose }) {
    const location = useLocation()
    const navigate = useNavigate()
    const handleNavigate = () => {
        const path = location.pathname === "/signup" ? "/signin" : "/signup"
        navigate(path)
    }
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h1 className='text-center font-bold text-3xl pb-20'>
                        Create Your Account
                    </h1>
                    {location.pathname == "/signup" ? <SignUpForm /> : <SignInForm />}
                    <h1 className='text-center py-5 font-semibold text-lg text-gray-500'>
                        {location.pathname == "/signup" ? "Already have Account?" : "If you don't have account"}
                    </h1>
                    <Button
                        variant='outlined'
                        onClick={handleNavigate}
                        sx={{
                            width: "100%",
                            borderRadius: "29px",
                            py: "15px",
                        }}
                    >
                        {location.pathname == "/signup" ? "Sign In" : "Sign Up"}
                    </Button>
                </Box>
            </Modal>
        </div>
    );
}