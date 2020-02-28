import React from "react"
import * as actions from "../actions/contadorActions"
import { useSelector, useDispatch } from "react-redux"
import { css } from "@emotion/core"
import tw from "tailwind.macro"

const Button = tw.button`
  bg-gray-800
  text-white
  text-sm
  px-4
  py-2
  border
`

const CountRedux = () => {
  const dispatch = useDispatch()
  const cuenta = useSelector(state => state.contador.contador)

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div>
        <Button
          className="rounded-bl rounded-tl"
          onClick={() => dispatch(actions.disminuir(cuenta))}
        >
          -
        </Button>
        <span className="px-8 border-t border-b py-2" css={tw`bg-red-500`}>
          {cuenta}
        </span>
        <Button
          className="rounded-br rounded-tr"
          onClick={() => dispatch(actions.aumentar(cuenta))}
        >
          +
        </Button>
      </div>
    </div>
  )
}

export default CountRedux
