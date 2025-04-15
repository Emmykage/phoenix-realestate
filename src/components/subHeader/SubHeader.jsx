import React from 'react'
import { NavLink } from 'react-router-dom'

const SubHeader = ({tittle
  ,
  link
}) => {
  return (
<section className="subheader px-4 pt-20 pb-6 md:pt-32 md:pb-10">
  <div className="container m-auto">
    <h1 className='bg-gray-950/60 text-white text-4xl md:text-5xl px-4 rounded-lg p-2'>{tittle ?? "No Tittle"}</h1>
    <div className="breadcrumb right"><NavLink to={"/"}>Home</NavLink>  <i className="fa fa-angle-right"></i> <a className="current">{tittle}</a></div>
    <div className="clear"></div>
  </div>
</section>  )
}

export default SubHeader