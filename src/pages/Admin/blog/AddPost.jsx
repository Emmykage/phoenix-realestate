import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { createPost } from '../../../redux/actions/blog'
import 'trix';
import 'trix/dist/trix.css';
import "./style.css"
import { SET_LOADER } from '../../../redux/app/app';

const AddPost = ({
    handleClose
}) => {
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

        const data = Object.fromEntries(formData)

        console.log(data)
        
        dispatch(createPost(formData)).then(result => {
            if(createPost.fulfilled.match(result)){
                formRef.current.reset()
                dispatch(SET_LOADER(false))
                // handleClose()
            }else{
                dispatch(SET_LOADER(false))

            }
        })

    }
  return (
    <div className='blog-post'>
        <form ref={formRef} onSubmit={handleSubmit}>
           <h2>Add Blog Post</h2> 
           <div className='my-1'>
                <label htmlFor="" className='text-base font-medium'>Blog Title</label>
                <input type="text" name="title" required />
            </div>
            <div className='my-1'>
                <label htmlFor="" className='text-base font-medium'>Category</label>
                <select name="category" id="category" >
                    <option value="finance">Finance</option>
                </select>
            </div>
            <div className='my-1'>
                <label htmlFor="description" className='text-base font-medium'>Description (short description)</label>
                <input type="text" name="description" required />
            </div>
            <div className='my-1'>
                <label htmlFor="" className='text-base font-medium block'>Image</label>
                <input type="file" name="image" className='w-full block' required />
            </div>
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