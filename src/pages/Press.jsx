import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getPosts } from '../redux/actions/blog'
import { formattedDate } from '../components/misc/Date'
const Press = () => {
  const dispatch = useDispatch()
  const {posts} = useSelector(state => state.blog_posts)

  useEffect(()=> {
    dispatch(getPosts())
  },[])
  
  return (
    <div className='container blog py-6 my-2 bg-white'>
        <div className='grid-display grid-third gap-2'>
          <div>

        
            {posts.map(post => (
              <>                            
              <div className='p-2 m-1'>
                <div className='flex items-center'>
                
                <h3 className='mr-2'>{post.title}</h3> 
                <h4 className='text-base font-semibold text-gray'>{post.secondary_text}</h4>
                
                </div>
                <div><p>written by {post.user.first_name}, {formattedDate(post.created_at)}</p></div>
                <div className='blog-image'>
                  <img src={post.img_url} alt="" className='w-full' />

                </div>
                <div>
                  <p>{post.body && post.body.substring(0, 300)}...</p>
                  <NavLink to={`/press/${post.id}`} className='more'>READ MORE</NavLink>
                </div>
              </div>


      
              </>
            ))}
        </div>
    
    <div className='aside box-shadow p-2'>
  <h3>Categories</h3>
  <ul className='my-3'>
  <li>
      <NavLink to={"#"} >Resent Posts</NavLink>
    </li>  
    <li>
      <NavLink to={"#"} >Investment</NavLink>
    </li>  
    {/* <li>
      <NavLink to={"#"} >Resent Posts</NavLink>
    </li>  <li>
      <NavLink to={"#"} >Resent Posts</NavLink>
    </li>  <li>
      <NavLink to={"#"} >Resent Posts</NavLink>
    </li> */}
  </ul>

</div>
      
    </div>
    </div>
  )
}

export default Press