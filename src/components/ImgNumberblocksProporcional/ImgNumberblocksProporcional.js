import { useContext } from "react"
import alturaNumberblocksContext from "../../contexts/alturaNumberblocksContext"

export const ImgNumberblocksProporcional = (props) => {
  const alturaNumberblocks = useContext(alturaNumberblocksContext)

  return (
    <>
      <img
        className="apenas-mobile"
        src={`./img/${props.numero}.webp`}
        style={{
          height: `${(alturaNumberblocks[props.numero][props.numero]) * (props.escala * 0.6)}rem`
        }}
        alt={`imagem do número ${props.numero}`}
      />
      <img
        className="apenas-desktop"
        src={`./img/${props.numero}.webp`}
        style={{
          height: `${(alturaNumberblocks[props.numero][props.numero]) * (props.escala * 1.2)}rem`
        }}
        alt={`imagem do número ${props.numero}`}
      />
    </>
  )
}