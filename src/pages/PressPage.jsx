import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom'
import { getPost } from '../redux/actions/blog';

const PressPage = () => {
  const {id} = useParams();
  const dispatch = useDispatch()
  const {post} = useSelector(state => state.blog_posts)
  useEffect(()=> {
    dispatch(getPost(id))
  },[])
  console.log(post)

  return (
    <div className='container blog py-6 bg-white'>
      <div className='grid grid-third gap-2'>

     
      <div className='box-shadow p-2 m-1'>
        <div className='flex items-center '>
         
        <h3 className='mr-5'>{post.title}</h3> 
        <h4>{post.secondary_text}</h4>
         
        </div>
        {/* <div><p>written by {post.user.first_name}, 30 04 2016</p></div> */}
        <div className='blog-image'>
          <img src={post.img_url} alt="" className='w-full' />

        </div>
        <div>
          <p>{post.body}</p>
          
        </div>
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
       
        </ul>

      </div>
      
       </div>
    </div>
  )
}

export default PressPage