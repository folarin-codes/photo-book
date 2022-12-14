import { createTheme } from "@mui/material"

export const theme = createTheme({
      typography: {
            
      },
      palette: {
            primary: {
                  main : '#1B1C1E'
                 
            }
      },
      typography: {
            h1: {
                  fontSize: "60px",
                  fontWeight:'600'
            },
            h2: {
                  fontSize:'48px'
                  
            },
            p: {
                  fontSize: '20px',
                  fontSize:'200'
            },
            h3: {
                  fontSize:'32px'
            }

      },
      breakpoints: {
            values: {
                  xs: 0,
                  sm: 600,
                  md: 1024,
                  lg: 1200,
                  xl: 1536,
            }
      }
      
})