import { Grid } from '@mui/material'
import React from 'react'
import Navigation from '../Navigation/Navigation'
import HomeSection from '../HomeSection/HomeSection'
import RightPart from '../RightPart/RightPart'

const HomePage = () => {
  return (
    <Grid container xs={12} className='px-5 lg:px-36p justify-between'>
      <Grid item xs={0} lg={2.5} className='hidden lg:block w-full relative'>
        <Navigation/>
      </Grid>
      <Grid item xs={12} lg={6} className='hidden lg:block w-full relative'>
        <HomeSection/>
      </Grid>
      <Grid item xs={0} lg={3} className='hidden lg:block w-full relative'>
        <RightPart />
      </Grid>
    </Grid>
  )
}

export default HomePage
