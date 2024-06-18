import { Grid } from '@mui/material'
import React from 'react'
import Navigation from '../Navigation/Navigation'
import HomeSection from '../HomeSection/HomeSection'
import RightPart from '../RightPart/RightPart'
import Profile from '../Profile/Profile'
import { Route, Routes } from 'react-router-dom'
import TweetDetails from '../TweetDetails/TweetDetails'

const HomePage = () => {
  return (
    <Grid container xs={12} className='px-5 lg:px-36p justify-between'>
      <Grid item xs={0} lg={2.5} className='hidden lg:block w-full relative'>
        <Navigation />
      </Grid>
      <Grid item xs={12} lg={6} className='hidden lg:block w-full relative'>
        <Routes>
          <Route path="/" element={<HomeSection />}></Route>
          <Route path="home/" element={<HomeSection />}></Route>
          <Route path="/profile/:id" element={<Profile />}></Route>
          <Route path="/tweet/:id" element={<TweetDetails />}></Route>
        </Routes>
        
      </Grid>
      <Grid item xs={0} lg={3} className='hidden lg:block w-full relative'>
        <RightPart />
      </Grid>
    </Grid>
  )
}

export default HomePage
