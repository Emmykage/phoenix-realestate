import React, { useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { blogs } from '../../../assets/blogData/data'
import Banner from '../../../components/heroBanner/Banner'
import Nav from '../../../components/nav/Nav'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../../redux/actions/blog'

const BlogPost = () => {
    const {id} = useParams()
      const dispatch = useDispatch()
    
    const {posts} = useSelector(state => state.blog_posts)
    const navigate = useNavigate()

    useEffect(()=> {
      dispatch(getPosts())
    },[])
  

    const blog = [...posts, ...blogs]?.find(blog => blog.id == id)

    console.log(blog)
  return (
    <>
    <Nav/>
    <Banner header={blog?.category}/>
    <section className='px-5 py-20'>

          <div className="blog max-w-[1600px] m-auto gap-4 grid md:grid-cols-blogLayout">
            <div className='shadow px-2'>
              <h3 className='text-center text-xl my-5'>Recent Post</h3>
            
                {blogs.slice(0, 4).map(blog => (
                  <div onClick={()=> navigate(`/press-release/${blog?.id}`)} key={blog.id} className='flex gap-4 my-2 cursor-pointer'>
                  <div className='w-20 shrink-0 h-20  '> 
                    <img src={blog.image} alt="" />
                  </div>
                  <div>
                    <h6 className='font-medium'>{blog?.category}</h6>
                    <p>{blog?.description?.substring(0, 40)}...</p>
                  </div>
                </div>
                ))}
           

            </div>

            <div className='max-w-5xl w-full px-2 m-auto mt-0'>
              <h3 className='mb-4'>{blog?.title}</h3>
                <div dangerouslySetInnerHTML={{__html: blog?.blog_body}} />

            </div>
            </div>
    </section>

    </>

  )
}

export default BlogPost