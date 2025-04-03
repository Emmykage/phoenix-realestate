import React from 'react'

const SubHeader = ({tittle}) => {
  return (
<section className="subheader">
  <div className="container m-auto">
    <h1 className='bg-gray-950/60 px-4 rounded-lg p-2'>{tittle ?? "No Tittle"}</h1>
    <div className="breadcrumb right">Home <i className="fa fa-angle-right"></i> <a href="#" className="current">{tittle}</a></div>
    <div className="clear"></div>
  </div>
</section>  )
}

export default SubHeader