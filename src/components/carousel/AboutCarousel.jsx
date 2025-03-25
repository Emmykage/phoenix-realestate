import React, { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const AboutCarousel = ({items}) => {
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

    console.log(deviceType)
    


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
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
            arrows={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={false} // means to render carousel on server-side.
            infinite={true}
            autoPlay={ deviceType !== "mobile" ? true : false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all 1.5s ease-in-out"
            transitionDuration={5000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px px-3"
            >
                {items.map(item => 
                     <div className='group rounded-full relative bg-gray-200 flex overflow-hidden items-center justify-center min-h-96'>

                      
                      <img src="/images/Real-Estate-Wallpaper-05-2866x1516-1-scaled.jpg" className='w-full absolute top-0 left-0  h-full bg-red-300 object-cover' alt="" />
                      <p className='text-lg z-10 text-white bg-gray-950/70 px-4 font-semibold transition-all duration-300 ease-linear text-center group-hover:opacity-0'>
                        {item.title}
        
        
                      </p>
       
                     <div className='absolute z-20 transition-all duration-300 ease-linear opacity-10 bg-gray-900/70 group-hover:opacity-100 text-center flex items-center justify-center p-10 top-0 h-full left-0 w-full'>
       
                     <p className='text-lg font-medium text-white'>{item.text}</p>
       
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

export default AboutCarousel