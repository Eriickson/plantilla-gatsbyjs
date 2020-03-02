import React from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"

const Header = ({ title }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div>
        <ul className="flex">
          <li className="mx-2">
            <Link to={`/`}>Home</Link>
          </li>
          <li className="mx-2">
            <Link to={`/dynamic/${10}`}>Dynamic</Link>
          </li>
          <li className="mx-2">
            <Link to={`/client/${110}`}>Client</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Header
