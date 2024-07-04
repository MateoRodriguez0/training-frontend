import React from 'react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

export const Error = () => {
  return (
    <Fragment>
         <div>Error 404</div>
         <Link to="/inicio">inicio</Link>
    </Fragment>
   
  )
}
