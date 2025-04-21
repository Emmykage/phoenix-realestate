import React, { useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
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
    console.log(blog)
  return (
    <>
    <Nav/>
    <SubHeader tittle={blog?.title}/>
    <section className='px-5 py-20 bg-white'>

          <div className="blog  max-w-[1600px] m-auto gap-4 grid md:grid-cols-blogLayout">
           <div className='relative shadow border p-2 border-gray-300/60 rounded'>
           <div className=' bg-white px-2 sticky top-20 left-0'>
              <h3 className='text-center text-xl my-5'>Recent Post</h3>
            
                {posts.slice(0, 4).map(blog => (
                  <div onClick={()=> navigate(`/press-release/${blog?.id}`)} key={blog.id} className='flex gap-4 my-4 border-gray-300/30 cursor-pointer'>
                  <div className='w-20 shrink-0 h-20 rounded-md overflow-hidden '> 
                    <img src={blog?.img_url} alt={blog.title} className='h-full w-full' />
                  </div>
                  <div>
                    <h6 className='font-semibold border-e-gray-600' >{blog?.title}</h6>
                    <p>{blog?.description?.substring(0, 40)}...</p>
                  </div>
                </div>
                ))}
           

            </div>

           </div>
         
            <div className='max-w-5xl border shadow min-h-96 p-6 rounded-lg w-full px-2 m-auto mt-0'>

              <div className='flex flex-col md:flex-row  border-b mb-5 justify-between'>
                <h3 className='mb-2'>{blog?.title}</h3>

              

                  <p>
                    {dateFormater(blog?.date)}
                  </p>
              </div>
              <div>
                <img src={blog?.img_url} alt={blog?.title} className='md:h-96 h-60 w-full rounded-lg' />
              </div>
                <div className='mt-10' dangerouslySetInnerHTML={{__html: blog?.blog_body}} />
                <div>
              <p>Author: <span className='font-semibold'> Mark Gallagher</span>  </p>
            </div>
            </div>
            
            </div>
    </section>

    </>

  )
}

export default BlogPost