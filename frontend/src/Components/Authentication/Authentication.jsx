import { Button, Grid } from '@mui/material'
import { GoogleLogin } from '@react-oauth/google'
import React, { useState } from 'react'
import AuthModal from './AuthModal'


const Authentication = () => {
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const handleOpenAuthModal = () => setOpenAuthModal(true);
  const handleCloseAuthModal = () => setOpenAuthModal(false);
  return (
    <div>
      <Grid className="overflow-y-hidden" container>
        <Grid className="hidden lg:block" item lg={7}>
          <img
            className="w-full h-screen"
            src="https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png"
            alt=""
          />

          <div className="absolute top-[26%] left-[19%]">
            <svg
              height="300" width="300"
              viewBox="0 0 24 24"
              aria-hidden="true"
              class="r-jwli3a r-4qtqp9 r-yyyyoo r-labphf r-1777fci r-dnmrzs r-494qqr r-bnwqim r-1plcrui r-lrvibr"
            >
              <g>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </g>
            </svg>
          </div>
        </Grid>
        <Grid className="px-10" item lg={5} xs={12}>

          <h1 className="font-bold text-7xl mt-10">Happening now</h1>

          <h1 className="font-bold text-3xl py-16">Join Twitter Today</h1>

          <div className="w-[60%] ml-28">
            <div className="w-full">
              <GoogleLogin
                width={330}
              />
              <p className="py-5 text-center">OR</p>
              <Button
              onClick={handleOpenAuthModal}
                sx={{
                  width: "100%",
                  borderRadius: "29px",
                  py: "7px",
                  bgcolor: "#1d9bf0",
                }}
                variant="contained"
                size="large"
              >
                Create Account
              </Button>
              <p className="text-sm mt-2">
                By signing up, you agree to the Terms of Service and Privacy
                Policy, including Cookie Use.
              </p>
            </div>
            <div className="mt-10">
              <h1 className="font-bold text-xl mb-5">Already Have Account?</h1>
              <Button
                onClick={handleOpenAuthModal}
                sx={{
                  width: "100%",
                  borderRadius: "29px",
                  py: "7px",
                }}
                variant="outlined"
                size="large"
              >
                Sign In
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
      <AuthModal open={openAuthModal} handleClose={handleCloseAuthModal} />
    </div >
  )
}

export default Authentication
