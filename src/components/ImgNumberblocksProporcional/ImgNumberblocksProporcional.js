import { useContext } from "react"
import alturaNumberblocksContext from "../../contexts/alturaNumberblocksContext"

export const ImgNumberblocksProporcional = (props) => {
  const alturaNumberblocks = useContext(alturaNumberblocksContext)

  return(
    <img
      src={`./img/${props.numero}.webp`}
      style={{
        height:`${(alturaNumberblocks[props.numero][props.numero])*props.escala}rem`
      }}
      alt={`imagem do número ${props.numero}`}
    />
  )
}