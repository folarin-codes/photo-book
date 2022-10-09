import Image from "next/image";

import styled from "@emotion/styled"
import { Stack, Box, Typography } from "@mui/material"

import { theme } from "../theme";
import lady from '../images/4.png'

const StyledMain = styled(Stack)(({ theme }) => ({
      flexDirection: 'row',
      backgroundColor: '#1B1C1E',
      padding: '2rem 6vw',
      margin: '4em 0 ',
      justifyContent:"space-between",
     
      
      [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            gap:"4em"
            
      }
      
}));


const MainSection = ()=> {

      return (

            <StyledMain id='about'>
                  
                  <Box sx={{color:"white", width:"50%", [theme.breakpoints.down('md')]:{width:"100%"}}} >
                        <Typography variant='h2' component='h2' mb='.7em'>About Us At PhotoBook </Typography>

                        <Typography sx={{lineHeight:'40px'}} variant="p" component="p">Stories have to told and captured and there is no greater agony than bearing an untold story inside you. Lets help you capture and tell beautiful stories that shares your journey with those looking up to you.   </Typography>

                        <Typography sx={{lineHeight:'40px'}} variant="p" component="p">Stories have to told and captured and there is no greater agony than bearing an untold story inside you. Lets help you capture and tell beautiful stories that shares your journey with those looking up to you.  
                        Stories have to told and captured and there is no greater agony than bearing an untold story inside you. </Typography>   
                        
                        <Typography variant="p" component="p">Learn More</Typography>

                  </Box>

                  <Box sx={{width:"25%", [theme.breakpoints.down('md')]:{width:"100%", margin:"0 auto", display:'grid'}}}>
                        <Image src={lady} />

                  </Box>

            </StyledMain>
            
      )
}

export default MainSection;