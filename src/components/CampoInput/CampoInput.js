import { TextField } from "@mui/material";

import styled from 'styled-components';

const StyledInput = styled(TextField)`
  && {
    .MuiInputLabel-root {
      color: #1976d2;
      font-size: 1.5rem;
    }

    .MuiFormHelperText-root {
      color: #1976d2;
      font-size: 1rem;
    }

    .MuiInputBase-root {
      color: #1976d2;
      font-size: 1.5rem;
      padding-left: 40%;
    }

    .Mui-focused {
      color: #1976d2;
    }

    @media only screen and (max-width: 1024px) {
      .MuiFormHelperText-root {
        font-size: 0.7rem;
      }
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