import Image from "next/image";

import styled from "@emotion/styled"
import { Stack, Box, Typography } from "@mui/material"


import lady from '../images/4.png'

const StyledMain = styled(Stack)(({ theme }) => ({
      flexDirection: 'row',
      backgroundColor: '#1B1C1E',
      padding: '2rem 3rem',
      margin: '4em 0 ',
      justifyContent:"space-between",
     
      
      [theme.breakpoints.down('md')]: {
            
      }
      
}));


const MainSection = ()=> {

      return (

            <StyledMain>
                  
                  <Box sx={{color:"white", width:"50%"}}>
                        <Typography variant='h2' component='h2' mb='.7em'>About Us At PhotoBook </Typography>

                        <Typography sx={{lineHeight:'40px'}} variant="p" component="p">Stories have to told and captured and there is no greater agony than bearing an untold story inside you. Lets help you capture and tell beautiful stories that shares your journey with those looking up to you.   </Typography>

                        <Typography sx={{lineHeight:'40px'}} variant="p" component="p">Stories have to told and captured and there is no greater agony than bearing an untold story inside you. Lets help you capture and tell beautiful stories that shares your journey with those looking up to you.  
                        Stories have to told and captured and there is no greater agony than bearing an untold story inside you. </Typography>   
                        
                        <Typography variant="p" component="p">Learn More</Typography>

                  </Box>

                  <Box sx={{width:"25%"}}>
                        <Image src={lady} />

                  </Box>

            </StyledMain>
            
      )
}

export default MainSection;