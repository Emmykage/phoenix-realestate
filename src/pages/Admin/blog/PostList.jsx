import React, { useEffect, useState } from 'react'
import AppModal from '../../../components/modals/AppModal'
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../../redux/actions/blog';
import AddPost from './AddPost';
import { useNavigate } from 'react-router-dom';
import Loader from '../../../components/loader/Loader';

const PostList = () => {
    const {posts, loading} = useSelector(state => state.blog_posts)
    const [open, setOpen] = useState(false);
    const navigate = useNavigate()
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(getPosts())
    }, [])


    console.log(posts)
  return (
    <div className='py-20'>

<Button onClick={()=> setOpen(true)} >Create Post</Button>

{loading ? <Loader/> : 

<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 '>
    {posts.map(item => (
    <div onClick={() => navigate(`/admin/posts/${item.id}`)} key={item.id} className='h-40 relative cursor-pointer overflow-hidden  p-4 rounded-xl bg-gray-200 flex justify-center items-center'>
        <img src={item.img_url} alt="" className=' bg-gray-300 absolute top-0 left-0 w-full h-full' />
        <div className=' bg-red-50/20 h-full w-full flex justify-center items-center'>
        <p className='z-10 bg-gray-900/70 text-white p-3 text-center rounded font-medium'> {item?.title}</p>

        </div>

    </div>
    ))}

</div>

}


        <AppModal open={open} handleClose={handleClose} handleOpen={handleOpen}>
<AddPost handleClose={handleClose}/>
        </AppModal>
    </div>
  )
}

export default PostList