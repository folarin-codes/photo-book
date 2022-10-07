import { Button } from "@mui/material"
import styled from "@emotion/styled"

export const PrimaryButton = styled(Button)(({ theme }) => ({
      backgroundColor: '#1B1C1E',
      color: 'white',
      textTransform:'none',
      '&:hover': {
            backgroundColor: '#1B1C1E',
            color: 'white',
        }
      
      
}));