import { Link } from 'react-router-dom';
import styled from 'styled-components'

const StyledLink = styled(Link)`
  background: rgba(0,0,0,0.8);
  border: 1px solid red;
  color: antiquewhite;
  display: block;
  font-size: 1.2rem;
  margin: 5px auto;
  padding: 5px;
  text-align: center;
  transition: 1s ease;

  &:hover {
    transform: scale(1.05);
    background: rgba(255, 0, 0, 0.85);
  }

  @media screen and (min-width: 1024px) {
    width:30vw;
  }

  @media screen and (max-width: 1023px) {
    width:60vw;
  }
`

export default StyledLink;