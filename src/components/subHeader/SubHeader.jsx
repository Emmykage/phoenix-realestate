import React from 'react'

const SubHeader = ({tittle}) => {
  return (
<section className="subheader">
  <div className="container">
    <h1 className='bg-gray-dark-trans p-2'>{tittle ?? "No Tittle"}</h1>
    <div className="breadcrumb right">Home <i className="fa fa-angle-right"></i> <a href="#" className="current">Properties</a></div>
    <div className="clear"></div>
  </div>
</section>  )
}

export default SubHeader