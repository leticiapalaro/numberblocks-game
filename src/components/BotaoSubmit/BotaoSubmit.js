import { Button } from "@mui/material";
import styled from 'styled-components';

const StyledButton = styled(Button)`
  /* && {

  } */
`

export const BotaoSubmit = (props) => {
  return(
    <StyledButton
      type='submit'
      className='botao'
      sx={{
        bgcolor: '#1976d2',
        color: 'white',
        fontWeight: 'bolder'
      }}
    >{props.descricao}</StyledButton>
  )
}