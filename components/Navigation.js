import { Box, Stack, Typography } from "@mui/material"
import { PrimaryButton } from "./Buttons"

export const Navigation = () => {
      return (
            <Stack direction={'row'} px='3rem' justifyContent='space-between' mt='1em' alignItems={'center'}>
                  
                  <Box>
                        <Typography sx={{fontFamily:"Pacifico", fontSize:"1em"}}>
                              LadeMedics
                        </Typography>
                        

                  </Box>

                  <Stack direction={'row'} justifyContent='space-between' gap='2em' alignItems={'center'}>
                        <Typography>Home</Typography>
                        <Typography>About Us</Typography>
                        <Typography>How It Works</Typography>
                        <Typography>Doctors</Typography>
                        <Typography>Testimonials</Typography>
                        <PrimaryButton>Get Started</PrimaryButton>

                  </Stack>

            </Stack>
            
      )
}