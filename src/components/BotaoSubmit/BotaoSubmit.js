import { Button } from "@mui/material";
import styled from 'styled-components';

const StyledButton = styled(Button)`
  && {
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  }
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