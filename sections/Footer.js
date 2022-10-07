import Image from 'next/image';

import { Box, Stack, Typography } from '@mui/material'
import styled from '@emotion/styled';

import facebookIcon from '../images/sm1.svg'
import twitterIcon from '../images/sm2.svg'
import linkedInIcon from '../images/sm3.svg'
import test from '../images/test.svg'


const FooterStack = styled(Stack)(({ theme }) => ({

      flexDirection: "row",
      flex: '1',
      gap: '2em',
      justifyContent:'space-between',

      [theme.breakpoints.down('md')]: {
            flexDirection:'column'
      }
      
}))

const Footer = () => {
      return (
            <Box sx={{ padding: '2em 6vw 0', margin: "4em 0 0", backgroundColor:" #1B1C1E" }}>
                  <Typography sx={{ fontFamily: "Pacifico !important", fontSize: "2em", color:'white' }}>PhotoBook</Typography>
                  
                  <FooterStack mt='1em'>
                        <Typography color='white' sx={{ lineHeight: "45px", width:"33.33%" }}>Stories have to told and captured and there is no greater agony than bearing an untold story inside you. Lets help you capture and tell beautiful stories that shares your journey with those looking up to you. </Typography>
                        
                        <Stack gap={'1em'} >
                              <Typography color='white'>About Us</Typography>
                              <Typography color='white'>Project</Typography>
                              <Typography color='white'>Blog & Inspiration</Typography>
                              <Typography color='white'>Testimonials</Typography>
                        </Stack>

                        <Stack gap={'.5em'} >
                              <Typography color='white'>Contact Us</Typography>
                              <Typography color='white'>+1 (456) 345-4560</Typography>
                              <Typography color='white'>contact@photobook.com</Typography>
                        </Stack>

                  </FooterStack>

                  <Box mt='1em'>
                        <Typography textAlign={'center'} color={'white'}>© 2022 Photobook All rights reserved.</Typography>
                        {/* <Stack>
                              <Box sx={{height:"30px" , width:"30px" , backgroundColor:"white" , borderRadius:"50%"}}>
                                    
                              <Image src={linkedInIcon} style={{alignSelf:"center" , display:'flex', margin:'0 5px'}} />

                              </Box>

                              <Box sx={{height:"30px" , width:"30px" , backgroundColor:"white" , borderRadius:"50%"}}>
                                    
                              <Image src={twitterIcon} />

                              </Box>

                              {/* <Box sx={{height:"30px" , width:"30px" , backgroundColor:"white" , borderRadius:"50%"}}> */}
                                    
                              <Image src={facebookIcon} color='white'/>

                         {/* </Box> */}
                        
                        {/* </Stack> */} 
                  </Box>
            </Box>
            
      )
}

export default Footer;