import React, { useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { blogs } from '../../../assets/blogData/data'
import Banner from '../../../components/heroBanner/Banner'
import Nav from '../../../components/nav/Nav'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../../redux/actions/blog'
import dateFormater from '../../../utils/dateFormat'
import SubHeader from '../../../components/subHeader/SubHeader'

const BlogPost = () => {
    const {id} = useParams()
      const dispatch = useDispatch()
    
    const {posts} = useSelector(state => state.blog_posts)
    const navigate = useNavigate()

    useEffect(()=> {
      dispatch(getPosts())
    },[])
  

    const blog = [...posts]?.find(blog => blog.id == id)
  return (
    <>
    <Nav/>
    <SubHeader tittle={blog?.title}/>
    <section className='px-5 py-20 bg-white'>

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

            <div className='max-w-5xl border shadow min-h-96 p-6 rounded-lg w-full px-2 m-auto mt-0'>

              <div className='flex flex-col md:flex-row  border-b mb-5 justify-between'>
              <h3 className='mb-2'>{blog?.title}</h3>

                <p>
                  {dateFormater(blog?.date)}
                </p>
              </div>
                <div dangerouslySetInnerHTML={{__html: blog?.blog_body}} />

            </div>
            </div>
    </section>

    </>

  )
}

export default BlogPost