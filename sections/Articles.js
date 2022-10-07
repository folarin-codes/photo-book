import Image from "next/image";


import { Stack, Box, Typography } from "@mui/material"; 
import styled from "@emotion/styled";

import { PrimaryButton } from "../components/Buttons";
import image1 from '../images/8.png'
import image2 from '../images/9.png'
import image3 from '../images/10.png'

const Articles = () => {
      return (

            <Box sx={{ padding: '0 6vw' , margin:"4em 0" }}>
                  
                  <Stack direction={'row'} sx={{justifyContent:"space-between"}} mb="2em">
                        <Box>
                              <Typography variant="h3" component={'h3'}>Blog and Inspiration </Typography>
                              <Typography>Stay up to date with latest trends and new about photography</Typography>
                        </Box>

                        <PrimaryButton>View All Articles </PrimaryButton>

                  </Stack>

                  <Stack sx={{flexDirection:'row', justifyContent:"space-between", gap:"5em"}}>
                        
                        <Box sx={{backgroundColor:'#F9F9F9' , width:"362px"}}>
                              <Image src={image1} />  

                              <Box sx={{padding:'1em 1em 1em'}}>

                                    <Typography sx={{fontSize:"20px", fontWeight:'600'}}>Photo Composition </Typography>
                                    <Typography>Photo composition is how a photographer arranges visual elements within their frame. </Typography>
                                    <Typography mt="1em">Read More</Typography>
                              </Box>
                        </Box>

                        <Box sx={{backgroundColor:'#F9F9F9'  , width:"362px"}} >
                              <Image src={image2} /> 

                              <Box sx={{ padding: '1em 1em 1em' }}>

                             
                                    <Typography sx={{fontSize:"20px", fontWeight:'600'}}>Photography Basics </Typography>
                                    <Typography>Photography is the art, application, and practice of creating durable images by recording light. </Typography>
                                    <Typography mt="1em">Read More</Typography>
                              </Box>
                        </Box>

                        <Box sx={{backgroundColor:'#F9F9F9'  , width:"362px"}}>
                              <Image src={image3} /> 

                              <Box sx={{ padding: '1em 1em 1em' }}>

                             
                                    <Typography sx={{fontSize:"20px", fontWeight:'600'}}>Rule of Third</Typography>
                                    <Typography>The rule of thirds is a "rule of thumb" for composing visual images such as designs, films, paintings, and photographs.</Typography>
                                    <Typography mt="1em">Read More</Typography>
                              </Box>
                        </Box>

                  </Stack>
            </Box>
      )
}

export default Articles;