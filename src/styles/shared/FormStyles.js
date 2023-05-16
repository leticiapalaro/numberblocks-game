import styled from 'styled-components'

const FormStyles = styled.form`
  text-align: center;
  width: 85vw;
  margin: 6rem auto;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.87);
  border-radius: 20px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  color: rgb(25, 118, 210);

  @media only screen and (min-width: 1024px) {
    max-width: 40vw;
  }
`

export default FormStyles;