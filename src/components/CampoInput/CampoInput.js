import { TextField } from "@mui/material";

import styled from 'styled-components';

const StyledInput = styled(TextField)`
  && {
      .MuiFormHelperText-root {
        color: #1976D2;
      }

      .MuiInputBase-input {
        color: yellow;
        background: rgba(0,0,0,0.5);
      }
    }
`

export const CampoInput = (props) => {
  return(
    <StyledInput
    helperText={props.textoAjuda}
    label={props.label}
    type={props.type}
    pattern={props.pattern}
    value={props.value}
    onChange={props.onChange}
    autoFocus={props.autoFoco}
    id="demo-helper-text-misaligned"
    variant="outlined"
    inputProps={{
      min: props.rangeMin,
      max: props.rangeMax,
      inputMode: "numeric",
    }}
    onKeyPress={(event) => {
      const key = event.key
      if (event.target.value.length >= props.tamanhoMax && key !== 'Enter') {
        event.preventDefault()
      }
    }}
    focused
    required
  />
  )
}