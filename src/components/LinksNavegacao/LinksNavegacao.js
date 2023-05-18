import styled from 'styled-components';
import LinkStyles from '../../styles/shared/LinkStyles'

const Link = styled(LinkStyles)``

export const LinksNavegacao = () => {
  return (
    <>
      <Link to='/adivinhar'>☆ Adivinhar ☆<br/>[?]</Link>
      <Link to='/somar'>☆ Somar ☆<br/>[+]</Link>
      <Link to='/subtrair'>☆ Subtrair ☆<br/>[-]</Link>
      <Link to='/multiplicar'>☆ Multiplicar ☆<br/>[x]</Link>
    </>
  )
}