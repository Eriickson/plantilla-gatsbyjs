import React from "react"
import * as actions from "../actions/contadorActions"
import { useSelector, useDispatch } from "react-redux"
import tw from "tailwind.macro"
import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"

const Button = tw.button`
  bg-gray-800
  text-white
  text-sm
  px-4
  py-2
  border
`

const CountRedux = () => {
  const OBTENER_MENSAJES_Q = gql`
    {
      obtenerAvisos {
        id
        mensaje
      }
    }
  `

  const { loading, error, data } = useQuery(OBTENER_MENSAJES_Q)
  if (loading) console.log(loading)
  if (error) console.log(error)

  console.log(data)

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
