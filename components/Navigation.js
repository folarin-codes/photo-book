import { Box, Stack, Typography, Link } from "@mui/material"
import { theme } from "../theme"

import { PrimaryButton } from "./Buttons"

// import styledLink from "./Link"



export const Navigation = () => {
      return (
            <Stack sx={{[theme.breakpoints.down('md')]:{display:""}}} direction={'row'} px='6vw' justifyContent='space-between' mt='1em' alignItems={'center'}>
                  
                  <Box>
                        <Link underline="none"  sx={{fontFamily:"Pacifico !important", fontSize:"1.5em" , cursor:'pointer', [theme.breakpoints.down('sm')]:{ fontSize:"1em"}}} href='/'>
                              LadeMedics
                        </Link>
                        

                  </Box>

                  <Stack direction={'row'} sx={{[theme.breakpoints.down('sm')]:{gap:'0.5em'}}} justifyContent='space-between' gap='2em' alignItems={'center'}>
                        <Link sx={{cursor:'pointer'}} underline="hover" href="/">Home</Link>
                        <Link sx={{cursor:'pointer', [theme.breakpoints.down('md')]:{display:"none"}}} underline="hover"  href="#about">About Us</Link>
                        <Link sx={{cursor:'pointer',[theme.breakpoints.down('sm')]:{display:"none"}}} underline="hover" href="#">How It Works</Link>
                        <Link sx={{cursor:'pointer',[theme.breakpoints.down('md')]:{display:"none"}}} underline="hover"  href="#">Doctors</Link>
                        <Link sx={{ cursor: 'pointer' }} underline="hover" href="#testimonials">Testimonials</Link>
                        
                        <PrimaryButton sx={{[theme.breakpoints.down('md')]:{display:"none"}}}>Get Started</PrimaryButton>

                  </Stack>

            </Stack>
            
      )
}