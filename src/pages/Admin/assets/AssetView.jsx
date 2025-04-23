import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAssets } from '../../../redux/actions/assets';
import Loader from '../../../components/loader/Loader';

const AssetView = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { offers, loading, error } = useSelector((state) => state.assets);
  useEffect(() => {
    dispatch(getAssets());
  }, []);


  const handleUpdate = (e) => {
          // dispatch(SET_LOADER(true))
          // e.preventDefault()
  
  
          // const formData = new FormData()
          // formData.append("blog[title]", e.target.title.value)
          // formData.append("blog[description]", e.target.description.value)
          // e.target.image.files[0] &&  formData.append("blog[image]", e.target.image.files[0])
          // formData.append("blog[blog_body]", e.target.blog_body.value)
          // e.target.date.value && formData.append("blog[date]", e.target.date.value)
  
          // console.log("date:", e.target.date.value)
  
          // dispatch(updatePost({id, formData})).then(result => {
          //     if(updatePost.fulfilled.match(result)){
          //         dispatch(SET_LOADER(false))
          //         // handleClose()
          //     }else{
          //         dispatch(SET_LOADER(false))
  
          //     }
          // })
  
      }
  const asset = offers.find((offer) => offer.id == id);
  console.log(asset)
  if (loading) {
    <Loader />;
  } else if (error) {
    <h1 className="text-center">Check you connection</h1>;
  } else {
    return (
      <div className="content-container asset-view mt-20 max-w-5xl bg-white p-4 shadow rounded-xl">
        <div className="">

          <form onSubmit={handleUpdate}>

          <div className="grid-display-assets border-b py-5">
            <span>Asset Class: </span>
            <span className='block'>
              {' '}
              {asset.asset_type}
            </span>
          </div>

          <div className="grid-display-assets border-b my-2">
            <span className='font-semibold'>Asset Title: </span>
            <p>
              {' '}
              {asset.name}
            </p>
          </div>
          <div className="grid-display-assets border-b my-2 py-2">
            <span className='font-semibold'>Price: </span>
            <p>
              {' '}
              {asset.price}
            </p>
          </div>
          <div className="grid-display-assets border-b py-2">
            <span>Property Address: </span>
            <p>{ asset.address}</p>
          </div>
          <div className="grid-display-assets border-b py-2">
            <span>tenure: </span>
            <p>{ asset.tenure}</p>
          </div>
          <div className="grid-display-assets border-b py-2">
            <span>Sale Type: </span>
            <p>{asset.sale_type}</p>
          </div>
          <div className="grid-display-assets border-b py-2">
            <span>Area: </span>
            <p>{asset.area}</p>
          </div>
          <div className="grid-display-assets border-b py-2">
            <span>Bedrooms: </span>
            <p>{asset.number_of_bedrooms}</p>
          </div>
          <div className="grid-display-assets border-b py-2">
            <span>Bathrooms: </span>
            <p>{asset.number_of_bathrooms}</p>
          </div>
          <div className="grid-display-assets border-b">
            <span>Status: </span>
            <p>{asset.status}</p>
          </div>

          <div className="grid-display-assets border-b">
            <span>Description </span>
            <p dangerouslySetInnerHTML={{__html: asset.description_body}}/>
          </div>

          <div className='grid grid-cols-3 gap-2 my-10'>
          {asset.images_url
            ? asset.images_url.map((image) => (
                <img
                  key={image}
                  src={image}
                  alt=""
                  className="w-full h-96 rounded-lg object-cover my-2"
                />
              ))
            : null}
        </div>

          <button type='submit' className='bg-primary text-white px-4 py-2  rounded'>Update Post</button>
          
          </form>



        

          
          
        </div>
      


      </div>
    );
  }
};

export default AssetView;
