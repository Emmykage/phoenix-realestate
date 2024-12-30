import React, { useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { blogs } from '../../../assets/blogData/data'
import Nav from '../../../components/nav/Nav'
import Banner from '../../../components/heroBanner/Banner'

const BlogPost = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  

    const blog = blogs?.find(blog => blog.id == id)

    console.log(blog, blogs, id)
  return (
    <>
    <Nav/>
    <Banner header={blog?.category}/>
    <section className='px-5 py-20'>

          <div className="blog max-w-[1600px] m-auto gap-4 grid md:grid-cols-blogLayout">
            <div className='shadow px-2'>
              <h3 className='text-center text-xl my-5'>Recent Post</h3>
            
                {blogs.slice(0, 4).map(blog => (
                  <div onClick={()=> navigate(`/blog-post/${blog?.id}`)} key={blog.id} className='flex gap-4 my-2 cursor-pointer'>
                  <div className='w-20 shrink-0 h-20  '> 
                    <img src={blog.blogImage} alt="" />
                  </div>
                  <div>
                    <h6 className='font-medium'>{blog?.category}</h6>
                    <p>{blog?.description?.substring(0, 40)}...</p>
                  </div>
                </div>
                ))}
           

            </div>

            <div className='max-w-5xl px-2 m-auto'>
                <div dangerouslySetInnerHTML={{__html: blog?.body}} />

            </div>
            </div>
    </section>

    </>

  )
}

export default BlogPost