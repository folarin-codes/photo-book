import Image from 'next/image';

import { Box, Stack, Typography, Link } from '@mui/material'
import styled from '@emotion/styled';

import { theme } from '../theme';

import facebookIcon from '../images/sm1.svg'
import twitterIcon from '../images/sm2.svg'
import linkedInIcon from '../images/linkedin.png'


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
                        <Typography color='white' sx={{ lineHeight: "45px", width:"33.33%", [theme.breakpoints.down('md')]:{width:"100%"} }}>Stories have to told and captured and there is no greater agony than bearing an untold story inside you. Lets help you capture and tell beautiful stories that shares your journey with those looking up to you. </Typography>
                        
                        <Stack gap={'1.2em'} >
                              <Link color='#fff' sx={{cursor:'pointer'}} underline='hover'>About Us</Link>
                              <Link color='#fff' sx={{cursor:'pointer'}} underline='hover'>Project</Link>
                              <Link color='#fff' sx={{cursor:'pointer'}} underline='hover'>Blog & Inspiration</Link>
                              <Link color='#fff' sx={{cursor:'pointer'}} underline='hover'>Testimonials</Link>
                        </Stack>

                        <Stack gap={'.5em'} >
                              <Typography color='white'>Contact Us</Typography>
                              <Typography color='white'>+1 (456) 345-4560</Typography>
                              <Typography color='white'>contact@photobook.com</Typography>
                        </Stack>

                  </FooterStack>

                  <Stack direction={'row'} pb='1em' mt='1em' justifyContent={'center'} sx={{ [theme.breakpoints.down('sm')]: {flexDirection:'column'}}}>
                        <Typography  color={'white'}>© 2022 Photobook All rights reserved</Typography>

                       <Stack direction="row" gap='1em' ml={'1em'} sx={{ [theme.breakpoints.down('sm')]: {alignItems:'center', justifyContent:'center', margin:'1em 0 0'}}}>
                              <Box sx={{height:"30px" , width:"30px" , backgroundColor:"white" , borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center"}}>
                                    
                              <Image src={linkedInIcon} width='14px' height={'14px'} style={{alignSelf:"center", justifySelf:"center"}} />

                              </Box>

                              <Box sx={{height:"30px" , width:"30px" , backgroundColor:"white" , borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center"}}>
                                    
                              <Image src={twitterIcon} style={{alignSelf:"center", justifySelf:"center"}} />

                               </Box> 

                              <Box sx={{height:"30px" , width:"30px" , backgroundColor:"white" , borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center"}}>
                                    
                              <Image style={{alignSelf:"center", justifySelf:"center"}} src={facebookIcon} color='white'/>

                         </Box>
                        
                        </Stack> 
                  </Stack>
            </Box>
            
      )
}

export default Footer;