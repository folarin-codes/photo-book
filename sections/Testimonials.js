import Image from "next/image";

import { Box, Stack, Typography } from "@mui/material";
import styled from "@emotion/styled";

import { theme } from "../theme";

import { PrimaryButton } from "../components/Buttons";


import image1 from '../images/5.png'
import image2 from '../images/6.png'
import image3 from '../images/7.png'
import star from '../images/star.svg'


const StyledStack = styled(Stack)(({ theme }) => ({
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: "2em",
      gap:"4em",
      
      [theme.breakpoints.down('md')]: {
            flexDirection:"column"
      }
      
}))
      
const Testimonials = () => {

      return (

            <Box sx={{ padding: '0 6vw', margin: "4em 0" }} id='testimonials'>
                  
                  <Typography variant="h3" component={'h3'}>Testimonials</Typography>

                  <Typography>What our Clients are saying </Typography>

                  <StyledStack>
                        
                        <Box sx={{backgroundColor:"#F9F9F9", padding:"1em", borderRadius:'10px'}}>
                              <Stack direction={'row'} justifyContent="space-between">

                             
                                    <Image src={image1} />

                                    <Stack direction={'row'} justifyContent="space-between" gap='.1em'>
                                          
                                          <Image src={star} />
                                          <Image src={star} />
                                          <Image src={star} />
                                          <Image src={star} />
                                          <Image src={star} />

                                    </Stack>
                              </Stack>

                                
                              <Box mt="1em">
                                    <Typography fontSize={'18px'} fontWeight="600">Sarah Joe</Typography>
                                    <Typography fontSize={'12px'} lineHeight="25px">The Session at Photo book was amazing. We have done three family sessions with Emily and could not be more pleased with how the sessions went and her photos turned out. I have two wild young boys who don’t always love family photo sessions. But, with photpbook, they have a great time and she captures what seem like impossible photos with how much they move around. Thanks Emily!</Typography>
                              </Box>

                              

                        </Box>

                        <Box sx={{backgroundColor:"#F9F9F9", padding:"1em", borderRadius:'10px'}}>
                              <Stack direction={'row'} justifyContent="space-between">

                             
                                    <Image src={image2} />

                                    <Stack  direction={'row'} justifyContent="space-between" gap='.1em'>
                                          
                                          <Image src={star} />
                                          <Image src={star} />
                                          <Image src={star} />
                                          <Image src={star} />
                                          <Image src={star} />

                                    </Stack>
                              </Stack>
                              
                              <Box mt='1em'>
                                    <Typography fontSize={'18px'} fontWeight="600">Jane Doe</Typography>
                                    <Typography fontSize={'12px'}  lineHeight="25px">The Session at Photo book was amazing. We have done three family sessions with Emily and could not be more pleased with how the sessions went and her photos turned out. I have two wild young boys who don’t always love family photo sessions. But, with photpbook, they have a great time and she captures what seem like impossible photos with how much they move around. Thanks Emily!</Typography>
                              </Box>


                        </Box>

                        <Box sx={{backgroundColor:"#F9F9F9", padding:"1em", borderRadius:'10px'}}>
                             <Stack direction={'row'} justifyContent="space-between" alignItems={'center'}>

                                <Image src={image3} />

                                  <Stack  direction={'row'} justifyContent="space-between" gap='.1em'>
                                    
                                    <Image src={star} />
                                    <Image src={star} />
                                    <Image src={star} />
                                    <Image src={star} />
                                    <Image src={star} />

                                  </Stack>
                              </Stack>

                              <Box mt="1em">
                                    <Typography fontSize={'18px'} fontWeight="600">Lois Lane</Typography>
                                    <Typography fontSize={'12px'}  lineHeight="25px">The Session at Photo book was amazing. We have done three family sessions with Emily and could not be more pleased with how the sessions went and her photos turned out. I have two wild young boys who don’t always love family photo sessions. But, with photpbook, they have a great time and she captures what seem like impossible photos with how much they move around. Thanks Emily!</Typography>
                              </Box>

                        </Box>
                  </StyledStack>

                  <Stack sx={{ backgroundColor: "#1B1C1E", margin: "4em 2em 0", padding: '2em 1em', alignItems: "center", borderRadius: '10px', [theme.breakpoints.down('md')]:{flexDirection:"column", marginX:0, gap:'1em'} }} direction="row" justifyContent={'space-between'}>
                        
                        <Typography color={'white'}>Know More About the Service we offer </Typography>

                        <Stack direction='row' sx={{backgroundColor:"white", width:"35vw" , justifyContent:"space-between", padding:"1em 1em" , borderRadius:'10px', alignItems:"center",  [theme.breakpoints.down('md')]:{ width:"70vw" }}}>
                              <input type={'email'} placeholder='enter your email ' style={{outline:'none', border:"none" , backgroundColor:"white"}}/>
                              
                              <PrimaryButton>Subscribe</PrimaryButton>

                        </Stack>

                  </Stack>


            </Box>
            
      )
}

export default Testimonials;