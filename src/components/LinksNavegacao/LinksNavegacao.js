import styled from 'styled-components';
import LinkStyles from '../../styles/shared/LinkStyles'

const Link = styled(LinkStyles)``

export const LinksNavegacao = () => {
  return (
    <>
      <Link to='/adivinhar'>☆ Adivinhar ☆</Link>
      <Link to='/somar'>☆ Somar ☆</Link>
      <Link to='/subtrair'>☆ Subtrair ☆</Link>
      <Link to='/multiplicar'>☆ Multiplicar ☆</Link>
    </>
  )
}