import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { createPost, getPosts } from '../../../redux/actions/blog'
import 'trix';
import 'trix/dist/trix.css';
import "./style.css"
import { SET_LOADER } from '../../../redux/app/app';

const AddPost = ({
    handleClose
}) => {
    const [imagePreviews, setImagePreviews] = useState([]);
    
    const dispatch = useDispatch()


    const formRef = useRef(null)
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(SET_LOADER(true))

        const formData = new FormData()
        formData.append("blog[title]", e.target.title.value)
        formData.append("blog[description]", e.target.description.value)
        e.target.image.files[0] &&  formData.append("blog[image]", e.target.image.files[0])
        formData.append("blog[blog_body]", e.target.blog_body.value)
        formData.append("blog[date]", e.target.date.value)

        // const data = Object.fromEntries(formData)
        
        dispatch(createPost(formData)).then(result => {
            if(createPost.fulfilled.match(result)){
                formRef.current.reset()
                dispatch(SET_LOADER(false))
                 dispatch(getPosts())
                handleClose()
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
  return (
    <div className='blog-post'>
        <form ref={formRef} onSubmit={handleSubmit}>
           <h2>Add Blog Post</h2> 
           <div className='my-1'>
                <label htmlFor="" className='text-base font-medium'>Blog Title</label>
                <input type="text" name="title" required />
            </div>

            <div className='my-1'>
                <label htmlFor="description" className='text-base font-medium'>Description (short description)</label>
                <input type="text" name="description" required />
            </div>
            <div className="flex gap-4 my-6">
                {imagePreviews && imagePreviews.length > 0 && <h4 className="text-green-600">New Photo</h4>}
                {imagePreviews.map((image, index) => (
                  <img src={image} alt="" key={index} className="w-20 border border-gray-400 rounded overflow-hidden bg-gray-100 p-3" />
                ))}
              </div>
            <div className='my-1'>
                <label htmlFor="" className='text-base font-medium block'>Image</label>
                <input
                  onInput={handleImageChange}
                  type="file"
                  accept="image/*"
                  name="image"
                  id="image"
                  
                />            </div>
            <div className='my-4'>  
                <label htmlFor="date text-base font-medium">Publish Date</label>
                <input type="date" name="data" id="date" />
            </div>
            <div>
                <label htmlFor="trix" className='text-base font-medium block'>Blog Body</label>
            <input id="trix" type="hidden" name="blog_body" />
            <trix-editor input="trix" />

          </div>

           
            <button type='submit'>Post</button>
        </form>
    </div>
  )
}

export default AddPost