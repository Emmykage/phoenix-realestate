import React, { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const StaffCarousel = ({items}) => {
    const [deviceType, setdeviceType] = useState("windows")


    const handleResize = () => {
        if(window.innerWidth < 600){
            setdeviceType("mobile")
        }
        else{
            setdeviceType("windows")

        }
    }
    useEffect(()=> {
      

        window.addEventListener("resize",  handleResize )

        return () => window.removeEventListener("resize", handleResize)
    }, [])

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

  return (
 
          <Carousel
            swipeable={true}
            arrows={false}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={false} // means to render carousel on server-side.
            infinite={true}
            autoPlay={ deviceType !== "mobile" ? true : false}
            autoPlaySpeed={6000}
            keyBoardControl={true}
            customTransition="all 1.5s ease-in-out"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px px-3"
            >
                {items.map(item => 
                    <div>
                        <div className='h-80 w-full rounded-2xl overflow-hidden'>
                            <img src={item?.image} alt="" className='h-full w-full object'/>
                          </div>
                             <div className='text-center my-2 text-white text-lg py-4'> 
                             <p>{item.position}</p>
                             <p>{item.name}</p>

                             </div>
                        </div>


                )}
           
            </Carousel>
 
  )
}
// const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {

// const { carouselState: { currentSlide } } = rest;
// return (
//   <div className="carousel-button-group"> // remember to give it position:absolute
//     <ButtonOne className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} />
//     <ButtonTwo onClick={() => next()} />
//     <ButtonThree onClick={() => goToSlide(currentSlide + 1)}> Go to any slide </ButtonThree>
//   </div>
// );
// };

// const CustomRightArrow = ({ onClick, ...rest }) => {
//     const {
//       onMove,
//       carouselState: { currentSlide, deviceType }
//     } = rest;
//     // onMove means if dragging or swiping in progress.
//     return <button onClick={() => onClick()} />;
//   };

export default StaffCarousel