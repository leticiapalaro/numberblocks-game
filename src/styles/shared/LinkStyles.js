import { Link } from 'react-router-dom';
import styled from 'styled-components'

const StyledLink = styled(Link)`
  width: 50%;
  text-decoration: none;
  transition: 1s ease;
  margin: 0.5rem auto;
  box-sizing: border-box;
  border: 1px solid rgba(255, 0, 0, 0.5);
  background: white;
  border-radius: 40px;
  padding: 0.5rem;
  font-weight: 900;

  &:hover {
    transform: scale(1.1);
    color: white;
    border: 1px solid rgba(255, 0, 0, 0.5);
    background: red;
  }

  @media only screen and (max-width: 768px) {
    width: 70vw;
  }
`

export default StyledLink;