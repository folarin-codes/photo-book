
import Image from 'next/image'

import { Stack, Box, Typography } from '@mui/material'
import styled from '@emotion/styled'


import { theme } from '../theme'
import { PrimaryButton } from '../components/Buttons'

import lady from '../images/1.png'
import camera from '../images/2.png'
import lady2 from '../images/3.png'



const StyledHeader = styled(Stack)(({ theme }) => ({
      flexDirection: 'row',
      justifyContent: "space-between",
      gap: '2em',
      margin: '4em 0 ',
      padding: '0 6vw',

      [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            gap:'4em'
           
      }
      
      
}));

const StyledSpan = styled('div')({

      height: "8em",
      width: "8em",
      backgroundColor: '#1B1C1E',
      borderRadius: '50%',
     

});


const Header = () => {
      return (
            <StyledHeader>
                  <Box sx={{width:"50%", [theme.breakpoints.down('md')]:{width:'100%'}}}>
                        <Typography variant='h1' component="h1" mb='.3em'>Lets Tell Your Beautiful Stories Together</Typography>

                        <Typography mb='.8em' sx={{fontSize:'24px'}}>Stories have to told and captured and there is no <br/> greater agony than bearing an untold story inside you.<br/>  Lets help you capture and tell beautiful stories <br/>  that shares your journey with those looking up to you.   </Typography>
                        
                        <PrimaryButton sx={{ marginBottom:'1em', padding:'1em 4em'}} >Get Started </PrimaryButton>

                        <Stack direction={'row'} gap='2em'>
                              <Box>
                                    <Typography sx={{fontWeight:'600', fontSize:'20px'}}>2500+</Typography>
                                    <Typography>Stories Told </Typography>
                              </Box>

                              <Box>
                                    <Typography sx={{fontWeight:'600', fontSize:'20px'}}>800+</Typography>
                                    <Typography>Students Trained   </Typography>
                              </Box>

                              <Box>
                                    
                              <Typography sx={{fontWeight:'600', fontSize:'20px'}}>400+</Typography>
                                    <Typography>Events Covered </Typography>
                              </Box>
                        </Stack>


                  </Box>

                  <Stack gap={'4em'} sx={{[theme.breakpoints.down('md')]:{display:"none"}}} >
                        <Stack direction={'row'} gap='3em' >
                              <StyledSpan />
                              <Image height="10vh" src={lady }  loading='lazy'/>
                        </Stack>

                        <Stack direction={'row'} gap='3em'>
                              
                              <Image height="10vh" src={camera} loading='lazy' />   
                              <StyledSpan />
                        </Stack>

                        <Stack direction={'row'} gap='3em'>
                              
                             <StyledSpan />
                              <Image height="10vh" src={lady2 } loading='lazy' />
                        </Stack>
                        

                  </Stack>
            </StyledHeader>
            
      )
}

export default Header;
