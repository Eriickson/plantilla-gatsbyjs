import React from "react"
import * as actions from "../actions/contadorActions"
import { useSelector, useDispatch } from "react-redux"

const CountRedux = () => {
  const dispatch = useDispatch()
  const cuenta = useSelector(state => state.contador.contador)

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div>
        <button
          className="bg-gray-800 text-white text-sm px-4 py-2 border rounded-bl rounded-tl"
          onClick={() => dispatch(actions.disminuir(cuenta))}
        >
          -
        </button>
        <span className="px-8 border-t border-b py-2">{cuenta}</span>
        <button
          className="bg-gray-800 text-white text-sm px-4 py-2 border rounded-br rounded-tr"
          onClick={() => dispatch(actions.aumentar(cuenta))}
        >
          +
        </button>
      </div>
    </div>
  )
}

export default CountRedux
