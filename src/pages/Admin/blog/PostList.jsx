import React, { useEffect, useState } from 'react'
import AppModal from '../../../components/modals/AppModal'
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../../redux/actions/blog';
import AddPost from './AddPost';
import { useNavigate } from 'react-router-dom';
import Loader from '../../../components/loader/Loader';
import { FaArrowLeft } from 'react-icons/fa';

// const PostList = () => {
//    
//   return (
//     <div className='py-20'>

// 
// {loading ? <Loader/> : 

// <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 '>
//     {posts.map(item => (
//     <div  key={item.id} className='h-40 relative cursor-pointer overflow-hidden  p-4 rounded-xl bg-gray-200 flex justify-center items-center'>
//         <img src={item.img_url} alt="" className=' bg-gray-300 absolute top-0 left-0 w-full h-full' />
//         <div className=' bg-red-50/20 h-full w-full flex justify-center items-center'>
//         <p className='z-10 bg-gray-900/70 text-white p-3 text-center rounded font-medium'> {item?.title}</p>

//         </div>

//     </div>
//     ))}

// </div>

// }




// export default 



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
    
  const blogPosts = [
    {
      id: 1,
      title: "5 Investment Tips for Beginners",
      summary: "Learn how to start investing smartly with these beginner-friendly tips.",
      image: "https://source.unsplash.com/featured/?investment",
      link: "/blog/5-investment-tips",
    },
    {
      id: 2,
      title: "Real Estate Trends in 2025",
      summary: "Stay ahead of the curve with the latest insights in real estate for this year.",
      image: "https://source.unsplash.com/featured/?real-estate",
      link: "/blog/real-estate-trends-2025",
    },
    {
      id: 3,
      title: "Understanding Risk in Portfolio Management",
      summary: "Get a handle on investment risk and how to manage it effectively.",
      image: "https://source.unsplash.com/featured/?finance",
      link: "/blog/risk-management",
    },
  ];

  return (
    <>
    <div className='mt-10 flex justify-between'>
            <button onClick={() => navigate(-1)}><FaArrowLeft /> </button>
            <h2 className='my-2 text-4xl font-semibold'>Blog Posts</h2>
        
          </div>
    
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Latest Blog Posts</h2>
      <Button onClick={()=> setOpen(true)} >Create Post</Button>

      <div className="grid md:grid-cols-3 gap-6">
        {loading ? <tr> 
            <td colSpan={4}>
               <Loader/>
            </td>
            
           </tr> :
           posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={post.img_url}
              alt={post.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{post?.description}</p>
              <a
                href={`/admin/posts/${post.id}`}
                className="inline-block bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700"
              >
                View
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>     
    
     <AppModal open={open} handleClose={handleClose} handleOpen={handleOpen}>
      <AddPost handleClose={handleClose}/>
     </AppModal>
    </>
  );
};

export default PostList;
