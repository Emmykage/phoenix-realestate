import React, { useEffect } from 'react'
import Nav from '../../components/nav/Nav'
import { blogs } from '../../assets/blogData/data'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import Banner from '../../components/heroBanner/Banner'
import './blog.scss'

const Blog = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
        <Nav/>
        <Banner header="blog"/>
        <section className='px-5 py-10'>
          <div className="blog max-w-[1600px] m-auto gap-6 grid md:grid-cols-blogLayout">
            <div className='shadow px-2'>
            <h3 className='text-center text-xl my-5'>Recent Post</h3>
           
              {blogs.slice(0, 4).map(blog => (
                <div onClick={()=> navigate(`/blog-post/${blog.id}`)} key={blog.id} className='flex gap-4 my-2 cursor-pointer'>
                <div className='w-20 shrink-0 h-20  '> 
                  <img src={blog.blogImage} alt="" />
                </div>
                <div>
                  <h6 className='font-medium'>{blog?.category}</h6>
                  <p className='font-semibold text-gray-600'>{blog?.title?.substring(0, 40)}...</p>
                </div>
              </div>
              ))}
           

            </div>
            <div className='shadow'>
              <h3 className='text-2xl font-semibold text-center'> Stay Updated with the Latest Accounting Insights           </h3>
              <p className='text-center max-w-4xl m-auto font-semibold my-2'>Our blog provides expert advice and updates on the latest in UK accounting, tax regulations, and financial best practices. Stay informed to make better financial decisions for your business.              </p>
              <div className='grid gap-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 px-5 my-10'>
                {blogs.map(blog => (
                  <>
                   <div  className=' rounded overflow-hidden'>              
                      <div onClick={()=> navigate(`/blog-post/${blog.id}`)} className='w-full h-72 bg-gray-500 blg-img overflow-hidden'>
                        <img src={blog.blogImage} alt="" className='w-full h-full object-cover cursor-pointer' />
                      </div>

                        <div className='border-l-4 my-7 px-4 py-2 border-b-4 border-alt'>
                          <NavLink to={`/blog-post/${blog.id}`} className='text-base font-semibold text-gray-600 hover:text-alt'>
                            {blog.title}
                          </NavLink>

                        
                        </div>

                        <p className=' px-1 text-sm my-5 text-gray-600'>Admin/ Taxes / {blog.category} / 0 Comments</p>

                        <div className='px-2'> 
                          <p>{blog.description.substring(0,150)}...</p>              
                        </div>

        
              </div>  
                  </>
                ))}
             
     
              </div>
            </div>

          </div>
        </section>

    </div>
  )
}

export default Blog