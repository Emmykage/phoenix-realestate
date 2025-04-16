import React from 'react'
import { NavLink } from 'react-router-dom'

const SubHeader = ({tittle
  ,
  link
}) => {
  return (
<section className="subheader h-96 relative px-4 pt-20 pb-6 md:pt-32 md:pb-10">
  <div className="contain flex px-4 flex-col items-center justify-center absolute top-0 h-full left-0 w-full m-auto bg-gray-950/60">
    <h1 className='bg-gray-950/60 w-full max-w-7xl text-white text-4xl md:text-5xl px-4 rounded-lg p-2'>{tittle ?? "No Tittle"}</h1>
    <div className="breadcrumb right w-full max-w-7xl  text-right"><NavLink to={"/"}>Home</NavLink>  <i className="fa fa-angle-right"></i> <a className="current">{tittle}</a></div>
    <div className="clear"></div>
  </div>
</section>  )
}

export default SubHeader