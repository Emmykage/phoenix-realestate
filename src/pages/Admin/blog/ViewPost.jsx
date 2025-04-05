import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { delPost, getPost, updatePost } from '../../../redux/actions/blog'
import { SET_LOADER } from '../../../redux/app/app'
import 'trix';
import 'trix/dist/trix.css';
import { IoSwapHorizontalSharp } from 'react-icons/io5'
import LoadingPage from '../../LoadingPage'
const ViewPost = () => {
    const {id} = useParams() 
    const [formValues, setFormValues] = useState({
        title: '',
        description: '',
        date: '',
        blog_body: '',
      })
      
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [imagePreviews, setImagePreviews] = useState([]);

    const {post, loading} = useSelector(state => state.blog_posts)
    const handleUpdate = (e) => {
        dispatch(SET_LOADER(true))
        e.preventDefault()


        const formData = new FormData()
        formData.append("blog[title]", e.target.title.value)
        formData.append("blog[description]", e.target.description.value)
        e.target.image.files[0] &&  formData.append("blog[image]", e.target.image.files[0])
        formData.append("blog[blog_body]", e.target.blog_body.value)
        e.target.date.value && formData.append("blog[date]", e.target.date.value)

        console.log("date:", e.target.date.value)

        dispatch(updatePost({id, formData})).then(result => {
            if(updatePost.fulfilled.match(result)){
                dispatch(SET_LOADER(false))
                // handleClose()
            }else{
                dispatch(SET_LOADER(false))

            }
        })

    }


    
      
    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        const previews = files.map((file) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          return new Promise((resolve) => {
            reader.onload = () => {
              resolve(reader.result);
            };
          });
        });
    
        Promise.all(previews).then((images) => {
          setImagePreviews(images);
        });
      };

    useEffect(()=> {
        dispatch(getPost(id))
    }, [])


    
useEffect(() => {
    if (post) {
      setFormValues({
        title: post.title || '',
        description: post.description || '',
        date: post.date || '',
        blog_body: post.blog_body || '',
      })
    }
  }, [post])
  return (
    loading ? <LoadingPage/> :

    
    <div>
           <div className='blog-post'>
        <form  onSubmit={handleUpdate}>
           <h2>Add Blog Post</h2> 
           <div className='my-1'>
                <label htmlFor="" className='text-base font-medium'>Blog Title {post?.title}</label>
                <input type="text" name="title" 
                 onChange={(e) => setFormValues({ ...formValues, title: e.target.value })}
                 required  value={formValues?.title}/>
            </div>
           
            <div className='my-1'>
                <label htmlFor="description" className='text-base font-medium'>Description (short description)</label>
                <input type="text"
                 onChange={(e) => setFormValues({ ...formValues, description: e.target.value })}
                  name="description"  value={formValues?.description} required />
            </div>
            <div className='my-1'>
                <label htmlFor="" className='text-base font-medium block'>Image</label>
                {/* <input type="file" name="image" className='w-full block'  required /> */}
                <input
                  onInput={handleImageChange}
                  type="file"
                  accept="image/*"
                  name="image"
                  id="image"
                  
                />

                <div className='flex items-center bg-r'>

                 <div className="flex items-center  gap-4 my-6">
                    {
                        imagePreviews.length > 0 &&
                        <>{
                        
                        imagePreviews.map((image, index) => (
                            <img src={image} alt="" key={index} className="w-20 h-20 border border-gray-400 rounded overflow-hidden bg-gray-100 p-3" />
                          )) 
                        }
                            <IoSwapHorizontalSharp className='text-3xl'/>

                          </>
                    }

              



                <img src={post?.img_url} alt=""  className="w-20 h-20 border border-gray-400 rounded overflow-hidden bg-gray-100 p-2" />

               
              </div>


              </div>

            
            </div>
            <div className='my-4'>  
                <label htmlFor="date text-base font-medium">Publish Date</label>
                <input type="date" name="data"
                  onChange={(e) => setFormValues({ ...formValues, date: e.target.value })}

                    id="date" value={post?.date}/>
            </div>
            <div>
                <label htmlFor="trix" className='text-base font-medium block'>Blog Body</label>
            <input id="trix" type="hidden" name="blog_body" value={post?.blog_body} />
            <trix-editor input="trix" />

          </div>

           
            <button type='submit'>Post</button>
        </form>

        <button 
        onClick={()=> {
            dispatch(SET_LOADER(true))
            dispatch(delPost(id)).then(result => {
                if(delPost.fulfilled.match(result)){
                    console.log("deleted")

                    dispatch(SET_LOADER(false))
                    console.log("deleted")
                    navigate("/admin/posts")
                }else{
                    dispatch(SET_LOADER(false))
                    console.log("deleted")


                }
            })
        }} className='bg-red-600 py-3 px-3 my-4 rounded-lg text-white'>
            Delete 
        </button>
    </div>
    </div>
  )
}

export default ViewPost