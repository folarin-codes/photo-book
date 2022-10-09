import Image from "next/image";


import { Stack, Box, Typography, Link } from "@mui/material"; 
import styled from "@emotion/styled";

import { theme } from "../theme";


import { PrimaryButton } from "../components/Buttons";
import image1 from '../images/8.png'
import image2 from '../images/9.png'
import image3 from '../images/10.png'


const StyledStack = styled(Stack)(({ theme }) => ({

      flexDirection: 'row', justifyContent: "space-between", gap: "5em",

      [theme.breakpoints.down('md')]: {
            flexDirection: 'column'
          
      
      }
      

      
}))

const HeadingStack = styled(Stack)(({ theme }) => ({

      marginBottom: "2em",
      flexDirection: 'row',
      justifyContent: 'space-between',
      [theme.breakpoints.down('md')]: {
            flexDirection:'column',  gap:'1em'
      }
      
      
}))

const Articles = () => {
      return (

            <Box sx={{ padding: '0 6vw' , margin:"4em 0" }}>
                  
                  <HeadingStack>
                        
                        <Box  >
                              <Typography variant="h3" component={'h3'}>Blog and Inspiration </Typography>

                              
                              <Typography>Stay up to date with latest trends and new about photography</Typography>

                              
                             
                        </Box>

                        
                        <PrimaryButton sx={{[theme.breakpoints.down('md')]:{width:'33vw'}}}>View All Articles </PrimaryButton>
                        


                  </HeadingStack>

                  <StyledStack>
                        
                        <Box sx={{backgroundColor:'#F9F9F9' , width:"362px", [theme.breakpoints.down('sm')]:{width:"100%"}}}>
                              <Image src={image1} />  

                              <Box sx={{padding:'1em 1em 1em'}}>

                                    <Typography sx={{ fontSize: "20px", fontWeight: '600' }}>Photo Composition </Typography>
                                    
                                    <Typography  mb='.5em'>Photo composition is how a photographer arranges visual elements within their frame. </Typography>

                                    <Link sx={{cursor:'pointer'}} >Read More</Link>
                              </Box>
                        </Box>

                        <Box sx={{backgroundColor:'#F9F9F9'  , width:"362px",[theme.breakpoints.down('sm')]:{width:"100%"}}} >
                              <Image src={image2} /> 

                              <Box sx={{ padding: '1em 1em 1em' }}>

                             
                                    <Typography sx={{ fontSize: "20px", fontWeight: '600' }}>Photography Basics </Typography>
                                    
                                    <Typography mb='.5em'>Photography is the art, application, and practice of creating durable images by recording light. </Typography>

                                    <Link sx={{cursor:'pointer'}}>Read More</Link>
                              </Box>
                        </Box>

                        <Box sx={{backgroundColor:'#F9F9F9'  , width:"362px",[theme.breakpoints.down('sm')]:{width:"100%"}}}>
                              <Image src={image3} /> 

                              <Box sx={{ padding: '1em 1em 1em' }}>

                             
                                    <Typography sx={{ fontSize: "20px", fontWeight: '600' }}>Rule of Third</Typography>
                                    
                                    <Typography mb='.5em'>The rule of thirds is a "rule of thumb" for composing visual images such as designs, films, paintings, and photographs.</Typography>
                                    
                                    <Link sx={{cursor:'pointer'}} >Read More</Link>
                              </Box>
                        </Box>

                  </StyledStack>
            </Box>
      )
}

export default Articles;