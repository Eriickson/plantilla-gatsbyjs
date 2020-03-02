import React, { useState } from "react"
import CountRedux from "../components/CountRedux"
import withLocation from "../tools/withLocation"
import Header from "../components/Header"

const Index = ({ search }) => {
  const [parmsUrl] = useState(search)
  console.log(parmsUrl)

  return (
    <div>
      <Header title={"Home"} />
      <input
        className="m-12 form-checkbox outline-none"
        type="checkbox"
        name=""
        id=""
      />
      <select className="form-select block w-1/3 m-auto mt-1">
        <option>Option 1</option>
        <option>Option 2</option>
      </select>
      <CountRedux />
    </div>
  )
}

export default withLocation(Index)
