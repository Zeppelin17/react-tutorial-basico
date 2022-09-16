import { useState } from "react"
import CustomButton from "./CustomButton"

const Cart = () => {
  const [numProductos, setNumProductos] = useState(0)

  const addElemento = () => {
    setNumProductos(numProductos + 1)
  }

  const removeElemento = () => {
    if (numProductos > 0) {
      setNumProductos(numProductos - 1)
    }
  }

  return (
    <div>
      <div>Carrito: {numProductos}</div>
      <div>
        <CustomButton handleClick={addElemento}>Añadir artículo</CustomButton>
        <CustomButton handleClick={removeElemento}>
          Eliminar artículo
        </CustomButton>
      </div>
    </div>
  )
}

export default Cart
