import styled from 'styled-components'

const FormStyles = styled.form`
  background: rgba(0,0,0,0.9);
  height: 50vh;
  margin: 2.5vh 5vw;
  padding: 1vh 5vw;
  text-align: center;
  width: 90vw;

  @media screen and (min-width: 1024px) {
    height: 70vh;
    width: 50vw;
    margin: auto;
  }
`

export default FormStyles;