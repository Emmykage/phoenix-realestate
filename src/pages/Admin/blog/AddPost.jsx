import React from 'react'
import { useDispatch } from 'react-redux'
import { createPost } from '../../../redux/actions/blog'

const AddPost = () => {
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("blog[title]", e.target.title.value)
        formData.append("blog[secondary_text]", e.target.secondary_text.value)
        formData.append("blog[image]", e.target.image.files[0])
        formData.append("blog[body]", e.target.body.value)
        
        // console.log(Object.fromEntries(formData))
        dispatch(createPost(formData))
        // e.currentTarget.reset()
    }
  return (
    <div className='blog-post'>
        <form onSubmit={handleSubmit}>
           <h2>Add Blog Post</h2> 
            <div className='my-1'>
                <label htmlFor="" className='text-base font-medium'>Blog Title</label>
                <input type="text" name="title" />
            </div>
            <div className='my-1'>
                <label htmlFor="" className='text-base font-medium'>Blog Secondary Title</label>
                <input type="text" name="secondary_text" />
            </div>
            <div className='my-1'>
                <label htmlFor="" className='text-base font-medium'>Image</label>
                <input type="file" name="image" className='w-full' />
            </div>
            <div className='my-1'>
                <label htmlFor="" className='text-base font-medium'>Blog Post</label>
                <textarea placeholder='Enter Text' name="body"></textarea>
            </div>
            <button type='submit'>Post</button>
        </form>
    </div>
  )
}

export default AddPost