import React from "react"
import CountRedux from "../components/CountRedux"

const index = () => {
  return (
    <div>
      <input
        className="m-12 form-checkbox outline-none"
        type="checkbox"
        name=""
        id=""
      />
      <select class="form-select block w-1/3 m-auto mt-1">
        <option>Option 1</option>
        <option>Option 2</option>
      </select>
      <CountRedux />
    </div>
  )
}

export default index
